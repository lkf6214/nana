import React, { useState } from "react";
import ArrayMap from "../components/Mainpage/MainInner/ArrayMap";
import Comment from "../components/Comment";
import Ganzi from "../components/Ganzi";

export default function Neuronet() {
  const photos = [
    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/00_수정.gif",
      alt: "Neuronet 00",
      description: "Personal Work : Welcome Home 🏠",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/01.gif",
      alt: "Neuronet 01",
      description: "Hyundai Kona 2023 : Fairies🧚,Butterflies🦋 and Kona🚗",
    },

    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/02.png",
      alt: "Neuronet 02",
      description: "Personal Work : Fashion Character Drawing Style Ver.01 🌌",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/03.mp4",
      alt: "Neuronet 03",
      description: "Personal Work : BOOOOOOOOOOOOM💣💥💥💥💥💥💥💥💥💥💥💥💥",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/04_수정.mp4",
      // src: "https://lkf6214.github.io/nana/img/Neuronet/04.mp4",
      alt: "Neuronet 04",
      description: "Personal Work : On The Way Home From Work In The Rain 🌧",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/05.gif",
      alt: "Neuronet 05",
      description:
        "Hyundai 2023 : H-art Crew Activities : Hyundai Motor Company 3D “Logo” Effect 🚗💨💨💨💨💨",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/06.gif",
      alt: "Neuronet 06",
      description:
        "Hyundai Kona 2023 : H-art Crew Activities : Kona and Friends ✌",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/07.gif",
      alt: "Neuronet 07",
      description: "Foundation : 𝓃𝕖υᖇ𝓸ⓝᵉ𝓣ൠ*ੈ✩‧ NFT PROJECT",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/08.mp4",
      alt: "Neuronet 08",
      description: "Foundation : Neuronet Project Teaser ⚡",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/09_다음추가.gif",
      alt: "Neuronet 20",
      description: "Personal Work : Brand For Bitches Company Butterfly Bag 🦋",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/09.gif",
      alt: "Neuronet 09",
      description: "Foundation : ID CARD Sries 💳",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/10_수정.mp4",
      alt: "Neuronet 10",
      description: "Personal Work : Happy Halloween ! 🎃🎃🎃🎃🎃",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/11_수정.png",
      alt: "Neuronet 11",
      description:
        "Personal Work : Fashion Character Drawing Style Ver.02 💚💙",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/12_수정.gif",
      alt: "Neuronet 12",
      description: "Personal Work : Star Kirby MP4 3D Simulation💿🧚",
    },

    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/13.gif",
      alt: "Neuronet 13",
      description: "Personal Work : A 360 Turntable Characters 🕳",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/14_수정.png",
      alt: "Neuronet 14",
      description:
        "Personal Work : Fashion Character Drawing Style Ver.03 🧡💛",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/15_수정.MP4",
      // src: process.env.PUBLIC_URL + "/img/Neuronet/15.mp4",
      alt: "Neuronet 15",
      description: "Personal Work : (((o(・ω・o) (o・ω・)o)))",
    },
    {
      // src: process.env.PUBLIC_URL + "/img/Neuronet/16.mp4",
      src: process.env.PUBLIC_URL + "/img/Neuronet/16_수정.MP4",
      alt: "Neuronet 16",
      description:
        "Hyundai Motors Digital Art Contest : Freedom Of Movement 💫",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/17.png",
      alt: "Neuronet 17",
      description:
        "Personal Work : Fashion Character Drawing Style Ver.04 💜🤎",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/18.gif",
      alt: "Neuronet 18",
      description: "Personal Work : Graffiti Artwork🧱",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Neuronet/19.gif",
      alt: "Neuronet 19",
      description:
        "Personal Work : A 360 Degree Turntable of Y2K Style Characters🔫🔫🔫",
    },
  ];
  const headingComment = "Neuronet";
  const comment =
    "design page provides visual services. We are working on various works such as fashion branding and 3D animation, and we pursue a trendy and fun way of working. If you want fresh and direction, please connect";

  const ganzi = "ganzi";

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
            <video className="universe" loop muted autoPlay playsInline>
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
