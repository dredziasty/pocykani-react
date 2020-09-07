import React, { useEffect } from "react";
import { gsap, Power1 } from 'gsap'

import PageTransition from "../components/PageTransition";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    gsap.set('.about__content', { scaleY: 0, transformOrigin: 'top' })
    gsap.from('.about__header-text', .4, { delay: .4, opacity: 0, y: -30, ease: Power1.easeInOut })
    gsap.to('.about__content', .4, { delay: .6, scaleY: 1, ease: Power1.easeInOut })
    gsap.from('.about__text', .4, { delay: .9, opacity: 0, stagger: .15, y: -20, ease: Power1.easeInOut })
    gsap.from('.about__photo', .4, { delay: 1.2, opacity: 0, stagger: .15, ease: Power1.easeInOut })
    gsap.from('.about__name', .4, { delay: 1.3, opacity: 0, stagger: .15, y: -10, ease: Power1.easeInOut })
  }, [])

  return (
    <>
      <PageTransition />
      <main className="about">
        <header className="about__header">
          <h3 className="about__header-text ">Trochę o nas</h3>
        </header>
        <section className="about__content">
          <p className="about__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            nostrum quae repellat culpa velit eius! Beatae excepturi, at numquam
            assumenda optio nemo maxime nobis nihil? Repellat iure omnis
            corporis nam.
          </p>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            itaque molestiae ut distinctio consequuntur ratione dolorum amet
            consequatur modi incidunt autem vero ab tempora, voluptatum nam.
            Magnam doloribus expedita amet molestias dolore ipsa quis
            accusantium aliquid porro voluptatum, consectetur illum recusandae
            veritatis ipsam voluptatibus sapiente fuga ducimus earum aspernatur
            adipisci.
          </p>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            laboriosam debitis dolores culpa velit reiciendis delectus minus
            pariatur, iste magni eligendi quibusdam veniam inventore quisquam
            similique molestias vero deserunt ea maiores repellendus
            consectetur. Ducimus, ex.
          </p>
        </section>
        <section className="about__crew-wrapper">
          <div className="about__crew-member about__crew-member--kamil">
            <div className="about__photo-wrapper">
              <img
                src="https://picsum.photos/id/1025/200"
                alt="kamil"
                className="about__photo"
              />
            </div>
            <div className="about__name-wrapper">
              <p className="about__name">Kamil</p>
            </div>
          </div>
          <div className="about__crew-member about__crew-member--milosz">
            <div className="about__photo-wrapper">
              <img
                src="https://picsum.photos/id/1062/200"
                alt="milosz"
                className="about__photo"
              />
            </div>
            <div className="about__name-wrapper">
              <p className="about__name">Miłosz</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
