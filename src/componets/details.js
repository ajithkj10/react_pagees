import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Details() {
  const navigate=useNavigate()
  return (
    <div>
      <h3>Details</h3>
      <p>1.amal</p>
      <p>2.visak</p>
      <button onClick={()=>navigate('product')}>Features</button>

    </div>
  )
}
