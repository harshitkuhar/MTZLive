"use client"
import HomeTopSlider from "./components/HomeTopSlider";
import PortfolioSlider from "./components/PortfolioSlider";
import HomeTestiSlider from "./components/HomeTestiSlider";
import ContactSection from "./components/ContactSection";
import HappyClients from "./components/HappyClients";
import Link from "next/link";
import useSWR from "swr";
import Api from "../../lib/api";
import { useState } from "react";

const fetcher = async (url) => await Api.getApi(url);

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const { data: blogsApi, error: blogsApiError } = useSWR('/wp-json/wp/v2/posts?per_page=4', fetcher);

  if (blogsApiError) return <div>No Data Found!</div>;


  const openPopup = () => setOpenModal(true);

  const handleClose = () => setOpenModal(false);
  

  return ( 
    <>

      <HomeTopSlider/>

      <div className="devider1" />

      <section className="awards-sec2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img
                src="/img/mediatrenz-slider-logo.webp"
                alt="img"
                className="img-fluid cert-logo lazy entered loaded"
                data-ll-status="loaded"
              />
            </div>
            <div className="col-lg-12 text-center">
              <div className="top-awards2 mmt-30">
                <div className="col-md-4 col-sm-6 col-6 topmarg-30">
                  <Link href="">
                    <div className="awardbox">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/img/c1.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 col-sm-6 col-6 topmarg-30">
                  <Link href="">
                    <div className="awardbox">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/img/c2.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 col-sm-6 col-6 topmarg-30">
                  <Link href="">
                    <div className="awardbox">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/img/c3.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 col-sm-6 col-6 topmarg-30">
                  <Link href="">
                    <div className="awardbox">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/img/c4.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 col-sm-6 col-6 topmarg-30">
                  <Link href="">
                    <div className="awardbox">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/img/c5.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 col-sm-6 col-6 topmarg-30">
                  <Link href="">
                    <div className="awardbox">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/img/c6.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-svr intro-ser pos-rel">
        <div className="ser1">
          <img
            className="lazy entered loaded"
            src="/images2/ser1.webp"
            data-src="/images2/ser1.webp"
            alt="img"
            data-ll-status="loaded"
          />
        </div>
        <div className="ser2">
          <img
            className="lazy entered loaded"
            src="/images2/ser2.webp"
            data-src="/images2/ser2.webp"
            alt="img"
            data-ll-status="loaded"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center title-mb">
              <h4 className="element-subtitle text-white">Our Services</h4>
              <h2 className="title text-white">
                We Build Brands With <br />
                Our Best Services
              </h2>
            </div>
          </div>
          <div className="row mmt-30">
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col svr-box">
                <Link href="/seo-services.php">
                  <div className="bottom-curve" />
                  <div className="headtl">
                    <div className="icon-box">
                    <i className="fi fi-tr-url"></i>
                    </div>
                    <div className="icon-boxtext">SEO</div>
                  </div>
                  <div className="icnbox-box-no">01</div>
                  <p>
                    Website structure optimisation coupled with strategized and well-planned...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/seo-services.php">
                    Read More
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col svr-box">
                <Link href="/website-designing-services.php">
                  <div className="bottom-curve" />
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-customize-computer"></i>
                    </div>
                    <div className="icon-boxtext">Web Designing</div>
                  </div>
                  <div className="icnbox-box-no">02</div>
                  <p>
                    The websites that we create are not just good looking but they
                    are...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/website-designing-services.php">
                    Read More
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col svr-box">
                <Link href="/android-app-development-service.php">
                  <div className="bottom-curve" />
                  <div className="headtl">
                    <div className="icon-box">
                    <i className="fi fi-tr-category"></i>
                    </div>
                    <div className="icon-boxtext">Mobile APP</div>
                  </div>
                  <div className="icnbox-box-no">03</div>
                  <p>
                    Intuitive, innovating and customer-engaging mobile apps for
                    all...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/android-app-development-service.php">
                    Read More
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col svr-box">
                <Link href="/">
                  <div className="bottom-curve" />
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-file-invoice-dollar"></i>
                    </div>
                    <div className="icon-boxtext">Pay per click</div>
                  </div>
                  <div className="icnbox-box-no">04</div>
                  <p>Sponsored marketing solution with keyword-research-based...</p>
                </Link>
                <div className="btn-link1">
                  <Link href="/">
                    Read More
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col svr-box">
                <Link href="/orm-services.php">
                  <div className="bottom-curve" />
                  <div className="headtl">
                    <div className="icon-box">
                    <i className="fi fi-ts-discover"></i>
                    </div>
                    <div className="icon-boxtext">Online reputation Management</div>
                  </div>
                  <div className="icnbox-box-no">05</div>
                  <p>
                    We influence and control your {`business's`} reputation online...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/orm-services.php">
                    Read More
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col svr-box">
                <Link href="/web-application-development-service.php">
                  <div className="bottom-curve" />
                  <div className="headtl">
                    <div className="icon-box">
                    <i className="fi fi-tr-web-design"></i>
                    </div>
                    <div className="icon-boxtext">Web Application Development</div>
                  </div>
                  <div className="icnbox-box-no">06</div>
                  <p>
                    We craft functional, appealing, user-centric, high-performing
                    websites...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/web-application-development-service.php">
                    Read More
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col svr-box">
                <Link href="/dedicated-servers.php">
                  <div className="bottom-curve" />
                  <div className="headtl">
                    <div className="icon-box">
                    <i className="fi fi-tr-database"></i>
                    </div>
                    <div className="icon-boxtext">Servers</div>
                  </div>
                  <div className="icnbox-box-no">07</div>
                  <p>
                    We take great pride in the hardware we use for all our servers
                    that we used...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/dedicated-servers.php">
                    Read More
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col svr-box">
                <Link href="/aso-packages.php">
                  <div className="bottom-curve" />
                  <div className="headtl">
                    <div className="icon-box">
                    <i className="fi fi-ts-speedometer-arrow"></i>
                    </div>
                    <div className="icon-boxtext">App Store Optimization</div>
                  </div>
                  <div className="icnbox-box-no">08</div>
                  <p>
                    App Store Optimization boosts keyword rankings &amp; improves
                    conversion...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/aso-packages.php">
                    Read More
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30 blok-centr">
              <div className="intro-ser-col svr-box">
                <Link href="/wordpress-development-services.php">
                  <div className="bottom-curve" />
                  <div className="headtl">
                    <div className="icon-box">
                    <i className="fi fi-ts-globe-pointer"></i>
                    </div>
                    <div className="icon-boxtext">Wordpress Development</div>
                  </div>
                  <div className="icnbox-box-no">09</div>
                  <p>We have an exceptional team of developers with expertise...</p>
                </Link>
                <div className="btn-link1">
                  <Link href="/wordpress-development-services.php">
                    Read More
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section parallax-img lazy entered loaded" data-bg="img/parallax-bg.webp" data-ll-status="loaded" style={{ backgroundImage: 'url("/img/parallax-bg.webp")' }}>
        <div className="container">
          <div className="row">
            {/*Text Column*/}
            <div className="text-column col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div className="inner">
                <h4 className="element-subtitle">15 YEARS OF EXPERIENCE</h4>
                {/*  <h2 className="title">Best SEO Company in India & Delhi NCR</h2> */}
                <h3 className="txt-ali">
                  MEDIATRENZ IS A HIGHLY CAPABLE SEO, WEB DESIGN AND DEVELOPMENT
                  AGENCY THAT IS WELL EQUIPPED TO BE YOUR {`COMPANY'S`} PARTNER IN
                  GROWTH.
                </h3>
                <p className="txt-ali">
                  MEDIATRENZ is a leading ROI-driven SEO company in India that help
                  you rank high on search engine results. We also ensure that your
                  company has an excellent reputation on the internet so that people
                  looking for it online will only come across positive information.
                  We provide complete digital marketing, web design, and development
                  services across the world. We are also a very successful SEO, Web
                  Design and Development agency . As experts in digital marketing,
                  we can ensure that your company has a higher ranking than before
                  on search engine results pages. We can also make sure that your
                  company has an excellent reputation on the internet so that people
                  looking for it online will only come across positive information.
                  At MEDIATRENZ, our aim is to offer the best possible range of
                  services at extremely competitive prices.
                </p>
                <div className="slider-btn">
                  <Link
                    className="btn btn-maincolor"
                    href="/our-company.php"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            {/* sec */}
            <div className="col-xl-4 col-lg-4 col-md-7 col-sm-8 col-12">
              <div className="middle-sec one">
                <div className="fid-style-5">
                  <div className="d-flex align-items-center">
                    <div className="prog">
                      <div className="progress blue">
                        <span className="progress-left">
                          <span className="progress-bar" />
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar" />
                        </span>
                        <div className="progress-value">90%</div>
                      </div>
                    </div>
                    <div className="thsn-circle-inner">
                      <span className="fid-title">SKILLED EXPERTS</span>
                      <div className="fid-desc">
                        <p>We have a solution of each client project.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="middle-sec two">
                <div className="fid-style-5">
                  <div className="d-flex align-items-center">
                    <div className="prog">
                      <div className="progress blue">
                        <span className="progress-left">
                          <span className="progress-bar" />
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar" />
                        </span>
                        <div className="progress-value">75%</div>
                      </div>
                    </div>
                    <div className="thsn-circle-inner">
                      <span className="fid-title">BUSINESS GUIDE</span>
                      <div className="fid-desc">
                        <p>We have a solution of each client project.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="middle-sec three">
                <div className="fid-style-5">
                  <div className="d-flex align-items-center">
                    <div className="prog">
                      <div className="progress blue">
                        <span className="progress-left">
                          <span className="progress-bar" />
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar" />
                        </span>
                        <div className="progress-value">80%</div>
                      </div>
                    </div>
                    <div className="thsn-circle-inner">
                      <span className="fid-title">PROJECTS WORK</span>
                      <div className="fid-desc">
                        <p>We have a solution of each client project.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Image Column*/}
            <div
              className="image-column-right col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
              data-bg="./images2/bg-02.webp"
            />
          </div>
        </div>
        {/* <div className="devider2"></div>  */}
      </section>

      <section className="pricing-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center title-mb">
              <h4 className="element-subtitle text-white">PRICING PACKAGES</h4>
              <h2 className="title text-white">CHOOSE YOUR BEST PLAN</h2>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 col-360full">
              <div className="price_content clearfix">
                <div className="price_head clearfix">
                  <div className="price_head_content clearfix">
                    <div className="head">
                      <div className="icon">
                        <img
                          className="lazy entered loaded"
                          src="/img/seo.webp"
                          data-src="images2/seo.webp"
                          alt="img"
                          data-ll-status="loaded"
                        />
                      </div>
                      <span>SEO SERVICES</span>
                    </div>
                  </div>
                  <div className="price_tag clearfix">
                    <span className="price">
                      <span className="sign">$</span>
                      <span className="currency">349.00</span>
                      <div className="month">Monthly Package</div>
                    </span>
                  </div>
                </div>
                <div className="price_btn clearfix">
                  <Link
                    className="btn btn-maincolor"
                    href="/seo-packages.php"
                  >
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 col-360full">
              <div className="price_content clearfix">
                <div className="price_head clearfix">
                  <div className="price_head_content clearfix">
                    <div className="head">
                      <div className="icon">
                        <img
                          className="lazy entered loaded"
                          src="/img/smo.webp"
                          data-src="images2/smo.webp"
                          alt="img"
                          data-ll-status="loaded"
                        />
                      </div>
                      <span>SMO SERVICES</span>
                    </div>
                  </div>
                  <div className="price_tag clearfix">
                    <span className="price">
                      <span className="sign">$</span>
                      <span className="currency">280.00</span>
                      <div className="month">Monthly Package</div>
                    </span>
                  </div>
                </div>
                <div className="price_btn clearfix">
                  <Link
                    className="btn btn-maincolor"
                    href="/smo-packages.php"
                  >
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 col-360full">
              <div className="price_content clearfix">
                <div className="price_head clearfix">
                  <div className="price_head_content clearfix">
                    <div className="head">
                      <div className="icon">
                        <img
                          className="lazy entered loaded"
                          src="/img/ppc.webp"
                          data-src="images2/ppc.webp"
                          alt="img"
                          data-ll-status="loaded"
                        />
                      </div>
                      <span>PPC SERVICES</span>
                    </div>
                  </div>
                  <div className="price_tag clearfix">
                    <span className="price">
                      <span className="sign">$</span>
                      <span className="currency">249.00</span>
                      <div className="month">Monthly Package</div>
                    </span>
                  </div>
                </div>
                <div className="price_btn clearfix">
                  <Link
                    className="btn btn-maincolor"
                    href="/"
                  >
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 col-360full">
              <div className="price_content clearfix">
                <div className="price_head clearfix">
                  <div className="price_head_content clearfix">
                    <div className="head">
                      <div className="icon">
                        <img
                          className="lazy entered loaded"
                          src="/img/orm.webp"
                          data-src="images2/orm.webp"
                          alt="img"
                          data-ll-status="loaded"
                        />
                      </div>
                      <span>ORM SERVICES</span>
                    </div>
                  </div>
                  <div className="price_tag clearfix">
                    <span className="price">
                      <span className="sign">$</span>
                      <span className="currency">380.00</span>
                      <div className="month">Monthly Package</div>
                    </span>
                  </div>
                </div>
                <div className="price_btn clearfix">
                  <Link
                    className="btn btn-maincolor"
                    href="/orm-packages.php"
                  >
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-portfolio">
        <div className="hoverlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center title-mb">
                <h4 className="element-subtitle">OUR PORTFOLIO</h4>
                <h2 className="title">CREATIVITY THAT PERFORM IN OUR WORK</h2>
              </div>
              <div className="col-md-12">
                <div className="bs-example">
                  <ul className="nav nav-tabs justify-content-center">
                    <li className="nav-item">
                      <Link href="#profile" className="nav-link" data-toggle="tab">
                        <div className="icn">
                        <i className="fi fi-tr-url"></i>
                        </div>
                        Search engine optimization portfolio
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#home" className="nav-link active" data-toggle="tab">
                        <div className="icn">
                        <i className="fi fi-tr-customize-computer"></i>
                        </div>
                        Designing &amp; Development portfolio
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#messages" className="nav-link" data-toggle="tab">
                        <div className="icn">
                        <i className="fi fi-tr-category"></i>
                        </div>
                        Mobile Application Development Portfolio
                      </Link>
                    </li>
                  </ul>
                  <PortfolioSlider/>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section className="awards-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center title-mb">
              <h4 className="element-subtitle">AWARDS &amp; RECOGNITIONS</h4>
              <h2 className="title">OUR PRESTIGIOUS AWARDS &amp; RECOGNITIONS</h2>
            </div>
            <div className="col-lg-12 text-center">
              <div className="top-awards">
                <div className="item">
                  <Link href="">
                    <div className="awardbox">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/img/awards/awards-1.webp"
                        data-src="/img/awards/awards-1.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="">
                    <div className="awardbox">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/img/awards/awards-2.webp"
                        data-src="/img/awards/awards-2.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="">
                    <div className="awardbox">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/img/awards/awards-3.webp"
                        data-src="/img/awards/awards-3.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="">
                    <div className="awardbox">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/img/awards/awards-4.webp"
                        data-src="/img/awards/awards-4.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center title-mb">
              <h4 className="element-subtitle">OUR CLIENTS REVIEW</h4>
              <h2 className="title">WHAT CLIENTS SAY ABOUT US</h2>
            </div>
            {/* add by deepak */}
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="image-box">
                {/* <iframe width="" height="" src="https://www.youtube.com/embed/_24r2rStTPY?rel=0&controls=0&autoplay=0&mute=1&modestbranding=1&showinfo=0&fs=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                <img
                  src="/img/testimonial/testinomial6.png"
                  data-src="/img/testimonial/testinomial6.png"
                  alt="Testimonial"
                  className="img-responsive center-block lazy entered loaded"
                  data-toggle="modal"
                  data-target="#imageModal6"
                  data-ll-status="loaded"
                  onClick={openPopup}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="image-box">
                {/* <iframe width="" height="" src="https://www.youtube.com/embed/_24r2rStTPY?rel=0&controls=0&autoplay=0&mute=1&modestbranding=1&showinfo=0&fs=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                <img
                  src="/img/testimonial/testinomial7.png"
                  data-src="/img/testimonial/testinomial7.png"
                  alt="Testimonial"
                  className="img-responsive center-block lazy entered loaded"
                  data-toggle="modal"
                  data-target="#imageModal7"
                  data-ll-status="loaded"
                  onClick={openPopup}
                />
              </div>
            </div>
            {/* add by deepak */}
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="image-box">
                {/* <iframe width="" height="" src="https://www.youtube.com/embed/_24r2rStTPY?rel=0&controls=0&autoplay=0&mute=1&modestbranding=1&showinfo=0&fs=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                <img
                  src="/img/testimonial/testinomial1.webp"
                  data-src="/img/testimonial/testinomial1.webp"
                  alt="Testimonial"
                  className="img-responsive center-block lazy entered loaded"
                  data-toggle="modal"
                  data-target="#imageModal1"
                  data-ll-status="loaded"
                  onClick={openPopup}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="image-box">
                <img
                  src="/img/testimonial/testinomial2.webp"
                  data-src="/img/testimonial/testinomial2.webp"
                  alt="Testimonial"
                  className="img-responsive center-block lazy entered loaded"
                  data-toggle="modal"
                  data-target="#imageModal2"
                  data-ll-status="loaded"
                  onClick={openPopup}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="image-box">
                <img
                  src="/img/testimonial/testinomial3.webp"
                  data-src="/img/testimonial/testinomial3.webp"
                  alt="Testimonial"
                  className="img-responsive center-block lazy entered loaded"
                  data-toggle="modal"
                  data-target="#imageModal3"
                  data-ll-status="loaded"
                  onClick={openPopup}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="image-box">
                <img
                  src="/img/testimonial/testinomial4.webp"
                  data-src="/img/testimonial/testinomial4.webp"
                  alt="Testimonial"
                  className="img-responsive center-block lazy entered loaded"
                  data-toggle="modal"
                  data-target="#imageModal4"
                  data-ll-status="loaded"
                  onClick={openPopup}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="image-box">
                <img
                  src="/img/testimonial/testinomial5.webp"
                  data-src="/img/testimonial/testinomial5.webp"
                  alt="Testimonial"
                  className="img-responsive center-block lazy entered loaded"
                  data-toggle="modal"
                  data-target="#imageModal5"
                  data-ll-status="loaded"
                  onClick={openPopup}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="image-box">
                <img
                  src="/img/testimonial/testinomial6.webp"
                  data-src="/img/testimonial/testinomial6.webp"
                  alt="Testimonial"
                  className="img-responsive center-block lazy entered loaded"
                  data-toggle="modal"
                  data-target="#imageModal6"
                  data-ll-status="loaded"
                  onClick={openPopup}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonialbg-sec position-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 pr-0 pl-0">

            <HomeTestiSlider/>

            </div>
          </div>
        </div>
      </section>

      <section className="rating-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center title-mb">
              <h4 className="element-subtitle">Customer Ratings</h4>
              <h2 className="title">proof that our clients love our work</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 ml-auto">
              <div
                className="circule bg-white rounded-circle text-center lg_img"
                style={{ opacity: ".9" }}
                data-uw-styling-context="true"
              >
                <div className="box2" data-uw-styling-context="true">
                  <div className="logoimg" data-uw-styling-context="true">
                    <Link
                      href="https://www.google.com/maps?q=mediatrenz&iflsig=AINFCbYAAAAAYOQ8N-GY13dmGTBSCVzhPMk-5JYK7HCI&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEMcBEK8BEJMCMgQIABAeMgQIABAeMgQIABAeMgQIABAeMgIIJjoICAAQsQMQgwE6AggAOg4ILhCxAxCDARDHARCjAjoCCC46BQgAELEDOgUIABDJAzoFCAAQkgM6CAguELEDEIMBOgQIABAKOggILhDHARCvAVC1AVieEGDqEWgAcAB4AIAB5wGIAawLkgEFMC45LjGYAQCgAQGqAQdnd3Mtd2l6&uact=5&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjnp9iWnM7xAhVygdgFHRY-A1EQ_AUoBHoECAEQBg"
                      data-uw-styling-context="true"
                    >
                      <img
                        src="/images2/new/14b.png"
                        alt="SEO Services"
                        data-uw-styling-context="true"
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className="box2"
                  style={{ display: "inline-block" }}
                  data-uw-styling-context="true"
                >
                  <div className="logoimg" data-uw-styling-context="true">
                    <Link
                      href="https://www.facebook.com/mediatrenz/"
                      data-uw-styling-context="true"
                    >
                      <img
                        src="/images2/new/facebook.png"
                        alt="facebook"
                        data-uw-styling-context="true"
                      />
                    </Link>
                  </div>
                  <div className="logoimg" data-uw-styling-context="true">
                    <Link
                      href="https://in.linkedin.com/company/mediatrenz"
                      data-uw-styling-context="true"
                    >
                      <img
                        src="/images2/new/linkedin.png"
                        alt="linkedin"
                        data-uw-styling-context="true"
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className="box2"
                  style={{ display: "inline-block" }}
                  data-uw-styling-context="true"
                >
                  <div className="logoimg" data-uw-styling-context="true">
                    <Link
                      href="https://www.glassdoor.co.in/Overview/Working-at-Mediatrenz-EI_IE2133795.11,21.htm"
                      data-uw-styling-context="true"
                    >
                      <img
                        src="/images2/new/glassdoor.png"
                        alt="glassdoor"
                        data-uw-styling-context="true"
                      />
                    </Link>
                  </div>
                  <div className="logoimg" data-uw-styling-context="true">
                    <Link
                      href="https://www.trustpilot.com/review/mediatrenz.com"
                      data-uw-styling-context="true"
                    >
                      <img
                        src="/images2/new/22b.png"
                        alt="SEO Services"
                        data-uw-styling-context="true"
                      />
                    </Link>
                  </div>
                  <div className="logoimg" data-uw-styling-context="true">
                    <Link
                      href="https://www.upwork.com/agencies/840103373927944192/"
                      data-uw-styling-context="true"
                    >
                      <img
                        src="/images2/new/upwork-new.png"
                        alt="upwork"
                        data-uw-styling-context="true"
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className="box2"
                  style={{ display: "inline-block" }}
                  data-uw-styling-context="true"
                >
                  <div className="logoimg" data-uw-styling-context="true">
                    <Link
                      href="https://www.indiamart.com/mediatrenz"
                      data-uw-styling-context="true"
                    >
                      <img
                        src="/images2/new/indiamart.png"
                        alt="indiamart"
                        data-uw-styling-context="true"
                      />
                    </Link>
                  </div>
                  <div className="logoimg" data-uw-styling-context="true">
                    <Link
                      href="https://www.sitejabber.com/reviews/mediatrenz.com"
                      data-uw-styling-context="true"
                    >
                      <img
                        src="/images2/new/sitejabber.png"
                        alt="sitejabber"
                        data-uw-styling-context="true"
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className="box2"
                  style={{ display: "inline-block" }}
                  data-uw-styling-context="true"
                >
                  <div className="logoimg" data-uw-styling-context="true">
                    <Link href="#" data-uw-styling-context="true">
                      <img
                        src="/images2/new/10.webp"
                        alt="SEO Services"
                        data-uw-styling-context="true"
                      />
                    </Link>
                  </div>
                  <div className="logoimg" data-uw-styling-context="true">
                    <Link
                      href="https://www.goodfirms.co/company/mediatrenz/focus"
                      data-uw-styling-context="true"
                    >
                      <img
                        src="/images2/new/good-firms-logo.png"
                        alt="goodfirms"
                        data-uw-styling-context="true"
                      />
                    </Link>
                  </div>
                </div>
                <br data-uw-styling-context="true" />
                <div
                  className="box2"
                  style={{ display: "inline-block" }}
                  data-uw-styling-context="true"
                >
                  <div className="logoimg" data-uw-styling-context="true">
                    <Link
                      href="https://clutch.co/profile/mediatrenz"
                      data-uw-styling-context="true"
                    >
                      <img
                        src="/images2/new/clutch.png"
                        alt="clutch"
                        data-uw-styling-context="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12" data-uw-styling-context="true">
              <div className="image mobile-hide" data-uw-styling-context="true">
                <img
                  className="lazy entered loaded sizenew"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-src="images2/review.webp"
                  data-ll-status="loaded"
                  alt="reviews"
                  data-uw-styling-context="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white blog-sec">
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <div className="blog">
                <div className="title-mb">
                  <h2 className="element-subtitle">Blog</h2>
                  <h2 className="title">Latest From our blog</h2>
                </div>
                <div>
                    {
                      blogsApi && blogsApi.map((blog)=>(
                        <div className="blogbox clearfix" key={blog.id}>
                          <div className="image">
                            {blog.featured_media_src_url && (
                              <img src={blog.featured_media_src_url} alt="featured-image"/>
                            )}
                          </div>
                          <div className="btext">
                            <h4><Link href={blog.link} target="blank">{blog.title.rendered}</Link></h4>
                            <div className="binfo">
                              <span className="date"><i className="fi fi-ts-calendar-days"></i>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(blog.date))}</span>
                              <span className="autour"><i className="fi fi-tr-comment-user"></i>Admin</span>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="faq">
                <div className="title-mb">
                  <h2 className="element-subtitle">FAQS</h2>
                  <h2 className="title">frequently asked questions</h2>
                </div>
                <div>
                  <div id="accordionExample" className="accordion shadow">
                    <div className="card">
                      <div
                        id="headingOne"
                        className="card-header bg-white shadow-sm border-0"
                      >
                        <h6 className="mb-0 font-weight-bold">
                          <a
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            className="d-block position-relative text-dark text-uppercase collapsible-link py-2"
                          >
                            How do you start digital marketing?
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseOne"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                        className="collapse show"
                      >
                        <div className="card-body p-4">
                          <p className="m-0">
                            Before starting digital marketing, we collect information
                            about the clients requirements and audiences. Then we
                            decide which digital marketing strategy will fit for your
                            business in order to achieve the desired results.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        id="headingTwo"
                        className="card-header bg-white shadow-sm border-0"
                      >
                        <h6 className="mb-0 font-weight-bold">
                          <a
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            className="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2"
                          >
                            Can digital marketing increase online sales?
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseTwo"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                        className="collapse"
                      >
                        <div className="card-body p-4">
                          <p className="font-weight-light m-0">
                            Yes, Online sales can be increased, If you invest in the
                            right digital marketing strategies that include paid
                            advertising, content marketing, branding, website
                            optimization, Local SEO, SMO.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        id="headingThree"
                        className="card-header bg-white shadow-sm border-0"
                      >
                        <h6 className="mb-0 font-weight-bold">
                          <a
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            className="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2"
                          >
                            How do I measure digital marketing ROI?
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseThree"
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                        className="collapse"
                      >
                        <div className="card-body p-4">
                          <p className="font-weight-light m-0">
                            We will be sharing Monthly report with you that includes
                            the Traffic &amp; Goal Conversion report, Ranking, and
                            more.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        id="headingFour"
                        className="card-header bg-white shadow-sm border-0"
                      >
                        <h6 className="mb-0 font-weight-bold">
                          <a
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                            className="d-block position-relative text-dark text-uppercase collapsible-link py-2"
                          >
                            How much does digital marketing cost?
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseFour"
                        aria-labelledby="headingFour"
                        data-parent="#accordionExample"
                        className="collapse"
                      >
                        <div className="card-body p-4">
                          <p className="font-weight-light m-0">
                            It depends on your requirements. We offer customized
                            digital marketing packages that suited any kind of
                            business (Large, Medium &amp; Small).
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div
                        id="headingFive"
                        className="card-header bg-white shadow-sm border-0"
                      >
                        <h6 className="mb-0 font-weight-bold">
                          <a
                            href="#"
                            data-toggle="collapse"
                            data-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                            className="d-block position-relative text-dark text-uppercase collapsible-link py-2"
                          >
                            HOW DO YOU START DIGITAL MARKETING?
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseFive"
                        aria-labelledby="headingFive"
                        data-parent="#accordionExample"
                        className="collapse"
                      >
                        <div className="card-body p-4">
                          <p className="font-weight-light m-0">
                            Before starting digital marketing, we collect information
                            about the clients requirements and audiences. Then we
                            decide which digital marketing strategy will fit for your
                            business in order to achieve the desired results.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <HappyClients/>

      <ContactSection/>

      { 
      openModal && (
        <>
          <div className="modal fade mtz" id="imageModal6" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                    <button type="button" className="close btn-close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
											<span aria-hidden="true">×</span>
										</button>    
                <div className="modal-body bg-border p-0">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe width={1250} height={703} src="https://www.youtube.com/embed/zhJmBBHmWzo" title="MEDIATRENZ Testimonial : Destiny Whitehead" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                  </div>   
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade mtz" id="imageModal7" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content"> 
              <button type="button" className="close btn-close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                <span aria-hidden="true">×</span>
              </button>     
              <div className="modal-body bg-border p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe width={445} height={791} src="https://www.youtube.com/embed/yOCnYAbhhxs" title="MEDIATRENZ Testimonial from Sam Chehab" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                </div>   
              </div>
            </div>
          </div>
        </div> 
        {/* end deepak */}
        <div className="modal fade mtz" id="imageModal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="close btn-close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                <span aria-hidden="true">×</span>
              </button>      
              <div className="modal-body bg-border p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item lazy" src="https://www.youtube.com/embed/_24r2rStTPY?rel=0&controls=0&autoplay=0&mute=0&modestbranding=1&showinfo=0&fs=0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> 
                </div>   
              </div>
            </div>
          </div>
        </div> 
        <div className="modal fade mtz" id="imageModal2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <button type="button" className="close btn-close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                  <span aria-hidden="true">×</span>
              </button>    
              <div className="modal-body bg-border p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item lazy" src="https://www.youtube.com/embed/7yfrWTTATaM?rel=0&controls=0&autoplay=0&mute=0&modestbranding=1&showinfo=0&fs=0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> 
                </div>   
              </div>
            </div>
          </div>
        </div> 
        <div className="modal fade mtz" id="imageModal3" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">  
              <button type="button" className="close btn-close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                  <span aria-hidden="true">×</span>
              </button>    
              <div className="modal-body bg-border p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item lazy" src="https://www.youtube.com/embed/TfZo-oDlBhw?rel=0&controls=0&autoplay=0&mute=0&modestbranding=1&showinfo=0&fs=0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> 
                </div>   
              </div>
            </div>
          </div>
        </div> 
        <div className="modal fade mtz" id="imageModal4" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content"> 
              <button type="button" className="close btn-close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                <span aria-hidden="true">×</span>
              </button>     
              <div className="modal-body bg-border p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item lazy" src="https://www.youtube.com/embed/t_dZysdqlqY?rel=0&controls=0&autoplay=0&mute=0&modestbranding=1&showinfo=0&fs=0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> 
                </div>   
              </div>
            </div>
          </div>
        </div> 
        <div className="modal fade mtz" id="imageModal5" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">  
              <button type="button" className="close btn-close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                <span aria-hidden="true">×</span>
              </button>    
              <div className="modal-body bg-border p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item lazy" src="https://www.youtube.com/embed/5Lv4_8RreHc?rel=0&controls=0&autoplay=0&mute=0&modestbranding=1&showinfo=0&fs=0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> 
                </div>   
              </div>
            </div>
          </div>
        </div> 
        <div className="modal fade mtz" id="imageModal6" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content"> 
              <button type="button" className="close btn-close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                <span aria-hidden="true">×</span>
              </button>     
              <div className="modal-body bg-border p-0">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item lazy" src="https://www.youtube.com/embed/4itNlNN39NA?rel=0&controls=0&autoplay=0&mute=0&modestbranding=1&showinfo=0&fs=0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> 
                </div>   
              </div>
            </div>
          </div>
        </div>

        </>
        )
      }

    </>
  );
}

