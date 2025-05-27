import Link from "next/link";
import ContactSection from "../components/ContactSection";
import HappyClients from "../components/HappyClients";
import AuditForm from "../components/FormWithWebsiteField";

export const metadata = {
  title: "Top SEO Services in New York | NYC SEO Agency | Mediatrenz",
  description: "Boost your online presence with top SEO services in New York. Leading NYC SEO agency offering expert search engine optimization. Your trusted New York SEO firm.",
  keywords: "New York SEO Company,SEO Services New York,Best SEO Company NYC",
  og_title: "SEO Services New York | SEO Company NYC | SEO Experts NYC",
  og_description: "NYC SEO Services. Contact MEDIATRENZ for New York City SEO services. As an SEO company in NYC, we have a proven track record to deliver quality traffic & leads.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/seo-services-nyc-newyork.php`, // Generate the canonical URL
  },
};

export default function LinkBuildingServices() {
  return (
    <>
      <div className="innerbanner" style={{backgroundImage: 'url(/images2/all-images/seo-services-nyc-newyork-image.webp)'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcurmb-content">
                  <h1 className="page-title">SEO company nyc</h1>
                  <div className="breadcrumb_item ul-li">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="https://mediatrenz.com">Home</Link></li>
                      {/* <li className="breadcrumb-item"><Link href="#">Mobile Apps</Link></li>*/}
                      <li className="breadcrumb-item active">Seo Services NYC NewYork</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="ormsec1">
          <div className="container pos-rel ">
            <div className="row justify-content-center"> 
              <div className="col-md-6 clearfix"> 
                <div className="simagebox">
                  <div className="circle" />
                  <div className="circle2" />
                  <div className="image clearfix">
                    <img src="/images2/all-images/seo-services-nyc-newyork.webp" alt="Seo Services NYC NewYork" />
                  </div>
                </div>
              </div> 
              <div className="col-md-6">
                <h3 className="title">DISCOVER THE BEST NEW YORK SEO COMPANY</h3>
                <p>You have a brand, and you need it to pop up on the top of every search result, and what better way than to get help from the Best SEO Company in NYC has to offer? At Mediatrenz, we ensure that your company gets only the best SEO services. All you need to do is give us one call, and {`we’ll`} get started with your brand upliftment.</p>
                <p>Our New York SEO Company can help you with internet marketing so that your brand can stay put on the internet map. Our SEO services can help your company be the first thing that comes to the mind of any individual who looks at your services or similar online. This is an opportunity for your company to grow in the very new world of the internet.</p>
              </div>
              <div className="col-md-12">
                <p>The internet has a very different perspective, and {`that’s`} how our Search Engine Optimization services in NYC can make sure that your company has that visibility. There is a term that the new internet gen says, “internet clout,” which means paying attention online. And we can bring you that which will help you attract consumers worldwide.</p> 
                <p>Call us at <Link href="callto:+1-302-918-5473"><b>+1-302-918-5473</b></Link> and get the SEO fix that your company needs immediately!</p>
              </div>
            </div>
          </div>
        </section>
        <section className="ranking-form form1">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="form-heading">
                  <h2 className="title text-white">WOULD YOU LIKE TO HAVE A FREE WEBSITE AUDIT?</h2>
                  <p className="text-white" style={{paddingBottom: '30px'}}>Get your website free audit report within 24 hours &amp; find mistake <br /> that are holding your website to get rank. </p>                  
                </div>
              </div>
              <div className="col-md-12 text-center">
                <div className="row">
                  {/* <form method="post" id="website-analysis" className="row form-colom">
                    <div className="col-md-6 mr0">
                      <div className="form-group">
                        <input type="text" name="name" className="form-control effect-8" placeholder="Name" required />
                        <span className="focus-border"><i /></span>
                      </div>
                    </div>
                    <div className="col-md-6 mr0">
                      <div className="form-group">
                        <input type="email" name="email" className="form-control effect-8" placeholder="Email" required />
                        <span className="focus-border"><i /></span>
                      </div>
                    </div>
                    <div className="col-md-6 mr0">
                      <div className="form-group">
                        <input type="text" name="phone" className="form-control effect-8" placeholder="Phone" required />
                        <span className="focus-border"><i /></span>
                      </div>
                    </div>
                    <div className="col-md-6 mr0">
                      <div className="form-group">
                        <input type="text" name="website" className="form-control effect-8" placeholder="Website URL" required />
                        <span className="focus-border"><i /></span>
                      </div>
                    </div>
                    <div className=" col-md-12 text-center">
                      <input type="submit" className="btn btn-success ajax_mail_sender" name="freeWebsite" defaultValue="Free Website Analysis" />
                      <input type="hidden" name="form_page_name" defaultValue="SEO Services NYC Newyork" />
                      <input type="hidden" name="form_name" defaultValue="seo_services_nyc_newyork_page" />
                      <p className="message" />
                    </div> 
                  </form> */}
                  <AuditForm/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fbsec">
          <div className="container pos-rel">
            <div className="row">
              <div className="col-md-6">
                <h2 className="title">WE KNOW YOUR COMPANY THE BEST</h2>
                {/* <h3 className="subtitle2">Facebook ads are effective when you target the correct locations, demographics and interest groups.</h3> */}
                <p className="mb-0">As much as we may sound cocky for saying this, but we know that as the best NYC SEO agency, we can help your brand with the following:</p>
                <p className="mb-0">At Mediatrenz, it becomes our sole ambition to make your company get the best of SEO Services in New York. After all, your company should aim for only the best. Why go someplace else when the answer is right in front of you?</p>
              </div>
              <div className="col-md-6">
                <div className="row">
                  {/* <div className="col-lg-6 col-md-6 item-grid">
                  <div className="item greenbg">
                    <h5>FACEBOOK CAMPAIGN MANAGEMENT</h5>
                    <p>Spread your business by making it more enhanced, attractive and engaged with our professionally offered Facebook campaign management which brings the active audience to the service page.</p>
                  </div>
                </div> */}
                  <div className="col-lg-12 col-md-12 item-grid">
                    <div className="item pinkbg">
                      <ul className="bullet-style2">
                        <li> <i className='fi fi-bs-check-circle'></i>
                        We make sure we collect vital information of clients who have purchased from you</li>
                        <li> <i className='fi fi-bs-check-circle'></i>
                        That way, we can filter out what they might require next</li>
                        <li> <i className='fi fi-bs-check-circle'></i>
                        Our keyword placement can help your brand get listed on the top pages of search engines</li>
                        <li> <i className='fi fi-bs-check-circle'></i>
                        Eventually, our SEO services can help you get more consumers, have a higher conversion rate, and increase sales</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="packagessec">
          <div className="container-fluid text-center pos-rel cstm-pd60">
            <h2 className="title text-white">Our Nyc NewYork SEO Services Packages</h2>
            <div className="psubbox">HIGH QUALITY Nyc NewYork SEO Services SOLUTIONS FOR BUSINESSES</div>
            <div className="row">
              <div className="cstm-col-package mt-3">
                <div className="inner">
                  <div className="packagebox">
                    <div className="num">01</div>
                    <div className="packagename">SEO STARTER</div>
                    <div className="packageprice">$349</div>
                    <div className="btn-link1"><Link href="seo-packages.php">Select<span className="flaticon-right-arrow" /></Link></div>
                  </div>
                </div>
              </div>
              <div className="cstm-col-package mt-3">
                <div className="inner">
                  <div className="packagebox">
                    <div className="num">02</div>
                    <div className="packagename">SEO BOOSTER</div>
                    <div className="packageprice">$599</div>
                    <div className="btn-link1"><Link href="seo-packages.php">Select<span className="flaticon-right-arrow" /></Link></div>
                  </div>
                </div>
              </div>
              <div className="cstm-col-package mt-3">
                <div className="inner">
                  <div className="packagebox">
                    <div className="num">03</div>
                    <div className="packagename">SEO SPEED</div>
                    <div className="packageprice">$999</div>
                    <div className="btn-link1"><Link href="seo-packages.php">Select<span className="flaticon-right-arrow" /></Link></div>
                  </div>
                </div>
              </div>
              <div className="cstm-col-package mt-3">
                <div className="inner">
                  <div className="packagebox">
                    <div className="num">04</div>
                    <div className="packagename">SEO EDGE</div>
                    <div className="packageprice">$1299</div>
                    <div className="btn-link1"><Link href="seo-packages.php">Select<span className="flaticon-right-arrow" /></Link></div>
                  </div>
                </div>
              </div>
              <div className="cstm-col-package mt-3">
                <div className="inner">
                  <div className="packagebox">
                    <div className="num">05</div>
                    <div className="packagename">SEO PRIME</div>
                    <div className="packageprice">$1499</div>
                    <div className="btn-link1"><Link href="seo-packages.php">Select<span className="flaticon-right-arrow" /></Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fullsersec" style={{background: 'url(images2/fbadsbg.webp)'}}>
          <div className="container pos-rel text-center">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h2 className="title text-white">WHAT SETS US APART</h2>
              </div>
              <div className="col-md-12">
                <p className="paragraph">As a New York SEO firm, many people think that our reach is only up to that part of the world. But it’s much more than that. With our SEO Services, your company can participate in the globalization revolution where major companies do the same. Our team of experts can make your company’s services pop up in a million phones and other devices in a short span.</p><p />
              </div>
            </div>
          </div>
        </section>
        <section className="ormsec4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <h2 className="title">REACH OUT TODAY!</h2>
                {/* <h3 className="subtitle2">Rolling Instagram management includes activities that enhance user engagement and build your following.</h3> */}
                <p>As we provide SEO Services in New York, we already have us on speed dial. And we would suggest you do the same. Our services will ensure that your company gets the success it deserves. We help you, help yourselves. All you need to do is pick up the phone and email or call us right away. We are the <Link href="https://mediatrenz.com/seo-services.php">top SEO service providers</Link> for getting your company on the digital map, don’t shy away from an opportunity like that.</p>
              </div>
              {/*   <div className="col-md-4">
              <div className="image"><img src="images2/all-images/SEO-SERVICES-NYC NEWYORK-MANAGER.webp" alt="Seo Services NYC NewYork"></div>
            </div> */}
            </div>
          </div>
        </section>
        <section className="bottomserviecs-sec">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12 text-center title-mb">
                <h4 className="element-subtitle text-white">Our Services</h4>
                <h2 className="title text-white">We Build Brands With Our Best Services</h2>
              </div>
            </div>
            <div className="row mmt-30 text-left">
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="seo-services-nyc-newyork.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">SEO SERVICES NYC NEWYORK</div>
                    </div>
                    <div className="icnbox-box-no">01</div>
                    <p>As much as we may sound cocky for saying this, but we know...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/seo-services-nyc-newyork.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="dallas-seo-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">DALLAS SEO SERVICES</div>
                    </div>
                    <div className="icnbox-box-no">02</div>
                    <p>We guarantee that our Dallas SEO Services TX will help you get the best...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/dallas-seo-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="seo-services-california.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">SEO SERVICES CALIFORNIA</div>
                    </div>
                    <div className="icnbox-box-no">03</div>
                    <p>You don’t have to believe us, but we have results to prove our point...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/seo-services-california.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="seo-company-los-angeles-ca.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">SEO COMPANY LOS ANGELES CA</div>
                    </div>
                    <div className="icnbox-box-no">04</div>
                    <p>We are an SEO Company Los Angeles, CA, and when we take a step...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/seo-company-los-angeles-ca.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="seo-company-pennsylvania.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">SEO COMPANY PENNSYLVANIA</div>
                    </div>
                    <div className="icnbox-box-no">05</div>
                    <p>For the ones who {`don't`} know how SEO works via our SEO Agency in...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/seo-company-pennsylvania.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="san-diego-seo-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">SAN DIEGO SEO SERVICES</div>
                    </div>
                    <div className="icnbox-box-no">06</div>
                    <p>You genuinely {`don’t`} need to do that, as our San Diego SEO company...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/san-diego-seo-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
            </div>
          </div>
        </section>
        <div className="see-our-result">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="heading">
                  <div className="title text-white">Check our Creative Work</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="see-result-btn">
                  <Link href="https://mediatrenz.com/seo-portfolio.php">SEO Portfolio<span> *</span></Link>
                  <Link href="https://mediatrenz.com/web-development-portfolio.php">Web Portfolio<span> *</span></Link>
                  <Link href="https://mediatrenz.com/mobile-app-portfolio.php">App Portfolio<span> *</span></Link>
                  <Link href="https://mediatrenz.com/testimonials.php">Testimonials<span> *</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      <HappyClients />
      <ContactSection />
    </>
  );
}