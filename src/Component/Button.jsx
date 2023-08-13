import React from "react";
import Dark from "./Dark";
import { useState } from "react";

function Button() {
  let [bgcolor, setBgcolor] = useState({ background: "white", text: "black" });
  let Change = () => {
    if (bgcolor.background === "white") {
      setBgcolor({
        background: "black",
        text: "white",
      });
    } else {
      setBgcolor({
        background: "white",
        text: "black",
      });
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        margin: "0px",
        backgroundColor: bgcolor.background,
        color: bgcolor.text,
        height: "680px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          margin: "0px 400px auto",
          alignItems: "center",
        }}
      >
        <h1>Overreacted </h1>
        <button
          style={{
            height: "40px",
            padding: "10px ",
            color: "white",
            backgroundColor: "#AA336A",
            border: "none",
            borderRadius: "10px",
          }}
          onClick={Change}
        >
          Toggle
        </button>
      </div>

      <div style={{ margin: "10px 440px auto " }}>
        <Dark
          headline="The WET Codebase"
          para1="Sunday 4th,2020 11min read"
          para2="Come waste your time with me"
        />
        <Dark
          headline="Goodby, Clean Code"
          para1="Friday 22nd,2019 5min read"
          para2={"Let clean code guide you. Then let it go"}
        />
        <Dark
          headline="My Decade In Review"
          para1="Saturday 11th,2018 5min read"
          para2={"A personal reflection"}
        />
        <Dark
          headline={"What Are The React Team Principles"}
          para1={"Thursday 5th,july 5 min read "}
        />
      </div>
    </div>
  );
}

export default Button;
