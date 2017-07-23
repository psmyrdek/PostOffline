class PostService {

    constructor(postRenderer, errorHandler) {

        this.OFFLINE_POSTS_KEY = 'offline-posts';
        
        this.posts = []; // state
        this.offlinePosts = this.getOfflinePosts();

        this.postRenderer = postRenderer;
        this.errorHandler = errorHandler;

        fetch('/posts', { method: 'GET' })
            .then(response => response.json())
            .then((posts) => {
                this.posts = posts.map(this.formatPost).concat(this.offlinePosts).sort(this.sortPosts);
                console.log(this.posts);
                this.postRenderer.renderPosts(this.posts);
            });
    }

    add(postContent) {

        const postHeaders = new Headers({
            'Content-Type': 'application/json'
        });

        const post = { author: '@psmyrdek', content: postContent, date: new Date() };

        return fetch('/posts', { method: 'POST', headers: postHeaders, body: JSON.stringify(post) })
            .then(response => response.json())
            .then((createdPost) => {
                this.posts.unshift(this.formatPost(createdPost));
                this.postRenderer.renderPosts(this.posts);
            })
            .catch((err) => {
                this.addOffline(post);
            });
    }

    addOffline(post) {
        post.offline = true;
        const offlinePost = this.formatPost(post);

        const offlinePosts = this.getOfflinePosts();

        offlinePosts.push(offlinePost);
        this.posts.unshift(offlinePost);

        localStorage.setItem(this.OFFLINE_POSTS_KEY, JSON.stringify(offlinePosts));
        this.postRenderer.renderPosts(this.posts);
    }

    getOfflinePosts() {
        return localStorage.getItem(this.OFFLINE_POSTS_KEY) ?
            JSON.parse(localStorage.getItem(this.OFFLINE_POSTS_KEY)).map(this.formatPost) : [];
    }
    
    formatPost(post) {
        return {
            author: post.author,
            content: post.content,
            date: new Date(post.date),
            displayDate: new Date(post.date).toLocaleDateString(),
            offline: !!post.offline
        };
    }

    sortPosts(prev, next) {
        return new Date(next.date) - new Date(prev.date);
    }
}