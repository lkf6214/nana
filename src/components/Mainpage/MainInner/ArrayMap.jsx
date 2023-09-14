import React, { useState } from "react";
import "./Map.css";

const ArrayMap = ({ photos, descriptionColor = "black" }) => {
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
            {/* img onWheel={scrollElement} 소스 확인 필요 */}

            {photo.src.indexOf(".mp4") <= -1 ? (
              <img
                src={photo.src}
                alt={photo.alt}
                className="image"
                // onWheel={scrollElement}
              />
            ) : (
              <video width={"500px"} loop muted autoPlay className="image">
                <source src={photo.src} type="video/mp4"></source>
              </video>
            )}

            <p className={`${descriptionColor}`}>
              {photo.description.split(":").map((v, i) => {
                if (i === 0)
                  return (
                    <>
                      {v}:<br />
                    </>
                  );
                else return v;
              })}
            </p>
          </div>
        ))}
      </div>

      {selectedPhoto !== null && (
        <div className="modal-overlay" onClick={handModalClose}>
          <div className="modal-content">
            {photos[selectedPhoto].src.indexOf(".mp4") <= -1 ? (
              <img
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].alt}
                className="modal-image"
                // onWheel={scrollElement}
              />
            ) : (
              <video
                width={"500px"}
                loop
                autoPlay
                // className="modal-image"
              >
                <source
                  src={photos[selectedPhoto].src}
                  type="video/mp4"
                ></source>
              </video>
            )}

            {/* <img
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].alt}
              className="modal-image"
            /> */}
            <p
              className={`${descriptionColor}`}
              style={{ textAlign: "center" }}
            >
              {photos[selectedPhoto].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArrayMap;
