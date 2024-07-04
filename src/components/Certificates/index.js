// Certificates.jsx

import React from "react";
import "./styles.css"; 
import stacticwebsite from "../../images/certificates/developerfoundations.jpg";
import flexbox from "../../images/certificates/resposnvewebdesignusingflexbox.jpg";
import responsiveweb from "../../images/certificates/responsivewebsite.jpg";
import react from "../../images/certificates/reactjs.jpg";
import python from "../../images/certificates/python.jpg";
import nodejs from "../../images/certificates/nodejs.jpg";
import js from "../../images/certificates/jsessentials.jpg";
import sqlite from "../../images/certificates/IntroductiontoDatabases.jpg";
import dynamicwebsite from "../../images/certificates/Dynamicwebapp.jpg";
import devFoundations from "../../images/certificates/developerfoundations.jpg";

const certificatesList = [
  { id: 1, imageUrl: stacticwebsite },
  { id: 2, imageUrl: responsiveweb },
  { id: 3, imageUrl: flexbox },
  { id: 4, imageUrl: dynamicwebsite },
  { id: 5, imageUrl: python },
  { id: 6, imageUrl: js },
  { id: 7, imageUrl: sqlite },
  { id: 8, imageUrl: devFoundations },
  { id: 9, imageUrl: nodejs },
  { id: 10, imageUrl: react },
];

const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates">
      <ul className="certificates-container">
        {certificatesList.map((each) => (
          <li key={each.id} className="certificate">
            <img src={each.imageUrl} alt={`Certificate ${each.id}`} className="certificate-img" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certificates;