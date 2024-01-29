import React from 'react'; import Link from "next/link";
import SliderCom from "../helpers/SliderCom";

function TeamSection({className,itemClass="single-team-s3 single-team-s2"}) {
    const settings={
        dots: true,
        arrows:false,
        infinite: true,
        autoplay: true,
        prevArrow: '',
        nextArrow: '',
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        infinity: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <section className={`home6-team-s team-area-s2 s-padding ${className||""}`}>
            <div className="container">
                <div className="s-title-wrap">
                    <span className="s-sub-title">Our Team</span>
                    <h2 className="s-title">Our Expart Team Member</h2>
                </div>
                <div className="row team-slider-s1">
                    <SliderCom settings={settings}>
                        <div className="col-lg-3">
                            <div className={itemClass}>
                                <div className="thumb">
                                    <img src="/assets/images/thumbs/about-team-1.jpg" alt=""/>
                                    <ul className="social-icons-s1">
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-facebook-f"></i
                                            ></Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-twitter"></i
                                            ></Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-linkedin-in"></i
                                            ></Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-youtube"></i
                                            ></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3 className="name">Deniella Rhodes</h3>
                                    <p className="designation">CEO of Antech</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={itemClass}>
                                <div className="thumb">
                                    <img src="/assets/images/thumbs/about-team-2.jpg" alt=""/>
                                    <ul className="social-icons-s1">
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-facebook-f"></i
                                            ></Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-twitter"></i
                                            ></Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-linkedin-in"></i
                                            ></Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-youtube"></i
                                            ></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3 className="name">David Phillips</h3>
                                    <p className="designation">Senior Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={itemClass}>
                                <div className="thumb">
                                    <img src="/assets/images/thumbs/about-team-3.jpg" alt=""/>
                                    <ul className="social-icons-s1">
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-facebook-f"></i
                                            ></Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-twitter"></i
                                            ></Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-linkedin-in"></i
                                            ></Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-youtube"></i
                                            ></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3 className="name">Lauren Davison</h3>
                                    <p className="designation">Software Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={itemClass}>
                                <div className="thumb">
                                    <img src="/assets/images/thumbs/about-team-4.jpg" alt=""/>
                                    <ul className="social-icons-s1">
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-facebook-f"></i
                                            ></Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-twitter"></i
                                            ></Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-linkedin-in"></i
                                            ></Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-youtube"></i
                                            ></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3 className="name">Druid Wensleydale</h3>
                                    <p className="designation">Marketing Expert</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={itemClass}>
                                <div className="thumb">
                                    <img src="/assets/images/thumbs/about-team-1.jpg" alt=""/>
                                    <ul className="social-icons-s1">
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-facebook-f"></i
                                            ></Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-twitter"></i
                                            ></Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-linkedin-in"></i
                                            ></Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-youtube"></i
                                            ></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3 className="name">Deniella Rhodes</h3>
                                    <p className="designation">CEO of Antech</p>
                                </div>
                            </div>
                        </div>
                    </SliderCom>
                </div>
            </div>
        </section>
    );
}

export default TeamSection;