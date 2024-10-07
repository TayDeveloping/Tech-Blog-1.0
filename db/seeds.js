const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = [
  {
    username: 'johndoe',
    password: 'password123' 
  },
  {
    username: 'janedoe',
    password: 'password456'
  },
];

const postData = [
  {
    title: 'Understanding JavaScript Closures',
    content: 'A closure is the combination of a function bundled together (enclosed) with references to its surrounding state...',
    userId: 1  
  },
  {
    title: 'How to Deploy Applications with Render',
    content: 'Render is a cloud platform that enables developers to easily deploy apps, websites, and databases...',
    userId: 2  
  },
];

const commentData = [
  {
    commentText: 'This is super helpful, thanks!',
    userId: 2,  
    postId: 1  
  },
  {
    commentText: 'I need to try this out on my next project.',
    userId: 1,  
    postId: 2   
  },
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(postData);

  const comments = await Comment.bulkCreate(commentData);

  process.exit(0); 
};

seedDatabase();
