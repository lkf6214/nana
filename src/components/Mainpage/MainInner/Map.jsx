import React, { useState } from "react";
import "./Map.css";

const ArrayMapExample = () => {
  const photos = [
    {
      src: "./img/test4.png",
      alt: "Test 1",
      description: "A 360 Degree Turntable of Y2K Style Characters",
    },
    {
      src: "./img/test3.png",
      alt: "Test 2",
      description: "A Good Night's Sleep ·._.·°¯°·.·° .·°°",
    },

    {
      src: "./img/test.jpg",
      alt: "Test 2",
      description: "A 360 Degree Turntable of Y2K Style Characters",
    },
    {
      src: "./img/ping.gif",
      alt: "Test 1",
      description: "Happy Stories of Cute Animals",
    },
    {
      src: "./img/test.jpg",
      alt: "Test 1",
      description: "Image 1",
    },
    {
      src: "./img/test1.jpg",
      alt: "Test 2",
      description: "Image 2",
    },

    // ... (다른 이미지들)
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleCardClick = (index) => {
    setSelectedPhoto(index);
  };

  const handModalClose = () => {
    setSelectedPhoto(null);
  };

  const scrollElement = (event) => {
    // event.target: "현재 이벤트가 발생한 그 요소"
    if (event.nativeEvent.wheelDelta > 0) {
      // console.log("scroll up");
      // console.dir(event.target.closest(".scroll-container"));
      event.target.closest(".scroll-container").scrollLeft -= 30;
    } else {
      // console.log("scroll down");
      // console.dir(event.target.closest(".scroll-container"));
      event.target.closest(".scroll-container").scrollLeft += 30;
    }
  };

  return (
    <div className="container">
      <div
        className="scroll-container"
        onWheel={(event) => {
          if (event.nativeEvent.wheelDelta > 0) {
            // console.log("scroll up");
            // console.dir(event.target);
            event.target.scrollLeft -= 30;
          } else {
            // console.log("scroll down");
            // console.dir(event.target);
            event.target.scrollLeft += 30;
          }
        }}
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleCardClick(index)}
            onWheel={scrollElement}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="image"
              onWheel={scrollElement}
            />
            <p>{photo.description}</p>
          </div>
        ))}
      </div>

      {selectedPhoto !== null && (
        <div className="modal-overlay" onClick={handModalClose}>
          <div className="modal-content">
            <img
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].alt}
              className="modal-image"
            />
            <p style={{ textAlign: "center" }}>
              {photos[selectedPhoto].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArrayMapExample;
