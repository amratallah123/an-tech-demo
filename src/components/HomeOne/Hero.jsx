import React, {useState} from 'react'; import Link from "next/link";

function Hero() {
    const [videoModal, setVideoModal] = useState(false);
    return (
        <section className="hero-s3">
            <div className="container">
                <div className="row">
                    {
                        videoModal && (
                            <div className={`video-popup ${videoModal?'active':''}`} id="videoPopup1">
                                <div className="video-popup-inner">
                                    <button onClick={()=>setVideoModal(!videoModal)} type="button" className="cls-btn">
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                    <iframe type="text" value="5Y6iQz3vuM8" frameBorder="0" allowFullScreen="1"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            title="YouTube video player" width="1140" height="641"
                                            src="https://www.youtube.com/embed/5Y6iQz3vuM8?playsinline=1&amp;autoplay=1&amp;enablejsapi=1&amp;widgetid=1"
                                            id="widget2"></iframe>
                                </div>
                            </div>
                        )
                    }
                    <div className="col-xxl-7 col-xl-6 col-lg-6 hero-s3__content">
                        <h2 className="content-sh">IT services Agency</h2>
                        <h1 className="content-h">Awesome IT Services for Your Business</h1>
                        <p className="content-d">
                            There are many variations of passage of Lorem Ipso available our
                            but the majority have suffered alteration
                        </p>
                        <div className="btn-group">
                            <Link href="/service-details" className="btn btn-s3">Learn More</Link>

                            <div className="video-popup" id="videoPopup1">
                                <div className="video-popup-inner">
                                    <button type="button" className="cls-btn">
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                    <input type="text"/>
                                </div>
                            </div>
                            <button onClick={()=>setVideoModal(!videoModal)} type="button"
                                className="play-btn-sm v-play-btn"
                                data-video-id="videoPopup1"
                            >
                                <i className="fa-solid fa-play"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-6 hero-s3__thumb d-lg-none">
                        <div className="img">
                            <img src="/assets/images/hero-img/3.webp" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <img src="/assets/images/backgrounds/hero-3-shape.png" alt=""/>
            </div>
        </section>
    );
}

export default Hero;