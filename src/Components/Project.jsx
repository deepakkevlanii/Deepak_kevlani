import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio built with React, Tailwind CSS, and EmailJS for seamless contact form integration.",
      imageUrl:
        "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/66c829ec35d6ed00088e3d75/screenshot_2024-08-23-06-20-06-0000.webp&fit=cover&h=500&q=40&w=800",
      liveUrl: "https://deepakkevlani.netlify.app",
      codeUrl: "https://github.com/deepakkevlanii/Deepak_kevlani",
    },
    {
      title: "MERN Chat App",
      description:
        "A real-time messaging app built with the MERN stack, using WebSocket for instant communication, JWT for secure authentication, and Tailwind CSS for a responsive UI. Hosted on MongoDB Atlas.",
      imageUrl:
        "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/66e1b9c1d9435a26e8c59bba/screenshot_2024-09-11-15-40-25-0000.webp&fit=cover&h=500&q=40&w=800",

      liveUrl: "https://talk-to-everyone.netlify.app",
      codeUrl: "https://github.com/deepakkevlanii/MERN_CHAT_APP_FRONTEND",
    },
    {
      title: "Weather App",
      description:
        "A sleek weather app built with React and Tailwind CSS, fetching real-time weather data using the Weather API. It provides accurate forecasts and current conditions for any location.",
      imageUrl: "/images/weatherimg.png",
      liveUrl: "https://deepakkevlanii.github.io/WeatherApp/",
      codeUrl: "https://github.com/deepakkevlanii/WeatherApp",
    },
    {
      title: "Animated Website",
      description:
        "An engaging website built with HTML, CSS, and JavaScript, featuring dynamic animations powered by GSAP. Smooth transitions and interactive elements enhance user experience, making navigation enjoyable across all devices.",
      imageUrl: "/images/animateweb.png",
      liveUrl: "https://deepakkevlanii.github.io/animated-website/",
      codeUrl: "https://github.com/deepakkevlanii/animated-website",
    },
    {
      title: "PW Skill Clone",
      description:
        "A responsive website built with React and Tailwind CSS, featuring form validation using React Hook Form for efficient and user-friendly data handling and validation.",
      imageUrl:
        "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65d2eff5b12513d8f2bdb4a9/screenshot_2024-02-19-06-06-51-0000.webp&fit=cover&h=500&q=40&w=800",
      liveUrl: "https://pwsk.netlify.app",
      codeUrl: "",
    },
  ];

  return (
    <div className="flex justify-between px-12 py-5 flex-wrap gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Project;
