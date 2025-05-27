import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Portfolio(Portfolio) {
  const results = Portfolio.data;
  return (
    <section className="home-portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center title-mb">
            <h4 className="element-subtitle">OUR PORTFOLIO</h4>
            <h2 className="title">CREATIVITY THAT PERFORM IN OUR WORK</h2>
          </div>
          <div className="col-md-12">
            <div className="bs-example">
              <div className="">
                <div className="main-drag">
                  <div className="mockup-laptop-slider">
                    <div className="mockup-box-mobile">
                      <img src="img/portfolio/mobile.webp" alt="Mobile" />
                    </div>
                  </div>

                  <div
                    id="owl-portfolio3"
                    className="owl-carousel owl-theme owl-loaded owl-drag"
                  >
                    <Swiper
                      slidesPerView={5}
                      spaceBetween={30}
                      loop={true}
                      modules={[Pagination, Autoplay]}
                      pagination={{
                        el: ".swiper-custom-pagination3",
                        clickable: true,
                      }}
                      autoplay={{ delay: 3000 }}
                      centeredSlides={true}
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
                    <div
                      className="swiper-custom-pagination3"
                      style={{ marginTop: "40px", textAlign: "center" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center mt-30">
            <Link
              href="/mobile-app-portfolio.php"
              className="btn btn-maincolor"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
