// serer ko start karna 
// data base sea connect krna

require("dotenv").config()
const app = require("./src/app");
const mongoose = require("mongoose");
const connectToDb = require("./src/config/database")


app.listen("3000",()=>{
    console.log("server is running on port number 3000 ")
})





connectToDb()