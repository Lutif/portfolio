import React, { useState, Fragment } from "react";
import ProjectSquare from "./ProjectSquare";
import ProjectSlides from "./ProjectSlides";
import ProjectSTable from "./ProjectTable";

function Projects() {
  const [view, setView] = useState("slides");

  return (
    <div className="p-5  light text-dark" id="projects">
      <h2 className="text-dark text-center"> Projects</h2>
      <div className="shadow rounded my-2">
        <div className="d-flex btn ml-3 text-dark btn-group  col-2 py-2">
          <p
            onClick={() => setView("slides")}
            className={view==="slides"?"mx-1 px-0 h2 fas fa-clone shadow text-dark": 
             " px-0 h2 fas fa-clone mx-1 shadow text-secondary"}
          ></p>
          <i
            onClick={() => setView("square")}
            className={view==="square"?" mx-1 px-0 h2 fas fa-table shadow text-dark": 
             " px-0 h2 fas fa-table mx-1 shadow text-secondary"}
          ></i>
          <i
            onClick={() => setView("list")}
            className={view==="list"?"mx-1 px-0 h2 fas fa-th-list shadow text-dark": 
            " px-0 h2 fas fa-th-list mx-1 shadow text-secondary"}
          ></i>
        </div>
      </div>
      <Fragment>
        {view === "slides" ? (
          <ProjectSlides />
        ) : view === "square" ? (
          <ProjectSquare />
        ) : (
          <ProjectSTable />
        )}
      </Fragment>
    </div>
  );
}

export default Projects;
