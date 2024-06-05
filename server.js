const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');



const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const blogPost = {
    title: "My First Blog Post",
    author: "John Doe",
    date: "June 4, 2024",
    content: "<p>This is an example of a blog post. You can write anything here.</p><p>Feel free to customize the content and style as you wish.</p>"
};

// Route to render the blog post
app.get('/', (req, res) => {
    res.render('blog', {
        layout: 'main',
        title: blogPost.title,
        author: blogPost.author,
        date: blogPost.date,
        content: blogPost.content
    });
});

// Start the server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});







