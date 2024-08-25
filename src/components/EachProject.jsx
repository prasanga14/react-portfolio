import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';

const EachProject = ({ project }) => {
  return (
    <div className="flex border-2 flex-col h-96 items-center w-96 text-tartiary m-5 p-4">
      <div className="requiredButtons p-1 m-1 flex justify-around">
        <button className="m-2 text-xl">
          <a href={project.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </button>
        {project.url && (
          <button className="m-2 text-xl">
            <a href={project.url} target="_blank" rel="noreferrer">
              <MdOpenInNew />
            </a>
          </button>
        )}
      </div>
      <h2 className="text-3xl font-bold ">{project.title}</h2>
      <p>{project.info}</p>
    </div>
  );
};

export default EachProject;
