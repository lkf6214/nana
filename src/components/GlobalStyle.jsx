import React from "react";
import ITCEDSCR from "../fonts/ITCEDSCR.woff";
import HelveticaNeueLTStd from "../fonts/HelveticaNeueLTStd-Roman.woff";
import KismetRegular from "../fonts/Kismet-Regular.woff";
import MotorcycleBold from "../fonts/Motorcycle-Bold.woff";

import { createGlobalStyle } from "styled-components";

export default function GlobalStyle() {
  const Global = createGlobalStyle`
    
    @font-face {
        font-family: "ITCEDSCR";
        src: url(${ITCEDSCR}) format("woff");
      }
      @font-face {
        font-family: "HelveticaNeueLTStd";
        src: url(${HelveticaNeueLTStd}) format("woff");
      }
      @font-face {
        font-family: "Kismet-Regular";
        src: url(${KismetRegular}) format("woff");
      }
      @font-face {
        font-family: "Motorcycle-Bold";
        src: url(${MotorcycleBold}) format("woff");
      }
    
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


.fixComment_header {
  font-family: Kismet-Regular;
}

  `;

  return (
    <>
      <Global />
    </>
  );
}
