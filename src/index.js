import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const { useEffect } = React;

const loader = document.querySelector(".bg-loader");

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

const Root = ({ hideLoader }) => {
  useEffect(() => hideLoader(), []);

  return <App />;
};

ReactDOM.render(<Root hideLoader={hideLoader} showLoader={showLoader} />, document.getElementById("root"));
