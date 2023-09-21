import React from 'react'
import noteContext from '../context/notes/noteContext'
import { useContext } from 'react'


const Noteitem = (props) => {
  const context = useContext(noteContext)
  const { deleteNote } = context
  const { note, updateNote } = props
  return (
    <div className='col-md-3' >
      <div className="card my-3" >
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}  </p>
          <i className="fa-solid fa-trash-can mx-3" id='trash' onClick={() => { deleteNote(note._id); props.showAlert("Deleted note successfully", "success") }} ></i>
          <i className="fa-solid fa-pen-to-square mx-3" id='pen' onClick={() => {updateNote(note) }}></i>
        </div>
      </div>
    </div>
  )
}

export default Noteitem
