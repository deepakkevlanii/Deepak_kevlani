import React from 'react';
import SkillIcon from './SkillIcon';
import { DiJqueryLogo } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiVercel, SiAdobephotoshop, SiMongodb } from "react-icons/si";
import {
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faReact,
    faNodeJs,
    faGitAlt,
    faGithub
} from '@fortawesome/free-brands-svg-icons';

const skills = [
    { icon: faHtml5, color: '#E34F26' },
    { icon: faCss3Alt, color: '#1572B6' },
    { icon: faJsSquare, color: '#F7DF1E' },
    { icon: DiJqueryLogo, color: '#0769AD' },
    { icon: FaBootstrap, color: '#7952B3' },
    { icon: SiTailwindcss, color: '#38B2AC' },
    { icon: SiMongodb, color: '#47A248' },
    { icon: SiExpress, color: '#000000' },
    { icon: faReact, color: '#61DAFB' },
    { icon: faNodeJs, color: '#339933' },
    { icon: faGitAlt, color: '#F05032' },
    { icon: faGithub, color: '#181717' },
    { icon: SiVercel, color: '#dadada' },
    { icon: SiAdobephotoshop, color: '#001d34' },
];

function Skill() {
    return (
        <section className='shadow-[5px_5px_50px_0px_rgba(0,0,0,.2),-5px_-5px_20px_0px_rgba(255,255,255,.1)] rounded-md py-4 px-6 mb-12 w-4/5 mx-auto mt-4'>
            <h1 className='text-xl font-bold text-white mb-3'>About My Skill</h1>
            <div className='flex gap-10 flex-wrap md:justify-normal justify-around'>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center h-16 w-16 shadow-[5px_5px_50px_0px_rgba(255,255,255,.1),-5px_-5px_20px_0px_rgba(255,255,255,.1)] rounded-md p-2"
                        style={{ color: skill.color }}
                    >
                        <SkillIcon icon={skill.icon} color={skill.color} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skill;
