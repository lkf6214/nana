import React, { useState } from "react";

const HomePage = () => {
  const imageList = Array.from({ length: 30 }, (_, index) => ({
    id: index,
    src: `image${index}.jpg`,
    title: `Image ${index}`,
    subtitle: `Subtitle ${index}`,
  }));

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  const handleNextImage = () => {
    const currentIndex = imageList.findIndex(
      (image) => image.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % imageList.length;
    setSelectedImage(imageList[nextIndex]);
  };

  const handlePreviousImage = () => {
    const currentIndex = imageList.findIndex(
      (image) => image.id === selectedImage.id
    );
    const previousIndex =
      (currentIndex - 1 + imageList.length) % imageList.length;
    setSelectedImage(imageList[previousIndex]);
  };

  return (
    <div className="image-gallery-container">
      <div className="image-gallery">
        {imageList.map((image) => (
          <div
            className="image-card"
            key={image.id}
            onClick={() => handleImageClick(image)}
          >
            <img src={image.src} alt={image.title} />
            <div className="image-card-content">
              <h3>{image.title}</h3>
              <p
                className={
                  image.subtitle.includes("Subtitle") ? "animated" : ""
                }
              >
                {image.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <img src={selectedImage.src} alt={selectedImage.title} />
            <button className="modal-close" onClick={handleModalClose}>
              Close
            </button>
            <button className="modal-next" onClick={handleNextImage}>
              Next
            </button>
            <button className="modal-previous" onClick={handlePreviousImage}>
              Previous
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
