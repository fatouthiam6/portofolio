// src/components/Experience.js
import React from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="experience-title">Expérience professionnelle</h2>
      
      <div className="experience-block">
        <p className="company-date">Janvier 2024 - Mars 2024</p>
        <h3 className="role">Développeuse Web/Mobile</h3>
        <p className="company-date">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" /> Artem5 | Paris
        </p>

        <div className="experience-details">
          <h4>Développement d'application mobile (React Native)</h4>
          <p>Participation active au développement d'une application mobile en React Native, en contribuant à l'ajout de fonctionnalités et à l'amélioration de l'expérience utilisateur.</p>

          <h4>Optimisation et résolution de problèmes</h4>
          <p>Résolution rapide des problèmes, notamment les bugs, pour assurer une fluidité optimale de l'application en collaboration avec l'équipe technique, garantissant une expérience utilisateur sans faille.</p>

          <h4>Collaboration avec les designers</h4>
          <p>Travail en collaboration avec l'équipe design pour assurer une intégration cohérente des éléments visuels dans l'application, garantissant une expérience utilisateur harmonieuse.</p>

          <h4>Refonte du code</h4>
          <p>Participation à la refonte du code pour améliorer la maintenabilité et les performances, en optimisant certaines parties clés du code et en suivant les meilleures pratiques de développement.</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
