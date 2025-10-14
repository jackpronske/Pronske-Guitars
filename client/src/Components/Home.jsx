import React from "react";
import RepeatSkeleton from "./Skeleton";

import "../Styles/Home.scss";

export default function Home() {
    return (
        <div className="body-container">
            <div className="body-section fade full-image">
                <div className="home-about-full-image">
                    <img src="/images/logo.png" alt='full image about' />
                </div>
            </div>
            <div className="body-section fade main">
                <div className="main-about-photo-container fade">
                    <div className="main-about-photo">
                        <img src="/images/Gerrit_with_guitar.jpg" alt='picture on main about' />
                    </div>
                </div>
                <div className="home-main-about-text-container fade">
                    <div className="home-main-about-text-title centered">Best of Show Award Recipient in the 2025 State Fair of Texas!</div>
                    <button className="home-form-button" onClick={() => window.open('https://creative.bigtex.com/sft-results/?gr=Designer+Craftsman&div=Designer+Craftsman%2C+Teachers+and+Professionals', '_blank')}>click here for more details</button>
                </div>

                <div className="main-about-photo-container fade">
                    <div className="main-about-photo">
                        <img src="/images/Gerrit_guitar.jpg" alt='picture on main about' />
                    </div>
                </div>
            </div>
        </div>
    );
}