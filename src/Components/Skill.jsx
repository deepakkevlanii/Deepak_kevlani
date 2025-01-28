import React from "react";
import SkillIcon from "./SkillIcon";
import { DiJqueryLogo } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiVercel,
  SiAdobephotoshop,
  SiMongodb,
} from "react-icons/si";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const skills = [
  { icon: faHtml5, color: "#E34F26", label: "HTML5" },
  { icon: faCss3Alt, color: "#1572B6", label: "CSS3" },
  { icon: faJsSquare, color: "#F7DF1E", label: "JavaScript" },
  { icon: DiJqueryLogo, color: "#0769AD", label: "jQuery" },
  { icon: FaBootstrap, color: "#7952B3", label: "Bootstrap" },
  { icon: SiTailwindcss, color: "#38B2AC", label: "Tailwind CSS" },
  { icon: SiMongodb, color: "#47A248", label: "MongoDB" },
  { icon: SiExpress, color: "#000000", label: "Express.js" },
  { icon: faReact, color: "#61DAFB", label: "React.js" },
  { icon: faNodeJs, color: "#339933", label: "Node.js" },
  { icon: faGitAlt, color: "#F05032", label: "Git" },
  { icon: faGithub, color: "#181717", label: "GitHub" },
  { icon: SiVercel, color: "#dadada", label: "Vercel" },
  { icon: SiAdobephotoshop, color: "#001d34", label: "Photoshop" },
];

function Skill() {
  return (
    <section className="shadow-[5px_5px_50px_0px_rgba(0,0,0,.2),-5px_-5px_20px_0px_rgba(255,255,255,.1)] rounded-md py-4 px-6 mb-12 w-4/5 mx-auto mt-4">
      <h1 className="text-xl font-bold text-white mb-3">About My Skill</h1>
      <div className="flex gap-10 flex-wrap md:justify-normal justify-around">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative flex justify-center items-center h-16 w-16 shadow-[5px_5px_50px_0px_rgba(255,255,255,.1),-5px_-5px_20px_0px_rgba(255,255,255,.1)] rounded-md p-2"
            style={{ color: skill.color }}
          >
            <SkillIcon icon={skill.icon} color={skill.color} />
            <span className="absolute bottom-full mb-2 px-2 py-1 text-xs font-semibold text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
