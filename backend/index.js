const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routs/auth')
const userRoute = require('./routs/users')
const postRoute = require('./routs/posts')

const app = express();
dotenv.config();

app.use(express.json());

const dbconnect= async()=>{ 
    try {
        await mongoose.connect("mongodb+srv://msikhan32:12345@cluster0.ol6gvmw.mongodb.net/blog?retryWrites=true&w=majority")
        console.log("coonected to db")
    } catch (error) {
        console.log(error)
    }
  }

dbconnect();

 app.use('/api/auth',authRoute);
 app.use('/api/users',userRoute);
 app.use('/api/posts',postRoute);




app.listen("5000",()=>{
    console.log('Server is running on port 5000')
})
// const Port = process.env.PORT || 5000