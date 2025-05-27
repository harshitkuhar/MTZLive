import Link from "next/link";
import ContactSection from "../components/ContactSection";
import HappyClients from "../components/HappyClients";
import AuditForm from "../components/FormWithWebsiteField";

export const metadata = {
  title: "Link Building Services | Dofollow Link Building Company India",
  description: "Get quality link building services on high DA & PA sites. We are a leading dofollow link building company in India that provides quality links at an affordable price.",
  keywords: "Link Building Services,Link Building Company India",
  og_title: "Link Building Services | Dofollow Link Building Company India",
  og_description: "Get quality link building services on high DA & PA sites. We are a leading dofollow link building company in India that provides quality links at an affordable price.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/link-building-services.php`, // Generate the canonical URL
  },
};

export default function LinkBuildingServices() {
  return (
    <>
      <div className="innerbanner" style={{backgroundImage: 'url(/images2/link-building-banner.webp)'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcurmb-content">
                  <h1 className="page-title">Link Building Service</h1>
                  <div className="breadcrumb_item ul-li">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="https://mediatrenz.com">Home</Link></li>
                      {/* <li className="breadcrumb-item"><Link href="#">SEO</Link></li>*/}
                      <li className="breadcrumb-item active">Link Building Service</li>
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
                    <img src="/images2/link-building-img1.webp" alt="Link Building Services" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="title">Impactful Link Building Service to dominate Search Engine Results</h2>
                {/* <h3 className="subtitle">Want To Dominate The Google Search Results And Claim The Top Spot?</h3> */}
                <p>Link building is often defined a search engine optimization procedure of obtaining backlinks or hyperlinks from third party websites that click back to a page on your website.</p>
                <p className>There are several methods to build links to your web portal, and while they diverge in difficulty, SEO specialists tend to concur that link building is one of the most demanding features of their jobs.</p>
                <p className>For that cause, several businesses, hire us as their professional link building companies to get help for this specific SEO task.</p>
                <h3 className="subtitle">A Small Account on Link Building</h3>
                <p>It is a digital marketing provision executed by a skilled SEO consultant or else an SEO agency that assists a company obtain backlinks through link building activities.</p>
                <p className="mb-0">Link building activities comprise manual outreach, guest blogging plus broken link building, among other methods.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="ranking-form webdevelopment">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="form-heading">
                  <h2 className="title text-white">WOULD YOU LIKE TO HAVE LINKS ANALYSIS OF WEBSITE</h2>
                  <p className="text-white" style={{paddingBottom: '30px'}}>Get your website free Link Building report within 24 hours &amp; find mistake <br /> that are holding your website to get rank. </p>                 
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
                      <input type="submit" className="btn btn-success ajax_mail_sender" name="freeWebsite" defaultValue="Free Links Analysis" />
                      <input type="hidden" name="form_page_name" defaultValue="Link building services" />
                      <input type="hidden" name="form_name" defaultValue="link_building_services" />
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
            <h2 className="title text-white">How We Do Link Building?</h2>
            <div className="row text-left">
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                <i className="fi fi-tr-web"></i>
                  <h4>Panorama Link Opportunities</h4>
                  <p>We aim industry-relevant websites owned by actual bloggers who we can faith to endorse your content efficiently. When we discover the related ones, we stretch out to them with the intention to boost your online presence.</p>
                </div>
              </div>
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                <i className="fi fi-tr-customize-computer"></i>
                  <h4>Generate perspective Content</h4>
                  <p>We execute this, so you {`don’t`} have to! Our in-house team scrutinizes your website and generates exceptional, magazine-style content that is cooperative for producing traffic as well as growing readership. {`It’s`} a twofold advantage that you obtain by collaborating with us!</p>
                </div>
              </div>
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                <i className="fi fi-ts-laptop-code"></i>
                  <h4>Content Publication</h4>
                  <p>We distribute the content with the manually-outreached blogger as well as continue in loop until the content piece with a do-follow link is published. We transcript with the bloggers for edits, if needed before or else after publishing!</p>
                </div>
              </div>
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                <i className="fi fi-tr-megaphone-announcement-leader"></i>
                  <h4>Reporting &amp; Tracking</h4>
                  <p>We agree to a white-label report and provide access to an everyday SERP tracking control panel. While the report talks about details for the links we produced for you, the control panel lets you calculate the results and to map for the future campaigns.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="packagessec">
          <div className="container-fluid text-center pos-rel cstm-pd60">
            <h2 className="title text-white">Our Link Building Services Packages</h2>
            <div className="psubbox">HIGH QUALITY Link Building Services SOLUTIONS FOR BUSINESSES</div>
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
                <h2 className="title">Why choose us?</h2>
                {/* <h3 className="subtitle2">SEO link building is an integral part of your digital marketing Strategy and efforts.</h3> */}
                <p><strong>Surefire Satisfaction</strong> - We make sure that you are contented with the work we do. And {`don’t`} worry, because we will carry on the bar high even after we convey your work!</p>
                <p><strong>Dedicated Account Manager</strong> - Our Customers are the top precedence for us and we try to maintain it that way. You get an enthusiastic account manager to grip all your queries and that is why we pledge a superfast response rate.</p>
                <p><strong>Handy Dashboard</strong> - Place fresh orders, renovate the existing ones and ensure the order status, all at one position, right from the comfort of your own space.</p>
                <p><strong>In-house content creation</strong> - All the content we utilize is developed in-house. Our team has experienced native writers, so you {`don’t`} have to be anxious about superiority. Moreover, your content is only assigned to the writers who concentrate in your niche.</p>
                <p><strong>Huge database of influential websites</strong> - Over the years, we have built a great number of business connections, with over five thousands websites, bloggers as well as influencers collaborating with us. So you can rest assured about your content being available only on industry-pertinent blogs.</p>
              </div>
              <div className="col-md-4">
                <div className="image"><img src="/images2/link-buildingimg4.webp" alt="Link Building Company" /></div>
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