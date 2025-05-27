import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Link from 'next/link';

export default function WebPortfolioSlider(){
    return (
        <>
            <section className="home-portfolio">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 text-center title-mb">
                        <h4 className="element-subtitle">OUR PORTFOLIO</h4>
                        <h2 className="title">CREATIVITY THAT PERFORM IN OUR WORK</h2>
                    </div>
                    <div className="col-md-12">
                        <div className="bs-example">
                        <div className="main-drag">
                            <div className="mockup-laptop-slider">
                            <div className="mockup-box">
                                <img src="/images2/laptop.webp" alt="Web Development" />
                            </div>
                            </div>
                            <div id="owl-portfolio" className="owl-carousel owl-theme owl-loaded owl-drag">
                                <Swiper slidesPerView={3} spaceBetween={30} loop={true} modules={[Pagination, Autoplay]} pagination={{el: '.swiper-custom-pagination1', clickable: true}} autoplay={{delay:3000}} centeredSlides={true}
                                breakpoints={{
                                    350: {
                                      slidesPerView: 2,
                                    },
                                    768: {
                                      slidesPerView: 3,
                                    },
                                }}
                                >
                                <SwiperSlide>
                                    <div className="item">
                                    <div className="card">
                                        <img
                                        className="card-img-top lazy entered exited"
                                        alt="JAIN ESTATES"
                                        src="img/portfolio/JAIN-ESTATES-f.webp"
                                        />
                                    </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item">
                                    <div className="card">
                                        <img
                                        className="card-img-top lazy entered exited"
                                        alt="ORELIA"
                                        src="img/portfolio/ORELIA-f.webp"
                                        />
                                    </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item">
                                    <div className="card">
                                        <img
                                        className="card-img-top lazy entered exited"
                                        alt="PLAINS BREAKER APPAREL"
                                        src="img/portfolio/PLAINS-BREAKER-APPAREL-f.webp"
                                        />
                                    </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item">
                                    <div className="card">
                                        <img
                                        className="card-img-top lazy entered loading"
                                        alt="CHEF ZIPORA GLOBAL"
                                        src="img/portfolio/CHEF-ZIPORA-GLOBAL-f.webp"
                                        data-ll-status="loading"
                                        />
                                    </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item">
                                    <div className="card">
                                        <img
                                        className="card-img-top lazy entered loading"
                                        alt="CLOSET CANDY"
                                        src="img/portfolio/CLOSET-CANDY-f.webp"
                                        data-ll-status="loading"
                                        />
                                    </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item">
                                    <div className="card">
                                        <img
                                        className="card-img-top lazy entered exited"
                                        alt="HERBALCART"
                                        src="img/portfolio/HERBALCART-ff.webp"
                                        />
                                    </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="swiper-custom-pagination1" style={{'marginTop': '40px'}}/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 text-center mt-30">
                        <Link href="web-development-portfolio.php" className="btn btn-maincolor">
                        View All
                        </Link>
                    </div>
                    </div>
                </div>
            </section>
        </>
      );
}