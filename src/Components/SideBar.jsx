import React from 'react'
import Button from './Button'
import SocailIcon from './SocailIcon'
import { Typewriter } from 'react-simple-typewriter'
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
function SideBar() {

  return (
    <div className='w-full pt-8 flex flex-col items-center md:block md:w-6/12 md:py-20'>
      <div className='h-36 w-36 rounded-full overflow-hidden shadow-lg shadow-black mb-4'>
        <img src="/images/profile.jpeg" alt="" className='h-36 w-36' />
      </div>
      <h1 className='md:text-5xl text-2xl text-white from-neutral-100'>Hi,I'm <span className='text-[#ef233c]'>Deepak Kevlani</span></h1>
      <h1 className='md:text-5xl text-2xl text-white from-neutral-100 mb-4'>
        Web
        <span className='text-gray-500'>
          <Typewriter
            words={[' Designer', ' Developer']}
            cursor
            loop={true}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>

      <p className='text-zinc-500 md:text-start text-center'>Passionate about creating interactive and dynamic web experiences.</p>

      <div className='mt-10 flex flex-wrap md:justify-normal justify-center gap-8 md:gap-4 items-center'>
        <Button link={'Deepak_Kevlani.pdf'} data={'Download CV'} />
        {/* <Button link={'Deepak_Kevlani.pdf'} data={'Hire Me'} /> */}
        <div className='mx-4 flex gap-8'>
          <SocailIcon icon={<IoLogoWhatsapp />} url='https://wa.me/917414857161' color='#25D366' />
          <SocailIcon icon={<FaLinkedin />} url='https://www.linkedin.com/in/deepak-kevlani-3514712b3' color='#0077B5' />
          <SocailIcon icon={<BiLogoGmail />} url='mailto:deepak.kevlanii@gmail.com' color='#EA4335' />
          <SocailIcon icon={<FaGithub />} url='https://github.com/deepakkevlanii' color='white' />
        </div>
      </div>
    </div>
  )
}

export default SideBar
