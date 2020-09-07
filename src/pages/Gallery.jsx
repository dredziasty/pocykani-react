import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { gsap } from "gsap";

import PageTransition from "../components/PageTransition";

import loadedPhotos from "../utils/LoadedPhotos";

const Gallery = ({ match }) => {
  const history = useHistory();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);

  let prevBtn = useRef(null);
  let nextBtn = useRef(null);
  let dots = useRef([]);

  const { short, id } = match.params;
  const images = loadedPhotos(short, id);

  const fadeOutInPrev = () => {
    gsap.to(".gallery__photo-holder", 0.15, { opacity: 0, x: -15 });
    gsap.set(".gallery__photo-holder", { x: 0, delay: 0.2 });
    gsap.to(".gallery__photo-holder", 0.15, { opacity: 1, delay: 0.3 });
  };

  const fadeOutInNext = () => {
    gsap.to(".gallery__photo-holder", 0.15, { opacity: 0, x: 15 });
    gsap.set(".gallery__photo-holder", { x: 0, delay: 0.2 });
    gsap.to(".gallery__photo-holder", 0.15, { opacity: 1, delay: 0.3 });
  };

  const prev = () => {
    let _index = currentIndex;
    let _prev = prevBtn.current;
    setLastIndex(_index);
    if (!_prev.hasAttribute("disabled")) {
      fadeOutInPrev();
      setTimeout(() => {
        if (_index === 0) {
          setCurrentIndex(images.length - 1);
        } else {
          setCurrentIndex(--_index);
        }
      }, 200);
      _prev.setAttribute("disabled", "");
      setTimeout(() => _prev.removeAttribute("disabled"), 500);
    }
  };

  const next = () => {
    let _index = currentIndex;
    let _next = nextBtn.current;
    setLastIndex(_index);
    if (!_next.hasAttribute("disabled")) {
      fadeOutInNext();
      setTimeout(() => {
        if (_index === images.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(++_index);
        }
      }, 200);
      _next.setAttribute("disabled", "");
      setTimeout(() => _next.removeAttribute("disabled"), 500);
    }
  };

  const pagination = (_index) => {
    if (_index != currentIndex) {
      if (_index > currentIndex) {
        fadeOutInNext();
      } else {
        fadeOutInPrev();
      }
      setLastIndex(currentIndex);
      setTimeout(() => {
        setCurrentIndex(_index);
      }, 200);
    }
  };

  useEffect(() => {
    dots.current[lastIndex].classList.remove("gallery__dot--active");
    dots.current[currentIndex].classList.add("gallery__dot--active");
  }, [currentIndex]);

  return (
    <>
      <PageTransition />
      <div className="gallery">
        <button className="gallery__close-button gallery__button" onClick={() => history.push("/portfolio")}>
          <span className="gallery__close-line"></span>
          <span className="gallery__close-line"></span>
        </button>
        <div className="gallery__photo-wrapper">
          {images.map((image, index) => (
            <img
              src={image}
              alt=""
              className="gallery__photo-holder"
              style={{ display: index !== currentIndex ? "none" : "block" }}
            />
          ))}
        </div>
        <button ref={prevBtn} className="gallery__nav-button--prev gallery__nav-button gallery__button" onClick={prev}>
          <i className="gallery__icon--prev gallery__icon"></i>
        </button>
        <button ref={nextBtn} className="gallery__nav-button--next gallery__nav-button gallery__button" onClick={next}>
          <i className="gallery__icon--next gallery__icon"></i>
        </button>
        <div className="gallery__pagination">
          {images.map((image, i) => (
            <span
              onClick={() => pagination(i)}
              key={i}
              className="gallery__dot"
              ref={(el) => (dots.current[i] = el)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
