import React from 'react'
import ServiceCard from './ServiceCard'

function Services() {
    return (
        <section className='shadow-[5px_5px_50px_0px_rgba(0,0,0,.2),-5px_-5px_20px_0px_rgba(255,255,255,.1)] rounded-md py-4 px-6 mb-12 w-4/5 mx-auto mt-4'>
        
          <h1 className='text-xl font-bold text-white my-3'>Service's</h1>
          

          <div className="flex flex-wrap mx-auto">
            <ServiceCard imgsrc="web-design" title="Web Design" description="Create visually appealing and user-friendly websites tailored to your brand." />
            <ServiceCard imgsrc="development" title="Web Development" description="Build robust and dynamic web applications with the latest technologies and frameworks." />
            <ServiceCard imgsrc="logo" title="Logo Design" description="Craft unique and memorable logos that represent your brand identity effectively." />
            <ServiceCard imgsrc="ecom" title="E-Commerce Website" description="Create captivating and distinct visuals that showcase your brand's essence perfectly with our exceptional logo design services."/>
          </div>
      

    </section>
    )
}

export default Services