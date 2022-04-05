import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{

    const notesInitial = [
        {
            "_id": "623cc5b408156a2db1b9129a8",
            "user": "623bbd05d0b9b6d5404fb94e",
            "title": "My Note",
            "description": "This is my First Note.",
            "tag": "General",
            "date": "2022-03-24T19:25:40.184Z",
            "__v": 0
          },
          {
            "_id": "623cc5dd08156dda2b1b9129aa",
            "user": "623bbd05d0b9b6d5404fb94e",
            "title": "BOOKED GAS",
            "description": "Your GAS Booking has been confirmed.",
            "tag": "Home",
            "date": "2022-03-24T19:26:21.448Z",
            "__v": 0
          }
    ]

    

    //add a Note
    const addNote = (title, description, tag)=>{
        console.log("adding a new Note")
        const note = {
            "_id": "623cc5dd08156a2b1bs9129aa",
            "user": "623bbd05d0b9b6d5404fb94e",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-03-24T19:26:21.448Z",
            "__v": 0
          };
        setNotes(notes.concat(note))
    }
    //Delete a note
    const deleteNote = (id)=>{
        console.log('deleting note with id'+ id)
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
    }

    //edit a note
    const editNote = ()=>{
        
    }

    const [notes, setNotes] = useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;