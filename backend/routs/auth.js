const router = require("express").Router();
const User = require('../models/User')
const bcrypt =  require('bcrypt');

// registration

router.post('/register', async (req, res) => {

   
    try {

        const salt = await bcrypt.genSalt(10);
   
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
      
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password:hashedPassword

        });
              
        const user = await newUser.save();
         
        res.json(user);


    } catch (error) {
        res.send(error)
        // res.status(500).send(error);

    }

});

// login

router.post('/login', async (req, res) => {

    try {

        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const {password, ...others}= user._doc
        res.status(200).json(others);

        // res.json({message: 'logged in success'});

    } catch (error) {
        res.send(error)
        res.status(500).send(error);

    }

});

module.exports = router


