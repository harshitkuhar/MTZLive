import Link from "next/link";
import FreeSEOAudit from "./popup/FreeSEOAudit";
import Script from 'next/script';
import SidebarContactForm from "./SidebarContactForm";

export default function Footer() {
  return (
    <>
      <section className="footer-bg footer-text">
        <div className="footer-top">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 lborder">
                  <div className="box">
                    <h3>USA Office</h3>
                    <div className="address">
                      <i className="fi fi-rs-marker" /> 651 N Broad St STE 206,
                      New Castle, Middletown, DE 19709 USA
                    </div>
                    <div>
                      <div className="phone">
                        <i className="fi fi-rr-phone-call" /> +1-302-918-5473
                      </div>
                      <br />
                      <div className="mail">
                        <i className="fi fi-rr-envelope" /> info@mediatrenz.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 lborder">
                  <div className="box">
                    <h3>India Office</h3>
                    <div className="address">
                      <i className="fi fi-rs-marker" /> G 12, First Floor,
                      <span className="brk768" />
                      Sector - 63, NOIDA <span className="brk768" /> Delhi-NCR -
                      201301
                    </div>
                    <div>
                      <div className="phone">
                        <i className="fi fi-rr-phone-call" /> +91-98 7118 1711
                      </div>
                      <br />
                      <div className="mail">
                        <i className="fi fi-rr-envelope" /> info@mediatrenz.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 col-414full">
                <h3 className="dropbtn">DEVELOPMENT SERVICES</h3>
                <ul id="myDropdown" className="dropdown-content">
                  <li>
                    <Link href="/web-development-services.php">
                      WEB DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link href="/website-designing-services.php">
                      WEBSITE DESIGNING
                    </Link>
                  </li>
                  <li>
                    <Link href="/wordpress-development-services.php">
                      WORDPRESS DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link href="/moodle-development-services.php">
                      MOODLE DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link href="/drupal-development-services.php">
                      DRUPAL DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link href="/core-php-development.php">
                      CORE PHP DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link href="/e-commerce-development.php">
                      E-COMMERCE DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link href="/laravel-development-service.php">
                      LARAVEL DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link href="/website-redesigning-services.php">
                      WEBSITE REDESIGNING
                    </Link>
                  </li>
                  <li>
                    <Link href="/erp-development-service.php">
                      ERP DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link href="/web-application-development-service.php">
                      WEB APPLICATION DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link href="/logo-designing-service.php">
                      LOGO DESIGNING
                    </Link>
                  </li>
                  <li>
                    <Link href="/psd-to-html-conversion-service.php">
                      PSD TO HTML CONVERSION
                    </Link>
                  </li>
                </ul>
                <h3>MOBILE APPS DVELOPMENT</h3>
                <ul className="">
                  <li>
                    <Link href="/android-app-development-service.php">
                      ANDROID APPS DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link href="/ios-app-development-service.php">
                      IOS APPS DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link href="/native-app-development-service.php">
                      NATIVE APPS DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link href="/hybrid-app-development-service.php">
                      HYBRID APPS DEVELOPMENT
                    </Link>
                  </li>
                </ul>
                <h3>PORTFOLIO</h3>
                <ul className="">
                  <li>
                    <Link href="/headless-portfolio.php">
                      HEADLESS
                    </Link>
                  </li>
                  <li>
                    <Link href="/web-development-portfolio.php">
                      WEB DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link href="/seo-portfolio.php">SEO PORTFOLIO</Link>
                  </li>
                  <li>
                    <Link href="/mobile-app-portfolio.php">
                      MOBILE APPS PORTFOLIO
                    </Link>
                  </li>
                </ul>
              </div>
              {/* c2 */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 col-414full">
                <h3>SEO Services</h3>
                <ul className="">
                  <li>
                    <Link href="/seo-services.php">SEO SERVICES</Link>
                  </li>
                  <li>
                    <Link href="/local-seo-services.php">LOCAL SEO</Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-seo-services.php">
                      E-COMMERCE SEO
                    </Link>
                  </li>
                  <li>
                    <Link href="/small-business-seo-services.php">
                      SMALL BUSINESS SEO
                    </Link>
                  </li>
                  <li>
                    <Link href="/link-building-services.php">
                      LINK BUILDING SERVICE
                    </Link>
                  </li>
                  <li>
                    <Link href="/apps-store-optimization-services.php">
                      APP STORES OPTIMIZATION
                    </Link>
                  </li>
                  <li>
                    <Link href="/hire-dedicated-seo-resource.php">
                      HIRE SEO DEDICATED RESOURCE
                    </Link>
                  </li>
                  <li>
                    <Link href="/google-penalty-recovery.php">
                      GOOGLE PENALTY RECOVERY
                    </Link>
                  </li>
                  <li>
                    <Link href="/content-marketing-services.php">
                      CONTENT MARKETING
                    </Link>
                  </li>
                </ul>
                <h3>SEARCH ENIGINE OPTIMIZATION</h3>
                <ul className="">
                  <li>
                    <Link href="/affordable-seo-services.php">
                      AFFORDABLE SEO SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link href="/organic-seo-services.php">
                      ORGANIC SEO SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link href="/professional-seo-services.php">
                      PROFESSIONAL SEO SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link href="/seo-optimization-services.php">
                      SEO OPTIMIZATION SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link href="/seo-consulting-firm.php">
                      SEO CONSULTING FIRM
                    </Link>
                  </li>
                  <li>
                    <Link href="/seo-marketing-firm.php">
                      SEO MARKETING FIRM
                    </Link>
                  </li>
                  <li>
                    <Link href="/google-map-marketing.php">
                      GOOGLE MAP MARKETING
                    </Link>
                  </li>
                </ul>
                <h3>ABOUT US</h3>
                <ul className="">
                  <li>
                    <Link href="/our-company.php">OUR COMPANY</Link>
                  </li>
                  <li>
                    <Link href="/our-team.php">OUR TEAM</Link>
                  </li>
                  <li>
                    <Link href="/mission-and-values.php">
                      MISSION &amp; VALUES
                    </Link>
                  </li>
                  <li>
                    <Link href="/clients.php">CLIENTS</Link>
                  </li>
                  <li>
                    <Link href="/testimonials.php">TESTIMONIAL</Link>
                  </li>
                  <li>
                      <Link href="/terms-of-services.php">TERMS OF SERVICES</Link>
                    </li>
                  <li>
                    <Link href="/contact-us.php">CONTACT US</Link>
                  </li>
                </ul>
              </div>
              {/* c3 */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 col-414full">
                <h3>REPUTATION</h3>
                <ul className="">
                  <li>
                    <Link href="/remove-complaints-services.php">
                      REMOVE COMPLAINTS
                    </Link>
                  </li>
                  <li>
                    <Link href="/bad-reviews-removal-services.php">
                      REMOVE BAD REVIEWS
                    </Link>
                  </li>
                  <li>
                    <Link href="/online-reputation-management-services.php">
                      ONLINE REPUTATION MANAGEMENT
                    </Link>
                  </li>
                </ul>
                <h3>SOCIAL MEDIA</h3>
                <ul className="">
                  <li>
                    <Link href="/facebook-marketing-services.php">
                      FACEBOOK MARKETING SERVICE
                    </Link>
                  </li>
                  <li>
                    <Link href="/instagram-marketing-service.php">
                      INSTAGRAM MARKETING SERVICE
                    </Link>
                  </li>
                  <li>
                    <Link href="/pinterest-marketing-service.php">
                      PINTEREST MARKETING SERVICE
                    </Link>
                  </li>
                  <li>
                    <Link href="/linkedin-marketing-service.php">
                      LINKEDIN MARKETING SERVICE
                    </Link>
                  </li>
                  <li>
                    <Link href="/twitter-marketing-service.php">
                      TWITTER MARKETING SERVICE
                    </Link>
                  </li>
                </ul>
                <h3>SEO BY INDUSTRY</h3>
                <ul className="">
                  <li>
                    <Link href="/real-estate-seo-services.php">
                      REAL ESTATE SEO SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link href="/healthcare-seo-services.php">
                      HEALTHCARE SEO SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link href="/dental-seo-marketing-services.php">
                      DENTAL SEO MARKETING SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link href="/b2b-seo-agency.php">B2B SEO AGENCY</Link>
                  </li>
                  <li>
                    <Link href="/automotive-seo-company.php">
                      AUTOMOTIVE SEO COMPANY
                    </Link>
                  </li>
                  <li>
                    <Link href="/law-firm-seo-services.php">
                      LAW FIRM SEO SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link href="/education-firm-seo-services.php">
                      EDUCATION FIRM SEO SERVICES
                    </Link>
                  </li>
                </ul>
                <h3>ADVERTISING</h3>
                <ul className="">
                  {/* <li>
                    <Link href="/google-ads-services.php">GOOGLE ADS</Link>
                  </li> */}
                  <li>
                    <Link href="/facebook-ads-services.php">FACEBOOK ADS</Link>
                  </li>
                  <li>
                    <Link href="/linkedin-ads-services.php">LINKEDIN ADS</Link>
                  </li>
                  <li>
                    <Link href="/quora-ads-services.php">QUORA ADS</Link>
                  </li>
                </ul>
              </div>
              {/* c4 */}
              <div className="col-lg-3 col-md-6 col-sm-6 col-6 col-414full">
                <h3>LOCAL BASED SERVICES(IN)</h3>
                <ul className="">
                  <li>
                    <Link href="/seo-services-delhi.php">
                      SEO SERVICES DELHI
                    </Link>
                  </li>
                  <li>
                    <Link href="/social-media-marketing-agency-delhi.php">
                      SOCIAL MEDIA MARKETING AGENCY DELHI
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/ppc-company-delhi.php">PPC COMPANY DELHI</Link>
                  </li> */}
                  <li>
                    <Link href="/orm-services-delhi.php">
                      ORM SERVICES DELHI
                    </Link>
                  </li>
                  <li>
                    <Link href="/local-seo-services-delhi.php">
                      LOCAL SEO SERVICES DELHI
                    </Link>
                  </li>
                  <li>
                    <Link href="/web-design-services-delhi.php">
                      WEB DESIGN SERVICES DELHI
                    </Link>
                  </li>
                  <li>
                    <Link href="/web-development-services-delhi.php">
                      WEB DEVELOPMENT SERVICES DELHI
                    </Link>
                  </li>
                </ul>
                <h3>LOCAL BASED SERVICES(USA)</h3>
                <ul className="">
                  <li>
                    <Link href="/seo-services-nyc-newyork.php">
                      SEO SERVICES NEW YORK
                    </Link>
                  </li>
                  <li>
                    <Link href="/dallas-seo-services.php">
                      DALLAS SEO SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link href="/seo-services-california.php">
                      SEO SERVICES CALIFORNIA
                    </Link>
                  </li>
                  <li>
                    <Link href="/seo-company-los-angeles-ca.php">
                      SEO COMPANY LOS ANGELES CA
                    </Link>
                  </li>
                  <li>
                    <Link href="/seo-company-pennsylvania.php">
                      SEO COMPANY PENNSYLVANIA
                    </Link>
                  </li>
                  <li>
                    <Link href="/san-diego-seo-services.php">
                      SAN DIEGO SEO SERVICES
                    </Link>
                  </li>
                </ul>
                {/* <h3>LOCAL SEARCH SERVICES </h3>
                  <ul className="">
                      
                  </ul> */}
                <div className="sprt">
                  <div className="">
                    <span>TALK TO OUR SALES </span>
                    <strong>USA:</strong> +1-302-918-5473
                    <div className="brkno" />
                    <br />
                    <strong>India:</strong> +91-9871181711
                  </div>
                </div>
                <div className="sprt">
                  <div className="">
                    <span>TALK TO OUR HR </span>
                    {/* <strong>Sheetal :</strong> +91-8851031128 <br></br> */}
                    <strong>Surbhi :</strong> +91-8076009813 <br></br>
                    <strong>Pratishtha :</strong> +91-7011050185 <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* phonemenu start */}
        <div className="container mobile-menu">
          <div className="row">
            <div className="col-sm-12">
              <div id="accordion">
                <div
                  className="taber collapsed"
                  id="headingThree"
                  data-toggle="collapse"
                  data-target="#collapse33"
                  aria-expanded="false"
                  aria-controls="collapse33"
                >
                  DEVELOPMENT SERVICES
                </div>
                <div
                  id="collapse33"
                  className="panel-collapse collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <ul className="drop-item">
                    <li>
                      <Link href="/web-development-services.php">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/website-designing-services.php">
                        Website Designing
                      </Link>
                    </li>
                    <li>
                      <Link href="/wordpress-development-services.php">
                        Wordpress Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/moodle-development-services.php">
                        Moodle Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/drupal-development-services.php">
                        Drupal Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/core-php-development.php">
                        Core PHP Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/e-commerce-development.php">
                        E-commerce Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/laravel-development-service.php">
                        Laravel Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/website-redesigning-services.php">
                        Website Redesigning
                      </Link>
                    </li>
                    <li>
                      <Link href="/erp-development-service.php">
                        ERP Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/web-application-development-service.php">
                        Web Application Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/logo-designing-service.php">
                        Logo Designing
                      </Link>
                    </li>
                    <li>
                      <Link href="/psd-to-html-conversion-service.php">
                        PSD to HTML conversion
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="taber collapsed"
                  id="headingThree"
                  data-toggle="collapse"
                  data-target="#collapse34"
                  aria-expanded="false"
                  aria-controls="collapse34"
                >
                  SEARCH ENGINE OPTIMIZATION
                </div>
                <div
                  id="collapse34"
                  className="panel-collapse collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <ul className="drop-item">
                    <li>
                      <Link href="/affordable-seo-services.php">
                        Affordable SEO Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/organic-seo-services.php">
                        Organic SEO Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/professional-seo-services.php">
                        Professional SEO Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/seo-optimization-services.php">
                        SEO Optimization Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/seo-consulting-firm.php">
                        SEO Consulting Firm
                      </Link>
                    </li>
                    <li>
                      <Link href="/seo-marketing-firm.php">
                        SEO Marketing Firm
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="taber collapsed"
                  id="headingThree"
                  data-toggle="collapse"
                  data-target="#collapse35"
                  aria-expanded="false"
                  aria-controls="collapse35"
                >
                  ABOUT US
                </div>
                <div
                  id="collapse35"
                  className="panel-collapse collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <ul className="drop-item">
                    <li>
                      <Link href="/our-company.php">Our Company</Link>
                    </li>
                    <li>
                      <Link href="/our-team.php">Our Team</Link>
                    </li>
                    <li>
                      <Link href="/mission-and-values.php">
                        Mission &amp; Values
                      </Link>
                    </li>
                    <li>
                      <Link href="/clients.php">Clients</Link>
                    </li>
                    <li>
                      <Link href="/testimonials.php">Testimonials</Link>
                    </li>
                    <li>
                      <Link href="/contact-us.php">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/terms-of-services.php">Terms Of Services</Link>
                    </li>
                    
                  </ul>
                </div>
                <div
                  className="taber collapsed"
                  id="headingThree"
                  data-toggle="collapse"
                  data-target="#collapse36"
                  aria-expanded="false"
                  aria-controls="collapse36"
                >
                  SEO SERVICES
                </div>
                <div
                  id="collapse36"
                  className="panel-collapse collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <ul className="drop-item">
                    <li>
                      <Link href="/seo-services.php">SEO Service</Link>
                    </li>
                    <li>
                      <Link href="/local-seo-services.php">Local SEO</Link>
                    </li>
                    <li>
                      <Link href="/ecommerce-seo-services.php">
                        E-commerce SEO
                      </Link>
                    </li>
                    <li>
                      <Link href="/small-business-seo-services.php">
                        Small Business SEO
                      </Link>
                    </li>
                    <li>
                      <Link href="/link-building-services.php">
                        Link Building Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/apps-store-optimization-services.php">
                        App Stores Optimisation
                      </Link>
                    </li>
                    <li>
                      <Link href="/hire-dedicated-seo-resource.php">
                        Hire SEO Dedicated Resource
                      </Link>
                    </li>
                    <li>
                      <Link href="/google-penalty-recovery.php">
                        Google Penalty Recovery
                      </Link>
                    </li>
                    <li>
                      <Link href="/content-marketing-services.php">
                        Content Marketing
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="taber collapsed"
                  id="headingThree"
                  data-toggle="collapse"
                  data-target="#collapse37"
                  aria-expanded="false"
                  aria-controls="collapse37"
                >
                  REPUTATION
                </div>
                <div
                  id="collapse37"
                  className="panel-collapse collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <ul className="drop-item">
                    <li>
                      <Link href="/remove-complaints-services.php">
                        Remove Complaints
                      </Link>
                    </li>
                    <li>
                      <Link href="/bad-reviews-removal-services.php">
                        Remove Bad Reviews
                      </Link>
                    </li>
                    <li>
                      <Link href="/online-reputation-management-services.php">
                        Online Reputation Management
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="taber collapsed"
                  id="headingThree"
                  data-toggle="collapse"
                  data-target="#collapse38"
                  aria-expanded="false"
                  aria-controls="collapse38"
                >
                  SEO BY INDUSTRY
                </div>
                <div
                  id="collapse38"
                  className="panel-collapse collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <ul className="drop-item">
                    <li>
                      <Link href="/real-estate-seo-services.php">
                        Real Estate SEO Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/healthcare-seo-services.php">
                        Healthcare SEO Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/dental-seo-marketing-services.php">
                        Dental SEO Marketing Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/b2b-seo-agency.php">B2B SEO Agency</Link>
                    </li>
                    <li>
                      <Link href="/automotive-seo-company.php">
                        Automotive SEO Company
                      </Link>
                    </li>
                    <li>
                      <Link href="/law-firm-seo-services.php">
                        Law Firm SEO Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/education-firm-seo-services.php">
                        Education Firm SEO Services
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="taber collapsed"
                  id="headingThree"
                  data-toggle="collapse"
                  data-target="#collapse39"
                  aria-expanded="false"
                  aria-controls="collapse39"
                >
                  PORTFOLIO
                </div>
                <div
                  id="collapse39"
                  className="panel-collapse collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <ul className="drop-item">
                    <li>
                      <Link href="/web-development-portfolio.php">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/seo-portfolio.php">SEO Portfolio</Link>
                    </li>
                    <li>
                      <Link href="/mobile-app-portfolio.php">
                        Mobile Apps Portfolio
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="taber collapsed"
                  id="headingThree"
                  data-toggle="collapse"
                  data-target="#collapse40"
                  aria-expanded="false"
                  aria-controls="collapse40"
                >
                  SOCIAL MEDIA
                </div>
                <div
                  id="collapse40"
                  className="panel-collapse collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <ul className="drop-item">
                    <li>
                      <Link href="/facebook-marketing-services.php">
                        Facebook Marketing Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/instagram-marketing-service.php">
                        Instagram Marketing Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/pinterest-marketing-service.php">
                        Pinterest Marketing Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/linkedin-marketing-service.php">
                        Linkedin Marketing Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/twitter-marketing-service.php">
                        Twitter Marketing Service
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="taber collapsed"
                  id="headingThree"
                  data-toggle="collapse"
                  data-target="#collapse41"
                  aria-expanded="false"
                  aria-controls="collapse41"
                >
                  LOCAL BASED SERVICES(USA)
                </div>
                <div
                  id="collapse41"
                  className="panel-collapse collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <ul className="drop-item">
                    <li>
                      <Link href="/seo-services-nyc-newyork.php">
                        SEO Services New York
                      </Link>
                    </li>
                    <li>
                      <Link href="/dallas-seo-services.php">
                        Dallas SEO Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/seo-services-california.php">
                        SEO Services California
                      </Link>
                    </li>
                    <li>
                      <Link href="/seo-company-los-angeles-ca.php">
                        SEO Company Los Angeles CA
                      </Link>
                    </li>
                    <li>
                      <Link href="/seo-company-pennsylvania.php">
                        SEO Company Pennsylvania
                      </Link>
                    </li>
                    <li>
                      <Link href="/san-diego-seo-services.php">
                        SEO Diego SEO Services
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="taber collapsed"
                  id="headingThree"
                  data-toggle="collapse"
                  data-target="#collapse42"
                  aria-expanded="false"
                  aria-controls="collapse42"
                >
                  LOCAL BASED SERVICES(IN)
                </div>
                <div
                  id="collapse42"
                  className="panel-collapse collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <ul className="drop-item">
                    <li>
                      <Link href="/seo-services-delhi.php">
                        SEO Services Delhi
                      </Link>
                    </li>
                    <li>
                      <Link href="/social-media-marketing-agency-delhi.php">
                        Social Media Marketing Agency Delhi
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/ppc-company-delhi.php">
                        PPC Company Delhi
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/orm-services-delhi.php">
                        ORM Services Delhi
                      </Link>
                    </li>
                    <li>
                      <Link href="/local-seo-services-delhi.php">
                        Local SEO Services Delhi
                      </Link>
                    </li>
                    <li>
                      <Link href="/web-design-services-delhi.php">
                        Web Design Services Delhi
                      </Link>
                    </li>
                    <li>
                      <Link href="/web-development-services-delhi.php">
                        Web Development Services Delhi
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="taber collapsed"
                  id="headingThree"
                  data-toggle="collapse"
                  data-target="#collapse43"
                  aria-expanded="false"
                  aria-controls="collapse43"
                >
                  MOBILE APPS DEVELOPMENT
                </div>
                <div
                  id="collapse43"
                  className="panel-collapse collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <ul className="drop-item">
                    <li>
                      <Link href="/android-app-development-service.php">
                        Android Apps Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/ios-app-development-service.php">
                        IOS Apps Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/native-app-development-service.php">
                        Native Apps Development
                      </Link>
                    </li>
                    <li>
                      <Link href="/hybrid-app-development-service.php">
                        Hybrid Apps Development
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="taber collapsed"
                  id="headingThree"
                  data-toggle="collapse"
                  data-target="#collapse44"
                  aria-expanded="false"
                  aria-controls="collapse44"
                >
                  ADVERTISING
                </div>
                <div
                  id="collapse44"
                  className="panel-collapse collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <ul className="drop-item">
                    {/* <li>
                      <Link href="/google-ads-services.php">Google ads</Link>
                    </li> */}
                    <li>
                      <Link href="/facebook-ads-services.php">
                        Facebook ads
                      </Link>
                    </li>
                    <li>
                      <Link href="/linkedin-ads-services.php">
                        Linkedin ads
                      </Link>
                    </li>
                    <li>
                      <Link href="/quora-ads-services.php">Quora ads</Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="taber collapsed"
                  id="headingThree"
                  data-toggle="collapse"
                  data-target="#collapse45"
                  aria-expanded="false"
                  aria-controls="collapse45"
                >
                  LOCAL SEARCH SERVICES
                </div>
                <div
                  id="collapse45"
                  className="panel-collapse collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <ul className="drop-item">
                    <li>
                      <Link href="/google-map-marketing.php">
                        Google Map Marketing
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="sprt">
                  <div className="">
                    <span>Talk To Our Sales </span>
                    <strong>USA:</strong> +1-302-918-5473
                    <div className="brkno" />
                    <br />
                    <strong>India:</strong> +91-9871181711
                  </div>
                </div>
                <div className="sprt">
                  <div className="">
                    <span>Talk To Our HR </span>
                    {/* <div>
                      <strong>Sheetal :</strong> +91-8851031128
                    </div> */}
                    <div>
                      <strong>Surbhi :</strong> +91-8076009813
                    </div>
                    <div>
                      <strong>Pratishtha :</strong> +91-7011050185
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* phonmanu End */}
        {/*Mobile menu end */}
        <div className="clinks">
          <div className="container">
            <ul>
              <li>
                <img
                  className="lazy"
                  src="/images2/c1.webp"
                  data-src="/images2/c1.webp"
                  alt="img"
                />
              </li>
              <Link href="https://www.goodfirms.co/company/mediatrenz">
                <li>
                  <img
                    className="lazy"
                    src="/images2/c2.webp"
                    data-src="/images2/c2.webp"
                    alt="img"
                  />
                </li>
              </Link>
              <li>
                <img
                  className="lazy"
                  src="/images2/c3.webp"
                  data-src="/images2/c3.webp"
                  alt="img"
                />
              </li>
              <li>
                <img
                  className="lazy"
                  src="/images2/c4.webp"
                  data-src="/images2/c4.webp"
                  alt="img"
                />
              </li>
              <li>
                <img
                  className="lazy"
                  src="/images2/c5.webp"
                  data-src="/images2/c5.webp"
                  alt="img"
                />
              </li>
              <li>
                <img
                  className="lazy"
                  src="/images2/c6.webp"
                  data-src="/images2/c6.webp"
                  alt="img"
                />
              </li>
              {/* <li><img src="images2/dmca-protected.webp" alt="DMCA Protected"></li> */}
            </ul>
          </div>
        </div>
        <div className="footer_menu">
          <div className="container">
            <div>
              <Link href="">Home</Link>
              <Link href="/our-company.php">About Us</Link>
              {/* <Link href="/partner-with-us.php">Partner With Us</Link> */}
              <Link href="/request-for-quote.php">Request For Quote</Link>
              <Link href="/clients.php">Clients</Link>
              <Link href="/terms-of-services.php">Terms Of Services</Link>
              <Link href="/contact-us.php">Contact</Link>
              <Link href="/privacy-policy.php">Privacy Policy</Link>
              <Link href="/refund-and-cancellation.php">
                Refund and Cancellation
              </Link>
              <Link href="/pay-with-paypal.php">Pay With Paypal</Link>
              {/* <Link href="/pay-with-stripe.php">Pay With Stripe</Link> */}
            </div>
          </div>
        </div>
      </section>

      <div className="page_copyright">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-md-center">
            <div className="col-lg-5 text-center text-lg-left">
              <p>Copyrights © {new Date().getFullYear()} MEDIATRENZ - All Rights Reserved</p>
              <p></p>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="rating-bottom">
                Rated
                <span
                  itemScope=""
                  itemType="https://data-vocabulary.org/Review-aggregate"
                >
                  <span
                    itemProp="rating"
                    itemScope=""
                    itemType="https://data-vocabulary.org/Rating"
                  >
                    <span itemProp="average" id="ratingValue">
                    &nbsp;4.6&nbsp;
                    </span>
                    out of <span itemProp="best">5.0</span>
                  </span>
                  &nbsp;by&nbsp;
                  <span itemProp="votes" id="totalClient">
                    1015
                  </span>
                  + <span itemProp="itemreviewed">MEDIATRENZ</span> clients on
                  over
                  <span itemProp="count">&nbsp;5400</span>+ projects
                </span>
              </div>
              {/*  <img className="dmc" src="images2/dmca-protected.webp"> */}
              <div className="widget_social_buttons">
                <Link
                  href="//www.dmca.com/Protection/Status.aspx?ID=c83318f0-5722-4997-b468-effb7a03a612"
                  target="blank"
                >
                  <img
                    className="dmc lazy entered loaded"
                    src="/images2/dmca-badge.webp"
                    data-src="/images2/dmca-badge.webp"
                    alt="img"
                    data-ll-status="loaded"
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/mediatrenz"
                  target="_blank"
                  className="color-icon"
                  title="facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link
                  href="https://x.com/MediatrenzUS"
                  className="color-icon"
                  title="twitter"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/mediatrenz"
                  target="_blank"
                  className="color-icon"
                  title="linkedin"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/mediatrenz/"
                  target="_blank"
                  className="color-icon"
                  title="instagram "
                >
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link
                  href="https://www.google.com/search?q=MEDIATRENZ"
                  target="_blank"
                  className="color-icon"
                  title="google "
                >
                  <i className="fa-brands fa-google"></i>
                </Link>
                <Link
                  href="mailto:info@mediatrenz.com"
                  target="_blank"
                  className="color-icon"
                  title="google "
                >
                  <i className="fa-regular fa-envelope"></i>
                </Link>
              </div>
              <div className="chat-icon" style={{ display: "none" }}>
                <ul>
                  <li>
                    <Link
                      href="skype:mba.prabhat121?chat"
                      title="Call me! - prabhat sharma"
                    >
                      <img src="/images2/skype.png" />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://wa.link/qauftt">
                      <img src="/images2/whatsapp.png" />
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Code by Deepak 09-02-2023  End*/}
            </div>
          </div>
        </div>
      </div>
      <FreeSEOAudit/>
      <Script src="https://embed.tawk.to/5661d148882009f75b701518/default" />
      <SidebarContactForm/>
    </>
  );
}
