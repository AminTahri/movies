import React, { useState } from 'react'
import Modal from 'react-modal';
import StarRating from './StarRating';
const NewMovies = ({handleAdd}) => { 
  const [name, setName] = useState("") 
  const [image, setImage] = useState("")
  const [date, setDate] = useState("")
  const [rating, setRating] = useState("")
  const handleRating=(x)=>{
    setRating(x)
  }
const handleSubmit=(e)=>{
  e.preventDefault()
  const newMovie={id:Math.random(), name,image,date,rating}
  handleAdd(newMovie)
  closeModal()
  setName("");
  setDate("");
  setImage("");
}

   const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      Modal.setAppElement('#root');
      const [modalIsOpen, setIsOpen] = React.useState(false);
      function openModal() {
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }
  return (
    <div><button onClick={openModal}>Add</button>
    <Modal
      isOpen={modalIsOpen}
      
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <form onSubmit={handleSubmit} >
        <label > Name of movie </label>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        <label >Movie Postar</label>
        <input type="text" value={image} onChange={e=>setImage(e.target.value)} />
        <StarRating rating={rating} handleRating={handleRating}/>
        <label > Movie Date </label>
        <input type="date"  value={date} onChange={e=>setDate(e.target.value)}/>
        <div>
          <button type='submit'>Add</button>
          <button onClick={closeModal}>Cancel </button>
        </div>
      </form>
    </Modal></div>
  )
}

export default NewMovies