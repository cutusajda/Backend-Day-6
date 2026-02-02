// we will create schema here
// schema ka mtlb hota hai database ko batana kea ap kis  format mea data store karnea wlea ho
// leakin database mea agar apko CRUD operation perform karna ho like create read update and delete koi sa v operation perform karna hai to waha par hum modal use krtea hai 

const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: String,
    description: String,

})

const noteModel = mongoose.model("notes",noteSchema)

module.exports = noteModel