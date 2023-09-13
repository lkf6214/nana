import React, { useState } from "react";
// import "./SubSection.css";
import ArrayMap from "../Mainpage/MainInner/ArrayMap";
import Comment from "../Comment";
import Ganzi from "../../components/Ganzi";

export default function SubSection() {
  const photos = [
    {
      src: "./img/VisualDesign/00.png",
      alt: "Visual Design 00",
      description:
        "Personal Work : ▀▄▀▄▀ CLO 3D Padding & Sweat Set-Up Design ▀▄▀▄▀",
    },
    {
      src: "./img/VisualDesign/01.gif",
      alt: "Visual Design 01",
      description:
        "Lolyloveloly 2022 Hot Summer Season: Innocent T-shirt and A fox T-shirt SNS Contents",
    },

    {
      src: "./img/VisualDesign/02.png",
      alt: "Visual Design 02",
      description:
        "Ememelge 2018 S/S : Ememlge ShoppingBag Design 3D Modeling 👕👖🧤🧦🛍",
    },
    {
      src: "./img/VisualDesign/03.gif",
      alt: "Visual Design 03",
      description: "Ememelge 2018F/W Season : Part.02Photo Collage Layout 💌",
    },
    {
      src: "./img/VisualDesign/04.gif",
      alt: "Visual Design 04",
      description:
        "Ememelge 2018F/W Season : Part.01 Graphic & Lookbook Layout.",
    },
    {
      src: "./img/VisualDesign/05.jpg",
      alt: "Visual Design 05",
      description:
        "Aomg 2023 Poster Design 🌐 : AOMG Most Wanted TOKYO Parco POP-UP Store poster Design ",
    },

    {
      src: "./img/VisualDesign/06.png",
      alt: "Visual Design 06",
      description:
        "Mapcy 2023 : Korea Rice Wine ”Mapcy” Red&White Label Bottle Package Design 🐯",
    },
    {
      src: "./img/VisualDesign/07.gif",
      alt: "Visual Design 07",
      description:
        "Ememelge 2018 S/S Season : Ememlge Copyright T-shirt Rubber Label & DTP Graphic🎾",
    },

    {
      src: "./img/VisualDesign/08.png",
      alt: "Visual Design 08",
      description:
        "Ememelge 2021S/S Smiley® Collab : Collaboration Graphic with Smiley 😀 of Mmlg make the world happy place.",
    },
    {
      src: "./img/VisualDesign/09.png",
      alt: "Visual Design 09",
      description: "Ulmagram Design 2023 :  Ulmagram Application Logo Design",
    },
    {
      src: "./img/VisualDesign/10.jpg",
      alt: "Visual Design 10",
      description:
        "Ememelge 2020 F/W Part.3 Wemanagetour: Ememlge Bad Rabbit Graphic Half Zip Up Sweatshirt.",
    },
    {
      src: "./img/VisualDesign/11.png",
      alt: "Visual Design 11",
      description:
        "Ememelge 2018 F/W Season : Ememlge🔴Customer🔴Service🔴Graphic🔴Design.",
    },
    {
      src: "./img/VisualDesign/12.gif",
      alt: "Visual Design 12",
      description: "Personal Work : Brand For Bitches Company Butterfly Bag 🦋",
    },
    {
      src: "./img/VisualDesign/13.gif",
      alt: "Visual Design 13",
      description: "Personal Work : 👴Hayao Miyazaki’s Animation Pictograms",
    },
    {
      src: "./img/VisualDesign/14.jpg",
      alt: "Visual Design 14",
      description:
        "Aomg X Snow Peak Line Drawing 2023 🌐: Kian84 x Snow Peak Graphic Line Drawing",
    },
    {
      src: "./img/VisualDesign/15.png",
      alt: "Visual Design 15",
      description:
        "Hapiball 2023 : Can Highball Brand “HAPIBALL” Site Design🍻",
    },

    {
      src: "./img/VisualDesign/16.gif",
      alt: "Visual Design 16",
      description: "Hapiball 2023: Can Highball “HAPIBALL” 3D Modeling🍻",
    },
    {
      src: "./img/VisualDesign/17.gif",
      alt: "Visual Design 17",
      description:
        "Ememelge 2021S/S Smiley® Collab : Collaboration Graphic with Smiley 😀 of Mmlg make the world happy place.",
    },

    {
      src: "./img/VisualDesign/18.png",
      alt: "Visual Design 18",
      description:
        "Lolyloveloly 2022 Hot Summer Season : A fox T-shirt Graphic Drawing.🦊🦊🦊 ",
    },
    {
      src: "./img/VisualDesign/19.png",
      alt: "Visual Design 19",
      description:
        "Ememelge 2019S/S Delibery : Lookbook Prints 3D Design Preview 📚! ",
    },
    {
      src: "./img/VisualDesign/20.png",
      alt: "Visual Design 20",
      description: "Lolyloveloly 2021 F/W Season : With Cap Navy Color🧢☁☁☁☁",
    },
    {
      src: "./img/VisualDesign/21.png",
      alt: "Visual Design 21",
      description:
        "Ememelge 2021 F/W Binggrae®Collab : Mmlg x Binggrae Collab Graphic Sketch 🍌🐰🍌🐰🍌🐰",
    },
    {
      src: "./img/VisualDesign/22.png",
      alt: "Visual Design 22",
      description:
        "Ememelge 2019 F/W Season : 🌬Bleach Sweat SET-UP ( MMLG-19FW-T014-BLUE )",
    },
    {
      src: "./img/VisualDesign/23.jpg",
      alt: "Visual Design 23",
      description:
        "Lolyloveloly 2022 Hot Summer Season : Graphic Design and Styling, Overall Directing",
    },
    {
      src: "./img/VisualDesign/24.gif",
      alt: "Visual Design 24",
      description:
        "Lolyloveloly 2022 Hot Summer Season : Lookbook Film Scan 🎞🎞🎞 Whole Body and Cap Shoot Ver. ",
    },
    {
      src: "./img/VisualDesign/25.png",
      alt: "Visual Design 25",
      description:
        "Lolyloveloly 2022 Hot Summer Season : 2D Character Compose SNS Contents👯",
    },

    {
      src: "./img/VisualDesign/26.gif",
      alt: "Visual Design 26",
      description:
        "Ememelge 2021 Hot Summer : Rotary Graphic Line Green Logo Transform 🌳🍀🌲🌿🌳",
    },
    {
      src: "./img/VisualDesign/27.png",
      alt: "Visual Design 27",
      description:
        "Lolyloveloly 2021 F/W Season : Graphic Design and Plan🧥👚👗👙👛🩱👠",
    },

    {
      src: "./img/Illustration/28.jpg",
      alt: "Illustration 28",
      description:
        "Ememelge 2021 S/S 1st Delivery : “Wegocamp” Half T-shirt & Grapic Design.",
    },
    {
      src: "./img/Illustration/29.jpg",
      alt: "Illustration 29",
      description:
        "Lolyloveloly 2022 Hot Summer Season : 3D Photo Compose SNS Contents👯",
    },
    {
      src: "./img/Illustration/30.jpg",
      alt: "Illustration 30",
      description:
        "Ememelge 21 F/W Season : Full Duvet Travel Season Pre-order Previwe✌",
    },
    {
      src: "./img/VisualDesign/31.png",
      alt: "Visual Design 31",
      description: "Ememelge Label : Mmlg Various label design 🤍3D scan ver🤍",
    },
    {
      src: "./img/VisualDesign/32.gif",
      alt: "Visual Design 32",
      description:
        "Lolyloveloly 2023 F/W Season Logo Transform and Season Graphic🌹🌹🌹",
    },
    {
      src: "./img/VisualDesign/33.png",
      alt: "Visual Design 33",
      description:
        "Lolyloveloly 2022 Hot Summer Season : Starwave Longsleeve Pattern Design ★·.··.·★",
    },
    {
      src: "./img/VisualDesign/34.gif",
      alt: "Visual Design 34",
      description:
        "Ememelge 2021 Hot Summer : Rotary Graphic Summer Surffing Rabbit T-shirt 🌊🌊🌊🌊🌊🌊🏄",
    },
    {
      src: "./img/VisualDesign/35.gif",
      alt: "Visual Design 35",
      description: "Ememelge 2020S/S Part.01 : MM20186 44304 WEMANAGETOUR",
    },

    {
      src: "./img/VisualDesign/36.gif",
      alt: "Visual Design 36",
      description:
        "Ememelge 2020S/S Part.01 : MM20186 44304 WEMANAGETOUR Graphic Collage.",
    },
    {
      src: "./img/VisualDesign/37.gif",
      alt: "Visual Design 37",
      description:
        "Ememelge 2021S/S Season : Adobe Photoshop Compose Before 😯 & After 😵",
    },

    {
      src: "./img/VisualDesign/38.mp4",
      alt: "Visual Design 38",
      description:
        "Ememelge 2020S/S Season : Editorial “Ordinary Brothers” Editorial.",
    },
    {
      src: "./img/VisualDesign/39.gif",
      alt: "Visual Design 39",
      description:
        "Lolyloveloly 2022F/W Season : Graphic Design & Styling, Overall Directing",
    },
    {
      src: "./img/VisualDesign/40.png",
      alt: "Visual Design 40",
      description:
        "Lolyloveloly 2022 Hot Summer Season : Cupid Mesh T-shirt 2colors Beige & lime 👼💘",
    },
    {
      src: "./img/VisualDesign/41.gif",
      alt: "Visual Design 41",
      description: "Lolyloveloly 2021 F/W Season : Shooting Plan🤳💥📷📸",
    },
    {
      src: "./img/VisualDesign/42.gif",
      alt: "Visual Design 42",
      description: "Modeling 2023 Equipment 3D Modeling Design🔩🔩",
    },
    {
      src: "./img/VisualDesign/43.gif",
      alt: "Visual Design 43",
      description:
        "87MM Label Ones Service 2020 : 87MM lable ones service 🌐 tarpaulin bag and graphic tag design.",
    },
    {
      src: "./img/VisualDesign/44.png",
      alt: "Visual Design 44",
      description: "Lolyloveloly Logo : CI Logo Graphic Design 🧚❣❤🖤",
    },
  ];
  const headingComment = "Nan";
  const comment =
    "design page provides visual services. We are working on various works such as fashion    branding and 3D animation, and we pursue a trendy and fun way of working. If you want fresh and direction, please connect";

  const ganzi = "/VisualDesign/_순서";

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  return (
    <>
      <Ganzi ganzi={ganzi} />
      {loading ? null : (
        <section className="section_sub">
          {/* <Footer /> */}
          <Comment comment={comment} headingComment={headingComment} />
          <ArrayMap photos={photos} />
        </section>
      )}
    </>
  );
}
