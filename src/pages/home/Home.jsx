import Hero from "../../components/Hero/Hero.jsx";
import WorkPreview from "../../components/WorkPreview/WorkPreview.jsx";
import AboutPreview from "../../components/AboutPreview/AboutPreview.jsx";

import homeHeroImage from "../../assets/images/road-and-highway.jpeg";

import "./home.css";

export default function Home() {
    return (
        <>
            <Hero backgroundImage={homeHeroImage} arrowHref="#work-preview" isHomePage={true} />
            <WorkPreview />
            <AboutPreview />
        </>
    );
}
