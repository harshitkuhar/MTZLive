import Link from "next/link";
import ContactSection from "../components/ContactSection";
import HappyClients from "../components/HappyClients";
import AuditForm from "../components/FormWithWebsiteField";

export const metadata = {
  title: "Content Marketing Services | Content Marketing Agency",
  description: "We are a creative Content Marketing Agency in India. We provide fresh, unique & professional content marketing services to grab the user's attention on the content.",
  keywords: "Content Marketing Services,affordable content service",
  og_title: "Content Marketing Services | Content Marketing Agency",
  og_description: "We are a creative Content Marketing Agency in India. We provide fresh, unique & professional content marketing services to grab the user's attention on the content.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/content-marketing-services.php`, // Generate the canonical URL
  },
};

export default function GooglePenalty() {
  return (
    <>
        <div className="innerbanner" style={{backgroundImage: 'url(/images2/content-marketing-banner.webp)'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcurmb-content">
                  <h1 className="page-title">Content Marketing Service</h1>
                  <div className="breadcrumb_item ul-li">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="https://mediatrenz.com">Home</Link></li>
                      {/*<li className="breadcrumb-item"><Link href="#">SEO</Link></li>*/}
                      <li className="breadcrumb-item active">Content Marketing Service</li>
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
                    <img src="/images2/content-marketing-img1.webp" alt="Content Marketing Company" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="title">Boost Your Traffic With Solid Content Marketing</h2>
                {/* <h3 className="subtitle">When it comes to getting noticed on the Internet, the content your business creates speaks volumes.</h3> */}
                <p>Make content marketing stress-free with our competent content marketing strategies. Our content marketing team develops, writes, edits, and endorses custom as well as search engine friendly content for your business. From blog posts to online guides to videos, you can do it all with MEDIATRENZ.</p>
                <h3 className="subtitle">Content Marketing Services</h3>
                <p>Our content marketing services will aid you boost website traffic from your online marketing ways. It will aid you take individuals from other online channels to your website. These online marketing platforms may be social media, search engines, or else your email marketing attempts. Our content writers will formulate pertinent content to employ your audience, endorse brand awareness, fabricate trust, as well as influence their buying decisions. Our content marketing services comprises tactic development, content writing, editing, as well as publishing to your website.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="fullsersec" style={{background: 'url(/images2/content-marketing-bg.webp)'}}>
          <div className="container pos-rel text-center">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h2 className="title text-white">Why Content Marketing?</h2>
              </div>
              <div className="col-md-11">
                <p>By crafting convincing, precious content that gets to empathy of your readers, you earn faith with your addressees. Study shows that the more content your spectators consumes, the more probable they are to purchase from you. Investing in content creation can aid you accomplish your commerce goals by boosting your online presence, organic traffic volume, as well as bottom line figures.</p>
              </div>
              <h3 className="subtitle2 text-white">Here are a few more reasons why you should spend in content marketing:</h3>
              <div className="col-md-12 text-left">
                <ul className="bullet-style2 half">
                  <li><i className='fi fi-bs-check-circle'></i> Websites that fabricate standard content receive 8x more traffic</li>
                  <li><i className='fi fi-bs-check-circle'></i> Content marketing costs 60 percent less than outbound marketing</li>
                  <li><i className='fi fi-bs-check-circle'></i> Content marketing produces 300 percent as many leads as outbound marketing</li>
                  <li><i className='fi fi-bs-check-circle'></i> Content marketing adopters have almost six times as a lot of conversions as non-adopters</li>
                  <li className="last"><i className='fi fi-bs-check-circle'></i> Content marketing improves your email marketing as well as social media marketing efforts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="fullsersec2 green-bg">
          <div className="container text-center">
            <h2 className="title text-white">How We Do It?</h2>
            <div className="row equal text-left">
              <div className="col-md-4 topmarg-30">
                <div className="inner">
                <i className="fi fi-ts-ad-paid"></i>
                  <h4>Content Marketing Strategy</h4>
                  <p>The primary step our content marketing team will take with your commerce is to trade an exceptional content strategy. We will investigate your buyer’s persona, as well as learn more about your consumers. We will also execute keyword research, to make sure that your content is pertinent to your target audience, and that it can attain more probable customers. All of this will aid us write content that appeals to them, and donates to your lead generation efforts.</p>
                </div>
              </div>
              <div className="col-md-4 topmarg-30">
                <div className="inner">
                <i className="fi fi-tr-dashboard-monitor"></i>
                  <h4>Content Development</h4>
                  <p>Our content marketing team generates reliable and quality content that is efficiently written, edited, and published within for your business. The content that we widen will be exclusive to your trade and published to your website. Your entire website content must be available to a WordPress blog or else similar CMS.</p>
                </div>
              </div>
              <div className="col-md-4 topmarg-30">
                <div className="inner">
                <i className="fi fi-ts-display-code"></i>
                  <h4>Content Distribution</h4>
                  <p>Our content marketing services comprise automatic/manual distribution of your content to social media platforms, such as Facebook, Twitter as well as Google Plus. For more vigorous content promotion as well as distribution, we suggest utilizing a mixture of our social media management services, social media advertising services, as well as our email marketing services. These additions will aid you build an audience to endorse your content to.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ormsec4">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h2 className="title">Revenue-driving content marketing services</h2>
                <h3 className="subtitle2">We Help You Engage Customers With Quality Content Marketing Services.</h3>
                <p>Content marketing is one of the most powerful digital marketing strategies. With the ability to double website conversion rates, as well as drive brand awareness and website traffic, content marketing is essential to increasing your company’s revenue.</p>
                <p className="mb-0">With MEDIATRENZ as your content marketing services partner, you can expect custom content that follows search engine optimization standards. Even better, you can count on transparency — no hidden fees and no secret strategies.</p>
              </div>
              <div className="col-md-4">
                <div className="image"><img src="/images2/content-marketingimg4.webp" alt="Content Marketing Agency" /></div>
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
        <HappyClients />
        <ContactSection />
    </>
  );
}