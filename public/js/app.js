document.addEventListener('DOMContentLoaded', () => {

    const postForm = document.querySelector('.postForm');
    const postInput = document.querySelector('.postForm-input');
    const DOMList = document.querySelector('.list');

    const postsErrorHandler = new PostErrorHandler();
    const postRenderer = new PostRenderer(DOMList);
    const postService = new PostService(postRenderer, postsErrorHandler);

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const postContent = postInput.value;

        postService.add(postContent)
            .then(() => {
                postInput.value = '';
            });
    });

});