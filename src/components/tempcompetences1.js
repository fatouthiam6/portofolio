import React, { useState } from "react";
import { FaPython, FaJava, FaJs, FaDatabase, FaAws } from "react-icons/fa";
import { DiDjango, DiReact } from "react-icons/di";
import { SiFlutter, SiBootstrap, SiHtml5, SiCss3, SiWordpress, SiLinux, SiPowerbi, SiMicrosoftazure, SiTrello, SiJira, SiPhp } from "react-icons/si";
import './Competences.css'; // Import du fichier CSS pour le style

const competencies = [
  {
    category: "Langages de Programmation",
    items: [
      { name: "Python", icon: <FaPython style={{ color: '#ffe0f0' }} /> },
      { name: "Java", icon: <FaJava style={{ color: '#ffe0f0' }} /> },
      { name: "JavaScript", icon: <FaJs style={{ color: '#ffe0f0' }} /> },
      { name: "SQL", icon: <FaDatabase style={{ color: '#ffe0f0' }} /> },
      { name: "C#/C", icon: <FaDatabase style={{ color: '#ffe0f0' }} /> },
      { name: "Dart", icon: <FaDatabase style={{ color: '#ffe0f0' }} /> },
    ]
  },
  {
    category: "Frameworks",
    items: [
      { name: "Flutter", icon: <SiFlutter style={{ color: '#ffe0f0' }} /> },
      { name: "Bootstrap", icon: <SiBootstrap style={{ color: '#ffe0f0' }} /> },
      { name: "React Native/React.js", icon: <DiReact style={{ color: '#ffe0f0' }} /> },
      { name: "Django", icon: <DiDjango style={{ color: '#ffe0f0' }} /> },
    ]
  },
  {
    category: "Web",
    items: [
      { name: "HTML", icon: <SiHtml5 style={{ color: '#ffe0f0' }} /> },
      { name: "CSS", icon: <SiCss3 style={{ color: '#ffe0f0' }} /> },
      { name: "WordPress", icon: <SiWordpress style={{ color: '#ffe0f0' }} /> },
      { name: "PHP", icon: <SiPhp style={{ color: '#ffe0f0' }} /> },
    ]
  },
  {
    category: "Data Intelligence",
    items: [
      { name: "Linux", icon: <SiLinux style={{ color: '#ffe0f0' }} /> },
      { name: "Power BI", icon: <SiPowerbi style={{ color: '#ffe0f0' }} /> },
      { name: "Excel", icon: <SiMicrosoftazure style={{ color: '#ffe0f0' }} /> },
      { name: "BigQuery", icon: <FaDatabase style={{ color: '#ffe0f0' }} /> }, // Remplacé par une icône générique
    ]
  },
  {
    category: "Bases de Données",
    items: [
      { name: "PostgreSQL", icon: <FaDatabase style={{ color: '#ffe0f0' }} /> },
      { name: "SQL Server", icon: <FaDatabase style={{ color: '#ffe0f0' }} /> },
      { name: "Oracle", icon: <FaDatabase style={{ color: '#ffe0f0' }} /> },
      { name: "NoSQL", icon: <FaDatabase style={{ color: '#ffe0f0' }} /> },
    ]
  },
  {
    category: "Intelligence Artificielle",
    items: [
      { name: "Machine Learning", icon: <FaDatabase style={{ color: '#ffe0f0' }} /> },
    ]
  },
  {
    category: "Big Data et Cloud",
    items: [
      { name: "Azure Cloud", icon: <SiMicrosoftazure style={{ color: '#ffe0f0' }} /> },
      { name: "AWS", icon: <FaAws style={{ color: '#ffe0f0' }} /> },
    ]
  },
  {
    category: "Gestion de Projet",
    items: [
      { name: "Trello", icon: <SiTrello style={{ color: '#ffe0f0' }} /> },
      { name: "JIRA", icon: <SiJira style={{ color: '#ffe0f0' }} /> },
      { name: "Méthode Agile", icon: <SiTrello style={{ color: '#ffe0f0' }} /> },
    ]
  }
];

function CompetenciesList() {
  // État pour gérer la catégorie active
  const [activeCategory, setActiveCategory] = useState(null);

  // Fonction pour gérer le clic sur une catégorie
  const handleClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  return (
    <div className="competencies-container">
      <h2 className="boomerang-title">Mes Compétences</h2>
      {competencies.map((category) => (
        <div
          key={category.category}
          className={`competency-block ${activeCategory === category.category ? "active" : ""}`}
          onClick={() => handleClick(category.category)}
        >
          <h3 className="category-title">{category.category}</h3>
          <div className="competency-items">
            {category.items.map((item) => (
              <div key={item.name} className="competency-item">
                {item.icon} <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CompetenciesList;
