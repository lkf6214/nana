import React, { useState } from "react";
import "./MainSection.css";
// import Footer from "./Mainpage/Footer/Footer";
import Picture from "./MainInner/Picture";
import Sticker from "./MainInner/Sticker";
import ArrayMap from "./MainInner/ArrayMap";
import Comment from "../Comment";
// import Ganzi from "../../components/Ganzi";

// import ImageGallery from "./ImageGallery";
// import Gallery from "./Gallery";

export default function MainSections() {
  const photos = [
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/00.jpg",
      alt: "Illustration 00",
      description: "Step by step 🐱💭",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/01.jpg",
      alt: "Illustration 01",
      description: "Cute summer collection 🐬🐟🩵🫐🏝️",
    },

    {
      src: process.env.PUBLIC_URL + "/img/Illustration/02.jpeg",
      alt: "Illustration 02",
      description: "As it flows 🐶🐱🛶",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/03.jpg",
      alt: "Illustration 03",
      description: "Types of sleep 💭💭💭",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/04.jpg",
      alt: "Illustration 04",
      description: "Good day for a bike ride 🚲",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/05.jpg",
      alt: "Illustration 05",
      description: "Let's do yoga 🧘",
    },

    {
      src: process.env.PUBLIC_URL + "/img/Illustration/06.jpg",
      alt: "Illustration 06",
      description: "Summer girl 🩵",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/07.jpg",
      alt: "Illustration 07",
      description: "Cat day 🐱",
    },

    {
      src: process.env.PUBLIC_URL + "/img/Illustration/08.jpeg",
      alt: "Illustration 08",
      description: "Leisurely 🍵",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/09.jpeg",
      alt: "Illustration 09",
      description: "Cute stickers 🐶🐱🐰🐶🐱🐰🐶🐱🐰",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/10.jpeg",
      alt: "Illustration 10",
      description: "Tokyo shibuya girl ✌️",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/11.jpg",
      alt: "Illustration 11",
      description: "Literary walk 📖",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/12.jpg",
      alt: "Illustration 12",
      description: "Shaved ice season 🌬️",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/13.jpg",
      alt: "Illustration 13",
      description: "Sunset☀️",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/14.jpg",
      alt: "Illustration 14",
      description: "Shapes of thought █▲●",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/15.jpg",
      alt: "Illustration 15",
      description: "Melon bread girl 💚",
    },

    {
      src: process.env.PUBLIC_URL + "/img/Illustration/16.jpg",
      alt: "Illustration 16",
      description: "The clover girl and her rose 🍀🌹",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/17.png",
      alt: "Illustration 17",
      description: "A cozy day 😌",
    },

    {
      src: process.env.PUBLIC_URL + "/img/Illustration/18.jpg",
      alt: "Illustration 18",
      description: "Her ponytail 👱‍♀️ ",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/19.jpg",
      alt: "Illustration 19",
      description: "After school 🏫",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/20.png",
      alt: "Illustration 20",
      description: "My favorite singer Jiyoung Yoon 🩷💛🩵💜",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/21.jpg",
      alt: "Illustration 21",
      description: "Night of trouble 🌙",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/22.jpg",
      alt: "Illustration 22",
      description: "Giant shaved ice 🍧",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/23.jpg",
      alt: "Illustration 23",
      description: "Play Boys 🎮🎾🎮🎾",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/24.jpg",
      alt: "Illustration 24",
      description: "Happy day 🌼",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/25.jpg",
      alt: "Illustration 25",
      description: "In love ❤️‍🔥",
    },

    {
      src: process.env.PUBLIC_URL + "/img/Illustration/26.png",
      alt: "Illustration 26",
      description: "I want a big cat! 🐈",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/27.jpg",
      alt: "Illustration 27",
      description: "Daily ✨",
    },

    {
      src: process.env.PUBLIC_URL + "/img/Illustration/28.jpg",
      alt: "Illustration 28",
      description: "Iridescent 💿",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/29.jpg",
      alt: "Illustration 29",
      description: "A Good Night's Sleep 😪💤",
    },
    {
      src: process.env.PUBLIC_URL + "/img/Illustration/30.jpg",
      alt: "Illustration 30",
      description: "Nike boy 👟",
    },
  ];
  const fixCommentHeaderFont = "illustration";
  const headingComment = "Nan";
  const comment =
    "illustration page provides art services. It covers various fields such as (illustrations, posters and characters). We want to convey emotions and stories through expressiveness. I hope it will be a illustration that can add great value to your project.";

  const ganzi = "ganzi";

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  return (
    <>
      {/* <Ganzi ganzi={ganzi} /> */}

      {loading ? null : (
        <section>
          <Comment
            comment={comment}
            headingComment={headingComment}
            fixCommentHeaderFont={fixCommentHeaderFont}
          />
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
