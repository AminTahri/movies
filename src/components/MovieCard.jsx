import React from 'react'
import  StarRating  from './StarRating'

const MovieCard = ({item,deleteMovie}) => {
  return (
    <div className='movie-card'>
        <h3> {item.name}</h3>
        <img src={item.image} alt="" />
       <StarRating rating={item.rating}/>
        <p> {item.date} </p>
        <button onClick={()=>deleteMovie(item.id)}> Delete</button>
    </div>
  )
}

export default MovieCard