import React from "react";
import {
  About,
  Contact,
  Header,
  Nav,
  Projects,
  Skills,
  TechPreferences,
} from "../Exports";
const Home = () => {
  return (
    <div className="w-[90%] md:w-[70%] mx-auto p-10">
      <Header />
      <Nav />
      <About />
      <TechPreferences />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
