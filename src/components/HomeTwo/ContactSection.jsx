import React from 'react'; import Link from "next/link";

function ContactSection() {
    return (
        <section className="contact-banner-s2">
            <div className="container">
                <div className="contact-banner-inner">
                    <div className="contact-banner-s2__content">
                        <h2 className="content-t">Have A Project In Mind? Lets Get To Work</h2>
                        <p>
                            If you are going to use a passage of Lorem Ipsum, you need to be
                            sure there it anything embarrassing
                        </p>
                    </div>
                    <div className="col-lg-4 contact-banner-s2__button">
                        <div>
                            <Link href="/service-details" className="btn btn-s2">Start a Project</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;