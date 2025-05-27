import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function PortfolioSlider(){
    return (
        <>
        
        <div className="tab-content">

            <div className="tab-pane fade show active" id="home">
                <div className="main-drag">
                <div className="mockup-laptop-slider">
                    <div className="mockup-box">
                    <img
                        className="lazy entered loading"
                        alt="seo"
                        src="img/portfolio/laptop.webp"
                        data-ll-status="loading"
                    />
                    </div>
                </div>

                <div id="owl-portfolio" className="owl-carousel owl-theme owl-loaded owl-drag">
                    <Swiper slidesPerView={3} spaceBetween={30} loop={true} modules={[Pagination, Autoplay]} pagination={{el: '.swiper-custom-pagination1', clickable: true}} autoplay={{delay:3000}} centeredSlides={true}
                    breakpoints={{
                        320: {
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

            <div className="tab-pane fade" id="profile">
                <div className="main-drag">
                <div className="mockup-laptop-slider">
                    <div className="mockup-box">
                    <img src="img/portfolio/laptop.webp" alt="SEO" />
                    </div>
                </div>

                <div id="owl-portfolio2" className="owl-carousel owl-theme owl-loaded owl-drag">
                    <Swiper slidesPerView={3} spaceBetween={30} loop={true} modules={[Pagination, Autoplay]} pagination={{el: '.swiper-custom-pagination2', clickable: true}} autoplay={{delay:3000}} centeredSlides={true}
                    breakpoints={{
                        320: {
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
                                    className="card-img-top lazy"
                                    src="img/portfolio/dantle-crown-incino.webp"
                                    alt="dantle crown incino"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="item">
                                <div className="card">
                                    <img
                                    className="card-img-top lazy"
                                    src="img/portfolio/daltle-crown-westerwood.webp"
                                    alt="daltle crown westerwood"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="item">
                                <div className="card">
                                    <img
                                    className="card-img-top lazy"
                                    src="img/portfolio/holistic-dentist-la-mesa-ca.webp"
                                    alt="holistic dentist la mesa ca"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="item">
                                <div className="card">
                                    <img
                                    className="card-img-top lazy"
                                    src="img/portfolio/Quick-turn-rapid-flex.webp"
                                    alt="Quick turn rapid flex"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="item">
                                <div className="card">
                                    <img
                                    className="card-img-top lazy"
                                    src="img/portfolio/scarlet-macew-for-sale.webp"
                                    alt="scarlet macew for sale"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="item">
                                <div className="card">
                                    <img
                                    className="card-img-top lazy"
                                    src="img/portfolio/card-show-dispaly-board.webp"
                                    alt="Card show dispaly board"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper-custom-pagination2" style={{'marginTop': '40px'}}/>
                </div>

                </div>
            </div>

            <div className="tab-pane fade" id="messages">
                <div className="main-drag">
                    <div className="mockup-laptop-slider">
                        <div className="mockup-box-mobile">
                        <img src="img/portfolio/mobile.webp" alt="Mobile" />
                        </div>
                    </div>

                    <div id="owl-portfolio3" className="owl-carousel owl-theme owl-loaded owl-drag">
                        <Swiper slidesPerView={5} spaceBetween={30} loop={true} modules={[Pagination, Autoplay]} pagination={{el: '.swiper-custom-pagination3', clickable: true}} autoplay={{delay:3000}} centeredSlides={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 4,
                            },
                            768: {
                                slidesPerView: 5,
                            },
                        }}
                        > 
                            <SwiperSlide>
                                <div className="item">
                                <div className="card">
                                    <img
                                    className="card-img-top lazy"
                                    src="img/portfolio/yathar.webp"
                                    alt="yathar"
                                    />
                                </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="item">
                                <div className="card">
                                    <img
                                    className="card-img-top lazy"
                                    src="img/portfolio/DRIVA-PARTNER-f.webp"
                                    alt="DRIVA PARTNER"
                                    />
                                </div>
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="item">
                                <div className="card">
                                    <img
                                    className="card-img-top lazy"
                                    src="img/portfolio/TABLETSHABLET-f.webp"
                                    alt="TABLETSHABLET"
                                    />
                                </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="item">
                                <div className="card">
                                    <img
                                    className="card-img-top lazy"
                                    src="img/portfolio/TRUCKER-CONVOY-f.webp"
                                    alt="TRUCKER CONVOY"
                                    />
                                </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="item">
                                <div className="card">
                                    <img
                                    className="card-img-top lazy"
                                    src="img/portfolio/WOMEN-TO-WOMEN-f.webp"
                                    alt="WOMEN TO WOMEN"
                                    />
                                </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="item">
                                <div className="card">
                                    <img
                                    className="card-img-top lazy"
                                    src="img/portfolio/DRIVA-ONLINE-f.webp"
                                    alt="DRIVA ONLINE"
                                    />
                                </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="swiper-custom-pagination3" style={{'marginTop': '40px'}}/>   
                    </div>
                </div>
            </div>

        </div>
    
        </>
      );
}

