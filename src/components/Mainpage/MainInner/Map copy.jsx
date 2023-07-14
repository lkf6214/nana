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

  return (
    <div className="container">
      <div className="scroll-container">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleCardClick(index)}
          >
            <img src={photo.src} alt={photo.alt} className="image" />
            <p>{photo.description}</p>
          </div>
        ))}
      </div>

      {selectedPhoto !== null && (
        <div className="modal-overlay" onClick={handModalClose}>
          <div className="modal-content">
            <div className="modal-content-images">
              <img
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].alt}
                className="modal-image"
              />
              <img
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].alt}
                className="modal-image"
              />
            </div>

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
