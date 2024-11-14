import React, { useState } from 'react';
import './Projets.css';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa'; // Importation des icônes

const projectsData = [
  {
    id: 1,
    image: require('./world-food-day-2020.png'),
    githubLink: 'https://github.com/fatouthiam6/projetsolideatt',
    hasScreenshots: true,
    screenshots: [
      '/assets/screenshots/solideat1.jpg',
      '/assets/screenshots/solideat2.jpg',
      '/assets/screenshots/solideat3.jpg',
      '/assets/screenshots/solideat4.jpg',
      '/assets/screenshots/solideat5.jpg',
      '/assets/screenshots/solideat6.jpg',
      '/assets/screenshots/solideat7.jpg',
      '/assets/screenshots/solideat8.jpg',
    ],
  },
  {
    id: 2,
    image: require('./workoutpic.jpg'),
    githubLink: 'https://github.com/fatouthiam6/workout-timer',
    hasScreenshots: true,
    screenshots: [
      '/assets/screenshots/workout1.jpg',
      '/assets/screenshots/workout2.jpg',
      '/assets/screenshots/workout3.jpg',
      '/assets/screenshots/workout4.jpg',
    ],
  },
  {
    id: 3,
    image: require('./travelpic.jpg'),
    githubLink: 'https://github.com/fatouthiam6/Travel-List',
    hasScreenshots: true,
    screenshots: [
      '/assets/screenshots/travellist1.jpg',
      '/assets/screenshots/travellist2.jpg',
      '/assets/screenshots/travellist3.jpg',
    ],
  },
  {
    id: 4,
    image: require('./blogpic.jpg'),
    githubLink: 'https://github.com/fatouthiam6/AtomicBlog',
    hasScreenshots: false,
    videoUrl: '/videos/atomicblog.mp4', // URL de la vidéo pour ce projet
  },
  {
    id: 5,
    image: require('./school1.jpg'),
    githubLink: 'https://github.com/fatouthiam6/WorkshopB3',
    hasScreenshots: false,
    videoUrl: '/videos/Enregistrement de l’écran 2024-09-27 à 04.18.24.mov', // URL de la vidéo pour ce projet
  },
  {
    id: 6,
    image: require('./dashboard.jpg'),
    hasScreenshots: true,
    screenshots: [
      '/assets/screenshots/visualisation par mois1.jpg',
      '/assets/screenshots/visualisation par mois2.jpg',
      '/assets/screenshots/visualisation par mois3.jpg',
      '/assets/screenshots/visualisation par mois4.jpg',
      '/assets/screenshots/visualisation par mois5.jpg',
      '/assets/screenshots/tableau de bord.jpg',
      '/assets/screenshots/totaldesventes.jpg',
      '/assets/screenshots/somme total des ventesexcel.jpg',
      '/assets/screenshots/data1.jpg',
    ],
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const openProjectDetails = (project) => {
    setActiveProject(project);
    setCurrentScreenshot(0); // Remise à zéro du premier screenshot au démarrage du modal
  };

  const closeProjectDetails = () => {
    setActiveProject(null);
  };

  const nextScreenshot = () => {
    if (currentScreenshot < activeProject.screenshots.length - 1) {
      setCurrentScreenshot(currentScreenshot + 1);
    }
  };

  const prevScreenshot = () => {
    if (currentScreenshot > 0) {
      setCurrentScreenshot(currentScreenshot - 1);
    }
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Mes Projets Récents</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className={`project-card ${activeProject === project ? 'active' : ''}`}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              onClick={() => openProjectDetails(project)}
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <div className="buttons">
                {project.hasScreenshots ? (
                  <button className="btn" onClick={() => openProjectDetails(project)}>Voir les Screenshots</button>
                ) : (
                  <button className="btn" onClick={() => openProjectDetails(project)}>Voir la Vidéo</button>
                )}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">
                  Voir le Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Project Details */}
      {activeProject && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeProjectDetails}>
              <FaTimes /> {/* Icone de fermeture */}
            </button>

            {/* Affichage des screenshots ou vidéo */}
            {activeProject.hasScreenshots ? (
              <div className="screenshots-container">
                <img
                  src={activeProject.screenshots[currentScreenshot]}
                  alt={`Screenshot ${currentScreenshot + 1}`}
                  className="screenshot-img"
                />
                <button className="arrow-btn left" onClick={prevScreenshot}>
                  <FaArrowLeft /> {/* Icone flèche gauche */}
                </button>
                <button className="arrow-btn right" onClick={nextScreenshot}>
                  <FaArrowRight /> {/* Icone flèche droite */}
                </button>
              </div>
            ) : (
              <div className="video-container">
                <video width="100%" controls>
                  <source src={activeProject.videoUrl} type="video/mp4" />
                  Votre navigateur ne supporte pas la balise vidéo.
                </video>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
