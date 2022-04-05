import React, { useContext} from 'react'
import { Link } from 'react-router-dom';
import noteContext from "../context/notes/noteContext";


const Noteitem = (props) => {
    const { note } = props;
    const context = useContext(noteContext);
  const { deleteNote } = context;
    return (
        <div className='col-md-3'>
            <div className="card" >
                    <div className="card-body my-3">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <Link to="#" className="btn btn-danger mx-2" onClick={()=>{deleteNote(note._id)}}>Delete </Link>
                        {/* <Link to="#" className="btn btn-danger">Go somewhere</Link> */}
                    </div>
            </div>
        </div>
    )
}

export default Noteitem