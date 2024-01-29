import React from 'react'; import Link from "next/link";

function ServiceSidebar() {
    return (
        <>
            <div className="service-c-list">
                <h3 className="title">Category</h3>
                <ul className="c-list">
                    <li>
                        <Link href="#">
                    <span className="icon"
                    ><img src="/assets/images/feature-icons/cloud.svg" alt=""
                    /></span>
                            <span className="text">Cloud Solutions</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                    <span className="icon"
                    ><img
                        src="/assets/images/feature-icons/network.svg"
                        alt=""
                    /></span>
                            <span className="text">Cyber Security</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                    <span className="icon"
                    ><img
                        src="/assets/images/feature-icons/data-recovery.svg"
                        alt=""
                    /></span>
                            <span className="text">Data Recovery</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                    <span className="icon"
                    ><img src="/assets/images/feature-icons/code.svg" alt=""
                    /></span>
                            <span className="text">Web Development</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                    <span className="icon"
                    ><img src="/assets/images/feature-icons/pencil.svg" alt=""
                    /></span>
                            <span className="text">Product & Design</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                    <span className="icon"
                    ><img src="/assets/images/feature-icons/search.svg" alt=""
                    /></span>
                            <span className="text">Analytic Solutions</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="service-c-list">
                <h3 className="title">Download</h3>
                <ul className="c-list download">
                    <li>
                        <Link href="#">
                    <span className="icon"
                    ><img src="/assets/images/feature-icons/pdf.svg" alt=""
                    /></span>
                            <span className="text">Download PDF</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ServiceSidebar;