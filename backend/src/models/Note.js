import mongoose from 'mongoose'

// 1  create a schema
// 2 - model based off of that shema


const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        rquired: true,
    },
    content: {
        type: String,
        rquired: true,
    },
}, { timestamps: true })

const Note = mongoose.model("Note", noteSchema)

export default Note