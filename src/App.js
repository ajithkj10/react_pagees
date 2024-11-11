import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./componets/home";
import About from "./componets/about";
import Products from "./componets/products";
import Nav from "./componets/nav";
import Features from "./componets/features";
import Details from "./componets/details";
import Notmatch from "./componets/notmatch";
export default function App() {
  return (
    <div className="App">
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="product" element={<Products />}>
            <Route index element={<Features />} />
            <Route path="features" element={<Features />} />
            <Route path="details" element={<Details />} />
          </Route>
          <Route path="*" element={<Notmatch />} />
        </Routes>
      </>
    </div>
  );
}
