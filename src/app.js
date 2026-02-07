// server ko create krna

const express = require("express");
const noteModel = require("./models/notes.model")

const app = express()

// middleware
app.use(express.json())


// post /notes
// req.body =>{title,description}


// app.post("/notes", async(req,res)=>{
//     const{ title, description} = req.body

//    const note = await noteModel.create({
//         title,description
//     })

//     res.status(201).json({
//         message:"Note Created Sucessfully ",
//         note
//     })
// })

// GET /notes
// fetch all the notes data
app.get("/notes",async (req,res)=>{
    //find method hamesha array of objects mea he data return krea gi
    const notes = await noteModel.find()

    res.status(200).json({
        message:"notes data fetch sucessfully",
        notes
    })
});

// delete
// app.delete("/notes",(req,res)=>{
//     message:"notes deleted sucessfully",
//     notes

// })



// post/api/notes
// create new note and save data in mongodb
// req.body={title , description}

    app.post('/api/notes', async (req,res)=>{
    const{title,description} = req.body
    
     const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message:"note created sucessfully"
    })
})


// GET /api/notes
// Fetch all the notes data from mongodb and send them in the response
app.get("/api/notes",async (req,res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message:"notes fetched sucessfully",
        notes
    })

})


// Delete /api/notes/:id
// delete note with the id from req.params

app.delete("/api/notes/:id",async (req,res)=>{
    const id = req.params.id;
    console.log(id);

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"note deleted sucessfully"
        
    })

})


// PATCH /api/notes/:id
// update the description of the note by id
// req.body = {description}
app.patch("/api/notes/:id",async (req,res)=>{
    const id = req.params.id;
    const { description } = req.body

    await noteModel.findByIdAndUpdate(id,{ description })

    res.status(200).json({
        message:"note updated sucessfully ",
        
    })


})


module.exports = app