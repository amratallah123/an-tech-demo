import React from 'react'; import Link from "next/link";

function Hero() {
    return (
        <section className="hero-s4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-xxl-6 ml-auto">
                        <div className="hero-s4__content hero-s4__content">
                            <h2 className="content-sh">For Millons of Users</h2>
                            <h1 className="content-h">Powerful Digital IT solution Company</h1>
                            <p className="content-d">
                                There are many variations of passage of Lorem Ipsu available but
                                the majority have suffered alteration
                            </p>
                            <Link href="/service" className="btn home4-hero-btn">GET STARTED</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;