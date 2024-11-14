import React, { useState, useEffect } from 'react'; // Assurez-vous d'importer useState et useEffect
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Projects from './components/Projets';
import Competences from './components/Competences';
import Contact from './components/Contact';
import './App.css';

// Importation de l'image et des icônes
import photo from './photoalter4.jpg';
import githubIcon from './social.png'; // Chemin de l'icône GitHub
import linkedinIcon from './icons8-linkedin-80.png'; // Chemin de l'icône LinkedIn

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Afficher le bouton lorsque l'utilisateur défile vers le bas
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar /> {/* Ajout de la Navbar */}

      {/* Sections avec id correspondant aux liens de la navbar */}
      <section id="home" className="section">
        <div className="welcome-container">
          <div className="welcome-text">
            <h1 className="main-title">Fatou Thiam DIOUM</h1>
            <h2 className="subtitle">Développeuse Fullstack & Data Analyst/Scientist</h2>
            
            <p className="intro-text">
              Bonjour je me nomme Fatou Thiam, passionnée par les technologies et l'informatique. Mon parcours m'a permis de développer une expertise dans des domaines variés tels que le développement web et l'analyse de données.
            </p>
            <p className="intro-text">
              J'ai travaillé sur plusieurs projets allant de la conception de sites web à la mise en place de solutions d'analyse de données et de machine learning, où j'ai développé des compétences pour résoudre des problématiques complexes.
            </p>
            <p className="intro-text">
              Je suis motivée par l'innovation et cherche toujours à comprendre comment les technologies peuvent résoudre des défis réels et améliorer les systèmes existants.
            </p>
            <p className="intro-text">
              Actuellement, je cherche une nouvelle opportunité en tant que Développeuse Fullstack, Data Analyst ou Data Scientist et je suis disponible immédiatement pour une alternance ou un stage.
            </p>
          </div>
          <div className="welcome-photo">
            <img src={photo} alt="Fatou Thiam" />
          </div>
        </div>
        
        {/* Liens vers GitHub et LinkedIn */}
        <div className="social-links">
          <a href="https://github.com/fatouthiam6" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="social-icon" /> {/* Icône GitHub */}
          </a>
          <a href="https://www.linkedin.com/in/fatou-thiam-dioum-2539a7271/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" /> {/* Icône LinkedIn */}
          </a>
        </div>
      </section>

      <section id="experience" className="section">
        <Experience />
      </section>

      <section id="projects" className="section">
        <Projects />
      </section>

      <section id="skills" className="section">
        <Competences />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>

      {/* Footer ajouté ici */}
      <footer className="footer">
        <p>© 2024 Fatou Thiam DIOUM. Tous droits réservés.</p>
        <button onClick={scrollToTop} className="scroll-to-top">
          ↑
        </button>
      </footer>

      {/* Bouton de retour en haut */}
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default App;
