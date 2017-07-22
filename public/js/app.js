document.addEventListener('DOMContentLoaded', () => {

    const postForm = document.querySelector('.postForm');
    const postInput = document.querySelector('.postForm-input');
    const DOMList = document.querySelector('.list');

    const postRenderer = new PostRenderer(DOMList);
    const postSender = new PostSender(postRenderer);

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const postContent = postInput.value;

        postSender.sendPost(postContent)
            .then(() => {
                postInput.value = '';
            });
    });
});

