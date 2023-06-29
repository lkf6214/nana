import React from "react";
import { createGlobalStyle } from "styled-components";

export default function GlobalStyle() {
  const Global = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    ul,
    ol, li {
      list-style: none;
    }


    a {
      text-decoration: none;
    }
  `;

  return (
    <>
      <Global />
    </>
  );
}
