import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

import './styles.css';

import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  const { email, gitHub, linkedIn, name } = props;

  return (
    <sectio id="footer">
      <div className="footer-links">
        {email && (
          <a href={`mainlto:${email}`} className="socialIcon">
            <MdEmail size={30} />
            linkedIn
          </a>
        )}
        {gitHub && (
          <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaGithub size={30} />
          </a>
        )}
        {linkedIn && (
          <a href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaLinkedin size={30} />
          </a>
        )}
      </div>
      <p className="footer-text">
        Created by {name}
      </p>
    </sectio>
  );
};

Footer.propTypes = {
  email: PropTypes.string,
  gitHub: PropTypes.string,
  linkedIn: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Footer;
