import React from 'react';
import { FaInstagram, FaFacebook, FaSoundcloud, FaYoutube } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

export default function SocialIcons() {
  return (
    <div className="social-icons-container">
      <a className="social-icon" href="https://www.instagram.com/pronskeguitars/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a className="social-icon" href="https://www.facebook.com/profile.php?id=61577808838248" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a className="social-icon" href="https://bsky.app/profile/pronskeguitars.bsky.social" target="_blank" rel="noopener noreferrer">
        <FaBluesky />
      </a>
      {/* <a className="social-icon" href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
        <FaSoundcloud />
      </a> */}
      <a className="social-icon" href="https://www.youtube.com/@PronskeGuitars" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
    </div>
  );
};