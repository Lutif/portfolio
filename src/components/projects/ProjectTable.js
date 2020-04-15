import React, { useState } from "react";
import Arrow from "./Arrow";
import Project from "./Project";
import data from "./data.js";
import Toggle from "./Toggle.js";

function ProjectTable() {
  return (
    <table className="table table-striped table-borderless table-hover mt-4 px-2">
      {data.map((project) => (
        <tr className="row">
          <td className="col-md-1"></td>
          <td className="col-md-3 img">
            <img
              src={require(`${project.image}`)}
              className="col-11 round img"
            />
          </td>
          <td className="col-md-3 light card">
            <h3 className="text-center">{project.name}</h3>
            <div className="row m-auto mt-5">
              <button className="mr-2 btn btn-primary ">
                <a
                  href={project.url}
                  style={{ textDecoration: "none" }}
                  className="text-white"
                  target="_blank"
                >
                  {" "}
                  Demo{" "}
                </a>{" "}
              </button>
              <button className=" btn btn-primary">Github</button>
            </div>
          </td>
          <td className="col-md-4 card light">
            <p>{project.discription}</p>
            <hr />
            <p>
              <span className="text-primary font-weight-bold">stack:</span>
              {" " + project.tech}
            </p>
          </td>
          <td className="col-md-1"></td>
        </tr>
      ))}
    </table>
  );
}

export default ProjectTable;
