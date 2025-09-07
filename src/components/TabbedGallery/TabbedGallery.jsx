import { useState } from "react";

import workGallery from "../../data/workGallery.js";
import "./TabbedGallery.css";

export default function TabbedGallery() {
    const [activeTab, setActiveTab] = useState("all");

    // const categories = workGallery.map((cat) => {
    //     console.log(cat.category);
    //     return cat.category;
    // });

    // const specialCategory = "serve";

    const categories = [
        "all",
        ...new Set(
            workGallery.flatMap((item) =>
                Array.isArray(item.category) ? item.category : [item.category]
            )
        ),
    ];

    // const filteredImages =
    //     activeTab === "all"
    //         ? workGallery
    //         : workGallery.filter((item) => item.category === activeTab);

    const filteredImages =
        activeTab === "all"
            ? workGallery
            : workGallery.filter((item) =>
                  Array.isArray(item.category)
                      ? item.category.includes(activeTab)
                      : item.category === activeTab
              );

    return (
        <section className="work__gallery">
            {/* Tabs */}
            <div className="work__tabs">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`work__tab ${
                            activeTab === cat ? "active" : ""
                        }`}
                        onClick={() => setActiveTab(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            {/* Gallery */}
            <div className="work__gallery-grid">
                {filteredImages.map((img) => (
                    <div key={img.id} className="work__img-card">
                        <img src={img.image} alt={img.alt} />
                        <h3 className="work__img-title">{img.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
