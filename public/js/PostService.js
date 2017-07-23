class PostService {

    constructor(postRenderer, errorHandler) {
        
        this.posts = []; // state

        this.postRenderer = postRenderer;
        this.errorHandler = errorHandler;

        fetch('/posts', { method: 'GET' })
            .then(this.asJson)
            .then((posts) => {
                this.posts = posts.map(this.formatPost).sort(this.sortPosts);
                this.postRenderer.renderPosts(this.posts);
            });
    }

    add(postContent) {

        const postHeaders = new Headers({
            'Content-Type': 'application/json'
        });

        const post = { author: '@psmyrdek', content: postContent, date: new Date() };

        return fetch('/posts', { method: 'POST', headers: postHeaders, body: JSON.stringify(post) })
            .then(this.asJson)
            .then((createdPost) => {
                this.posts.unshift(this.formatPost(createdPost));
                this.postRenderer.renderPosts(this.posts);
            })
    }

    asJson(response) {
        return response.json();
    }
    
    formatPost(post) {
        return {
            author: post.author,
            content: post.content,
            date: new Date(post.date),
            displayDate: new Date(post.date).toLocaleDateString()
        };
    }

    sortPosts(prev, next) {
        const prevTimestamp = prev.date.getTime();
        const nextTimestamp = prev.date.getTime();

        if (prevTimestamp < nextTimestamp) { 
            return 1;
        } else if (prevTimestamp > nextTimestamp) {
            return -1;
        } else {
            return 0;
        }
    }
}