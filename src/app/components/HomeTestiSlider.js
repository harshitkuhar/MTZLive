import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


export default function HomeTestiSlider() {
  return (
    <>
        <div id="owl-testimonials" className="owl-carousel owl-theme owl-loaded owl-drag">
            <Swiper slidesPerView={1} loop={true} modules={[Pagination, Autoplay]} pagination={{el: '.swiper-testi-pagination', clickable: true}} autoplay={{delay:3000}}>
                <SwiperSlide>
                    <div className="item">
                        <div className="testi-block">
                        <div className="inner">
                            <div className="info">
                            <div className="name">Dr. Marcus Long</div>
                            <div className="designation">Director, mylibrary.in</div>
                            </div>
                            <div className="text">
                            MEDIATRENZ is company for me which gives me results more
                            than even 100%. I have taken their 10 Keyword package and
                            after 6 month, all keywords are on first page.
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item">
                        <div className="testi-block">
                        <div className="inner">
                            <div className="info">
                            <div className="name">Dr. Marcus Long</div>
                            <div className="designation">Manager, saiarco.com</div>
                            </div>
                            <div className="text">
                            MEDIATRENZ is trustworthy name among the list of SEO
                            Companies. Their dedication and co-operation has resulted as
                            ever increasing visibility of our website.
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item">
                        <div className="testi-block">
                        <div className="inner">
                            <div className="info">
                            <div className="name">Anson Wu</div>
                            <div className="designation">CEO, www.freshds.com</div>
                            </div>
                            <div className="text">
                            I have been working with MEDIATRENZ for over a year . We are
                            genuinely happy about their client service and final
                            deliveries. They managed to develop good quality websites
                            and web apps at an reasonable rate. I will recommend anyone
                            looking to outsource their website development, consider
                            MEDIATRENZ as one of their strong candidates.
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item">
                        <div className="testi-block">
                        <div className="inner">
                            <div className="info">
                            <div className="name">Dr. Marcus Long</div>
                            <div className="designation">
                                Head of Media, www.dehmedia.com
                            </div>
                            </div>
                            <div className="text">
                            I was looking for the designing, development for my website.
                            They showed me many samples and had given me superb ideas.
                            Amazing work for my site, thank you guys!
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-testi-pagination" style={{'marginTop': '20px', 'textAlign': 'center'}}/>
        </div>
    </>
  )
}
