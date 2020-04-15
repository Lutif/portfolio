import React from "react";

export default function Arrow(prop) {
  return (
    <div {...prop} cursor='pointer' onClick={prop.clickFunction}>
      {prop.arrow}
    </div>
  );
}
