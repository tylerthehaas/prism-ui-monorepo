import React from "react";
import ReactDOM from "react-dom";

import { AvatarDocs } from "./avatar";

import "prismjs/themes/prism-tomorrow.css";
import "../components/index";
import "./docs.scss";

document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("react-target");

  ReactDOM.render(
    <div>
      <AvatarDocs />
    </div>,
    target,
  );
});
