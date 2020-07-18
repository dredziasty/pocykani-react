import React from "react";

import PageTransition from '../components/PageTransition'

const About = () => {
  return (
    <>
          <PageTransition 
        init={"circle(150% at 100% 100%)"}
        anim={"circle(0% at 100% 100%)"}
        animEnd={"circle(0% at 0% 0%)"}
        exit={"circle(150% at 0% 0%)"}
      />
      <main className="section About">
        <h1>About</h1>
      </main>

    </>
  );
};

export default About;
