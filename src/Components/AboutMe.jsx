import React from 'react'

function AboutMe() {
  function getExperienceLabel(startDate) {
    const start = new Date(startDate);
    const now = new Date();
    const diff = now.getTime() - start.getTime();
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44)); // Approximate month length
  
    if (months < 3) return 'just getting started in the industry';
    if (months < 6) return 'a few months of hands-on experience';
    if (months < 12) return 'over half a year of professional experience';
    if (months === 12) return '1 year of experience';
  
    const years = Math.floor(months / 12);
    return `${years}+ years of experience`;
  }
  
  return (
    <section className='shadow-[5px_5px_50px_0px_rgba(0,0,0,.2),-5px_-5px_20px_0px_rgba(255,255,255,.1)] rounded-md py-4 px-6 mb-12 w-4/5 mx-auto mt-4'>
  <h1 className='text-xl font-bold text-white mb-3'>About Me</h1>

  <p className='text-zinc-300'>
    I'm a full-stack web developer working at <strong>Cubatic Technology</strong> since <strong>October 2024</strong>. I work with technologies like <strong>Node.js</strong>, <strong>MySQL</strong>, <strong>Laravel</strong>, and build responsive front-end interfaces using <strong>modern web tools</strong>.
    <br />
    <br />
    I enjoy creating websites that are fast, user-friendly, and easy to maintain. Each project is a chance for me to learn something new and improve my skills.
    <br />
    <br />
    With <strong>{getExperienceLabel('2024-10-16')}</strong>, I'm focused on writing clean code, solving real problems, and building digital experiences that make a difference.
  </p>
</section>

  )
}

export default AboutMe