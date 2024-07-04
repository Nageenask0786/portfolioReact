import React from "react";

import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer"
import "./App.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Nageena Shaik",
  title: "Software Developer",
  email: "nageenask1417@gmail.com",
  gitHub: "Nageenask0786",
  linkedIn: "nageena-shaik-9b8477255",
};

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Certificates />
      <Footer name = {siteProps.name}/>
    </div>
  );
};

export default App;
