'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header(){

  const [showMenu, setShowMenu] = useState(false);
  // Sticky Header
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector('.navbar-area');
    window.scrollY >= 100 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };
  // Sticky Header


    return (
        <>
            <div className="header-middle">
              <div className="container-fluid">
                <div className="row desktop1">
                  <div className="col-lg-8 col-md-9 col-sm-8 col-8 full">
                    <ul className="list2">
                      <li className="portfolio">
                        <Link href="">
                        <i className="fi fi-ts-completed"></i> PORTFOLIO 
                        </Link>
                        <div className="dropdown-content">
                          <Link href="headless-portfolio.php">- HEADLESS</Link>
                          <Link href="web-development-portfolio.php">- WEB DEVELOPMENT</Link>
                          <Link href="seo-portfolio.php">- SEO PORTFOLIO</Link>
                          <Link href="mobile-app-portfolio.php">- MOBILE APPS PORTFOLIO</Link>
                        </div>
                      </li>
                      <li>
                        <Link
                          href="partner-with-us.php"
                          className="partner"
                        >
                          <i className="fi fi-ts-handshake-deal-loan"></i> PARTNER WITH US
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="request-for-quote.php"
                          className="quote"
                        >
                          <i className="fi fi-ts-comment-alt-dots"></i> REQUEST FOR QUOTE
                        </Link>
                      </li>
                      <li>
                        <Link href="https://blog.mediatrenz.com/" className="blog">
                        <i className="fi fi-ts-comment-dots"></i> BLOG
                        </Link>
                      </li>
                      <li>
                        <Link href="contact-us.php" className="contact">
                        <i className="fi fi-ts-land-layer-location"></i> CONTACT
                        </Link>
                      </li>
                      <li>
                        <Link href="payments.php" className="contact">
                        <i className="fi fi-tr-expense"></i> PAYMENTS
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-3 col-sm-4 col-4 text-right  pdl-0 full">
                    <ul className="top-social">
                      <li>
                        <Link
                          href="free-website-analysis.php"
                          className="btn btn-success audit-site"
                        >
                          FREE SITE AUDIT
                        </Link>
                        <Link
                          title="Facebook"
                          href="https://www.facebook.com/mediatrenz"
                          target="_blank"
                          className="fb"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          title="Twitter"
                          href="https://x.com/MediatrenzUS"
                          className="tw"
                        >
                          <i className="fa-brands fa-x-twitter"></i>
                        </Link>
                        <Link
                          title="Linkdin"
                          href="https://www.linkedin.com/company/mediatrenz"
                          target="_blank"
                          className="ln"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                        <Link
                          title="Instagram"
                          href="https://www.instagram.com/mediatrenz"
                          target="_blank"
                          className="in"
                        >
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row desktop2">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6  pdl-0 full mt-2 text-center">
                    <ul className="top-social">
                      <li>
                        <Link
                          title="Facebook"
                          href="https://www.facebook.com/mediatrenz"
                          target="_blank"
                          className="fb"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          title="Twitter"
                          href="https://x.com/MediatrenzUS"
                          className="tw"
                        >
                          <i className="fa-brands fa-x-twitter"></i>
                        </Link>
                        <Link
                          title="Linkdin"
                          href="https://www.linkedin.com/company/mediatrenz"
                          target="_blank"
                          className="ln"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                        <Link
                          title="Instagram"
                          href="https://www.instagram.com/mediatrenz"
                          target="_blank"
                          className="in"
                        >
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6  pdl-0 full mt-2 text-center">
                    <ul className="top-social">
                      <li>
                        <Link
                          href="free-website-analysis.php"
                          className="btn btn-success audit-site"
                        >
                          FREE SITE AUDIT
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          




          <div className="navbar-area navbar-style-two">
            
            {/* For Mobile */}
            <div className="mediatrenz-responsive-nav">
              <div className="container-fluid">
                <div className="mediatrenz-responsive-menu">
                  <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="imglogo" style={{ float: "left" }}>
                      <Link href="/">
                        <img
                          src="/images2/mt-logo.png"
                          alt="logo"
                        />
                      </Link>
                    </div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      onClick={() => setShowMenu(!showMenu)}
                    >
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="main_nav">
                       <ul className="navbar-nav">
                          <li className="nav-item dropdown">
                            <Link
                              href="mobile-virtual-assistant.php"
                              className="nav-link ln"
                              onClick={() => setShowMenu(false)}
                            >
                              VIRTUAL ASSISTANT
                            </Link>
                          </li>

                          <li className="nav-item dropdown">
                            <Link
                              className="nav-link"
                              href="seo.php"
                              onClick={() => setShowMenu(false)}
                            >
                              SEO
                            </Link>
                          </li>

                          <li className="nav-item dropdown">
                            <Link className="nav-link" href="packages.php" onClick={() => setShowMenu(false)}>
                              PACKAGES
                            </Link>
                          </li>

                          <li className="nav-item dropdown">
                            <Link
                              className="nav-link"
                              href="social-media.php"
                              onClick={() => setShowMenu(false)}
                            >
                              SOCIAL MEDIA
                            </Link>
                          </li>

                          <li className="nav-item dropdown">
                            <Link
                              className="nav-link"
                              href="reputation.php"
                              onClick={() => setShowMenu(false)}
                            >
                              REPUTATION
                            </Link>
                          </li>

                          <li className="nav-item dropdown">
                            <Link
                              className="nav-link"
                              href="advertising.php"
                              onClick={() => setShowMenu(false)}
                            >
                              ADVERTISING
                            </Link>
                          </li>

                          <li className="nav-item dropdown">
                            <Link
                              className="nav-link"
                              href="development.php"
                              onClick={() => setShowMenu(false)}
                            >
                              DEVELOPMENT
                            </Link>
                          </li>
                          
                          <li className="nav-item dropdown">
                            <Link
                              className="nav-link"
                              href="/mobile-apps.php"
                              onClick={() => setShowMenu(false)}
                            >
                              MOBILE APPS
                            </Link>
                          </li>
                          <li className="nav-item dropdown">
                            <Link
                              className="nav-link"
                              href="/payments.php"
                              onClick={() => setShowMenu(false)}
                            >
                              PAYMENTS
                            </Link>
                          </li>
                       </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            {/* For Mobile */}



            {/* ------------------------------------------------- */}



            {/* For Desktop */}
            <div className="mediatrenz-nav">
              <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse mean-menu"
                    id="navbarSupportedContent"
                    style={{ display: "block" }}
                  >
                    <div className="imglogo">
                      <Link href="/">
                        <img
                          src="/images2/mt-logo.png"
                          alt="logo"
                        />
                      </Link>
                    </div>
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <Link
                          href="virtual-assistant.php"
                          className="nav-link ln"
                        >
                          Virtual Assistant
                        </Link>
                        <div className="dropdown-menu megamenu half" role="menu">
                          <div className="clearfix center-align">
                            <div className="mleft" style={{ minWidth: 315 }}>
                              <h3>Virtual Assistant</h3>
                              <ul className="ullst">
                                <li className="nav-item sme">
                                  <Link href="VA-Real-Estate.php" className="nav-link">
                                    Real Estate Administrative Assistant
                                  </Link>
                                </li>
                                <li className="nav-item sme">
                                  <Link
                                    href="virtual-assistant.php"
                                    className="nav-link"
                                  >
                                    Virtual Assistance
                                  </Link>
                                </li>
                                <li className="nav-item sme">
                                  <Link
                                    href="lead_generation.php"
                                    className="nav-link"
                                  >
                                    Lead Generation
                                  </Link>
                                </li>
                                <li className="nav-item sme">
                                  <Link
                                    href="email_assistance.php"
                                    className="nav-link"
                                  >
                                    Email Assistance
                                  </Link>
                                </li>
                                <li className="nav-item sme active">
                                  <Link
                                    href="administration_services.php"
                                    className="nav-link"
                                  >
                                    Administration Services
                                  </Link>
                                </li>
                                <li className="nav-item sme">
                                  <Link href="bookkeeping.php" className="nav-link">
                                    Bookkeeping
                                  </Link>
                                </li>
                                <li className="nav-item sme">
                                  <Link
                                    href="by_posts_and_content.php"
                                    className="nav-link"
                                  >
                                    By Posts and Content
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item has-megamenu dropdown ">
                        <Link
                          href=""
                          className="nav-link ln"
                        >
                          SEO
                        </Link>
                        <div className="dropdown-menu megamenu half" role="menu">
                          <div className="clearfix center-align">
                            <div className="mleft" style={{ marginRight: 10 }}>
                              <h3>SEO Services</h3>
                              <ul className="ullst">
                                <li className="nav-item seo active">
                                  <Link
                                    href="affordable-seo-services.php"
                                    className="nav-link dropdown-item "
                                  >
                                    Affordable SEO Services
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="organic-seo-services.php"
                                    className="nav-link dropdown-item"
                                  >
                                    Organic SEO Services
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="professional-seo-services.php"
                                    className="nav-link dropdown-item"
                                  >
                                    Professional SEO Services
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="seo-optimization-services.php"
                                    className="nav-link dropdown-item"
                                  >
                                    SEO Optimization Services
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="seo-consulting-firm.php"
                                    className="nav-link dropdown-item"
                                  >
                                    SEO Consulting Firm
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="local-seo-services.php"
                                    className="nav-link dropdown-item"
                                  >
                                    Local SEO
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="ecommerce-seo-services.php"
                                    className="nav-link dropdown-item"
                                  >
                                    E-Commerce SEO
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="hire-dedicated-seo-resource.php"
                                    className="nav-link dropdown-item"
                                  >
                                    Hire SEO Dedicated Resource
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="apps-store-optimization-services.php"
                                    className="nav-link dropdown-item"
                                  >
                                    App Stores Optimization
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="mleft" style={{ marginRight: 10 }}>
                              <h3>LOCAL BASED SERVICES(USA)</h3>
                              <ul className="ullst">
                                <li className="nav-item seo">
                                  <Link
                                    href="seo-services-nyc-newyork.php"
                                    className="nav-link dropdown-item"
                                  >
                                    SEO Services New York
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="dallas-seo-services.php"
                                    className="nav-link dropdown-item"
                                  >
                                    Dallas SEO Services
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="seo-services-california.php"
                                    className="nav-link dropdown-item"
                                  >
                                    SEO Services California
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="seo-company-los-angeles-ca.php"
                                    className="nav-link dropdown-item"
                                  >
                                    SEO Company Los Angeles Ca
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="seo-company-pennsylvania.php"
                                    className="nav-link dropdown-item"
                                  >
                                    SEO Company Pennsylvania
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="san-diego-seo-services.php"
                                    className="nav-link dropdown-item"
                                  >
                                    San Diego SEO Services
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="mleft" style={{ marginRight: 10 }}>
                              <h3>SEO BY INDUSTRY</h3>
                              <ul className="ullst">
                                <li className="nav-item seo">
                                  <Link
                                    href="real-estate-seo-services.php"
                                    className="nav-link dropdown-item"
                                  >
                                    Real Estate SEO Services
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="healthcare-seo-services.php"
                                    className="nav-link dropdown-item"
                                  >
                                    Healthcare SEO Services
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="dental-seo-marketing-services.php"
                                    className="nav-link dropdown-item"
                                  >
                                    Dental SEO Marketing Services
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="b2b-seo-agency.php"
                                    className="nav-link dropdown-item"
                                  >
                                    B2B SEO Agency
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="automotive-seo-company.php"
                                    className="nav-link dropdown-item"
                                  >
                                    Automotive SEO Company
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="law-firm-seo-services.php"
                                    className="nav-link dropdown-item"
                                  >
                                    Law Firm SEO Services
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="education-firm-seo-services.php"
                                    className="nav-link dropdown-item"
                                  >
                                    Education Firm SEO Services
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="mleft">
                              <h3>LOCAL BASED SERVICES(IN)</h3>
                              <ul className="ullst">
                                <li className="nav-item seo">
                                  <Link
                                    href="seo-services-delhi.php"
                                    className="nav-link dropdown-item"
                                  >
                                    SEO Services Delhi
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="social-media-marketing-agency-delhi.php"
                                    className="nav-link dropdown-item"
                                  >
                                    Social Media Marketing Agency Delhi
                                  </Link>
                                </li>
                                {/* <li className="nav-item seo">
                                  <Link
                                    href="ppc-company-delhi.php"
                                    className="nav-link dropdown-item"
                                  >
                                    PPC Company Delhi
                                  </Link>
                                </li> */}
                                <li className="nav-item seo">
                                  <Link
                                    href="orm-services-delhi.php"
                                    className="nav-link dropdown-item"
                                  >
                                    ORM Services Delhi
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="local-seo-services-delhi.php"
                                    className="nav-link dropdown-item"
                                  >
                                    Local SEO Services Delhi
                                  </Link>
                                </li>
                                <li className="nav-item seo ">
                                  <Link
                                    href="web-design-services-delhi.php"
                                    className="nav-link dropdown-item"
                                  >
                                    Web Design Services Delhi
                                  </Link>
                                </li>
                                <li className="nav-item seo">
                                  <Link
                                    href="web-development-services-delhi.php"
                                    className="nav-link dropdown-item"
                                  >
                                    Web Development Services Delhi
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item has-megamenu  dropdown">
                        <Link href="" className="nav-link ln">
                          WEBSITE SERVICES
                        </Link>
                        <div className="dropdown-menu megamenu half" role="menu">
                          <div className="clearfix center-align">
                            <div className="mleft" style={{ marginRight: 10 }}>
                              <h3>DEVELOPMENT</h3>
                              <ul className="ullst">
                                <li className="nav-item dev active">
                                  <Link
                                    href="web-development-services.php"
                                    className="nav-link"
                                  >
                                    Web Development
                                  </Link>
                                </li>
                                <li className="nav-item dev">
                                  <Link
                                    href="erp-development-service.php"
                                    className="nav-link"
                                  >
                                    ERP Development
                                  </Link>
                                </li>
                                <li className="nav-item dev">
                                  <Link
                                    href="core-php-development.php"
                                    className="nav-link"
                                  >
                                    Core PHP Development
                                  </Link>
                                </li>
                                <li className="nav-item dev">
                                  <Link
                                    href="e-commerce-development.php"
                                    className="nav-link"
                                  >
                                    E-commerce Development
                                  </Link>
                                </li>
                                <li className="nav-item dev">
                                  <Link
                                    href="laravel-development-service.php"
                                    className="nav-link"
                                  >
                                    Laravel Development
                                  </Link>
                                </li>
                                <li className="nav-item dev">
                                  <Link
                                    href="web-application-development-service.php"
                                    className="nav-link"
                                  >
                                    Web Application Development
                                  </Link>
                                </li>
                                <li className="nav-item dev">
                                  <Link
                                    href="psd-to-html-conversion-service.php"
                                    className="nav-link"
                                  >
                                    PSD to HTML conversion
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="mleft" style={{ marginRight: 10 }}>
                              <h3>DESIGNING</h3>
                              <ul className="ullst">
                                <li className="nav-item dev">
                                  <Link
                                    href="website-designing-services.php"
                                    className="nav-link"
                                  >
                                    Website Designing
                                  </Link>
                                </li>
                                <li className="nav-item dev">
                                  <Link
                                    href="website-redesigning-services.php"
                                    className="nav-link"
                                  >
                                    Website Redesigning
                                  </Link>
                                </li>
                                <li className="nav-item dev ">
                                  <Link
                                    href="logo-designing-service.php"
                                    className="nav-link"
                                  >
                                    Logo Designing
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="mleft">
                              <h3>CMS DEVELOPMENT</h3>
                              <ul className="ullst">
                                <li className="nav-item dev">
                                  <Link
                                    href="wordpress-development-services.php"
                                    className="nav-link"
                                  >
                                    Wordpress Development
                                  </Link>
                                </li>
                                <li className="nav-item dev">
                                  <Link
                                    href="moodle-development-services.php"
                                    className="nav-link"
                                  >
                                    Moodle Development
                                  </Link>
                                </li>
                                <li className="nav-item dev">
                                  <Link
                                    href="drupal-development-services.php"
                                    className="nav-link"
                                  >
                                    Drupal Development
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item  dropdown">
                        <Link href="" className="nav-link ln">
                          Packages
                        </Link>
                        <div className="dropdown-menu megamenu half" role="menu">
                          <div className="clearfix center-align">
                            <div className="mleft">
                              <h3>Packages</h3>
                              <ul className="ullst">
                                <li className="nav-item li active">
                                  <Link
                                    href="seo-packages.php"
                                    className="nav-link"
                                  >
                                    SEO Packages
                                  </Link>
                                </li>
                                <li className="nav-item li">
                                  <Link
                                    href="smo-packages.php"
                                    className="nav-link"
                                  >
                                    SMO Packages
                                  </Link>
                                </li>
                                <li className="nav-item li">
                                  <Link
                                    href="local-seo-packages.php"
                                    className="nav-link"
                                  >
                                    GMB Packages
                                  </Link>
                                </li>
                                <li className="nav-item li">
                                  <Link
                                    href="orm-packages.php"
                                    className="nav-link"
                                  >
                                    ORM Packages
                                  </Link>
                                </li>
                                {/* <li className="nav-item li">
                                  <Link
                                    href="ppc-packages.php"
                                    className="nav-link"
                                  >
                                    PPC Packages
                                  </Link>
                                </li> */}
                                <li className="nav-item li">
                                  <Link
                                    href="aso-packages.php"
                                    className="nav-link"
                                  >
                                    ASO Packages
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item  dropdown">
                        <Link href="" className="nav-link ln">
                          Social Media
                        </Link>
                        <div className="dropdown-menu megamenu half" role="menu">
                          <div className="clearfix center-align">
                            <div className="mleft">
                              <h3>Social Media</h3>
                              <ul className="ullst">
                                <li className="nav-item sme active">
                                  <Link
                                    href="facebook-marketing-services.php"
                                    className="nav-link"
                                  >
                                    Facebook Marketing Service
                                  </Link>
                                </li>
                                <li className="nav-item sme">
                                  <Link
                                    href="instagram-marketing-service.php"
                                    className="nav-link"
                                  >
                                    Instagram Marketing Service
                                  </Link>
                                </li>
                                <li className="nav-item sme">
                                  <Link
                                    href="pinterest-marketing-service.php"
                                    className="nav-link"
                                  >
                                    Pinterest Marketing Service
                                  </Link>
                                </li>
                                <li className="nav-item sme">
                                  <Link
                                    href="linkedin-marketing-service.php"
                                    className="nav-link"
                                  >
                                    Linkedin Marketing Service
                                  </Link>
                                </li>
                                <li className="nav-item sme">
                                  <Link
                                    href="twitter-marketing-service.php"
                                    className="nav-link"
                                  >
                                    Twitter Marketing Service
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item  dropdown">
                        <Link href="" className="nav-link ln">
                          Reputation
                        </Link>
                        <div className="dropdown-menu megamenu half" role="menu">
                          <div className="clearfix center-align">
                            <div className="mleft">
                              <h3>Reputation</h3>
                              <ul className="ullst">
                                <li className="nav-item rep active">
                                  <Link
                                    href="remove-complaints-services.php"
                                    className="nav-link"
                                  >
                                    Remove Complaints
                                  </Link>
                                </li>
                                <li className="nav-item rep">
                                  <Link
                                    href="bad-reviews-removal-services.php"
                                    className="nav-link"
                                  >
                                    Remove Bad Reviews
                                  </Link>
                                </li>
                                <li className="nav-item rep">
                                  <Link
                                    href="online-reputation-management-services.php"
                                    className="nav-link"
                                  >
                                    Online Reputation Management
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item  dropdown">
                        <Link href="" className="nav-link ln">
                          Advertising
                        </Link>
                        <div className="dropdown-menu megamenu half" role="menu">
                          <div className="clearfix center-align">
                            <div className="mleft">
                              <h3>Advertising</h3>
                              <ul className="ullst">
                                {/* <li className="nav-item adv active">
                                  <Link
                                    href="google-ads-services.php"
                                    className="nav-link"
                                  >
                                    Google ads
                                  </Link>
                                </li> */}
                                <li className="nav-item adv">
                                  <Link
                                    href="facebook-ads-services.php"
                                    className="nav-link"
                                  >
                                    Facebook ads
                                  </Link>
                                </li>
                                <li className="nav-item adv">
                                  <Link
                                    href="linkedin-ads-services.php"
                                    className="nav-link"
                                  >
                                    Linkedin ads
                                  </Link>
                                </li>
                                <li className="nav-item adv">
                                  <Link
                                    href="quora-ads-services.php"
                                    className="nav-link"
                                  >
                                    Quora ads
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item   dropdown">
                        <Link href="" className="nav-link">
                          Mobile Apps
                        </Link>
                        <div
                          className="dropdown-menu megamenu half small-menu"
                          role="menu"
                        >
                          <div className="clearfix center-align">
                            <div className="mleft ">
                              <h3>Mobile Apps</h3>
                              <ul className="ullst">
                                <li className="nav-item mapp active">
                                  <Link
                                    href="android-app-development-service.php"
                                    className="nav-link"
                                  >
                                    Android Apps Development
                                  </Link>
                                </li>
                                <li className="nav-item mapp">
                                  <Link
                                    href="ios-app-development-service.php"
                                    className="nav-link"
                                  >
                                    IOS Apps Development
                                  </Link>
                                </li>
                                <li className="nav-item mapp">
                                  <Link
                                    href="native-app-development-service.php"
                                    className="nav-link"
                                  >
                                    Native Apps Development
                                  </Link>
                                </li>
                                <li className="nav-item mapp">
                                  <Link
                                    href="hybrid-app-development-service.php"
                                    className="nav-link"
                                  >
                                    Hybrid Apps Development
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            {/* For Desktop */}
          </div>
        </>
    )
}


