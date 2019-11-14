import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
// import UseStateHook from "./Components/UseStateHook";
import UseEffectHook from "./Components/UseEffectHook";

function App() {
  return (
    <div style={{ marginTop: 20 }}>
      {/* <UseStateHook nameProp="ajaykrishna" /> */}
      <UseEffectHook />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
