import Link from "next/link";
import ContactSection from "../components/ContactSection";
import HappyClients from "../components/HappyClients";
import AuditForm from "../components/FormWithWebsiteField";

export const metadata = {
  title: "Small Business SEO Services | Affordable SEO Service Company",
  description: "MEDIATRENZ specializes in small business SEO services plus we have over a decade of experience working with small businesses like yours, so contact us for website ranking.",
  keywords: "Small Business SEO Services,Affordable SEO Service Company India",
  og_title: "Small Business SEO Services | Affordable SEO Service Company",
  og_description: "MEDIATRENZ specializes in small business SEO services plus we have over a decade of experience working with small businesses like yours, so contact us for website ranking.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/small-business-seo-services.php`, // Generate the canonical URL
  },
};

export default function SmallBusinessSeoServices() {
  return (
    <>
      <div className="innerbanner" style={{backgroundImage: 'url(/images2/small-business-seo-banner.webp)'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcurmb-content">
                  <h1 className="page-title">Small Business SEO Service</h1>
                  <div className="breadcrumb_item ul-li">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="https://mediatrenz.com">Home</Link></li>
                      {/*<li className="breadcrumb-item"><Link href="#">SEO</Link></li>*/}
                      <li className="breadcrumb-item active">Small Business SEO Service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="ormsec1 rmsec">
          <div className="container">
            <div className="row">
              <div className="col-md-6 clearfix">
                <div className="simagebox">
                  <div className="circle" />
                  <div className="circle2" />
                  <div className="image clearfix">
                    <img src="/images2/small-business-seo-img1.webp" alt="SEO Services for Small Businesses" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="title">Small Business SEO to Take Your Business To the Next Level</h2>
                {/* <h3 className="subtitle">For any small or local business looking to stay afloat, search engine visibility is a must.</h3> */}
                <p>For any small or local business looking to stay afloat, search engine visibility is a necessity. Running paid ads is a huge method to get instant visibility and extremely targeted traffic, but {`it's`} imperative that you are working on your enduring organic visibility as well. The difficulty is, <Link href="/seo-services.php">Search Engine Optimization (SEO)</Link> is a composite marketing strategy that requires constant effort over time.</p>
                <p><b>MEDIATRENZ</b> specializes in small business SEO, and with  more than a decade of experience working with small businesses just like yours, we know what it takes for you to outrank your competitors—leading to a boost in leads and sales for a minor cost.</p>
                <h3 className="subtitle">Small Business SEO – A Brief </h3>
                <p className="mb-0">Small Business SEO is indispensable for any business, particularly for small businesses that depends upon visibility in Google.</p>
              </div>
              <div className="col-md-12 mt-30">
                <p>As a small business, it can be tough to outshine larger businesses with in-house <b>SEO experts</b> and massive marketing budgets, so MEDIATRENZ conveys SEO intended just for you, utilizing up-to-date <b>technical SEO strategies</b> to accomplish organic search results within your budget, so you can hold your own alongside the competition.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="fullsersec" style={{background: 'url(/images2/small-business-seo-bg.webp)'}}>
          <div className="container pos-rel text-center">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h2 className="title text-white">How We Do Small Business SEO?</h2>
                {/* <h3 className="subtitle2 text-white">DRIVE MORE TRAFFIC TO YOUR WEBSITE , GENERATE MORE LEADS & ATTRACT MORE CLIENTS.</h3> */}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 col-sm-12 mt-30">
                <div className="icconbox darkop"><i className="fi fi-ts-clipboard-list"></i></div>
                <h3 className="subtitle2 text-white">Keyword Strategy</h3>
                <p>MEDIATRENZ picks high volume keywords that line up with search intent to match your business objectives. This facilitates you to deliberately focus your SEO campaign on the major bang for your buck.</p>
              </div>
              <div className="col-md-4 col-sm-12 mt-30">
                <div className="icconbox darkop"><i className="fi fi-tr-lightbulb-on"></i></div>
                <h3 className="subtitle2 text-white">Unmatched Technical SEO</h3>
                <p>MEDIATRENZ assists you influence the 200+ optimization aspects that take you to page 1 so you can outsmart and outrank your competition.</p>
              </div>
              <div className="col-md-4 col-sm-12 mt-30">
                <div className="icconbox darkop"><i className="fi fi-ts-link-alt"></i></div>
                <h3 className="subtitle2 text-white">Small Business Link Building</h3>
                <p>By obtaining hyper-aimed links to your website, MEDIATRENZ aids you illustrate Google just how small but powerful you are. You will be outpacing those profound hitters in no time.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="ranking-form webdevelopment">
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
                      <input type="hidden" name="form_page_name" defaultValue="Small Business seo services" />
                      <input type="hidden" name="form_name" defaultValue="small_business_seo_s" />
                      <p className="message" />
                    </div>
                  </form> */}
                  <AuditForm/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fullsersec2 green-bg">
          <div className="container text-center">
            <h2 className="title text-white">Importance of Small Business SEO</h2>
            <p className="mb-0 paragraph">Users want to discover your website. With every search inquiry, they are typing the keywords related to the services, produces, and information you have to share. When you utilize small business SEO to aim these search queries or else keywords, your business is more probable to appear for those prospects and clientele.</p>
            <p className="mb-0 paragraph" style={{marginTop: '1rem'}}>Instead of making them hunt for it, let’s provide them what they need. MEDIATRENZ does this each day for all types of businesses, large and small, in almost every place and industry. We comprehend those tactical key activities that will optimize your website. We are the small business <Link href="/b2b-seo-agency.php">SEO Agency</Link> you require to reach your website goals.</p>
          </div>
        </section>
        <section className="ormsec4">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h2 className="title">Why choose us?</h2>
                {/* <h3 className="subtitle2">Business owners looking for small business SEO services are looking for 3 things: affordability, honesty, and results.</h3> */}
                <p>We determine strategies that can be most valuable for a business when having a restricted budget. The <Link href="/seo-consulting-firm.php">SEO consultant</Link> depends on tactics that will aid to identify the major opportunities for boosting a website, positioning it ahead of the top rivalry in a niche.</p>
              </div>
              <div className="col-md-4">
                <div className="image"><img src="/images2/small-business-seoimg4.webp" alt="SEO Services for Small Businesses" /></div>
              </div>
            </div>
          </div>
        </section>
        <section className="packagessec">
          <div className="container-fluid text-center pos-rel cstm-pd60">
            <h2 className="title text-white">Our Small Business SEO Services Packages</h2>
            <div className="psubbox">HIGH QUALITY Small Business SEO Services SOLUTIONS FOR BUSINESSES</div>
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
                  <Link href="seo-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">SEO Services</div>
                    </div>
                    <div className="icnbox-box-no">01</div>
                    <p> Mediatrenz is an expert in this field and has been helping many companies...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/seo-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="local-seo-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">Local SEO Services</div>
                    </div>
                    <div className="icnbox-box-no">02</div>
                    <p>Let your brand leverage local search traffic to generate quality leads...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/local-seo-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="ecommerce-seo-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">E-Commerce SEO SERVICE</div>
                    </div>
                    <div className="icnbox-box-no">03</div>
                    <p>Ecommerce SEO is one of the best ways to drive traffic to your...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/ecommerce-seo-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="small-business-seo-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">Small Business SEO</div>
                    </div>
                    <div className="icnbox-box-no">04</div>
                    <p>For any small or local business looking to stay afloat, search engine visibility...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/small-business-seo-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="link-building-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">Link Building Service</div>
                    </div>
                    <div className="icnbox-box-no">05</div>
                    <p>Google’s search rankings depend highly upon the links and the content...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/link-building-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="apps-store-optimization-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">App Stores Optimisation</div>
                    </div>
                    <div className="icnbox-box-no">06</div>
                    <p>App Store Optimization (ASO) is the process of improving app...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/apps-store-optimization-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="hire-dedicated-seo-manager.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">Hire Dedicated SEO Manager</div>
                    </div>
                    <div className="icnbox-box-no">07</div>
                    <p>We offers dedicated, expert SEO professionals to tweak your...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/hire-dedicated-seo-manager.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="google-penalty-recovery.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">Google Penalty Recovery</div>
                    </div>
                    <div className="icnbox-box-no">08</div>
                    <p>If your site has been issued with a manual or algorithmic penalty...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/google-penalty-recovery.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="content-marketing-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">Content Marketing Service</div>
                    </div>
                    <div className="icnbox-box-no">09</div>
                    <p>Content is king, as the adage goes, and it’s just as true today as it was two...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/content-marketing-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="affordable-seo-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">Affordable SEO Service</div>
                    </div>
                    <div className="icnbox-box-no">10</div>
                    <p>We have the top-level performance SEO plans, which are not just affordable...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/affordable-seo-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="organic-seo-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">Organic SEO Service</div>
                    </div>
                    <div className="icnbox-box-no">11</div>
                    <p>Most of you might be wondering how organic SEO helps in the...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/organic-seo-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="professional-seo-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">Professional SEO Service</div>
                    </div>
                    <div className="icnbox-box-no">12</div>
                    <p>We always believe in the power of human-first SEO...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/professional-seo-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="seo-optimization-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">SEO Optimization Service</div>
                    </div>
                    <div className="icnbox-box-no">13</div>
                    <p>Content is king, as the adage goes, and it’s just...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/seo-optimization-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="seo-consulting-firm.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">SEO Consulting Firm</div>
                    </div>
                    <div className="icnbox-box-no">14</div>
                    <p>If you want to stand out in the crowd, your...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/seo-consulting-firm.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="seo-marketing-firm.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">SEO Marketing Firm</div>
                    </div>
                    <div className="icnbox-box-no">15</div>
                    <p>Without any of the ethical practices, all...</p>
                  </Link><div className="btn-link1"><Link href="https://mediatrenz.com/seo-marketing-firm.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
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