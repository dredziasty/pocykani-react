import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom'
import { gsap, Power1, ScrollTrigger } from 'gsap/all'

import PageTransition from "../components/PageTransition";

gsap.registerPlugin(ScrollTrigger)

const Offer = () => {
  const offers = [
    {
      header: 'Reportaże ślubne',
      description: 'Suspendisse luctus leo eros. Donec lacus eros, tincidunt vel bibendum a, aliquet a mi. Cras sagittis eu est id mattis. Duis urna nisl, aliquam vel ultricies in, elementum sit amet urna. Suspendisse convallis, sapien non venenatis maximus, tellus magna interdum lacus, sed finibus libero sapien ut felis. Sed egestas, purus quis maximus aliquet, nibh neque vehicula lacus, a ultricies justo mi ut mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse imperdiet neque erat. Duis ultricies luctus iaculis.'
    },
    {
      header: 'Reportaże z imprez',
      description: 'Proin porta rhoncus dolor nec lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla in augue rutrum, hendrerit enim at, fermentum magna. Quisque in enim arcu. Aenean tempus ultrices semper. Sed rhoncus ac odio ut vestibulum. Quisque aliquet euismod nulla, non vulputate nisl viverra ut. Curabitur quis lacus vel dui bibendum lacinia. Morbi ultrices dui sit amet viverra sodales.'
    },
    {
      header: 'Sesje zdjęciowe - pary',
      description: 'Donec blandit in ligula in condimentum. Vivamus id ante in sem eleifend congue. Vestibulum aliquet, ante quis varius malesuada, ipsum elit sagittis magna, et dictum libero magna quis diam. Proin fringilla sem sit amet blandit bibendum. Fusce quis augue eros. Vestibulum pulvinar, arcu sed vulputate dapibus, massa risus vehicula mi, eget fringilla risus urna faucibus metus. Mauris purus arcu, pulvinar scelerisque augue eu, auctor finibus ex. Ut nisi erat, tristique vel varius vitae, fermentum a justo.'
    },
    {
      header: 'Sesje zdjęciowe - solo',
      description: 'Nullam sagittis metus ac sapien suscipit, ut ullamcorper augue elementum. Vivamus non turpis scelerisque, blandit erat vitae, dapibus enim. Praesent eu sollicitudin sapien. Nam consequat venenatis justo, pharetra porttitor arcu elementum sed. Curabitur posuere scelerisque nulla, molestie gravida neque placerat in. Quisque condimentum dolor at feugiat finibus. Fusce metus ex, feugiat in finibus et, sodales at mauris. Nullam mollis egestas porttitor. Sed hendrerit mi nec nisl sollicitudin, at convallis ipsum facilisis.'
    }
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
    gsap.set('.offer__info', { scaleY: 0, transformOrigin: 'top' })
    gsap.set('.offer__info-header', { opacity: 0, y: -20 })
    gsap.set('.offer__description', { opacity: 0, y: -20 })
    gsap.set('.offer__price', { opacity: 0, y: -20 })

    gsap.from('.offer__header-text', .4, { delay: .4, opacity: 0, y: -30, ease: Power1.easeInOut })
    ScrollTrigger.batch('.offer__info', {
      start: 'top 70%',
      onEnter: batch => gsap.to(batch, { scaleY: 1, ease: Power1.easeInOut, stagger: .3 })
    })
    
    ScrollTrigger.batch('.offer__info-header', {
      start: 'top 65%',
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, ease: Power1.easeInOut, delay: .4, stagger: .2 })
    })

    ScrollTrigger.batch('.offer__description', {
      start: 'top 65%',
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, ease: Power1.easeInOut, delay: .6, stagger: .2 })
    })

    ScrollTrigger.batch('.offer__price', {
      start: 'top 65%',
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, ease: Power1.easeInOut, delay: .8, stagger: .2 })
    })
  }, [])

  return (
    <>
      <PageTransition />
      <main className="offer">
        <header className="offer__header">
          <h3 className="offer__header-text">Oferta</h3>
        </header>
        <section className="offer__content">
          {offers.map(({ header, description }) => (
            <article className="offer__info">
              <header className="offer__info-header-wrapper"><h4 className="offer__info-header">{header}</h4></header>
              <p className="offer__description">
              {description}
              </p>
              <p className="offer__price">Wycena w wiadomości prywatnej.</p>
            </article>
          ))}
          <nav className="offer__nav">
            <div className="offer__link-wrapper">
              <NavLink className="offer__link" to="/contact">przejdź do kontaktu</NavLink>
            </div>
          </nav>
        </section>
      </main>
    </>
  );
};

export default Offer;
