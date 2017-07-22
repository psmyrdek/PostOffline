class PostRenderer {

    constructor (DOMList) {
        this.domList = DOMList;
    }

    getPostTemplate({ author, content, date }) {
        return `
            <li class="listItem">
                <div class="listItem-meta">
                    <p class="listItem-author">${content}</p>
                    <p class="listItem-date">${date}</p>
                </div>
                <p class="listItem-content">${content}</p>
            </li>
        `;
    }

    renderPosts(posts) {
        this.domList.innerHTML = '';
        let list = '';
        for (let post of posts) {
            list += this.getPostTemplate(post);
        }
        this.domList.innerHTML = list;
    }

}