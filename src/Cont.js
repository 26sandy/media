import React from 'react'
import { useParams } from 'react-router-dom'


const Cont = () => {
    const {id} =useParams()
  return (
    <div>
        post{id}
    </div>
  )
}

export default Cont