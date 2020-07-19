import React from "react";

import PageTransition from "../components/PageTransition";

const About = () => {
  return (
    <>
      <PageTransition />
      <main className="about-main">
        <header className="about-header">
          <h3>Trochę o nas</h3>
        </header>
        <section className="about-content">
          <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
            nostrum quae repellat culpa velit eius! Beatae excepturi, at numquam
            assumenda optio nemo maxime nobis nihil? Repellat iure omnis
            corporis nam.
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            itaque molestiae ut distinctio consequuntur ratione dolorum amet
            consequatur modi incidunt autem vero ab tempora, voluptatum nam.
            Magnam doloribus expedita amet molestias dolore ipsa quis
            accusantium aliquid porro voluptatum, consectetur illum recusandae
            veritatis ipsam voluptatibus sapiente fuga ducimus earum aspernatur
            adipisci.
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            laboriosam debitis dolores culpa velit reiciendis delectus minus
            pariatur, iste magni eligendi quibusdam veniam inventore quisquam
            similique molestias vero deserunt ea maiores repellendus
            consectetur. Ducimus, ex.
          </p>
        </section>
        <section className="about-crew-wrapper">
          <div className="crew-member kamil">
            <div className="crew-member-photo-wrapper">
              <img
                src="https://picsum.photos/id/1025/200"
                alt="kamil"
                className="crew-member-photo"
              />
            </div>
            <div className="crew-member-name-wrapper">
              <p className="crew-member-name">Kamil</p>
            </div>
          </div>
          <div className="crew-member milosz">
            <div className="crew-member-photo-wrapper">
              <img
                src="https://picsum.photos/id/1062/200"
                alt="milosz"
                className="crew-member-photo"
              />
            </div>
            <div className="crew-member-name-wrapper">
              <p className="crew-member-name">Miłosz</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
