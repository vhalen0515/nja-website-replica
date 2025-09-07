import "./AboutPreview.css";

export default function AboutPreview() {
    return (
        <section className="about-preview">
            <h2 className="about-preview__heading">About Us</h2>
            <div className="about-preview__img-container">
                <div className="about-preview__text-container">
                    <p className="about-preview__text">
                        Our firm is made up of talented individuals who are
                        dedicated to the pursuit of architecture. They are
                        passionate about design, committed to thorough project
                        management, and appreciate an attention to detail. We
                        value the collective experience of our people and
                        recognize how much they contribute to helping our
                        clients realize their architectural dreams and
                        aspirations.
                    </p>
                </div>
            </div>
        </section>
    );
}
