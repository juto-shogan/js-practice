const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js');

// Routes
// get method for the main page
router.get('', (req, res) => {
  const locals = {
    title: 'NodeJS blog',
    description: 'simple web made with express and ejs'
  }
  res.render('index', {locals});
});

function insertPostData() {
  Post.insertMany([
    {
      title: 'First Post',
      body: 'This is the body of the first post.'
    },
    {
      title: 'Second Post',
      body: 'This is the body of the second post.'
    },
    {
      title: 'Third Post',
      body: 'This is the body of the third post.'
    },
    {
      title: 'Fourth Post',
      body: 'This is the body of the fourth post.'
    },  
    {
      title: 'Fifth Post',
      body: 'This is the body of the fifth post.'
    },
    {
      title: 'Sixth Post',
      body: 'This is the body of the sixth post.'
    }
  ]).then(() => {
    console.log('Posts inserted successfully');
  }).catch(err => {
    console.error('Error inserting posts:', err);
  });
};
insertPostData();

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/contact', (req,res) =>{
  res.render('contact');
});

module.exports = router;