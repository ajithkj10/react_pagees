import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Features() {
  const navigate=useNavigate()
  return (
    <div>
      <h3>Features</h3>
      <button onClick={()=>navigate('details')}>Details</button>
    </div>
  )
}
