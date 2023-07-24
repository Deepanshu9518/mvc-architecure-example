const express = require("express");
const {User,sequelize,Post} = require("./models")
const app = express()

app.use(express.json());

app.post("/createuser",async (req,res)=>{

    const{id,name,role,age,email} = req.body;
    try{
        const users = await User.create({id,name,role,age,email}) 
        res.send(users)
    }
    catch(err){
        console.log(err)
        res.status(400).send({err:"Cant add the user"})

    }
    
})




app.listen(5000,async ()=>{
    console.log("i am running on the localhost:http://localhost:5000")
    await sequelize.authenticate()
})