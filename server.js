const express = require('express');
const mongoose = require('mongoose');
const port= process.env.PORT || 5000;
const users=require('./routes/api/users');
const profile=require('./routes/api/profile');
const post=require('./routes/api/post');




const app= express();


//Db config 
const db=require('./config/keys').mongoURI;


//Connect to mongoDb

mongoose
    .connect(db)
            .then(()=>{
                console.log('mongo db connects Succesfuly')
            })
            .catch(err=>console.log(err))
app.get('/',(req,res)=>res.send('Hello to the world!'))

//USE ROUTES

app.use('/api/user',users);
app.use('/api/profile',profile);
app.use('/api/post',post);

app.listen(port,()=>console.log(`server is running on port ${port}`));

