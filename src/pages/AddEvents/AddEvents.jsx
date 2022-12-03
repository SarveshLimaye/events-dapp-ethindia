import React from 'react'
import './AddEvents.css'
const AddEvents = () => {
  return (
    <form className="upload-form">
    <label name="acc_add" className="acc_add">Account Address</label>
    <input name="acc_add" className="acc_add" />
    <label name="title" className="title">Title</label>
    <input name="title" className="title"/>
    <label name="desc"className="desc">Description</label>
    <input name="desc"className="desc" />
    <label name="file" className="File">Upload a File</label>
    <input type="file" name="file" className="upload"/>
  </form>
  )
}

export default AddEvents