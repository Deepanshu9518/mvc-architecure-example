const express = require("express");
const {sequelize}= require("./models");
const app = express();
const routes = require("./route/router")


app.use(express.json());
app.use(routes);




app.listen(8000,async()=> {
    console.log("running on the localhost:http://localhost:8000");
    
    await sequelize.authenticate()
})