import React from "react";

import "../Styles/AboutUs.scss";

export default function AboutUs() {
  return (
    <div className="body-container">
      <div className="body-section main">
        <div className="main-about-text-container">
          <div className="main-about-text-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div className="main-about-text-subtext">Vivamus egestas ante vitae ultrices maximus. Praesent efficitur finibus ullamcorper. Etiam sit amet nisi aliquam ante mattis vulputate. Sed cursus ullamcorper tortor vel fermentum. Sed eget diam varius, laoreet arcu in, ullamcorper libero. Fusce congue nisl ac arcu faucibus dictum. Aenean vestibulum neque accumsan mi lobortis iaculis. Curabitur orci sapien, laoreet at nisi vel, pretium finibus mauris.</div>
        </div>
        <div className="main-about-photo-container">
          <div className="main-about-photo">
            <img src={'https://picsum.photos/seed/10/1000/700'} alt='picture on main about' />
          </div>
        </div>
      </div>
      <div className="body-section cta">
        <div className="about-cta">Proin sed mi ex. Proin nec eleifend nibh. Nunc lobortis semper lorem, vel luctus lectus tincidunt non.</div>
      </div>
      <div className="body-section full-image">
        <div className="about-full-image">
          <img src={'https://picsum.photos/seed/1/1500/1200'} alt='full image about' />
          <div className="overlay-text">Family owned. Family run.<br /> Handcrafted, quality instruments.</div>
        </div>
      </div>
    </div>
  );
}