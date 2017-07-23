class PostRenderer {

    constructor (DOMList) {
        this.domList = DOMList;
    }

    getPostTemplate(author, content, date, offline) {

        const template = `
            <li class="listItem ${offline ? 'listItem--offline' : ''}">
                <div class="listItem-meta">
                    <p class="listItem-author">${author}</p>
                    <p class="listItem-date">${date}</p>
                </div>
                <p class="listItem-content">${content}</p>
            </li>
        `;

        return template;
    }

    renderPosts(posts) {
        let listContent = '';

        for (let post of posts) {
            listContent += this.getPostTemplate(post.author, post.content, post.displayDate, post.offline);
        }

        this.domList.innerHTML = listContent;
    }

}