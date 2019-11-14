import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import UseStateHook from "./Components/UseStateHook";

function App() {
  return (
    <div style={{ marginTop: 20 }}>
      <UseStateHook />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
