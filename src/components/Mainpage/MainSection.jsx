import React, { useState } from "react";
import "./MainSection.css";
// import Footer from "./Mainpage/Footer/Footer";
import Picture from "./MainInner/Picture";
import Sticker from "./MainInner/Sticker";
import ArrayMap from "./MainInner/ArrayMap";
import Comment from "../Comment";
import Ganzi from "../../components/Ganzi";

// import ImageGallery from "./ImageGallery";
// import Gallery from "./Gallery";

export default function MainSections() {
  const photos = [
    {
      src: "./img/Illustration/00.jpg",
      alt: "Illustration 00",
      description: "Step by step 🐱💭",
    },
    {
      src: "./img/Illustration/01.jpg",
      alt: "Illustration 01",
      description: "Cute summer collection 🐬🐟🩵🫐🏝️",
    },

    {
      src: "./img/Illustration/02.jpeg",
      alt: "Illustration 02",
      description: "As it flows 🐶🐱🛶",
    },
    {
      src: "./img/Illustration/03.jpg",
      alt: "Illustration 03",
      description: "Types of sleep 💭💭💭",
    },
    {
      src: "./img/Illustration/04.jpg",
      alt: "Illustration 04",
      description: "Good day for a bike ride 🚲",
    },
    {
      src: "./img/Illustration/05.jpg",
      alt: "Illustration 05",
      description: "Let's do yoga 🧘",
    },

    {
      src: "./img/Illustration/06.jpg",
      alt: "Illustration 06",
      description: "Summer girl 🩵",
    },
    {
      src: "./img/Illustration/07.jpg",
      alt: "Illustration 07",
      description: "Cat day 🐱",
    },

    {
      src: "./img/Illustration/08.jpeg",
      alt: "Illustration 08",
      description: "Leisurely 🍵",
    },
    {
      src: "./img/Illustration/09.jpeg",
      alt: "Illustration 09",
      description: "Cute stickers 🐶🐱🐰🐶🐱🐰🐶🐱🐰",
    },
    {
      src: "./img/Illustration/10.jpeg",
      alt: "Illustration 10",
      description: "Tokyo shibuya girl ✌️",
    },
    {
      src: "./img/Illustration/11.jpg",
      alt: "Illustration 11",
      description: "Literary walk 📖",
    },
    {
      src: "./img/Illustration/12.jpg",
      alt: "Illustration 12",
      description: "Shaved ice season 🌬️",
    },
    {
      src: "./img/Illustration/13.jpg",
      alt: "Illustration 13",
      description: "Sunset☀️",
    },
    {
      src: "./img/Illustration/14.jpg",
      alt: "Illustration 14",
      description: "Shapes of thought █▲●",
    },
    {
      src: "./img/Illustration/15.jpg",
      alt: "Illustration 15",
      description: "Melon bread girl 💚",
    },

    {
      src: "./img/Illustration/16.jpg",
      alt: "Illustration 16",
      description: "The clover girl and her rose 🍀🌹",
    },
    {
      src: "./img/Illustration/17.png",
      alt: "Illustration 17",
      description: "A cozy day 😌",
    },

    {
      src: "./img/Illustration/18.jpg",
      alt: "Illustration 18",
      description: "Her ponytail 👱‍♀️ ",
    },
    {
      src: "./img/Illustration/19.jpg",
      alt: "Illustration 19",
      description: "After school 🏫",
    },
    {
      src: "./img/Illustration/20.png",
      alt: "Illustration 20",
      description: "My favorite singer Jiyoung Yoon 🩷💛🩵💜",
    },
    {
      src: "./img/Illustration/21.jpg",
      alt: "Illustration 21",
      description: "Night of trouble 🌙",
    },
    {
      src: "./img/Illustration/22.jpg",
      alt: "Illustration 22",
      description: "Giant shaved ice 🍧",
    },
    {
      src: "./img/Illustration/23.jpg",
      alt: "Illustration 23",
      description: "Play Boys 🎮🎾🎮🎾",
    },
    {
      src: "./img/Illustration/24.jpg",
      alt: "Illustration 24",
      description: "Happy day 🌼",
    },
    {
      src: "./img/Illustration/25.jpg",
      alt: "Illustration 25",
      description: "In love ❤️‍🔥",
    },

    {
      src: "./img/Illustration/26.png",
      alt: "Illustration 26",
      description: "I want a big cat! 🐈",
    },
    {
      src: "./img/Illustration/27.jpg",
      alt: "Illustration 27",
      description: "Daily ✨",
    },

    {
      src: "./img/Illustration/28.jpg",
      alt: "Illustration 28",
      description: "Iridescent 💿",
    },
    {
      src: "./img/Illustration/29.jpg",
      alt: "Illustration 29",
      description: "A Good Night's Sleep 😪💤",
    },
    {
      src: "./img/Illustration/30.jpg",
      alt: "Illustration 30",
      description: "Nike boy 👟",
    },
  ];

  const headingComment = "Nan";
  const comment =
    "illustration page provides art services. It covers various fields such as (illustrations, posters and characters). We want to convey emotions and stories through expressiveness. I hope it will be a illustration that can add great value to your project.";

  const ganzi = "/Illustration/_순서";

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  return (
    <>
      <Ganzi ganzi={ganzi} />

      {loading ? null : (
        <section>
          <Comment comment={comment} headingComment={headingComment} />
          <ArrayMap photos={photos} />

          {/* <Picture /> */}
          {/* <Sticker /> */}

          {/* <div> main section > div > test</div> */}
          {/* main png스티커
        <div className="gallery_card">
          <img src="../img/image.png" alt="cat" className="gallery_image " />
          <img src="../img/image.png" alt="cat" className="gallery_image " />
          <img src="../img/image.png" alt="cat" className="gallery_image " />
          <img src="../img/image2.png" alt="cat" className="gallery_image " />
          <img src="../img/image2.png" alt="cat" className="gallery_image " />
        </div>

        bottom 고정 span
        <span className="main_img">
          <img
            src="../img/image2.png"
            alt="cat"
            className="gallery_image_span "
          />
        </span> */}

          {/* <Gallery /> */}

          {/* <ImageGallery /> */}
          {/* <Footer /> */}
        </section>
      )}
    </>
  );
}
