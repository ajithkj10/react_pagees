import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello about</h1>
      <button onClick={() => navigate("/")}>home</button>
    </div>
  );
}

 
