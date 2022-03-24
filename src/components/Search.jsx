import React from 'react'
import StarRating from './StarRating'

const Search = ({text,rating,handleChange,handleRating}) => {
  return (
    <div>
        <form className='cherche'>
            <input type="text" value={text}  onChange={e=>handleChange(e.target.value)}/>
            <StarRating value={rating} handleRating={handleRating}/>
        </form>
    </div>
  )
}

export default Search