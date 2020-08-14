import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { gsap } from "gsap";

import PageTransition from "../components/PageTransition";

import loadedPhotos from "../components/LoadedPhotos";

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
    gsap.to(".g-photo-holder", 0.15, { opacity: 0, x: -15 });
    gsap.set(".g-photo-holder", { x: 0, delay: 0.2 });
    gsap.to(".g-photo-holder", 0.15, { opacity: 1, delay: 0.3 });
  };

  const fadeOutInNext = () => {
    gsap.to(".g-photo-holder", 0.15, { opacity: 0, x: 15 });
    gsap.set(".g-photo-holder", { x: 0, delay: 0.2 });
    gsap.to(".g-photo-holder", 0.15, { opacity: 1, delay: 0.3 });
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
    dots.current[lastIndex].classList.remove("g-dot-active");
    dots.current[currentIndex].classList.add("g-dot-active");
  }, [currentIndex]);

  return (
    <>
      <PageTransition />
      <div className="gallery-container">
        <button className="g-close" onClick={() => history.push("/portfolio")}>
          <span className="g-close-line"></span>
          <span className="g-close-line"></span>
        </button>
        <div className="g-photo-wrapper">
          {images.map((image, index) => (
            <img
              src={image}
              alt=""
              className="g-photo-holder"
              style={{ display: index !== currentIndex ? "none" : "block" }}
            />
          ))}
        </div>
        <button ref={prevBtn} className="g-button-prev g-button" onClick={prev}>
          <i className="g-icon-prev g-icon"></i>
        </button>
        <button ref={nextBtn} className="g-button-next g-button" onClick={next}>
          <i className="g-icon-next g-icon"></i>
        </button>
        <div className="g-pagination">
          {images.map((image, i) => (
            <span
              onClick={() => pagination(i)}
              key={i}
              className="g-dot"
              ref={(el) => (dots.current[i] = el)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
