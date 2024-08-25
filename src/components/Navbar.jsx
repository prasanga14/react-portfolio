import React, { useState, useEffect } from 'react';
import '../app.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 1);
      // console.log(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <nav className={`text-mixed font-bold ${sticky ? 'sticky' : ''}`}>
      <ul className="flex p-6 mx-5">
        <li className="text-xl">
          <a href="#home">Prasanga Ghimire</a>
        </li>
        <li>
          <a href="#home" className="mx-5 hover:text-secondary">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="mx-5 hover:text-secondary">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="mx-5 hover:text-secondary">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
