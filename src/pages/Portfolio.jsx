import React, { useRef, useEffect } from "react";
import { gsap, Power1, Power2, ScrollToPlugin } from "gsap/all";
import { NavLink } from "react-router-dom";

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

  useEffect(() => {
    window.scrollTo(0, 0)

    gsap.from('.portfolio__section', .4, { opacity: 0, x: -20, stagger: 0.1, delay: .2 })
  }, [])

  return (
    <>
      <PageTransition />
      <main className="portfolio">
        {portfolioData.map(
          ({ type, short, title, photos, noPhotos }, index) => (
            <section key={index} className={`portfolio__section ${type}`}>
              <header className="portfolio__section-header" id={type}>
                <button
                  className="portfolio__button"
                  onClick={() => sectionAnimation(index)}
                  ref={buttons.current[index]}
                >
                  {title}
                </button>
              </header>
              <article
                className="portfolio__section-content"
                data-status="inactive"
                ref={contents.current[index]}
              >
                <div className="portfolio__container">
                  <p className="portfolio__warning">{noPhotos}</p>
                  {photos.map(({ id, src, desc, alt }, index) => (
                    <NavLink
                      to={`/portfolio/${short}/${id}`}
                      className="portfolio__photo-wrapper"
                      id={id}
                      key={index}
                    >
                      <span className="portfolio__description">{desc}</span>
                      <img
                        src={require(`../images/${src}`)}
                        alt={alt}
                        className="portfolio__photo"
                      />
                    </NavLink>
                  ))}
                </div>
              </article>
            </section>
          )
        )}
      </main>
    </>
  );
};

export default Portfolio;
