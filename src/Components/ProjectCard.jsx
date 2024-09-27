import React from "react";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="card w-64 h-88 rounded-2xl shadow-[5px_5px_50px_0px_rgba(0,0,0,.2),-5px_-5px_20px_0px_rgba(255,255,255,.1)] transition-transform duration-400 transform hover:scale-105 hover:shadow-xl flex flex-col mb-3">
      <div className="card__img w-full h-1/2 bg-purple-600 rounded-t-2xl overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="card__descr-wrapper p-4 grid">
        <p className="card__title text-gray-400 text-center font-extrabold text-lg mb-4">
          {project.title || "Project"}
        </p>
        <p className="card__descr text-gray-700">
          {project.description || "Description"}
        </p>
        <div className="card__links mt-4 flex justify-between self-end">
          <div className="flex items-center text-white">
            <CiLink className="text-xl" />
            <a
              className="link font-semibold text-base ml-2 hover:underline"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview
            </a>
          </div>
          {project.codeUrl == "" ? (
            ""
          ) : (
            <div className="flex items-center text-blue-500">
              <FaGithub className="text-xl" />
              <a
                className="link font-semibold text-base ml-2 hover:underline"
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
