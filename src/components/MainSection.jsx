import React from "react";
import MainSection from "../css/MainSection.css";
// import Footer from "./Footer";
// import ImageGallery from "./ImageGallery";
// import Gallery from "./Gallery";

export default function MainSections() {
  return (
    <>
      <section>
        <div className="fixComment">
          <span className="fixComment_header">Nan </span>
          ipsum dolor sit amet consectetur adipisicing elit. Ea deleniti
          voluptas sequi. Accusantium pariatur est dolores eligendi repellat id
          expedita fugit aspernatur? At ipsum enim eum architecto pariatur quas
          iste?
        </div>
        <div className="gallery_card">
          <img src="../img/image.png" alt="cat" className="gallery_image " />
          <img src="../img/image.png" alt="cat" className="gallery_image " />
          <img src="../img/image.png" alt="cat" className="gallery_image " />
          <img src="../img/image2.png" alt="cat" className="gallery_image " />
          <img src="../img/image2.png" alt="cat" className="gallery_image " />
        </div>

        <span className="main_img">
          <img
            src="../img/image2.png"
            alt="cat"
            className="gallery_image_span "
          />
        </span>
        {/* <Gallery /> */}

        {/* <ImageGallery /> */}
        {/* <Footer /> */}
      </section>
    </>
  );
}
