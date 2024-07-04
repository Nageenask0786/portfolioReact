import React from "react";
import PropTypes from "prop-types";

import profileImage from "../../images/profile.jpeg";

import "./styles.css";

const Home = ({ name, title }) => {
    return (
      <section id="home" className="home">
        <div className="grid-container">
          <div className="grid-item grid-item-1">
            <h1>{name} </h1>
            <h2 className="title">{title}</h2>
            <p className="description grid-item-2">
              I am a full stack development trainee at Nxtwave <br />
              looking for new job opportunities
            </p>
            <button type="button" className="btn">
              <a href="#about">More About Me</a>
            </button>
          </div>
          <div className="grid-item">
            <img src={profileImage} alt="profile" className="profile" />
          </div>
        </div>
      </section>
    );
  };
  
  Home.defaultProps = {
    name: "",
    title: "",
  };
  
  Home.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };
  
  export default Home;