import React, { useEffect } from "react";

import "../Styles/AboutUs.scss";

export default function AboutUs() {

  useEffect(() => {
    const scroll = (id) => {
      const section = document.querySelector(`#${id}`);
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (window.location.href.split('#').length === 2) {
      scroll(window.location.href.split('#')[1]);
    }
  }, []);

  return (
    <div className="body-container">
      <div className="body-section fade full-image">
        <div className="about-full-image">
          <img src="/images/photoshoot/pg-12-large.jpg" alt='full image about' />
          <div className="overlay-text">Family owned. Family run.<br /> Handcrafted, quality instruments.</div>
        </div>
      </div>
      <div className="body-section fade cta">
        <div className="about-cta fade">Where music meets craftsmanship, every guitar is a work of art.</div>
      </div>
      <div id="charity" className="body-section fade main">
        <div className="main-about-text-container fade">
          <div className="main-about-text-title">About the luthier:</div>
          <div className="main-about-text-subtext">After more than five decades as a classically trained pianist performing with twelve symphony orchestras including the Fort Worth Symphony, Gerrit Pronske turned his lifelong devotion to music toward a new medium: the Acoustic Guitar.</div>
          <div className="main-about-text-subtext">When changes in hearing made the piano less enjoyable, he discovered that the guitar still carried the warmth and nuance of tone he loved. What began as a new passion quickly evolved into a meticulous craft. Under the guidance of a master luthier who favored traditional hand tools over modern machinery, Gerrit immersed himself in the art and discipline of guitar making.</div>
          <div className="main-about-text-subtext">In 2025, he founded Pronske Guitar Co., Ltd., establishing his workshop in Carrollton, Texas. Since then, he has built more than twenty custom acoustic guitars entirely from scratch, each crafted from rare, hand-selected tonewoods and designed to deliver exceptional sound, resonance, and playability.</div>
          <div className="main-about-text-subtext">Gerrits dedication to precision, artistry, and musical integrity recently earned him top honors at the 2025 Texas State Fair, where he won not only 1st Place in the woodworking category and Best of Show among over 1,100 crafts categories.</div>
          <div className="main-about-text-subtext">Gerrit currently resides in Plano, TX, with his wife and two Dachshunds.</div>
        </div>

        <div className="main-about-photo-container fade">
          <div className="main-about-photo">
            <img src="/images/Gerrit_Working.jpg" alt='picture on main about' />
          </div>
        </div>
      </div>
    </div>
  );
}