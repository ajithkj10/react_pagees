import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>products</h3>
      <button onClick={() => navigate("details")}>Details</button>
      <button onClick={() => navigate("/")}>Home</button>
      <br />
      <br />
      <Link to="features">feature</Link>

      <Link to="details">details</Link>
 <Outlet />     
    </div>
  );
}
