import React from "react";

import PageTransition from '../components/PageTransition'

const Portfolio = () => {
  return (
    <>
          <PageTransition 
        init={"circle(150% at 100% 100%)"}
        anim={"circle(0% at 100% 100%)"}
        animEnd={"circle(0% at 0% 0%)"}
        exit={"circle(150% at 0% 0%)"}
      />
      <main className="section Portfolio">
        <h1>Portfolio</h1>
      </main>

    </>
  );
};

export default Portfolio;
