class PostSender {

    constructor(postRenderer) {
        this.postRenderer = postRenderer;

        fetch('/posts', { method: 'GET' })
            .then((data) => {
                return data.json();
            })
            .then((posts) => {
                this.postRenderer.renderPosts(posts);
            });
    }

    sendPost(postContent) {

        const postHeaders = new Headers({
            'Content-Type': 'application/json'
        });

        const post = { author: '@psmyrdek', content: postContent, date: new Date() };

        return fetch('/posts', { method: 'POST', headers: postHeaders, body: JSON.stringify(post) })
            .then((data) => {
                return data.json();
            })
            .then((posts) => {
                this.postRenderer.renderPosts(posts);
            });
    }

}