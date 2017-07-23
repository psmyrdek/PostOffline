const router = require('express').Router();
const cache = require('./cache.js')({ posts: [] });
const dateFormat = require('dateformat');

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(cache.get('posts')));
});

router.post('/', (req, res) => {

    const posts = cache.get('posts');

    const post = {
        author: req.body.author, 
        content: req.body.content, 
        date: req.body.date, 
        id: posts.length 
    };

    posts.push(post);
    cache.set('posts', posts);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(post));
});

module.exports = router;