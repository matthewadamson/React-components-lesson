import React from "react";
import ReactDOM from "react-dom";

import Heading from "./Heading.jsx";
import List from "./List";
import Notes from "./Notes";

ReactDOM.render(
  <div>
    <Heading></Heading>
    <Notes />
    <List />
  </div>,
  document.getElementById("root")
);
