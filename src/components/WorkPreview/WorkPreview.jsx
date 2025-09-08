import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import featuredWork from "../../data/featuredWorkData.js";
import "./WorkPreview.css";

export default function WorkPreview() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [displayedImages, setDisplayedImages] = useState(featuredWork);

    // Obtaining width of screen information
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (windowWidth >= 992) {
            setDisplayedImages(featuredWork)
        } else {
            setDisplayedImages(featuredWork.slice(0,8))
        }
    }, [windowWidth])

    return (
        <section id="work-preview" className="work-preview">
            <h2 className="work-preview__heading">Featured Work</h2>
            <div className="work-preview__grid">
                {displayedImages.map((image) => (
                    <div key={image.id} className="work-preview__img-card">
                        <img
                            className="work-preview__img"
                            loading="lazy"
                            src={image.img}
                            alt={`Picture of ${image.name}`}
                        />
                        <h3 className="work-preview__img-title">
                            {image.name}
                        </h3>
                    </div>
                ))}
            </div>
            <Link className="work-preview__link" to="/work">
                view all
            </Link>
        </section>
    );
}
