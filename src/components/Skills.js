import React from "react";
import html from "../images/html5.svg";
import css from "../images/css.svg";
import js from "../images/javascript.svg";
import react from "../images/react.svg";
import mongo from "../images/mongodb.svg";
import node from "../images/nodejs.svg";
import git from "../images/github.svg";
import heroku from "../images/heroku.svg";
import redux from "../images/redux.svg";

export default function Skills() {
  const stack = [html, css, js, react, redux, node, mongo, git, heroku];

  return (
    <div className="mx-4 rounded">
      <h2 className="mx-auto px-auto col-md-4 display-4">My Toolkit</h2>

      <div className="row">
        {stack.map((logo) => (
          <div className="skillslogo">
            <img src={logo} alt=""></img>
          </div>
        ))}
      </div>
    </div>
  );
}
