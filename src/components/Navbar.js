import React from 'react';
import { Link } from 'react-scroll'; // Import de la librairie react-scroll


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link 
            to="home" 
            smooth={true} 
            duration={500}
            className="nav-link"
          >
            Accueil
          </Link>
        </li>
       
      
        <li>
          <Link 
            to="experience" 
            smooth={true} 
            duration={500}
            className="nav-link"
          >
            Expérience
          </Link>
        </li>
        <li>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500}
            className="nav-link"
          >
            Projets
          </Link>
        </li>
        <li>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500}
            className="nav-link"
          >
            Compétences
          </Link>
        </li>
        <li>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500}
            className="nav-link"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;