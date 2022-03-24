const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Note = require('../models/Note');
const { body, validationResult} = require('express-validator');

// ROUTE 1: Get all the notes using GET "/api/notes/fetchallnotes" Login required
router.get('/fetchallnotes',fetchuser, async (req, res)=>{
    try {
        const notes = await Note.find({user: req.user.id});
        res.json(notes)    
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a New Note using POST "/api/notes/addnote" Login required
router.post('/addnote',[
    body('title', 'Enter a valid Title').isLength({min: 1}),
    body('description', 'Description must be 5 characters').isLength({min: 5}),
],fetchuser, async (req, res)=>{

    try {
    
    const{title, description, tag} = req.body;
    // if there are error return bad request and error
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const note = new Note({
        title, description, tag, user: req.user.id
    })

    const saveNote = await note.save()

    res.json(saveNote) 
        
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})

// ROUTE 3: Update existing Note using PUT "/api/notes/updatenote" Login required
router.put('/updatenote/:id',fetchuser, async (req, res)=>{
    const {title, description, tag} = req.body;
    // create a new note object
    const newNote = {};
    if (title) {newNote.title = title};
    if (description) {newNote.description = description};
    if (tag) {newNote.tag = tag};

    // find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if(!note){return res.status(400).send("Not Found")}
    // Allow update only if user owns this note
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
    res.json({note});
})

// ROUTE 4: Delete existing Note using DELETE "/api/notes/deletenote" Login required
router.delete('/deletenote/:id',fetchuser, async (req, res)=>{
    const {title, description, tag} = req.body;

    // find the note to be delete and delete it
    let note = await Note.findById(req.params.id);
    if(!note){return res.status(400).send("Not Found")}
    // Allow delete only if user owns this note
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id)
    res.json({"Success": "Note has been deleted", note: note});
})

module.exports = router