const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');

/*const SequelizeStore = require('connect-session-sequelize')(session.Store);*/

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

/*const sess = {
  secret: 'Super secret secret',

cookie: {
  maxAge: 24 * 60 * 60 * 1000,
  httpOnly: true,
  secure: false,
  sameSite: 'strict',
},

  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));*/

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

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






/*app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}/`));
});*/
