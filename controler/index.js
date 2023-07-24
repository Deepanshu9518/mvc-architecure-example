const{st} = require('../models')

async function createuser (req,res) {
    const{name,roll,address,id} = req.body
    try{

        const user = await st.create({name,roll,address,id});
        res.send(user);
        console.log("user has been created")


    }
    catch(err){
        console.log(err)
        res.status(400).send({err:"cant create user in st"})

    }
}


 async function getalluser(req,res) {
    const user = await st.findAll(
    
       )
    res.send(user)
}


async function getbyid(req,res) {
    const user = await st.findOne({
       where:{
        
        id:req.params.id
 
       }
    })
    res.send(user)
}


async function deleteuserbyid (req,res)  {

    const user = await st.destroy({
        where :{
            id:req.params.id
        }
    })
    res.send;
}

async function updatebyid (req,res)  {
    const{name,roll,address,id} = req.body
    const usr = await st.update({name,roll,address,id},{
        where:{
            id:req.params.id
        }
    })
    res.send(usr)
}

 module.exports = {
    createuser,getalluser,getbyid,deleteuserbyid,updatebyid
 
 }

