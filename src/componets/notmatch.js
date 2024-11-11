import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Notmatch() {
  const navigate=useNavigate()
  return (
    <div>
      <h3>Notmatch</h3>
       <button onClick={()=>navigate('/')}>Home</button>
    </div>
  )
}
