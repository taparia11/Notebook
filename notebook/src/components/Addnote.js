import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const Addnote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({title:"", description:"",tag:""})
  const handleClick = (e)=>{
      e.preventDefault();
    addNote(note.title, note.description, note.tag);
  }
  const onChange = (e)=>{
    setNote({...note, [e.target.name]: e.target.value })
}
  return (
      <div className='container'>
          <form>
              <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                      Title
                  </label>
                  <input
                      type="email"
                      className="form-control"
                      id="title"
                      name="title"
                      aria-describedby="emailHelp"
                      onChange={onChange}
                  />
              </div>
              <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                      Description
                  </label>
                  <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      onChange={onChange}
                  />
              </div>

              <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                      Tag
                  </label>
                  <input
                      type="text"
                      className="form-control"
                      id="tag"
                      name="tag"
                      onChange={onChange}
                  />
              </div>

              <button type="submit" className="btn btn-primary" onClick={handleClick}>
                  Add Note
              </button>
          </form>
      </div>
  );
};

export default Addnote;
