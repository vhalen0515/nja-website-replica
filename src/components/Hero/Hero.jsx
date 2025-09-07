// import { useEffect } from "react";

// import "./Hero.css";

// export default function Hero({
//     backgroundImage = "",
//     arrowHref = "#work-preview",
//     isHomePage = false,
// }) {
//     // Preload the hero image
//     useEffect(() => {
//         if (backgroundImage) {
//             const img = new Image();
//             img.src = backgroundImage;
//         }
//     }, [backgroundImage]);

//     return (
//         <section
//             className={`hero ${isHomePage ? "hero--home" : ""}`}
//             style={{ backgroundImage: `url(${backgroundImage})` }}
//         >
//             <a href={arrowHref} aria-label="Scroll to next section">
//                 <div className="hero__arrow-container">
//                     <svg
//                         className="hero__arrow-icon"
//                         viewBox="0 0 30 16"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="M15.8232 15.6624L29.6607 1.95962C30.1139 1.51067 30.1131 0.783795 29.6584 0.33559C29.2038 -0.112267 28.4673 -0.111109 28.0139 0.337905L14.9999 13.2251L1.98609 0.337441C1.53257 -0.111516 0.796579 -0.112673 0.341894 0.335126C0.113966 0.559807 -3.64288e-08 0.854155 -4.89824e-08 1.1485C-6.15039e-08 1.4421 0.113203 1.73529 0.33955 1.95956L14.1767 15.6624C14.3946 15.8787 14.691 16 14.9999 16C15.3088 16 15.605 15.8783 15.8232 15.6624Z" />
//                     </svg>
//                 </div>
//             </a>
//         </section>
//     );
// }

import { useEffect } from "react";

import "./Hero.css";

export default function Hero({
    backgroundImage = "",
    scrollTargetId = "work-preview",
    isHomePage = false,
}) {
    // Preload the hero image
    useEffect(() => {
        if (backgroundImage) {
            const img = new Image();
            img.src = backgroundImage;
        }
    }, [backgroundImage]);

    const handleScroll = (e) => {
        e.preventDefault(); // Prevent default link behavior
        const section = document.getElementById(scrollTargetId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            className={`hero ${isHomePage ? "hero--home" : ""}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <a
                href="#!"
                onClick={handleScroll}
                aria-label="Scroll to next section"
            >
                <div className="hero__arrow-container">
                    <svg
                        className="hero__arrow-icon"
                        viewBox="0 0 30 16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M15.8232 15.6624L29.6607 1.95962C30.1139 1.51067 30.1131 0.783795 29.6584 0.33559C29.2038 -0.112267 28.4673 -0.111109 28.0139 0.337905L14.9999 13.2251L1.98609 0.337441C1.53257 -0.111516 0.796579 -0.112673 0.341894 0.335126C0.113966 0.559807 -3.64288e-08 0.854155 -4.89824e-08 1.1485C-6.15039e-08 1.4421 0.113203 1.73529 0.33955 1.95956L14.1767 15.6624C14.3946 15.8787 14.691 16 14.9999 16C15.3088 16 15.605 15.8783 15.8232 15.6624Z" />
                    </svg>
                </div>
            </a>
        </section>
    );
}
