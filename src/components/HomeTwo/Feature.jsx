import React from 'react'; import Link from "next/link";

function Feature() {
    return (
        <section className="features-slider-s2 s-padding">
            <div className="container">
                <div className="row">
                    <div className="s-title-wrap">
                        <span className="s-sub-title">What We’re Offering</span>
                        <h2 className="s-title">All Professional IT Services</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="feature-s3"
                        >
                            <div className="icon">
                                <img src="/assets/images/feature-icons/cloud.svg" alt=""/>
                            </div>
                            <div className="content">
                                <h4><Link href="/portfolio">Top Flexibility</Link></h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsu available
                                    but the
                                </p>
                                <Link href="#" className="f-btn"
                                >Learn More <i className="fa-solid fa-arrow-right"></i
                                ></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="feature-s3"
                        >
                            <div className="icon">
                                <img src="/assets/images/feature-icons/network.svg" alt=""/>
                            </div>
                            <div className="content">
                                <h4><Link href="/portfolio">Time Saving</Link></h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsu available
                                    but the
                                </p>
                                <Link href="/portfolio" className="f-btn"
                                >Learn More <i className="fa-solid fa-arrow-right"></i
                                ></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="feature-s3"
                        >
                            <div className="icon">
                                <img src="/assets/images/feature-icons/data.svg" alt=""/>
                            </div>
                            <div className="content">
                                <h4><Link href="/portfolio">Management</Link></h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsu available
                                    but the
                                </p>
                                <Link href="/portfolio" className="f-btn"
                                >Learn More <i className="fa-solid fa-arrow-right"></i
                                ></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="feature-s3"
                        >
                            <div className="icon">
                                <img src="/assets/images/feature-icons/pencil.svg" alt=""/>
                            </div>
                            <div className="content">
                                <h4><Link href="/portfolio">Collaborative</Link></h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsu available
                                    but the
                                </p>
                                <Link href="/portfolio" className="f-btn"
                                >Learn More <i className="fa-solid fa-arrow-right"></i
                                ></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feature;