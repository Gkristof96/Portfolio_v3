import React, { Fragment } from "react";
import About from "../components/HomeScreen/About";
import Contact from "../components/HomeScreen/Contact";
import Hero from "../components/HomeScreen/Hero";
import Projects from "../components/HomeScreen/Projects/Projects";
import ScrollImage from "../components/HomeScreen/ScrollImage";

const HomeScreen = () => {
  return (
    <Fragment>
      <Hero />
      <ScrollImage />
      <Projects />
      <About />
      <Contact />
    </Fragment>
  );
};

export default HomeScreen;
