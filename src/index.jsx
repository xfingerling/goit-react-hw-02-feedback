import React from "react";
import { render } from "react-dom";

import Feedback from "./components/Feedback/Feedback";

const App = () => <Feedback />;

render(<App />, document.getElementById("root"));
