import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Link from 'next/link';

export default function HomeTopSlider(){
    return (
        <>
        
        <video className="lazy entered loaded" autoPlay muted loop id="bgVideo" data-ll-status="loaded">
            <source src="/img/background-video.mp4" data-src="/img/background-video.mp4" type="video/mp4" />
        </video>
    
        
        <div className="hero-slider">
            <Swiper slidesPerView={1} loop={true} modules={[Navigation, Autoplay]} navigation autoplay={{delay:3000}}>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="hero-image" />
                            <div className="hero-text">
                                <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                    <div className="thin-text2">Result-Driven</div>
                                    <h1 className="bold-text">SEO Consultant India</h1>
                                    <div className="thin-text1">
                                        Boost Organic Traffic to Your Website with Result-Driven SEO
                                        Company India
                                    </div>
                                    <div className="slider-btn">
                                        <Link
                                        className="btn btn-maincolor"
                                        href="seo-services.php"
                                        >
                                        Read More
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slider-item">
                        <div className="hero-image" />
                        <div className="hero-text">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                <div className="thin-text2">Top Rated</div>
                                <div className="bold-text">Ecommerce SEO Agency</div>
                                <div className="thin-text1">
                                    ROI Driven Ecommerce SEO Agency in India
                                </div>
                                <div className="slider-btn">
                                    <Link
                                    className="btn btn-maincolor"
                                    href="ecommerce-seo-services.php"
                                    >
                                    Read More
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slider-item">
                        <div className="hero-image" />
                        <div className="hero-text">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                <div className="thin-text2">Review</div>
                                <div className="bold-text">Acquisition &amp; Management</div>
                                <div className="thin-text1">
                                    Build Strong Trust Among the Customers with Reputation
                                    Management
                                </div>
                                <div className="slider-btn">
                                    <Link
                                    className="btn btn-maincolor"
                                    href="online-reputation-management-services.php"
                                    >
                                    Read More
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slider-item">
                        <div className="hero-image" />
                        <div className="hero-text">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                <div className="thin-text2">Elegant</div>
                                <div className="bold-text">UI/UX Design &amp; Layouts</div>
                                <div className="thin-text1">
                                    Elegant UI/UX Design that Make the Website Easy on the Eyes
                                </div>
                                <div className="slider-btn">
                                    <Link
                                    className="btn btn-maincolor"
                                    href="website-designing-services.php"
                                    >
                                    Read More
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slider-item">
                        <div className="hero-image" />
                        <div className="hero-text">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                <div className="thin-text2">Conversion-Driven</div>
                                <div className="bold-text">Website Development</div>
                                <div className="thin-text1">
                                    Responsive, User Friendly &amp; Easy to Navigate.
                                </div>
                                <div className="slider-btn">
                                    <Link
                                    className="btn btn-maincolor"
                                    href="web-development-services.php"
                                    >
                                    Read More
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slider-item">
                        <div className="hero-image" />
                        <div className="hero-text">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                <div className="thin-text2">Professional</div>
                                <div className="bold-text">Headless Web Development</div>
                                <div className="thin-text1">
                                    Get Seamless Experiences with Headless Website
                                </div>
                                <div className="slider-btn">
                                    <Link className="btn btn-maincolor" href="headless-portfolio.php">
                                    Read More
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    
        </>
      );
}

