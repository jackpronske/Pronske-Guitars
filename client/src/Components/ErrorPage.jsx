import React from "react";
import { Link } from "react-router-dom"

export default function ErrorPage() {
    return (
        <div style={{ padding: "2rem", color: "red" }}>
            <h1>404 – Not Found</h1>
            <p>Woah, I'm lost...</p>
            <Link to={"/"}>Take Me Home</Link>
        </div>
    );
}
