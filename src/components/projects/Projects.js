import React, { useState, Fragment } from "react";
import ProjectSquare from "./ProjectSquare";
import ProjectSlides from "./ProjectSlides";
import ProjectSTable from "./ProjectTable";

function Projects() {
  const [view, setView] = useState("slides");

  return (
    <div className="p-5  light text-dark" id="projects">
      <h2 className="text-dark text-center"> Projects</h2>

      <div className="d-flex btn ml-3 text-dark btn-group col-2 py-2">
        <p onClick={() => setView("slides")} className=" px-0 h2 fas fa-clone"></p>
        <i onClick={() => setView("square")} className=" px-0 h2 mx-2 fas fa-table"></i>
        <i onClick={() => setView("list")} className=" px-0  h2 fas fa-th-list"></i>
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
