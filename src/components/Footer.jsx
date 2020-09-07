import React from "react";

const Footer = () => {
  const socials = [
    {
      name: 'Kamil',
      sites: [ 
        {
          siteName: 'facebook',
          url: 'https://www.facebook.com/fotopasternak'
        }, 
        {
          siteName: 'instagram',
          url: 'https://www.instagram.com/foto.pasternak/'
        }
      ]
    }, 
    {
      name: 'Miłosz',
      sites: [
        {
          siteName: 'facebook',
          url: 'https://www.facebook.com/Miłosz-Pytel-Fotografia-100747468187805'
        },
        {
          siteName: 'instagram',
          url: 'https://www.instagram.com/milosz_pytel_fotografia_/'
        }
      ]
    }
  ]

  return (
    <>
      <footer className="footer">
        <p className="footer__rights">Wszelkie prawa zastrzeżone</p>
        <section className="footer__info">
          {socials.map(({ name, sites }) => (
            <article className="footer__person" key={name}>
              <p className="footer__item footer__item--name">{name}</p>
              {sites.map(({ siteName, url }) => (
                <a href={url} target="_blank" className="footer__item footer__item--site">{siteName}</a>
              ))}
            </article>
          ))}
        </section>
      </footer>
    </>
  );
};

export default Footer;
