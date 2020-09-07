import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import gsap, { Power1, Power3, Power4 } from 'gsap'

const links = [
  {
    name: 'portfolio',
    text: 'portfolio',
    to: '/portfolio'
  }, 
  {
    name: 'about',
    text: 'o nas',
    to: '/about'
  }, 
  {
    name: 'offer',
    text: 'oferta',
    to: '/offer'
  }, 
  {
    name: 'contact',
    text: 'kontakt',
    to: '/contact'
  }
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const burgerButton = useRef(null)

  const tlHeader = gsap.timeline()

  const burgerOpen = () => {
    gsap.set('html', { overflowY: 'hidden' })
    gsap.set('.header__nav--mobile', { display: 'grid' })
    gsap.to('.header__wrapper', .4, { height: '100vh', backgroundColor: 'rgba(215, 215, 215, .9)', ease: Power3.easeInOut })
    gsap.to('.header__link--mobile', .3, { opacity: 1, x: 0, delay: .15, stagger: .1, ease: Power1.easeInOut })
    gsap.to('.header__burger-line--1', .2, { y: 10, delay: .1 })
    gsap.to('.header__burger-line--3', .2, { y: -10, delay: .1 })
    gsap.to('.header__burger-line--2', .2, { opacity: 0, delay: .1 })
    gsap.to('.header__burger-line--1', .2, { rotation: 45, delay: .2 })
    gsap.to('.header__burger-line--3', .2, { rotation: -45, delay: .2 })
  }
  
  const burgerClose = () => {
    gsap.to('.header__wrapper', .3, { height: '117px', backgroundColor: 'rgba(215, 215, 215, .6)', ease: Power3.easeInOut, delay: .1 })
    gsap.to(['.header__burger-line--1', '.header__burger-line--3'], .2, { rotation: 0 })
    gsap.to(['.header__burger-line--1', '.header__burger-line--3'], .2, { y: 0, delay: .1 })
    gsap.to('.header__burger-line--2', .2, { opacity: 1, delay: .1 })
    gsap.set('html', { overflowY: 'auto' })
    gsap.set('.header__nav--mobile', { display: 'none', delay: .3 }) 
    gsap.set('.header__link--mobile', { opacity: 0, x: -20, delay: .3 })
  }

  const burgerMenu = () => {
    if (!burgerButton.current.hasAttribute('disabled')) {
      if (isMenuOpen) {
        burgerOpen()
      } else {
        burgerClose()
      }
      burgerButton.current.setAttribute('disabled', '')
      setTimeout(() => { burgerButton.current.removeAttribute('disabled') }, 400)
      setIsMenuOpen(!isMenuOpen)
    }
  }

  useEffect(() => {
    tlHeader
      .from('.header__wrapper', .25, { y: '-100%' }, '+=.3')
      .from('.header__logo-link-wrapper', .3, { opacity: 0, y: 30, }, '+=.15')
      .from('.header__text', .3, { opacity: 0, y: 10, stagger: .15, ease: Power1.easeInOut }, '-=.2')
    if (window.innerWidth < 992) {
      tlHeader.from('.header__burger-line', .2, { opacity: 0, x: 20, stagger: .08, ease: Power4.easeInOut }, '-=.2')
    }
    if (window.innerWidth >= 992) {
      tlHeader.from('.header__link--desktop', .2, { opacity: 0, y: -20, stagger: .1 }, '+=.2')
    }
  }, [])

  return (
    <header className="header">
      <button ref={burgerButton} className="header__burger" onClick={burgerMenu}>
        <span className="header__burger-line header__burger-line--1"></span>
        <span className="header__burger-line header__burger-line--2"></span>
        <span className="header__burger-line header__burger-line--3"></span>
      </button>
      <div className="header__wrapper">
        <nav className="header__nav header__nav--desktop">
          {[links[0], links[1]].map(({ name, text, to }) => (
              <NavLink className="header__link header__link--desktop" to={to} key={name}>
                {text}
              </NavLink>
            ))}
        </nav>
        <div className="header__logo-wrapper">
          <div className="header__logo">
            <h1 className="header__logo-link-wrapper">
              <NavLink className="header__logo-link" to="/" exact onClick={() => !isMenuOpen ? burgerMenu() : null}>
                pocykani
              </NavLink>
            </h1>
            <span className="header__text header__text--first">
              just <span className="header__text--red">one</span>
            </span>
            <span className="header__text header__text--second">moment</span>
          </div>
        </div>
        <div className="header__nav header__nav--desktop">
          {[links[2], links[3]].map(({ name, text, to }) => (
            <NavLink className="header__link header__link--desktop" to={to} key={name}>
              {text}
            </NavLink>
          ))}
        </div>
        <nav className="header__nav header__nav--mobile">
          {links.map(({ name, text, to }) => (
            <NavLink className="header__link header__link--mobile" to={to} key={name} onClick={burgerMenu}>
              {text}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header