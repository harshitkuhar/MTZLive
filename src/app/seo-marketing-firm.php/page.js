import Link from "next/link";
import ContactSection from "../components/ContactSection";
import HappyClients from "../components/HappyClients";
import AuditForm from "../components/FormWithWebsiteField";

export const metadata = {
  title: "SEO Firm in India, SEO Marketing Company India",
  description: "SEO Marketing Company India: Our company is counted as the best SEO firm in India. We have professional teams that provide ethical search engine optimization for your business.",
  keywords: "SEO Firm in India,Ethical Search Engine Optimization",
  og_title: "SEO Firm in India, SEO Marketing Company India",
  og_description: "SEO Marketing Company India: Our company is counted as the best SEO firm in India. We have professional teams that provide ethical search engine optimization for your business.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/seo-marketing-firm.php`, // Generate the canonical URL
  },
};

export default function SeoMarketingFirm() {
  return (
    <>
        <div className="innerbanner" style={{backgroundImage: 'url(images2/all-images/seo-marketing-firm-banner.webp)'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcurmb-content">
                  <h1 className="page-title">SEO Marketing Firm</h1>
                  <div className="breadcrumb_item ul-li">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="https://mediatrenz.com">Home</Link></li>
                      {/* <li className="breadcrumb-item"><Link href="#">Mobile Apps</Link></li>*/}
                      <li className="breadcrumb-item active">Seo Marketing Firm</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="ormsec2">
          <div className="container pos-rel">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h2 className="title">SEO Firm In India – Presenting Ethical Ways To Reach To The Top</h2>
                <p>You might have come across <b>SEO Firm in India</b> before hand and worked on steps the consultants asked you to. But working blindly without knowing what you are getting yourself into is the biggest mistake you could have possibly made. Focusing on ethical white hat SEO practices is important as that will help your business to grow with time.</p>
                <p>Some people follow black hat SEO to get benefits on a faster scale. But, if ever caught, your website will be blacklisted forever, and you will lose your business. There is no need to take up such challenges at all. So, the best plan is to follow <b>Ethical Search Engine Optimization</b> straight from our house at Media Trenz.</p>
                <p>We understand {`SEO's`} meaning and will always work out on the ethical points. Yes, it might take some time to reach the top, but you are safe throughout the way.</p> 
                <p>So, give us a call at <Link href="callto:+919871181711">+91-98711 81711</Link>, and from there, you can always search for the best SEO practices ever asked for!</p>
              </div>
              <div className="col-md-4">
                <div className="image">
                  <img src="images2/SEO-MARKETING-MANAGER.webp" alt="Seo Marketing Firm" />
                </div>
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
                      <input type="hidden" name="form_page_name" defaultValue="SEO Marketing Firm" />
                      <input type="hidden" name="form_name" defaultValue="seo_marketing_firm_page" />
                      <p className="message" />
                    </div> 
                  </form> */}
                  <AuditForm/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ormsec1">
          <div className="container pos-rel ">
            <div className="row justify-content-center"> 
              <div className="col-md-6 clearfix"> 
                <div className="simagebox">
                  <div className="circle" />
                  <div className="circle2" />
                  <div className="image clearfix">
                    <img src="images2/all-images/SEO-Marketing-Firm1.webp" alt="Seo Marketing Firm" />
                  </div>
                </div>
              </div> 
              <div className="col-md-6">
                <h3 className="title">SEO and its ethical parts:</h3>
                <p className="mb-0">Without any of the ethical practices, all the benefits that will come your way will stay with you temporarily. You will see higher rankings for sure, but just for a few days or weeks. With the best <b>SEO Firm in India</b> like us, you need not have to worry about these norms anymore. We are here to follow only ethical norms throughout.</p>
                <ul className="bullet-style1">
                  <li> <i className='fi fi-bs-check-circle'></i> Whenever the search engines start to catch on, you will be guaranteed to lose all the rankings earned through unethical manners. </li>
                  <li> <i className='fi fi-bs-check-circle'></i> Not just ruining your present growth, but there is a high chance that you will never get to regain the same.</li>
                  <li> <i className='fi fi-bs-check-circle'></i> Our Ethical Search Engine Optimization services ensure that your firm remains all the way out of danger, from the first till last.</li>
                  <li> <i className='fi fi-bs-check-circle'></i> So, in the end, your firm will continue to reap those benefits associated with any optimized site for the upcoming years as well.</li>
                </ul>
              </div>
              <div className="col-md-12">
                <p className="mb-0">So, whenever you are looking for the best <b>SEO Consulting Service</b>, join hands with us, and we will never let you down. We know you want the best services and within pre-set budget plans. So, we will work on these plans accordingly.</p> 
              </div>
            </div>
          </div>
        </section>
        <section className="packagessec">
          <div className="container-fluid text-center pos-rel cstm-pd60">
            <h2 className="title text-white">Our SEO Marketing Firm Services Packages</h2>
            <div className="psubbox">HIGH QUALITY SEO Marketing Firm Services SOLUTIONS FOR BUSINESSES</div>
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
        <section className="ormsec4">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h2 className="title">Being ethical throughout the way:</h2>
                <p>The ethical SEO services from our <b>SEO Firm in India</b> will not provide an answer to Google. We will offer services, which will genuinely benefit your clients. So, you don’t have to fear any search engine at all!</p>
                <p>Moreover, our ethical SEO firm will always stay true to our beliefs, standards, and principles. So, we will never direct our clients to subvert their ethical frameworks ever. Yes, it is true that being ethical is tough, and it takes time to see some results. But once you see those results, there is no turning back!</p>
              </div>
              <div className="col-md-4">
                <div className="image"><img src="images2/twitterimg4.webp" alt="Seo Marketing Firm" /></div>
              </div>
            </div>
          </div>
        </section>
        <section className="ormsec3">
          <div className="image" style={{background: 'url(images2/SEO-MARKETING-SERVICE.webp) center'}} />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4" />
              <div className="col-md-8 green-bg">
                <div className="inner">
                  <h2 className="title text-white">High-end competition all around:</h2>
                  <p>With competition all around, you want higher rankings for your business to lead the chart. But reaching that spot using black hat SEO tactics will help you to enjoy the victory for a little bit of time. After that, you will fall on the ground, face first. Thanks to our <b>Ethical Search Engine Optimization</b>, you need not have to worry about any of these points!</p>
                  <p>So, whenever you are looking for the best <b>SEO Firm in India</b>, join hands with us now! We will help you to understand the ethical SEO norms well.</p>
                </div>
              </div>
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
                  <Link href="affordable-seo-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">AFFORDABLE SEO SERVICES</div>
                    </div>
                    <div className="icnbox-box-no">01</div>
                    <p>We have the top-level performance SEO plans, which are not just affordable...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/affordable-seo-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="organic-seo-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">ORGANIC SEO SERVICES</div>
                    </div>
                    <div className="icnbox-box-no">02</div>
                    <p>Once you have Organic SEO practices by your side, you don’t have to...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/organic-seo-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="professional-seo-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">PROFESSIONAL SEO SERVICES</div>
                    </div>
                    <div className="icnbox-box-no">03</div>
                    <p>We always believe in the power of human-first SEO strategies, which...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/professional-seo-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="seo-consulting-firm.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">SEO CONSULTING FIRM</div>
                    </div>
                    <div className="icnbox-box-no">04</div>
                    <p>If you want to stand out in the crowd, your website needs that competitive...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/seo-consulting-firm.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="seo-marketing-firm.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">SEO MARKETING FIRM</div>
                    </div>
                    <div className="icnbox-box-no">05</div>
                    <p>Without any of the ethical practices, all the benefits that will come your...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/seo-marketing-firm.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="seo-optimization-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">SEO OPTIMIZATION SERVICES</div>
                    </div>
                    <div className="icnbox-box-no">06</div>
                    <p>Before you proceed further, let us give you a note of the best Website...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/seo-optimization-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
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