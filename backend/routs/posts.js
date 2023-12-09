const router = require('express').Router();

const Post = require('../models/Post')
const User = require('../models/User')
// const bcrypt = require('bcrypt');

//create post

router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
        
    }

});

//update post

router.put('/:id', async (req, res) => {

    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedPost);
        
    } catch (error) {
        res.status(500).json(error);
        
    }

});



//delete post

router.delete('/:id',async(req,res)=>{


    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        
        res.status(200).json({message :"Post deleted successfully"})
    } catch (error) {
        res.status(500).json({message :"no access to post"});
        
    }


    
//    try {
//     const post = await Post.findById(req.params.id);
//     if(post.username === req.body.username){
//         try {
//             await post.delete();
//             res.status(200).json("post deleted");
            
//         } catch (error) {
//             res.status(500).json(error);
            
//         }
//     }
//     else {
//         res.status(401).json("unauthorized")
//     }
    
//    } catch (error) {
//     res.status(500).json(error);
    
//    }
    
})

//get user

router.get('/:id', async (req, res) => {
         
         
         try {
             
             const userpost = await Post.findById(req.params.id);
            // res.send(userpost);
        // res.status(200).json(userpost);
            const {password, ...others} = userpost._doc
            res.status(200).json(others)
            
        } catch (error) {
            res.status(404).json(error)
        }
    }


);

//get all posts

router.get('/', async (req, res) => {

    const username = req.query.user;
    const catname = req.query.cat;
    try {
        let posts;
        if(username){
            posts = await Post.find({username});
        }
        else if(catname){
            posts = await Post.find({categories:{
                $in:[catname]
            }});
        }
        else{
            posts = await Post.find();
        }
        res.status(200).json(posts);

       
        
    } catch (error) {
        res.status(500).json(error);
        
    }

});

module.exports = router