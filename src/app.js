// server ko create krna

const express = require("express");
const noteModel = require("./models/notes.model")

const app = express()

// middleware
app.use(express.json())


// post /notes
// req.body =>{title,description}

app.post("/notes", async(req,res)=>{
    const{ title, description} = req.body

   const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message:"Note Created Sucessfully ",
        note
    })
})

module.exports = app