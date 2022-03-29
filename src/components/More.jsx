import React from 'react'
import { useParams } from 'react-router-dom'

const More = ({data}) => {
    // console.log(movies)
    const {id}=useParams()
    const item=data.find(el=>el.id==id)
  return (
    <div>
        <img src={item.imgSrc} alt="" />
        <h3>{item.name}</h3>
        <h3> {item.date} </h3>
    </div>
  )
}

export default More