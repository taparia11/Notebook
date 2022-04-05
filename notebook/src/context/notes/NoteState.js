import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{

    const notesInitial = [
        {
            "_id": "623cc5b408156a2b1b9129a8",
            "user": "623bbd05d0b9b6d5404fb94e",
            "title": "My Note",
            "description": "This is my First Note.",
            "tag": "General",
            "date": "2022-03-24T19:25:40.184Z",
            "__v": 0
          },
          {
            "_id": "623cc5dd08156a2b1b9129aa",
            "user": "623bbd05d0b9b6d5404fb94e",
            "title": "BOOKED GAS",
            "description": "Your GAS Booking has been confirmed.",
            "tag": "Home",
            "date": "2022-03-24T19:26:21.448Z",
            "__v": 0
          }
    ]

    const [notes, setNotes] = useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes , setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;