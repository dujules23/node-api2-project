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






// export Router 
module.exports = router
