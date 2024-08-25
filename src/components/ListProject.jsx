import React from 'react';
import EachProject from './EachProject';

const ListProject = ({ projectLists }) => {
  return (
    <div className="flex mt-12 flex-wrap justify-center">
      {projectLists.map((project) => (
        <EachProject project={project} />
      ))}
    </div>
  );
};

export default ListProject;
