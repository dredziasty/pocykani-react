import React, { useRef } from "react";
import { gsap, Power1, Power2, ScrollToPlugin } from "gsap/all";
import { NavLink } from 'react-router-dom'

import PageTransition from "../components/PageTransition";

import portfolioData from "../json/PortfolioData";

gsap.registerPlugin(ScrollToPlugin);

const Portfolio = () => {
  let buttons = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);
  
  let contents = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  function openAnimation(element) {
    gsap.to(element, 0.4, { height: "auto", ease: Power1.easeInOut });
    gsap.to([...element.childNodes[0].childNodes], 0.4, {
      opacity: 1,
      y: -20,
      stagger: 0.1,
      ease: Power2.easeInOut,
    });
    gsap.to(window, 0.3, {
      scrollTo: { y: element.previousSibling, offsetY: 20 },
      delay: 0.4,
      ease: Power2.easeInOut,
    });
  }

  function closeAnimation(element) {
    gsap.to(element, 0.3, { height: 0, ease: Power1.easeInOut, delay: 0.1 });
    gsap.to([...element.childNodes[0].childNodes], 0.2, {
      opacity: 0,
      delay: 0.2,
      ease: Power2.easeInOut,
    });
  }

  const sectionAnimation = (index) => {
    const currentContent = contents.current[index].current;

    contents.current.map(({ current: content }) => {
      if (currentContent.dataset.status === "inactive") {
        content.dataset.status = "inactive";
      }
    });

    currentContent.dataset.status === "active"
      ? (currentContent.dataset.status = "inactive")
      : (currentContent.dataset.status = "active");

    contents.current.map(({ current: content }) => {
      content.dataset.status === "active"
        ? openAnimation(currentContent)
        : closeAnimation(content);
    });
  };

  return (
    <>
      <PageTransition />
      <main className="portfolio-main">
        <div className="modal-photos-slider">
          <div className="modal-close-wrapper">
            <button className="modal-close-button"></button>
          </div>
          <div className="modal-photo-wrapper">
            <img src="" alt="" className="modal-photo" />
          </div>
          <div className="modal-buttons-wrapper">
            <button className="modal-button modal-button-prev">
              <i className="modal-arrow-icon modal-arrow-left"></i>
            </button>
            <button className="modal-button modal-button-next">
              <i className="modal-arrow-icon modal-arrow-right"></i>
            </button>
          </div>
        </div>
        {portfolioData.map(({ type, short, title, photos, noPhotos }, index) => (
          <section key={index} className={`portfolio-section ${type}`}>
            <header className="ps-header" id={type}>
              <button
                onClick={() => sectionAnimation(index)}
                ref={buttons.current[index]}
              >
                {title}
              </button>
            </header>
            <article
              className="ps-content"
              data-status="inactive"
              ref={contents.current[index]}
            >
              <div className="ps-container">
                <p className="ps-warning">{noPhotos}</p>
                {photos.map(({ id, src, desc, alt }, index) => (
                  <NavLink to={`/portfolio/${short}/${id}`} className="ps-photo-wrapper" id={id} key={index}>
                    <span className="ps-description">{desc}</span>
                    <img src={require(`../images/${src}`)} alt={alt} className="ps-photo" />
                  </NavLink>
                ))}
              </div>
            </article>
          </section>
        ))}
      </main>
    </>
  );
};

export default Portfolio;
