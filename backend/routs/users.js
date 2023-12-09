const router = require('express').Router();
// const { response } = require('express');
const Post = require('../models/Post')
const User = require('../models/User')
const bcrypt = require('bcrypt');

//update user

router.put('/:id', async (req, res) => {
    if(req.body.userId === req.params.id) {
        if(req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
            // const hashedPassword = await bcrypt.hash(req.body.password, salt);


        }
    try {
        const updateuser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        },{new:true});
        res.status(200).json({message: "you can now update"});
        
    } catch (error) {
        res.send(error)
        
    }
}
else {
    return res.status(401).json({ message: 'Invalid email or password' });
}});

//delete user

router.delete('/:id', async (req, res) => {

    if(req.body.userId === req.params.id) {
     
        try {
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({username: user.username});
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json({message: "you can now delete"});
                
            } catch (error) {
                res.status(500).json(err)
                
            }
            
        } catch (error) {
            res.status(404).json({message:"User not found"})
        }
    }
    else {
        return res.status(401).json({ message: 'delete only your account' });
    }

    

});

//get user

router.get('/:id', async (req, res) => {

    
        try {
            const user = await User.findById(req.params.id);
            console.log(user)
            // const {password, ...others} = user._doc
            res.status(200).json(user)
            // res.status(200).json(user);
        } catch (error) {
            res.status(404).json({message:"User not found"})
        }
    }
   

    

);

module.exports = router