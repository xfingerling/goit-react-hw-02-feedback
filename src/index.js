import React, { Component } from "react";
import { render } from "react-dom";

import Feedback from "./Feedback/Feedback";

class App extends Component {
  render() {
    return <Feedback />;
  }
}

render(<App />, document.getElementById("root"));
