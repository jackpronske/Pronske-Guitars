import React, { useState, useEffect } from "react";

import "../Styles/Media.scss";

export default function Media() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = Array.from({ length: 18 }, (_, i) => ({
    src: `/images/photoshoot/pg-${i}-medium.jpg`,
    alt: `Pronske Guitars Photoshoot - ${i}`,
    srcSet: `/images/photoshoot/pg-${i}-thumb.jpg 400w,/images/photoshoot/pg-${i}-medium.jpg 1000w,/images/photoshoot/pg-${i}-large.jpg 1800w`,
    sizes: "(max-width: 768px) 50vw, 25vw"
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
          <div className="media-modal-content" onClick={(e) => e.stopPropagation()}>
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