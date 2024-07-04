
import React from "react";

import { FaExternalLinkAlt } from "react-icons/fa";
import "./styles.css";



const list = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dchxbofyt/image/upload/v1720012707/weatherwebsite_dwyz73.jpg",
    name: "Weather App",
    visitLink: "https://react-js-weather-app-eight.vercel.app/",
    description:
      "This is a simple web application that allows users to get current weather updates by entering the name of a city in the search field.",
  },
  {
    id: 2,
    imageUrl: "https://res.cloudinary.com/dchxbofyt/image/upload/v1720012690/tasklist_gkuzlg.jpg",
    name: "Tasklist",
    visitLink: "https://nageetodo.ccbp.tech",
    description:
      "A robust task tracking system with CRUD capabilities, crafted to simplify task management.",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dchxbofyt/image/upload/v1720012717/foodwebsite_fxnru7.jpg",
    name: "Food Munch",
    visitLink: "https://nageresponsive.ccbp.tech",
    description:
      "A fully responsive website that offers a comprehensive list of food items and detailed information about each item.",
  },
  {
    id: 4,
    imageUrl: "https://res.cloudinary.com/dchxbofyt/image/upload/v1720012680/chart_mqcggw.jpg",
    name: "Charts App",
    visitLink: "https://react-js-charts-app.vercel.app/",
    description:
      "A dynamic web application that visualizes data through a variety of interactive charts using Recharts which include line charts, bar charts, pie charts etc",
  },
];


const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <ul className="projects-list">
        {list.map((each) => (
          <li key={each.id} className="project-item">
            <img src={each.imageUrl} alt="project" className="project-image" />
            <div className="project-details">
              <h3 className="project-name">{each.name}</h3>
              <h4 className="project-description">{each.description}</h4>
              <button type="button" className="visit-btn">
                <a href={each.visitLink}>
                  <FaExternalLinkAlt size={25} />
                </a>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;