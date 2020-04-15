import React from "react";
import data from "./data";
function ProjectSquare() {
  return (
    <div className="row col-10 mx-auto px-3 mt-4 ">
      {data.map((project) => (
        <div className="my-1 col-md-4" >
        <img src={require(`${project.image}`)} className="col-12 img-thumbnail m-0 p-0 mx-auto"/>
        <div className="mt-auto"> 
            <div className=" text-center font-weight-bold">{project.name}</div>
      <p>{project.discription}</p>
      <div className="row mx-auto">
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
        </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectSquare;
