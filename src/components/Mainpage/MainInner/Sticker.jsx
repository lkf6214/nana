import React from "react";
import "./Sticker.css";

export default function Sticker() {
  return (
    <>
      <p>main png스티커</p>

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
    </>
  );
}
