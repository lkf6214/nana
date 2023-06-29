import React from "react";
import ReactDOM from "react-dom";

import "../css/Gallery.css";
import Picture from "./Picture";
import { useHorizontalScroll } from "./useSideScroll";

function App() {
  const scrollRef = useHorizontalScroll();
  return (
    <div className="App" ref={scrollRef} style={{ overflow: "auto" }}>
      <div style={{ whiteSpace: "nowrap" }}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Picture />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
