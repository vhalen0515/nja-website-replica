import "./contact.css";

export default function Contact() {
    return (
        <section className="contact">
            <div className="contact__hero-image"></div>
            <div className="contact__info">
                <h2>
                    nja
                    <br />
                    architecture
                </h2>
                <div className="contact__address">
                    <p>
                        212 W Pine St STE 1
                        <br />
                        lodi california 95240
                        <br />
                        209.400.6080
                    </p>
                </div>
                <div className="contact__inquiries-general">
                    <h3>General Inquiries</h3>
                    <p>
                        for more information please
                        <br />
                        call or email us at:
                        <br />
                        contact@njaarchitecture.com
                    </p>
                </div>
                <div className="contact__inquiries-employment">
                    <h3>Employment Inquiries</h3>
                    <p>
                        NJA is always seeking creative talent.
                        <br />
                        please email us:
                        <br />
                        contact@njaarchitecture.com
                    </p>
                </div>
            </div>
        </section>
    );
}
