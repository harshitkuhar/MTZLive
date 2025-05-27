import Link from "next/link";
import ContactSection from "../components/ContactSection";
import HappyClients from "../components/HappyClients";
import AuditForm from "../components/FormWithNotesField";
import PackageSection from "../components/PackageSection";

export const metadata = {
  title: "Best SEO Services India | Top SEO Service Provider",
  description: "Mediatrenz provides the best SEO Services India, with a proven record of 2000+ satisfied clients. Defeat your competitors and rank high on SERP. Get Quote Now",
  keywords: "SEO services India,Best SEO Services Company,Affordable Organic SEO services India",
  og_title: "SEO Services India | Best SEO Services Company | Quality SEO",
  og_description: "We are the best SEO service company in India which provides affordable organic SEO services in India to our client which comes under google guidelines.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/seo-services.php`,
  },
};

export default function SeoServices() {
  return (
    <>
      <div className="innerbanner" style={{backgroundImage: 'url(/images2/seo-serbanner.webp)'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcurmb-content">
                <h1 className="page-title">SEO Services India</h1>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="https://mediatrenz.com">Home</Link></li>
                    {/* <li className="breadcrumb-item"><Link href="#">SEO</Link></li>*/}
                    <li className="breadcrumb-item active">SEO Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="ormsec1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 clearfix"> 
              <div className="simagebox">
                <div className="circle" />
                <div className="circle2" />
                <div className="image clearfix">
                  <img src="/images2/all-images/Seo-services-image.webp" alt="SEO Services India" />
                </div>
              </div>
            </div>             
            <div className="col-md-6">          
              <div className="title heading1">WE ARE THE FOREMOST SEO SERVICE PROVIDER IN INDIA</div>
              {/* <h3 className="subtitle"> MEDIATRENZ is an expert in this field and has been helping many companies gain increased visibility on the internet</h3> */} 
              <p className="text-justify">MEDIATRENZ offers the finest SEO Services in India and globally. We help businesses gain online visibility and boost ROI. With the rapid expansion of the virtual platform, businesses needed to reinforce their digital presence.</p> 
              {/* <ul className="bullet-style1">
                  <li>Visitors to your site</li>
                  <li>Referrals from clients</li>
                  <li>Credibility with customers, suppliers and others</li>
                </ul>  */}  
              <p className="text-justify">A dynamic as well as notable online presence can prove to be the key to acquiring possible customers. SEO Services are services usually provided by an SEO agency that assists your company do well in search engine optimization. With SEO, your business wants to boost its visibility in search outcomes on search engines like Google and Bing.</p>
              <p className="mb-0 text-justify">We provide specialized SEO services, helping businesses in specific (and competitive) industries thrive.</p>
            </div>
          </div>        
        </div>
      </section>
      <section className="fullsersec" style={{background: 'url(/images2/seoser-parallax-bg.webp)'}}>
        <div className="container pos-rel text-center">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h2 className="title text-white">WHAT MAKES US DIFFERENT FROM OTHERS?</h2>
              <h3 className="subtitle2 text-white" />
            </div>
            <div className="col-md-11">
              {/* <h3 className="subtitle2 text-white">MEDIATRENZ has a dedicated and experienced team of SEO and online marketing experts who can help transform your website and increase its profitability. We will analyse your site and that of your major competitors in order to devise the best strategy for you.</h3> */}
              <p className="mb-0 paragraph">At MEDIATRENZ, we provide affordable yet the most effectual organic search engine optimization services in India and globally. Organic SEO services India helps businesses to achieve the top positions in the Google SERP. We vigorously work with our partners for SEO Services. With thousands of keywords in top rankings, leading brands as consumers, loads of testaments from contented customers, awards and certifications from industry leading bodies, you can be rest assured we know our Search Engine Optimization.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="ranking-form form1">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="form-heading">
                <h2 className="title">WOULD YOU LIKE TO HAVE A FREE WEBSITE AUDIT?</h2>
                <p className="text-white frm-adt">Get your website free audit report within 24 hours &amp; find mistake <br /> that are holding your website to get rank. </p>                 
              </div>
            </div>
            <div className="col-md-12 text-center">
              <div className="row">
                <AuditForm/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PackageSection/>
      <section className="ormsec3">
        <div className="image" style={{background: 'url(/images2/analysis2.webp) center'}} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-8 green-bg">
              <div className="inner">
                <h2 className="title text-white">OUR SEO PROCESS</h2>
                <p className="text-justify"><strong>Technical SEO -</strong> Technical SEO denotes website and server optimizations that aid search engine spiders in crawling as well as indexing your website more efficiently. Technical SEO is part of on-page SEO, which centers on augmenting elements on your website to obtain higher rankings. It’s the opposite of off-page SEO, which is about creating exposure for a website through additional channels.</p>
                <p className="text-justify"><strong>On-page SEO –</strong> It is the practice of optimizing particular web pages in order to rank higher as well as earn more pertinent traffic in search engines. On-page refers to both the content as well as HTML source code of a page that can be optimized, as opposed to off-page SEO which submits to links and other peripheral signals.</p>
                <p className="mb-0 text-justify"><strong>Off-page SEO -</strong> Off-page SEO is the technique you can use to develop the position of a website in the search engine results page (SERP). Several people connect off-page SEO with link building but it is more than that. Off-page SEO has to do with endorsement techniques – beyond website content –for the reason of ranking a website higher in the search results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ormsec4">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="title">Our Professional SEO Services – Value For Money</h2>
              <h3 className="subtitle2">The <b>SEO Services India</b> offered by MEDIATRENZ are extremely affordable. </h3>
              <p>In fact, you can easily hire our services if you are a startup and have a very tight budget. We will help promote your business so that it gets the necessary momentum to grow rapidly. MEDIATRENZ will help your company navigate the crucial early period when you have to put in a lot of effort and money to promote it. SEO is not a one-time activity; you need to keep putting in efforts to maintain your good ranking on search engine results pages. Since our services are so affordable, you will easily be able to keep MEDIATRENZ on your payroll. Do get in touch with us at the earliest in order to find out how we can be of help to you. Get <strong>affordable organic SEO services in India</strong> from MEDIATRENZ now.</p>
            </div>
            <div className="col-md-4">
              <div className="image">
                <img src="/images2/seo-value.webp" className="img-fluid Mbl_hide" alt="SEO Company India" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="seosec1 txt-green">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2 className="title heading1">JOIN US AS WE TRANSFORM YOUR TRAFFIC INTO PAYING CUSTOMERS THROUGH SEO SERVICES</h2>
              <p className="mb-0 paragraph text-white">We at MEDIATRENZ provide technical SEO services all across the country. From us, you will receive 100% white hat SEO services tailor-made to match your business needs. We are considered one of the leading SEO experts in town, thanks to our top-notch ranking! We are here to offer SEO services to those businesses that are willing to expand, even during this pandemic situation. Because of this COVID scenario, the business world is not the same. This is where, as a business owner, you have to create a hardcore online presence or need to look for organic rankings right away to start showing up on the number one pages in search engines for desired keyword sets. Hire A Dedicated SEO Resource Or give us a call now at our official number, and we will let you know how to achieve the points.</p>
            </div> 
          </div>
        </div>
      </section>
      <section className="seosec2">
          <div className="container">
            <div className="row">
              <div className="col-md-8 green-bg">
                <div className="inner">
                  <h2 className="title">THE TOP-NOTCH SEO SERVICES TO CONSIDER:</h2>
                  <ul className="bullet-style1">
                    <li>Being one of the leading SEO firms with budget-friendly SEO services, we are here to analyze the site technically and get you the number one position through organic SEO campaigns. Our 100% white hat SEO services will actually hike up your ranking within a couple of months without going through any spam backlink.</li>
                    <li>The best part about our services is that we work heavily towards schema markup, CRO optimization, CTR, pre-rendering testing, and so much more.</li>
                    <li>Moreover, from our side, you will enjoy JavaScript Block and similar other technical aspects of SEO optimizations, which will make your firm stand out in the crowd.</li>
                  </ul>
                  <p className="text-justify">We are here to work towards the technical side of SEO, which helps in improving your business ranking to a whole new level nowadays. So, tune in with us and procure the <Link href="/seo-packages.php">SEO Packages</Link> we have in store.</p>
                </div>
              </div>
              <div className="col-md-4">
                <img className="image2" src="/images2/new/Seo-services1.jpg" alt="SEO Services India" />  
              </div> 
            </div>
          </div>
        </section>
        <section className="ormsec4">
          <div className="container pos-rel">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="image">
                  <img src="/images2/all-images/education-firm-seo-services-2.webp" alt="Local Seo Services Delhi" className="Mbl_hide" />
                </div>
              </div>  
              <div className="col-md-8">
                <h2 className="title heading1">Premium SEO techniques by your side:</h2>
                <p>Well, as you are looking at one of the <Link href="/">top SEO agencies in India</Link>, you can expect to get premium SEO techniques from our side. We will be driving traffic to the business website with the help of our local SEO practices off-page and on-page optimizations.</p>
                <ul className="bullet-style3">
                  <li>We have <Link href="/seo-consulting-firm.php">SEO consultancy</Link> audits in for you. Here, we offer you data-driven consultancy and website-based audits to focus on our business site.</li>
                  <li>Schema markup is another interesting solution from our side. Here, we get to push your ranks up with the help of our technical schema markup codes. We have special SEO works for the same.</li>
                  <li>In case you are looking for data-driven local SEO packages, you have come to the right spot. We are pretty experts in the field of the Google My Business category or can offer the best local SEO services for our clients out there.</li>
                  <li>Moreover, join us if you want to explore the values of Semantic SEO strategies. We offer these services with web entities only.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="ormsec2">
          <div className="container pos-rel">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h2 className="title">Hire the best SEO services from our side:</h2>
                <p>So, next time you are planning to venture into the world of SEO services India, we welcome you to come and join us for exclusive results all the way through. We have been working with some of the big names in the market. Therefore, presenting the same solutions for improving your business ranking {`won’t`} be a tough call for us.</p>
                <ul className="bullet-style1">
                  <li> <i className='fi fi-bs-check-circle'></i> We have a trustworthy and experienced in-house team of SEO experts. They know how to replicate the same success stories for your business. For that, they follow our data-driven SEO campaigns well.</li>
                  <li><i className='fi fi-bs-check-circle'></i> We are all set to only follow the latest SEO strategies, along with new on-page and off-page optimization techniques. </li>
                  <li><i className='fi fi-bs-check-circle'></i> These are well combined with the technical SEO audits, which will then be a great combination for your online business’s success story.</li>
                </ul>     
                <p>So, waste no time further, book an appointment with our SEO firm. It’s time to learn more and gain enough information before adding SEO services for your company.</p>            
              </div>
              <div className="col-md-4">
                <div className="image">
                  <img src="/images2/cpimg2.webp" alt="Local Seo Services Delhi" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fullsersec" style={{background: 'url(/images2/seoser-parallax-bg.webp)'}}>
          <div className="container pos-rel text-center">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h2 className="title text-white">Join us right away!</h2>
                <h3 className="subtitle2 text-white" />
              </div>
              <div className="col-md-11">
                {/* <h3 className="subtitle2 text-white">MEDIATRENZ has a dedicated and experienced team of SEO and online marketing experts who can help transform your website and increase its profitability. We will analyse your site and that of your major competitors in order to devise the best strategy for you.</h3> */}
                <p className="mb-0 paragraph">Whether you are looking for SEO-based images or keyword help for better business ranking, our SEO agency India is always there to help. Join us as we explore the world of online SEO practices right on time. We are there to guide you throughout the process well. Our services are now just a click away!</p>
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