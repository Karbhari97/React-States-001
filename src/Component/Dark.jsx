import React from "react";

function Dark({ headline, para1, para2 }) {
  return (
    <div>
      <h2 style={{ color: "#AA336A" }}>{headline}</h2>
      <i>{para1}</i>
      <p> {para2}</p>
    </div>
  );
}

export default Dark;
