import React from 'react'

const StarRating = ({rating,handleRating}) => {
    const stars =(rating)=>{ 
        let tab=[]
        for(let i=1;i<=5;i++){
            if(i<=rating){
                tab.push(<span onClick={()=>handleRating(i)} style={{color:"gold",fontSize:"20px", cursor:"pointer"}}>★</span>)
            }else{
                tab.push(<span onClick={()=>handleRating(i)} style={{fontSize:"20px",cursor:"pointer"}}>★</span>)
        }
    }return tab
}
  return (
    <div> {stars(rating)} </div>
  )
}

export default StarRating