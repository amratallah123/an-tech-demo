import React from 'react'; import Link from "next/link";

function Header() {
    return (
       <>
           <header className="header-s1">
               <div className="container">
                   <div className="header-container">
                       <div className="header-s1__top">
                           <div className="p-left">
                               <div className="logo">
                                   <Link href="/home-three">
                                       <img src="/assets/images/logos/logo.svg" alt=""/>
                                   </Link>
                               </div>
                           </div>
                           <div className="p-right">
                               <div className="tb-single-info">
                                   <div className="icon">
                                       <i className="fa-solid fa-phone"></i>
                                   </div>
                                   <div className="content">
                                       <span>Phone Number</span>
                                       <p><Link href="tel:88 ( 5548 ) 6548">+88 ( 5548 ) 6548</Link></p>
                                   </div>
                               </div>
                               <div className="tb-single-info">
                                   <div className="icon">
                                       <i className="fa-solid fa-envelope"></i>
                                   </div>
                                   <div className="content">
                                       <span>Email Address</span>
                                       <p>
                                           <Link href="mailto:infoyour@gmail.com">infoyour@gmail.com</Link>
                                       </p>
                                   </div>
                               </div>
                               <div className="tb-single-info">
                                   <div className="icon">
                                       <i className="fa-solid fa-location-dot"></i>
                                   </div>
                                   <div className="content">
                                       <span>Location</span>
                                       <p>
                                           <a
                                               href="https://www.google.com/maps/place/QuomodoSoft/@23.8002524,90.359203,13z/data=!4m5!3m4!1s0x0:0x1dea3ec2f7a32054!8m2!3d23.8152118!4d90.3665415"
                                           >Circle Kitty New York</a
                                           >
                                       </p>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="header-s1__bottom">
                           <div className="logo">
                               <Link href="/home-three">
                                   <img src="/assets/images/logos/logo.svg" alt=""/>
                               </Link>
                           </div>
                           <div className="p-right">
                               <nav className="m-nav">
                                   <ul>
                                       <li className="dropdown">
                                           <Link  href="#nolink"
                                           >Home <i className="fa-solid fa-chevron-down"></i
                                           ></Link>
                                           <ul className="d-menu">
                                               <li><Link href="/">Home 1</Link></li>
                                               <li><Link href="/home-two">Home 2</Link></li>
                                               <li><Link href="/home-three">Home 3</Link></li>
                                               <li><Link href="/home-four">Home 4</Link></li>
                                               <li><Link href="/home-five">Home 5</Link></li>
                                               <li><Link href="/home-six">Home 6</Link></li>
                                           </ul>
                                       </li>
                                       <li><Link href="/about">About</Link></li>
                                       <li><Link href="/service">Services</Link></li>
                                       <li className="dropdown">
                                           <Link  href="#nolink"
                                           >Pages <i className="fa-solid fa-chevron-down"></i
                                           ></Link>
                                           <ul className="d-menu">
                                               <li><Link href="/teams">Team</Link></li>
                                               <li><Link href="/team-details">Team Details</Link></li>
                                               <li>
                                                   <Link href="/service-details">Service Detail</Link>
                                               </li>
                                               <li>
                                                   <Link href="/portfolio-details">Portfolio Details</Link>
                                               </li>
                                               <li><Link href="/pricing">Pricing</Link></li>
                                               <li><Link href="/error">Error</Link></li>
                                           </ul>
                                       </li>
                                       <li><Link href="/portfolio">Portfolio</Link></li>
                                       <li className="dropdown">
                                           <Link  href="#nolink"
                                           >Blog <i className="fa-solid fa-chevron-down"></i
                                           ></Link>
                                           <ul className="d-menu">
                                               <li><Link href="/blogs">Blog Full Width</Link></li>
                                               <li>
                                                   <Link href="/blogs-two">Blog Right Sidebar</Link>
                                               </li>
                                               <li><Link href="/blog-details">Blog Details</Link></li>
                                           </ul>
                                       </li>
                                       <li><Link href="/contact">Contact</Link></li>
                                   </ul>
                               </nav>
                           </div>
                           <div className="p-left">
                               <Link href="/service" className="btn btn-s1">Start a Project</Link>
                           </div>
                       </div>
                   </div>
               </div>
           </header>
       </>
    );
}

export default Header;