import Hero from "../../components/Hero/Hero";
import TabbedGallery from "../../components/TabbedGallery/TabbedGallery";
import workHeroImage from "../../assets/images/work-hero-image.jpeg";

import "./work.css";

export default function Work() {
    return (
        <section className="work">
            <Hero backgroundImage={workHeroImage} arrowHref="#work__gallery" />
            <div id="work__gallery" className="work__gallery-wrapper">
                <TabbedGallery />
            </div>
        </section>
    );
}
