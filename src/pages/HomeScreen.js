import React, { Fragment } from "react";
import About from "../components/HomeScreen/About";
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
    </Fragment>
  );
};

export default HomeScreen;
