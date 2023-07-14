import React from "react";
import "./MainSection.css";
// import Footer from "./Mainpage/Footer/Footer";
import Picture from "./MainInner/Picture";
import Sticker from "./MainInner/Sticker";
import Map from "./MainInner/Map";

// import ImageGallery from "./ImageGallery";
// import Gallery from "./Gallery";

export default function MainSections() {
  const Comment =
    "  ipsum dolor sit amet consectetur adipisicing elit. Ea deleniti voluptas sequi. Accusantium pariatur est dolores eligendi repellat id expedita fugit aspernatur? At ipsum enim eum architecto pariatur quasiste?";
  return (
    <>
      <section>
        <div className="fixComment">
          <span className="fixComment_header">Nan </span>
          {Comment}
        </div>
        <Map />

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
    </>
  );
}
