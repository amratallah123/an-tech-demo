import React, {useEffect, useRef, useState} from 'react';
import Link from "next/link";

function MainSection() {
    const [isotope, setIsotope] = useState(null);
    const [filterKey, setFilterKey] = useState("all");

    useEffect(() => {
        setTimeout(()=>{
            setIsotope(
                // eslint-disable-next-line no-undef
                new Isotope(".portfolio-gallery-container", {
                    // filter-container: className of the parent of the isotope elements
                    itemSelector: ".portfolio-item", // filter-item: className of the isotope elements
                    // layoutMode: "fitRows", // for horizontal isotope
                })
            );
        },1000)
    }, []);
    useEffect(() => {
        if (isotope) {
            // sanity check
            // eslint-disable-next-line no-unused-expressions
            filterKey === "all"
                ? isotope.arrange({ filter: `.all` })
                : isotope.arrange({ filter: `.${filterKey}` });
        }
    }, [isotope, filterKey]);
    const handleFilterKeyChange = (key) => setFilterKey(key);
    return (
        <section className="portfolio-gallery s-padding">
            <div className="container">
                <div className="s-title-wrap">
                    <span className="s-sub-title">Our Portfolio</span>
                    <h2 className="s-title">Some of Our Finest Work</h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="porftolio-filter-menu">
                            <div
                                className="portfolio-filter-buttons text-center"
                                id="filter-buttons"
                            >
                                <button className={`filter-btn ${filterKey==='all'?'current':''}`} onClick={() => handleFilterKeyChange("all")}>
                                    All Categories
                                </button>
                                <button className={`filter-btn ${filterKey==='software'?'current':''}`} onClick={() => handleFilterKeyChange("software")}>
                                    Software
                                </button>
                                <button className={`filter-btn ${filterKey==='design'?'current':''}`} onClick={() => handleFilterKeyChange("design")}>Design</button>
                                <button className={`filter-btn ${filterKey==='cyber-security'?'current':''}`} onClick={() => handleFilterKeyChange("cyber-security")}>
                                    Cyber Security
                                </button>
                                <button className={`filter-btn ${filterKey==='engineering'?'current':''}`} onClick={() => handleFilterKeyChange("engineering")}>
                                    Engineering
                                </button>
                                <button className={`filter-btn ${filterKey==='consulting'?'current':''}`} onClick={() => handleFilterKeyChange("consulting")}>
                                    Consulting
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row portfolio-gallery-container">
                    <div className="portfolio-item all software">
                        <div className="portfolio-item__inner">
                            <div className="thumb">
                                <img
                                    src="/assets/images/portfolio-thumb/portfolio-img-1.png"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <div className="p-left">
                                    <h3>Colorful Small Cards</h3>
                                    <span>Branding</span>
                                </div>
                                <div className="p-right">
                                    <Link href="/portfolio-details"
                                    ><i className="fa-solid fa-arrow-right"></i
                                    ></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item all software">
                        <div className="portfolio-item__inner">
                            <div className="thumb">
                                <img
                                    src="/assets/images/portfolio-thumb/portfolio-img-2.png"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <div className="p-left">
                                    <h3>Colorful Small Cards</h3>
                                    <span>Branding</span>
                                </div>
                                <div className="p-right">
                                    <Link href="/portfolio-details"
                                    ><i className="fa-solid fa-arrow-right"></i
                                    ></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item all design">
                        <div className="portfolio-item__inner">
                            <div className="thumb">
                                <img
                                    src="/assets/images/portfolio-thumb/portfolio-img-4.png"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <div className="p-left">
                                    <h3>Colorful Small Cards</h3>
                                    <span>Branding</span>
                                </div>
                                <div className="p-right">
                                    <Link href="/portfolio-details"
                                    ><i className="fa-solid fa-arrow-right"></i
                                    ></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item all cyber-security">
                        <div className="portfolio-item__inner">
                            <div className="thumb">
                                <img
                                    src="/assets/images/portfolio-thumb/portfolio-img-3.png"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <div className="p-left">
                                    <h3>Colorful Small Cards</h3>
                                    <span>Branding</span>
                                </div>
                                <div className="p-right">
                                    <Link href="/portfolio-details"
                                    ><i className="fa-solid fa-arrow-right"></i
                                    ></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item all consulting">
                        <div className="portfolio-item__inner">
                            <div className="thumb">
                                <img
                                    src="/assets/images/portfolio-thumb/portfolio-img-5.png"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <div className="p-left">
                                    <h3>Colorful Small Cards</h3>
                                    <span>Branding</span>
                                </div>
                                <div className="p-right">
                                    <Link href="/portfolio-details"
                                    ><i className="fa-solid fa-arrow-right"></i
                                    ></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item all software">
                        <div className="portfolio-item__inner">
                            <div className="thumb">
                                <img
                                    src="/assets/images/portfolio-thumb/porftolio-img-6.png"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <div className="p-left">
                                    <h3>Colorful Small Cards</h3>
                                    <span>Branding</span>
                                </div>
                                <div className="p-right">
                                    <Link href="/portfolio-details"
                                    ><i className="fa-solid fa-arrow-right"></i
                                    ></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-item all engineering">
                        <div className="portfolio-item__inner">
                            <div className="thumb">
                                <img
                                    src="/assets/images/portfolio-thumb/portfolio-img-7.png"
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <div className="p-left">
                                    <h3>Colorful Small Cards</h3>
                                    <span>Branding</span>
                                </div>
                                <div className="p-right">
                                    <Link href="/portfolio-details"
                                    ><i className="fa-solid fa-arrow-right"></i
                                    ></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainSection;