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
//delte post

router.delete('/:id',async(req,res)=>{
    try {
        const deletePost = await Post.findByIdAndDelete(req.params.id);
        await Post.delete();
        res.status(200).json("post deleted");
        
    } catch (error) {
        
        res.status(500).json(error);
    }
})

//get user

router.get('/:id', async (req, res) => {

    
        try {
            const user = await User.findById(req.params.id);
            console.log(user)
            const {password, ...others} = user._doc
            res.status(200).json(others)
            // res.status(200).json(user);
        } catch (error) {
            res.status(404).json(error)
        }
    }
   

    

);

module.exports = router