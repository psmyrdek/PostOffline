const router = require('express').Router();
var dateFormat = require('dateformat');

const posts = [];

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(posts));
});

router.post('/', (req, res) => {

    const post = {
        author: req.body.author, 
        content: req.body.content, 
        date: req.body.date, 
        id: posts.length 
    };

    posts.push(post);

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(post));
});

module.exports = router;