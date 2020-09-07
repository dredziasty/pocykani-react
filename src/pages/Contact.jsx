import React, { useEffect } from "react";
import { gsap, Power1, Power4, ScrollTrigger } from 'gsap/all'

import PageTransition from "../components/PageTransition";

import FacebookIcon from './../components/FacebookIcon'
import InstagramIcon from './../components/InstagramIcon'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const socials = [
    {
      name: 'facebook',
      url: 'https://www.facebook.com',
      Component: FacebookIcon,
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com',
      Component: InstagramIcon,
    }
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
    gsap.set('.contact__form', { scaleY: 0, transformOrigin: 'top' })
    gsap.set('.contact__input', { transformOrigin: 'top' })
    gsap.set('.contact__header-form-wrapper', { overflow: 'hidden', transformOrigin: 'top' })
    gsap.set('.contact__header-social-wrapper', { overflow: 'hidden', transformOrigin: 'top' })

    gsap.from('.contact__header-text', .4, { delay: .4, opacity: 0, y: -30, ease: Power1.easeInOut })
    gsap.to('.contact__form', .5, { delay: .6, scaleY: 1, ease: Power1.easeInOut })
    gsap.from('.contact__header-form-wrapper', .3, { delay: .7, scaleY: 0, ease: Power1.easeInOut})
    gsap.from('.contact__header-form', .3, { delay: 1, x: '-110%', ease: Power1.easeInOut })
    gsap.from('.contact__label', .3, { delay: 1, opacity: 0, x: -20, stagger: .1, ease: Power1.easeInOut })
    gsap.from('.contact__input', .3, { delay: 1, opacity: 0, stagger: .1, ease: Power1.easeInOut })
    gsap.from('.contact__button', .3, { delay: 1.6, opacity: 0, ease: Power1.easeInOut })

    gsap.from('.contact__header-social-wrapper', .3, { delay: 1.7, scaleY: 0, ease: Power1.easeInOut})
    gsap.from('.contact__header-social', .3, { delay: 1.7, x: '-110%', ease: Power1.easeInOut})
    gsap.from('.contact__social-icon', .2, { delay: 1.8, opacity: 0, ease: Power4.easeInOut, stagger: .1 })
    gsap.from('.contact__social-text', .2, { delay: 1.9, opacity: 0, ease: Power4.easeInOut, stagger: .1 })
  }, [])

  return (
    <>
      <PageTransition />
      <main className="contact">
        <div className="contact__grid">
          <div className="contact__grid-item--first">
            <header className="contact__header">
              <h3 className="contact__header-text">Kontakt</h3>
            </header>
          </div>
          <div className="contact__grid-item--second">
          <form className="contact__form">
              <header className="contact__header-form-wrapper">
                <h4 className="contact__header-form">napisz do nas</h4>
              </header>
            <div className="contact__grid-form">
              <div className="contact__grid-form-item">
                <label className="contact__label" htmlFor="firstname">Imię</label>
                <input className="contact__input" type="text" id="firstname" name="firstname"/>
              </div>
              <div className="contact__grid-form-item">
                <label className="contact__label" htmlFor="lastname">Nazwisko</label>
                <input className="contact__input" type="text" id="lastname" name="lastname"/>
              </div>
              <div className="contact__grid-form-item">
                <label className="contact__label" htmlFor="email">Email</label>
                <input className="contact__input" type="email" name="email" id="email"/>
              </div>
              <div className="contact__grid-form-item">
                <label className="contact__label" htmlFor="type">Rodzaj zdjęć</label>
                <select className="contact__input contact__select" name="type" id="type">
                  <option value="wedding">Reportaż ślubny</option>
                  <option value="party">Reportaż z imprezy</option>
                  <option value="couple-photoshoot">Sesja zdjęciowa - para</option>
                  <option value="single-photoshoot">Sesja zdjęciowa - solo</option>
                  <option value="differen-type">Inny</option>
                </select>
              </div>
              <div className="contact__grid-form-item">
                <label className="contact__label" htmlFor="message">Treść</label>
                <textarea className="contact__input" name="message" id="message" cols="60" rows="15" style={{ resize: 'none' }}></textarea>
              </div>
              <div className="contact__grid-form-item">
                <button type="submit" className="contact__button">wyślij</button>
              </div>
            </div>
            </form>
          </div>
          <div className="contact__grid-item--third">
            <section className="contact__social-media">
              <header className="contact__header-social-wrapper">
                <h4 className="contact__header-social">social media</h4>
              </header>
              {socials.map(({ name, url, Component }) => (
                <a href={url} className="contact__link" target="_blank">
                  {<Component className="contact__social-icon"/>}
                  <span className='contact__social-text'>{name}</span>
                </a>
              ))}
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
