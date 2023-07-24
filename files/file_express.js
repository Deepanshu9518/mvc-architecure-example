const express= require('express');
const fs = require('fs');
const path = require('path');

const app = express();





app.use((req,res,next) =>{
    console.log('we are running on the url');
    console.log(req.url);
    next()

})


app.use((req,res,next) =>{
    const filepath = path.join(__dirname,req.url);
    res.sendFile(filepath)
   
});













app.listen(1000,() => {
    console.log("we are running on the URl : http://localhost:1000");
})