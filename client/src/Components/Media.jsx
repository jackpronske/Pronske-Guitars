import React, { useState, useEffect } from "react";

import "../Styles/Media.scss";

export default function Media() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = Array.from({ length: 30 }, (_, i) => ({
    src: `https://picsum.photos/seed/${i}/1000/700`,
    alt: `Random ${i}`,
  }));

  const handleClick = (index) => setSelectedIndex(index);
  const handleClose = () => setSelectedIndex(null);
  const handlePrev = () => setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () => setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      else if (e.key === "ArrowRight") handleNext();
      else if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <div>MEDIA COMPONENT</div>
      <div className="media-container">
        <div className="gallery-container">
          {images.map((img, i) => (
            <div className="gallery-image" key={i} onClick={() => handleClick(i)}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClose}>✕</button>
            <button className="nav-button prev" onClick={handlePrev}>←</button>
            <img src={images[selectedIndex].src} alt={images[selectedIndex].alt} />
            <button className="nav-button next" onClick={handleNext}>→</button>
          </div>
        </div>
      )}
    </>
  );
}