const router = require('express').Router();
var dateFormat = require('dateformat');

const posts = [];

router.get('/', (req, res) => {
    sendPosts(res);
});

router.post('/', (req, res) => {
    posts.push(req.body);
    sendPosts(res);
});

function sendPosts(res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(posts.map((post) => {
        return {
            content: post.content,
            author: post.author,
            date: formatDate(post.date)
        }
    })));
}

function formatDate(date) {
    return dateFormat(date, "dd mmmm yyyy");
}

module.exports = router;