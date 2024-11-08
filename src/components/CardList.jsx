import React from 'react'
import data from "./Data.json"
import Card from './Card'

const CardList = () => {
  return (
    <div className='cards'>
        {data.map((element,key)=>(
            <Card {...element}/>
        )
        )}      
    </div>
  )
}

export default CardList
