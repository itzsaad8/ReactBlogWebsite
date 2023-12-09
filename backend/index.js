const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routs/auth')
const userRoute = require('./routs/users')
const postRoute = require('./routs/posts')
const categoryRoute = require('./routs/categories')
const multer = require('multer')
// const cors = require('cors')



// app.use(cors())

const app = express();
dotenv.config();

app.use(express.json());

const dbconnect= async()=>{ 
    try {
        await mongoose.connect("mongodb+srv://msikhan32:12345@cluster0.ol6gvmw.mongodb.net/blog?retryWrites=true&w=majority")
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
  }

dbconnect();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,"images");
    },
    filename: (req, file, cb) => {
        cb(null,"hello.jpg");
    }
     
});

const upload = multer({storage: storage})

app.post('/api/upload',upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded")
})



 app.use('/api/auth',authRoute);
 app.use('/api/users',userRoute);
 app.use('/api/posts',postRoute);
 app.use('/api/categories',categoryRoute);




app.listen("5000",()=>{
    console.log('Server is running on port 5000')
})
// const Port = process.env.PORT || 5000