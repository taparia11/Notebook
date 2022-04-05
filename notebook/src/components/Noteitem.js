import React from 'react'
import { Link } from 'react-router-dom';


const Noteitem = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div className="card" >
                    <div className="card-body my-3">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <Link to="#" className="btn btn-primary mx-2">Go somewhere </Link>
                        <Link to="#" className="btn btn-danger">Go somewhere</Link>
                    </div>
            </div>
        </div>
    )
}

export default Noteitem