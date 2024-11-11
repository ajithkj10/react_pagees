import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate=useNavigate()
  return (
    <div>
      
      <h1>Hello home</h1>
      <button onClick={()=>navigate('/about')}>about</button>
      <button onClick={()=>navigate('product')}>product</button>

    </div>
  );
}

