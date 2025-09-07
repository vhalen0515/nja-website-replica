import Hero from "../../components/Hero/Hero";
import aboutHeroImage from "../../assets/images/about-us-hero.jpeg";

import cultureImage1 from "../../assets/images/culture.jpeg";
import aboutPoster from "../../assets/images/about-poster.jpeg";
import aboutPoster2 from "../../assets/images/about-poster-2.jpeg";
import aboutProcess from "../../assets/images/about-process.jpeg";
import aboutProcess2 from "../../assets/images/about-process-2.jpeg";
import aboutProcess3 from "../../assets/images/about-process-3.jpeg";
import principalsJac from "../../assets/images/principals-jac.jpeg";
import principalsNick from "../../assets/images/principals-nick.jpeg";
import principalsJohn from "../../assets/images/principals-john.jpeg";

import "./about.css";

export default function About() {
    return (
        <section className="about">
            <Hero
                backgroundImage={aboutHeroImage}
                scrollTargetId="about__firm-bio"
            />
            <div id="about__firm-bio" className="about__firm-bio">
                <div className="about__bio-text">
                    <h2>Firm Bio</h2>
                    <p>
                        NJA strives to design spaces uniquely defined by a sense
                        of place and purpose, where each project is shaped by
                        its site context, the client’s values, and the local
                        community. The firm aims to enhance users’ connection to
                        their surroundings—whether through the built or natural
                        environment—by emphasizing attention to detail and
                        craftsmanship. This allows us to create spaces that are
                        both memorable and inviting.
                    </p>
                    <p>
                        At NJA, sustainability is integrated early in the design
                        process. We are continually seeking ways to decrease the
                        consumption of non-renewable resources, reduce waste,
                        and build healthy, productive environments. Achieving
                        sustainability goals requires careful consideration of
                        factors such as material selection, energy efficiency,
                        and the long-term impact of design decisions.
                    </p>
                    <p>
                        ‍Our expertise also extends to the design of
                        pre-engineered metal buildings, which offer significant
                        advantages, including cost savings, faster construction
                        timelines, and flexible design options tailored to
                        diverse project needs.
                    </p>
                    <p>
                        Whether small- or large-scale, NJA believes architecture
                        should be an immersive experience for everyone who
                        encounters it. Our work goes beyond aesthetics—it’s
                        about crafting spaces that foster connection, spark
                        inspiration, and enrich everyday life.
                    </p>
                </div>
                <div className="about__culture">
                    <div className="about__culture-img-container">
                        <img src={cultureImage1} alt="" />
                    </div>
                    <div className="about__culture-text">
                        <h3>Culture</h3>
                        <h4>
                            Our firm is made up of talented individuals who are
                            dedicated to the pursuit of architecture.
                        </h4>
                        <p>
                            The office operates as an open studio environment
                            that allows for creative, collaborative, and
                            progressive ideas to flow freely. We are led by a
                            culture where individuals with diverse talents,
                            backgrounds, and perspectives come together, sharing
                            a common goal —to craft remarkable and dependable
                            structures that test the limits of design.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about__poster">
                <img
                    src={aboutPoster}
                    alt="Picture of NJA employees together."
                />
            </div>
            <div className="about__process">
                <h2>Process</h2>
                <div className="about__process-article--sustainability about__process-article">
                    <img
                        src={aboutProcess}
                        alt="Picture of someone moving lumber on trailer."
                    />
                    <div>
                        <h3>Sustainability</h3>
                        <p>
                            During our design process, we keep sustainability
                            and the environment at the forefront of our minds.
                            We are constantly seeking ways in which we can help
                            to decrease the consumption of non-renewable
                            resources, reduce waste, and build healthy,
                            productive environments. It is well within our reach
                            to create sophisticated designs while simultaneously
                            minimizing negative environmental impacts in the
                            resulting build. Whether it be thoughtfully placing
                            windows based on sun orientation or utilizing native
                            landscaping to reduce irrigation needs, we are
                            actively reflecting on different avenues of
                            responsible design.
                        </p>
                    </div>
                </div>
                <div className="about__process-article--site about__process-article">
                    <img
                        src={aboutProcess2}
                        alt="A photo of workers pointing to potential build sites in an open field."
                    />
                    <div>
                        <h3>Site Focused Design</h3>
                        <p>
                            Taking into consideration all the factors and
                            circumstances that affect the intended outcome of a
                            design, site plays a large role. Recognizing and
                            understanding the geography, surrounding buildings,
                            and a sense of place makes for a purposeful and
                            artful design. This is a necessary component to
                            transform a vision into the physical existence of a
                            building.
                        </p>
                    </div>
                </div>
                <div className="about__process-article--design about__process-article">
                    <img
                        src={aboutProcess3}
                        alt="A photo of a pile of sketches."
                    />
                    <div>
                        <h3>Design Charrette</h3>
                        <p>
                            Our weekly “crit” is more than just a review of one
                            project each week. We use this time to collectively
                            step away from our desks, gather around the table,
                            and connect, all while creating an easygoing
                            environment for sharing ideas. Usually accompanied
                            by libations and food, we dedicate an hour each week
                            to a single project where we sketch, present, and
                            discuss ways to better our designs.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about__poster">
                <img
                    src={aboutPoster2}
                    alt="Picture of NJA employees together."
                />
            </div>
            <div className="about__principals">
                <h2>Principals</h2>
                <div className="about__principals-article-wrapper">
                    <div className="about__principals-article--first about__principals-article">
                        <img src={principalsJac} alt="Picture of Jac" />
                        <h3>Jac Beury</h3>
                        <p>
                            Jac has a passion for place-making and believes in
                            the transformative power of design to improve our
                            shared spaces and strengthen communities. As a
                            Principal Architect at NJA Architecture, with over
                            20 years of experience, he has success leading
                            diverse teams to realize complex project types.
                            Specializing in public work and higher education,
                            Jac has completed projects with public agencies and
                            universities across the country from New York to
                            South Carolina, and Rhode Island to Michigan.
                            Extensive knowledge of the reporting and documenting
                            process for public agency projects makes him an
                            invaluable asset to the team. Jac is well-attuned to
                            broad planning implications and adept at navigating
                            design and construction to shepherd projects through
                            completion. He brings design sensitivity, a focus on
                            detail, and practiced expertise to his work
                            including master-planning, healthcare, hospitality,
                            higher education, and public project in the Bay Area
                            and throughout the Central Valley Region.
                        </p>
                    </div>
                    <div className="about__principals-article--second about__principals-article">
                        <img
                            src={principalsNick}
                            alt="Picture of Nick Seward"
                        />
                        <h3>Nick Seward</h3>
                        <p>
                            Nick is an Owner and Architect at NJA Architecture
                            with a love for creating unique experiences through
                            design. From his small town roots to his fascination
                            for the built environment he has worked on several
                            project types from varying market sectors including:
                            commercial, community, public, hospitality,
                            residential, education, medical & master planning.
                            Nick’s passion is to experiment with innovative
                            architecture in diverse environments and seek new
                            design possibilities through the use of building
                            materials, collaboration of assembly and sustainable
                            design solutions.
                        </p>
                    </div>
                    <div className="about__principals-article--third about__principals-article">
                        <img
                            src={principalsJohn}
                            alt="Picture of John Vierra"
                        />
                        <h3>John Vierra</h3>
                        <p>
                            As an Owner and Design Principal of NJA
                            Architecture, John’s passion in architecture centers
                            to enrich its sense of place and strengthen its
                            local communities. He has a longstanding interest in
                            the way people engage and interact through their
                            surrounding environments, both built and natural.
                            From wineries, museums, performance and community
                            centers, historic renovations and mixed-use
                            projects, John’s work strives to make each
                            architectural project an inspiring experience that
                            is site specific to its place. His educational
                            background in architecture started when he was young
                            traveling from jobsite to jobsite with his dad who
                            was a builder. John studied architecture at Cal Poly
                            San Luis Obispo. There he studied abroad in Japan,
                            placed first place in two AIAS national
                            competitions, honored best of show for his vellum
                            furniture, and gained best of show for his 5th year
                            thesis. After graduation from Cal Poly, John worked
                            for Olson Kundig Architects in Seattle – an
                            architecture firm John cherishes for their value in
                            art, craft and nature. John then came back to his
                            hometown in the Central Valley where he worked for a
                            design–build firm with his Dad – specializing in
                            pre-fab metal buildings. After years of design build
                            experience, John founded, with partner Nick Seward,
                            NJA Architecture.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
