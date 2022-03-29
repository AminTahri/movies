import React from 'react'
import { Link } from 'react-router-dom'

import  StarRating  from './StarRating'

const MovieCard = ({item,deleteMovie}) => {
  return (
    <div className='movie-card'>
      
        <h3> {item.name}</h3>
        <img src={item.image} alt="" />
       <StarRating rating={item.rating}/>
        <p> {item.date} </p>
        <button onClick={()=>deleteMovie(item.id)}> Delete</button> 
      <Link to={`/More/${item.id}`}> <button>More</button></Link>
     
    </div>
  )
}

export default MovieCard