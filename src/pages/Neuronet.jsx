import React, { useState } from "react";
import ArrayMap from "../components/Mainpage/MainInner/ArrayMap";
import Comment from "../components/Comment";
import Ganzi from "../components/Ganzi";

export default function Neuronet() {
  const photos = [
    {
      src: "./img/Neuronet/00.gif",
      alt: "Neuronet 00",
      description: "Personal Work : Welcome Home 🏠",
    },
    {
      src: "./img/Neuronet/01.gif",
      alt: "Neuronet 01",
      description: "Hyundai Kona 2023 : Fairies🧚,Butterflies🦋 and Kona🚗",
    },

    {
      src: "./img/Neuronet/02.png",
      alt: "Neuronet 02",
      description: "Personal Work : Fashion Character Drawing Style Ver.01 🌌",
    },
    {
      src: "./img/Neuronet/03.mp4",
      alt: "Neuronet 03",
      description: "Personal Work : BOOOOOOOOOOOOM💣💥💥💥💥💥💥💥💥💥💥💥💥",
    },
    {
      src: "./img/Neuronet/04.mp4",
      alt: "Neuronet 04",
      description: "Personal Work : On The Way Home From Work In The Rain 🌧",
    },
    {
      src: "./img/Neuronet/05.gif",
      alt: "Neuronet 05",
      description:
        "Hyundai 2023 : H-art Crew Activities : Hyundai Motor Company 3D “Logo” Effect 🚗💨💨💨💨💨",
    },
    {
      src: "./img/Neuronet/06.gif",
      alt: "Neuronet 06",
      description:
        "Hyundai Kona 2023 : H-art Crew Activities : Kona and Friends ✌",
    },
    {
      src: "./img/Neuronet/07.gif",
      alt: "Neuronet 07",
      description: "Foundation : 𝓃𝕖υᖇ𝓸ⓝᵉ𝓣ൠ*ੈ✩‧ NFT PROJECT",
    },
    {
      src: "./img/Neuronet/08.mp4",
      alt: "Neuronet 08",
      description: "Foundation : Neuronet Project Teaser ⚡",
    },
    {
      src: "./img/Neuronet/09.gif",
      alt: "Neuronet 09",
      description: "Foundation : ID CARD Sries 💳",
    },
    {
      src: "./img/Neuronet/10.mp4",
      alt: "Neuronet 10",
      description: "Personal Work : Happy Halloween ! 🎃🎃🎃🎃🎃",
    },
    {
      src: "./img/Neuronet/11.png",
      alt: "Neuronet 11",
      description:
        "Personal Work : Fashion Character Drawing Style Ver.02 💚💙",
    },
    {
      src: "./img/Neuronet/12.gif",
      alt: "Neuronet 12",
      description: "Personal Work : Star Kirby MP4 3D Simulation💿🧚",
    },

    {
      src: "./img/Neuronet/13.gif",
      alt: "Neuronet 13",
      description: "Personal Work : A 360 Turntable Characters 🕳",
    },
    {
      src: "./img/Neuronet/14.png",
      alt: "Neuronet 14",
      description:
        "Personal Work : Fashion Character Drawing Style Ver.03 🧡💛",
    },
    {
      src: "./img/Neuronet/15.mp4",
      alt: "Neuronet 15",
      description: "Personal Work : (((o(・ω・o) (o・ω・)o)))",
    },
    {
      src: "./img/Neuronet/16.mp4",
      alt: "Neuronet 16",
      description:
        "Hyundai Motors Digital Art Contest : Freedom Of Movement 💫",
    },
    {
      src: "./img/Neuronet/17.png",
      alt: "Neuronet 17",
      description:
        "Personal Work : Fashion Character Drawing Style Ver.04 💜🤎",
    },
    {
      src: "./img/Neuronet/18.gif",
      alt: "Neuronet 18",
      description: "Personal Work : Graffiti Artwork🧱",
    },
    {
      src: "./img/Neuronet/19.gif",
      alt: "Neuronet 19",
      description:
        "Personal Work : A 360 Degree Turntable of Y2K Style Characters🔫🔫🔫",
    },
  ];
  const headingComment = "Neuronet";
  const comment =
    "design page provides visual services. We are working on various works such as fashion branding and 3D animation, and we pursue a trendy and fun way of working. If you want fresh and direction, please connect";

  const ganzi = "/Neuronet/_순서";

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  return (
    <>
      <Ganzi ganzi={ganzi} />

      {loading ? null : (
        <section className="section_neuronet ">
          <Comment
            color="white"
            comment={comment}
            headingComment={headingComment}
          />
          <ArrayMap photos={photos} descriptionColor="white" />
          <div className="universe-container">
            <video className="universe" loop muted autoPlay>
              <source
                src={process.env.PUBLIC_URL + "/img/Neuronet/Neuronet_bg.mp4"}
                type="video/mp4"
              ></source>
            </video>
          </div>
        </section>
      )}
    </>
  );
}
