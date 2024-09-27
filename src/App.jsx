import React from "react";
import SideBar from "./Components/SideBar";
import AboutMe from "./Components/AboutMe";
import Skill from "./Components/Skill";
import Services from "./Components/Services";
import ContactUs from "./Components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";

function App() {
  return (
    <>
      <div className="md:flex justify-between md:px-20 md:pr-0">
        <SideBar />
        <BrowserRouter>
          <div className="md:w-9/12 w-full pt-10 h-[100vh] md:overflow-y-auto md:pr-14">
            <Navbar />
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/project" element={<Project />} />
              <Route path="/service" element={<Services />} />
              <Route path="/contactus" element={<ContactUs />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
