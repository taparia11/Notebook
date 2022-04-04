import NoteContext from "./NoteContext";

const NoteState = (props) =>{

    const state = {
        "name": "NIKHIL",
        "class": "12"
    }


    return(
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;