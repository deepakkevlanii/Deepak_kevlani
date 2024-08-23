import React from 'react';
import SideBar from './Components/SideBar';
import AboutMe from './Components/AboutMe';
import Skill from './Components/Skill';
import Services from './Components/Services';
import ContactUs from './Components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <div className='md:flex justify-between md:px-20 md:pr-0'>
      <SideBar />
      <div className='md:w-9/12 w-full pt-10 h-[100vh] md:overflow-y-auto md:pr-14'>
        <AboutMe />
        <Skill />
        <Services />
        <ContactUs />
      </div>
    </div>
    <ToastContainer />
      </>
  );
}

export default App;
