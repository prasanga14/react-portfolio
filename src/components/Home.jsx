import React from 'react';
import '../app.css';
import { AiFillMail } from 'react-icons/ai';

const Home = () => {
  return (
    <div id="home" className="flex flex-col justify-center items-center h-3/4">
      {/* <div className="someDecoration m-2">X</div> */}
      <div className="devInfo">
        <div className=" relative text-6xl text">
          <span className="text-mixed">hi, </span>
          <span className=" text-secondary font-bold">Prasanga</span>
          <span className=" text-mixed"> here. </span>
        </div>
      </div>
      <div className="homeInfo justify-center text-tartiary flex flex-col flex-wrap w-1/3 tracking-wide">
        <h2 className="text-4xl">I create multiple things</h2>
        <p className="mt-2 text-tartiary">
          Passionate computer science student with hands-on experience in
          developing innovative solutions and a strong foundation in software
          engineering principles.
        </p>
        <button className="mt-8 border-secondary border-2 w-1/3 m-auto p-1 rounded-2xl">
          <AiFillMail size={25} className="mt-2 m-auto mb-2" />
          Send Mail
        </button>
      </div>
    </div>
  );
};

export default Home;
