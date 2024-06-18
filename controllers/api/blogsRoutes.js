const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    console.log("newBlog function called in the API");
    console.log(req.body);
  try {
    const newBlog = await Blog.create({
        author: req.session.author,
        title: req.body.title,
        content: req.body.content,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;