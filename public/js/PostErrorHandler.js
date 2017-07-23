class PostErrorHandler {

    constructor() {
        this.fetchPostsErr = document.querySelector('.fetchPostsFailed');
    }

    toggleFetchPostsErr(showError) {
        this.fetchPostsErr.style.display = showError ? 'block' : 'none';
    }

}