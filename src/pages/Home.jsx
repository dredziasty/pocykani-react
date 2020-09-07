import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { gsap, ScrollToPlugin, Power1, ScrollTrigger } from "gsap/all";
import 'react-lazy-load-image-component/src/effects/blur.css'

import PageTransition from "../components/PageTransition";

import heroPhoto from "../images/f4.jpg";
import photo from "../images/f1.jpg";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Home = () => {
  const scrollToTop = () => {
    gsap.to(window, 0.8, { scrollTo: 0, ease: Power1.easeInOut });
  };

  useEffect(() => {
    window.scrollTo(0, 0)
    gsap.set('.home__about-header', { opacity: 0, y: 200 })
    gsap.set('.home__text', { opacity: 0, y: 200 })
    gsap.from('.home__hero', 0.4, { opacity: 0, ease: Power1.easeInOut, delay: .3 })
    
    ScrollTrigger.batch('.home__about-header', {
      onEnter: batch => gsap.to(batch, .3, { opacity: 1, y: 0, ease: Power1.easeInOut }),
      start: 'top 90%',
    })
    
    ScrollTrigger.batch('.home__text', {
      onEnter: batch => gsap.to(batch, .3, { opacity: 1, y: 0, ease: Power1.easeInOut }),
      start: 'top 90%',
    })
    
    gsap.from('.home__photo', 0.4, { opacity: 0, scrollTrigger: { trigger: '.home__photo', start: '-20% top'}, ease: Power1.easeInOut })
  }, [])

  return (
    <>
      <PageTransition />
      <main className="home">
        <div className="home__hero-wrapper">
          <img src={heroPhoto} alt="hero" className="home__hero"/>
        </div>
        <section className="home__about">
          <article className="home__content home__content--first">
            <h3 className="home__about-header">
              Dwóch <span>pasjonatów...</span>
            </h3>
            <p className="home__text">
              z nieziemskim zamiłowaniem do fotografii i chęcią zapisania
              Waszych wspomnień.
            </p>
          </article>
          <article className="home__content home__content--second">
            <h3 className="home__about-header">
              Dwa <span>charaktery...</span>
            </h3>
            <p className="home__text">
              z różnymi pomysłami na uwiecznienie najważnieszych dla Was chwil.
            </p>
          </article>
          <article className="home__content home__content--third">
            <h3 className="home__about-header">
              Jeden <span>duet...</span>
            </h3>
            <p className="home__text">
              którego celem jest stworzenie dla Was najpiękniejszego reportażu z
              niepowracalnych dni.
            </p>
          </article>
        </section>
        <div className="home__photo-wrapper">
          <img src={photo} alt="home" className="home__photo" />
        </div>
        <div className="home__nav">
          <div className="home__nav-portfolio">
            <NavLink to="/portfolio" className="home__link">przejdź do portfolio</NavLink>
          </div>
          <button className="home__scroll-top" onClick={scrollToTop}>
            przewiń do góry
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
