import React from 'react';
// import devpic from '../images/devpic.png';
import devpic2 from '../images/devpic2.jpg';

const About = () => {
  return (
    <div id="about" className="aboutContainer">
      <h2 className="text-mixed text-5xl text-center mb-3"> / about me </h2>
      <div className="flex bg-primary justify-center">
        <div className="devInfo w-1/2 text-tartiary">
          <span>
            I am currently a Student at IIMS College Studying Computer Science.
            At the same time, I am Learning HTML, CSS and JavaScript to become a
            Full-Stack Web Developer. Here are some technologies I have Worked
            with:
          </span>
          <ul className="list-disc ml-6">
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>Restful APIs</li>
          </ul>
          <span>
            Besides these, I'm interested in following the developments of
            science. I also like to go for bike rides and take a evening walk.
          </span>
        </div>
        <div className="devPic mx-10">
          <img src={devpic2} alt="developer" width={300} />
        </div>
      </div>
    </div>
  );
};

export default About;
