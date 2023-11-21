import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/:title' element={<Service />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
