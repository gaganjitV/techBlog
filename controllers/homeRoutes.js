const router = require('express').Router();
const { Blog, User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {   
    res.redirect('/blog');
});

router.get('/blog', async (req, res) => 
{
    try{
  
        const blogData = await Blog.findAll({
            // include: [
            //     {
            //         model: User,
            //         attributes: ['author'],
            //     },
            // ],
        });
        const blogs = blogData.map((blog) => blog.get({ plain: true })); // coverts it into regualr js 

        //passing the data to the handlebars template
        res.render('blog', { 
            blogs,
            logged_in: req.session.logged_in
        
        });
   }
    catch (err) 
    {
    res.status(500).json(err);

    } 

});

router.get('/dashboard', withAuth, async (req, res) => {
    try {

        res.render('dashboard', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });

module.exports = router;