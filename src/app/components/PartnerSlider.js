'use client';
import Link from "next/link";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

export default function PartnerSlider(){
    return(
      <>
        <section className="digital-ser">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="title">Online Marketing Services</h2>
              </div>
              <div className="col-lg-12">
                <div id="sercarousel">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    loop={true}
                    modules={[Pagination]}
                    pagination={{el: '.swiper-custom-pagination1', clickable: true}}
                    breakpoints={{
                      350: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div className="dser-box d-flex">
                        <div className="image align-self-center">
                          <img src="/images2/ser-gll.webp" alt="Google Listing" />
                        </div>
                        <div className="info">
                          <h2 className="name">Google Local Listing</h2>
                          <div className="content_info">
                            <h6>
                              Your business will gain tremendously from a Google local listing. Lots of people use the internet to locate local businesses that provide the services and products that they wish to buy.
                            </h6>
                          </div>
                          <Link href="local-seo-services.php" className="btn btn-maincolor" title="Learn More">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                      <div className="dser-box d-flex">
                        <div className="image align-self-center">
                          <img src="/images2/ser-orm.webp" alt="ORM Services" />
                        </div>
                        <div className="info">
                          <h2 className="name">Online Reputation Management (ORM)</h2>
                          <div className="content_info">
                            <h6>
                              It is extremely important to have a good reputation on the internet because potential and existing customers will be highly influenced by what they read about you online.
                            </h6>
                          </div>
                          <Link href="orm-services.php" className="btn btn-maincolor" title="Learn More">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="dser-box d-flex">
                        <div className="image align-self-center">
                          <img src="/images2/ser-ppc.webp" alt="Pay Per Click" />
                        </div>
                        <div className="info">
                          <h2 className="name">Pay Per Click Marketing</h2>
                          <div className="content_info">
                            <h6>
                              Pay Per Click or PPC is a very good way of getting customers. It is very popular with advertisers because it delivers targeted traffic to a website.
                            </h6>
                          </div>
                          <Link href="ppc-packages.php" className="btn btn-maincolor" title="Learn More">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="dser-box d-flex">
                        <div className="image align-self-center">
                          <img src="/images2/ser-seo1.webp" alt="SEO Services" />
                        </div>
                        <div className="info">
                          <h2 className="name">Search Engine Optimization (SEO)</h2>
                          <div className="content_info">
                            <h6>
                              MEDIATRENZ will make sure that your company features very high on search engine results pages (SERPs).
                            </h6>
                          </div>
                          <Link href="seo-services.php" className="btn btn-maincolor" title="Learn More">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="dser-box d-flex">
                        <div className="image align-self-center">
                          <img src="/images2/ser-smo.webp" alt="SMO Services" />
                        </div>
                        <div className="info">
                          <h2 className="name">Social Media Optimization (SMO)</h2>
                          <div className="content_info">
                            <h6>
                              Social media optimization helps you connect with your customers directly in the easiest possible manner.
                            </h6>
                          </div>
                          <Link href="smo-packages.php" className="btn btn-maincolor" title="Learn More">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="swiper-custom-pagination1" style={{'marginTop': '40px', 'textAlign': 'center'}} > </div>
                </div>
              </div>
            </div>
          </div>
        </section> 
      </> 
    )
}