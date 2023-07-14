import React from "react";

export default function NotFound() {
  const NotFound = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
  };

  return (
    <>
      <div style={NotFound}>
        <h1>Not Found</h1>
        <h3>click ⬇⬇</h3>
      </div>
    </>
  );
}
