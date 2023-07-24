const express=require("express")
const routes = express.Router()
const{ createuser,getalluser,getbyid,deleteuserbyid,updatebyid} = require("../controler")

routes.post("/createuserst", createuser)

routes.get("/getuserst" ,getalluser)


routes.get("/getuserst/:id",getbyid)

routes.delete("/deleteuser/:id",deleteuserbyid)

routes.patch("/updateuser/:id" ,updatebyid)

module.exports = routes;

