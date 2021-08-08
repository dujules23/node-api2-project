// implement your posts router here

// Step 1 : Create new file


// Step 2 : Bring in Model and Endpoints

const Posts = require('./posts-model');


// Step 4  - Rename import and bring in express with Router Method


const express = require("express")
const router = express.Router()


// Step 5 - Replace sever with router

// POSTS ENDPOINTS

// get posts
router.get("/", (req, res) =>{
  Posts.find()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "The posts information could not be retrieved" 
      })
    })
})


// Get a specific Post by Id 
router.get("/:id", (req, res) => {
  Posts.findById(req.params.id)
    .then(post => {
      if(post){
        res.status(200).json(post)
      }
      else{
        res.status(404).json({ message: "The post with the specified ID does not exist"})
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "The post information could not be retrieved"
      })
    })
})

// Post or insert a new post
router.post("/", (req, res) => {
  const newPost = req.body
  if(!newPost.title || !newPost.contents){
    res.status(400).json({ message: "Please provide title and contents for the post"})
  }
  Posts.insert(newPost)
    .then(post => {
      res.status(201).json(post)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "There was an error while saving the post to the database"
      })
    })
})




// export Router 
module.exports = router
