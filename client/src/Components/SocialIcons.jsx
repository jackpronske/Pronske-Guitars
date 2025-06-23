import React from 'react';
import { FaInstagram, FaFacebook, FaSoundcloud, FaYoutube } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

export default function SocialIcons() {
  return (
    <div className="social-icons-container">
      <a className="social-icon" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a className="social-icon" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a className="social-icon" href="https://bsky.app/" target="_blank" rel="noopener noreferrer">
        <FaBluesky />
      </a>
      <a className="social-icon" href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
        <FaSoundcloud />
      </a>
      <a className="social-icon" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
    </div>
  );
};