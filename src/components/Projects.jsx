import React from 'react';
import Carousel from './Carousel';
import { slides, projectLists } from '../data';
import ListProject from './ListProject';

const Projects = () => {
  return (
    <div id="projects" className="projectsContainer bg-primary mt-10">
      <h2 className="text-mixed text-5xl text-center mb-5 mt-20">
        {' '}
        / Projects{' '}
      </h2>
      <div className="carousalContainer flex justify-center w-[45%] m-auto ">
        {/* <Carousel slides={slides} key={0} /> */}
      </div>
      <div>
        <ListProject projectLists={projectLists} />
      </div>
    </div>
  );
};

export default Projects;
