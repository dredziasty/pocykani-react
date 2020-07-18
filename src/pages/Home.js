import React from "react";

import PageTransition from "../components/PageTransition";

import heroPhoto from "../images/f4.jpg";
import photo1 from "../images/f1.jpg";
import photo2 from "../images/f5.jpg";

const Home = () => {
  return (
    <>
      <PageTransition />
      <main className="home-main">
        <div className="hero-wrapper">
          <img src={heroPhoto} alt="hero" className="hero" />
        </div>
        <section className="short-about">
          <article className="sa-content sa-content-1">
            <h3 className="sa-header sa-header-1">Dwóch pasjonatów...</h3>
            <p className="sa-text sa-text-1">
              z nieziemskim zamiłowaniem do fotografii i chęcią zapisania
              Waszych wspomnień.
            </p>
          </article>
          <article className="sa-content sa-content-2">
            <h3 className="sa-header sa-header-2">Dwa charaktery...</h3>
            <p className="sa-text sa-text-2">
              z różnymi pomysłami na uwiecznienie najważnieszych dla Was chwil.
            </p>
          </article>
          <article className="sa-content sa-content-3">
            <h3 className="sa-header sa-header-3">Jeden duet...</h3>
            <p className="sa-text sa-text-3">
              którego celem jest stworzenie dla Was najpiękniejszego reportażu z
              niepowracalnych dni.
            </p>
          </article>
          <div className="sa-photo-wrapper sa-photo-wrapper-1">
            <img src={photo1} alt="sa" className="sa-photo sa-photo-1" />
          </div>
          <div className="sa-photo-wrapper sa-photo-wrapper-2">
            <img src={photo2} alt="sa" className="sa-photo sa-photo-2" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
