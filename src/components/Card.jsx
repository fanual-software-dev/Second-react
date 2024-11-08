import React from 'react'

const Card = ({title,img,description}) => {
  return (
    <div className='card'>
        <img src={img} alt="Image" width="96%" height="150px"/>
        <p className='title'>{title}</p>
        <p>{description}</p>
    </div>
  )
}

export default Card
