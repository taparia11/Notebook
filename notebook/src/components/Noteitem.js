import React from 'react'

const Noteitem = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div class="card" >
                    <div class="card-body my-3">
                        <h5 class="card-title">{note.title}</h5>
                        <p class="card-text">{note.description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere </a>
                        <a href="#" class="btn btn-danger">Go somewhere</a>
                    </div>
            </div>
        </div>
    )
}

export default Noteitem