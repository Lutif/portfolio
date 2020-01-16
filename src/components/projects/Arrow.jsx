import React from "react";

export default function Arrow(prop) {
  return (
    <div className={"arrow "+prop.direction} cursor='pointer' onClick={prop.clickFunction}>
      {prop.arrow}
    </div>
  );
}
