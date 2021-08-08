// implement your server here
// require your posts router and connect it here
const express = require('express');


// Step 3 - Part 2 : Declare new router Variable (postsRouter)
const postRouter = require("./posts/posts-router");



const server = express();

server.use(express.json());

// Step 3 - Part 1 : tell sever to use the new router (postsRouter)
server.use("/api/posts", postRouter)

// End Points

// Test endpoint
server.get('/', (req, res) => {
  res.send(`
    <h2>Posts Api</h2>
    <p>Welcome to the Posts Api</p>
  `);
});


// Export server
module.exports = server;