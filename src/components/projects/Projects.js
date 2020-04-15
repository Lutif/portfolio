import React, { useEffect, useState } from "react";
import Arrow from "./Arrow";
import Project from "./Project";
import data from "./data.js";
import Toggle from "./Toggle.js";

export default function Projects(props) {
  let [current, setCurrent] = useState(0);
  let [autoSlide, setAuto] = useState(true);

  function goBack() {
    setAuto(false);
    let prev = (current + 3 - 1) % data.length;
    setCurrent(prev);
  }
  function goNext() {
    setAuto(false);
    let next = (current + 1) % data.length;
    setCurrent(next);
  }
  useEffect(() => {
    let id = setTimeout(() => {
      if (autoSlide) {
        setCurrent((current + 1) % data.length);
      }
    }, 5000);
    return () => clearTimeout(id);
  }, [current]);

  return (
    <div className="contianer light" id="projects">
      <h3>Projects</h3>
      {/* <Toggle/> */}
      <div className="carousel">
        <Arrow className="arrow left" arrow="&#9664;" clickFunction={goBack} />
        <Project content={data[current]} />

        <Arrow className="arrow right" arrow="&#9654;" clickFunction={goNext} />
      </div>
    </div>
  );
}
