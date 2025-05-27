import ContactSection from "../components/ContactSection";
import Link from "next/link";
import HappyClients from "../components/HappyClients";
import AuditForm from "../components/FormWithNotesField";

export const metadata = {
  title: "ORM Services Company India | Online Reputation Management Services | Remove Negative Links",
  description: "MEDIATRENZ is an expert ORM Services Company India providing online reputation management services to the clients to protect their business by removing negative links.",
  keywords: "ORM Services Company India,Online Reputation Management Services",
  og_title: "ORM Services Company India | Online Reputation Management Services | Remove Negative Links",
  og_description: "MEDIATRENZ is an expert ORM Services Company India providing online reputation management services to the clients to protect their business by removing negative links.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/orm-services.php`, // Generate the canonical URL
  },
};

export default function OrmServices() {
  return (
    <>
      <div className="innerbanner" style={{backgroundImage: 'url(/images2/orm-banner.webp)'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcurmb-content">
                <div className="page-title">ORM Services</div>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="https://mediatrenz.com">Home</Link></li>
                    {/*<li class="breadcrumb-item"><Link href="#">Reputation</Link></li>*/}
                    <li className="breadcrumb-item active">ORM Services</li>
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
            <div className="col-md-6">
              <div className="simagebox">
                <div className="circle" />
                <div className="circle2" />
                <div className="image">
                  <img src="/images2/ormimg1.webp" alt="ORM Services" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="title">Great Online Reputation Management can boost your business</h2>
              {/* <h3 class="subtitle">Expert ORM Services India by Mediatrenz</h3> */}
              <p>Your online reputation is the most precious asset of your commerce or individual profile. Mediatrenz is a foremost online reputation management company in India with widespread expertise in managing online reputation as well as digital uniqueness of big brands, businesses along with professionals. We recognize in this enormously competitive commerce world, it is quite widespread to eyewitness fake allegations as well as reviews, fake rumours, harmful content and depressing social posts that can entirely blot your online reputation. As a front runner in offering online reputation management (ORM) services in India, we can aid you create an impactful online presence.</p>
              <p>It takes years to erect a reputation however a minute to damage it. Your product is not what you say it is, it is what individuals say it is. Mediatrenz can aid you repair, augment and administer your online reputation.</p>
            </div>
            <div className="col-md-12">
              <p>We know your online picture can have a broader impact and could signify the discrepancy between achievement and failure. We have an astonishing team of Public Relation (PR) professionals; marketing specialists, social media junkies as well as content management pundits who can aid you analyze your brand image, build a huge identity on the Internet, and guard and restore your online reputation. Our flourishing ORM services can help your organization formulate trust in the online world and offer you better visibility on the Internet.</p>
              <p>From small businesses, large enterprises, commerce professionals to celebrities, we have toiled with over three hundred and more clients from across the globe in neutralizing their negative impressions as well as maximizing optimistic experiences, thus promoting optimistic brand recall. Our ORM campaigns are intended to meet your exclusive requirements, whether you require fixing your {`brand’s`} negative image, boosting your digital profile, boosting your brand name on search engine result pages (SERPs), or merely wanting to preserve good online reputation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="packagessec">
        <div className="container text-center pos-rel cstm-pd60">
          <h2 className="title text-white">Our ORM Packages</h2>
          <div className="psubbox">HIGH QUALITY ORM SOLUTIONS FOR BUSINESSES</div>
          <div className="row">
            <div className="col-md-3 mt-3">
              <div className="inner">
                <div className="packagebox">
                  <div className="num">01</div>
                  <div className="packagename">ORM Sliver</div>
                  <div className="packageprice">$380</div>
                  <div className="btn-link1"><Link href="orm-packages.php">Select<span className="flaticon-right-arrow" /></Link></div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="inner">
                <div className="packagebox">
                  <div className="num">02</div>
                  <div className="packagename">ORM Gold</div>
                  <div className="packageprice">$680</div>
                  <div className="btn-link1"><Link href="orm-packages.php">Select<span className="flaticon-right-arrow" /></Link></div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="inner">
                <div className="packagebox">
                  <div className="num">03</div>
                  <div className="packagename">ORM Platinum</div>
                  <div className="packageprice">$980</div>
                  <div className="btn-link1"><Link href="orm-packages.php">Select<span className="flaticon-right-arrow" /></Link></div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="inner">
                <div className="packagebox">
                  <div className="num">04</div>
                  <div className="packagename">ORM Diamond</div>
                  <div className="packageprice">$1280</div>
                  <div className="btn-link1"><Link href="orm-packages.php">Select<span className="flaticon-right-arrow" /></Link></div>
                </div>
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
                <h2 className="title">WOULD YOU LIKE TO BUILD ONLINE REPUTATION?</h2>
                <p className="text-white" style={{paddingBottom: '30px'}}>Submit the below details and we will get in touch with you to discuss <br /> on online reputation for your brand.</p>                 
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
                      <input type="tel" name="phone" className="form-control effect-8" placeholder="Phone" required pattern=".{9,14}" />
                      <span className="focus-border"><i /></span>
                    </div>
                  </div>
                  <div className="col-md-6 mr0">
                    <div className="form-group">
                      <input type="text" name="message" className="form-control effect-8" placeholder="Notes" required />
                      <span className="focus-border"><i /></span>
                    </div>
                  </div>
                  <div className=" col-md-12 text-center">
                    <input type="submit" className="btn btn-success ajax_mail_sender" name="freeWebsite" defaultValue="Submit Now" />
                    <input type="hidden" name="form_page_name" defaultValue="ORM Services" />
                    <input type="hidden" name="form_name" defaultValue="orm_services_page" />
                    <p className="message" />
                  </div>
                </form> */}
                <AuditForm/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ormsec2">
        <div className="container pos-rel">
          <div className="row">
            <div className="col-md-8">
              <h2 className="title">How We Do It?</h2>
              {/* <h3 class="subtitle2">If you (a person or a brand) are troubled by a bad reputation on the internet then you have to take steps to address it immediately because the problem will not go away by itself. </h3> */}
              <p>Your reputation is spoilt when there is a disparity between the buzz and the authenticity. {`That’s`} why we arrange a transparent ORM campaign that makes sure success of your organization, brand, product or else service. Our ORM procedure consists of five stages including:</p>
              {/* <h4 class="subtitle3">Your reputation can face threats from many people that include</h4> */}
              <ul className="bullet-style5">
                <li><i className='fi fi-bs-check-circle'></i> Researching as well as analyzing your current status</li>
                <li><i className='fi fi-bs-check-circle'></i> Developing a modified ORM plan</li>
                <li><i className='fi fi-bs-check-circle'></i> Creating content, PR, social media &amp; SEO strategy</li>
                <li><i className='fi fi-bs-check-circle'></i> Publishing &amp; endorsing positive content</li>
                <li><i className='fi fi-bs-check-circle'></i> Monitoring ORM campaign</li>
              </ul>
              <p>Our team pursues this holistic ORM procedure to make your business as the most consistent brand in your industry.</p>
            </div>
            <div className="col-md-4">
              <div className="image">
                <img src="/images2/ormimg2.webp" alt="ORM Services" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ormsec3">
        <div className="image" style={{background: 'url(/images2/ormimg3.webp) center'}} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-8 green-bg">
              <div className="inner">
                <h2 className="title text-white">A superior online reputation can develop your bottom line</h2>
                {/* <h3 class="subtitle2 text-white">Our team at Mediatrenz has a great deal of experience at managing online reputations.</h3> */}
                <ul className="bullet-style2">
                  <li><i className='fi fi-bs-check-circle'></i> Nearly 95% of shoppers read online reviews before purchasing something</li>
                  <li><i className='fi fi-bs-check-circle'></i> Seventy-two percent of customers {`don't`} take action until they have interpreted reviews</li>
                  <li><i className='fi fi-bs-check-circle'></i> Given two products with comparable ratings, customers are more probable to purchase the product with more reviews.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ormsec4">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="title">Online Reputation Management Strategy</h2>
              <h3 className="subtitle2">We follow a systematic approach to manage your reputation online so that no aspect is left unattended to. </h3>
              <p>We develop a customized strategy for you once we have understood your requirements after careful study. Our objective is to offer you long term results. We offer very affordable online reputation management (ORM) plans. Click here to get in touch with us to find out more about our services.</p>
            </div>
            <div className="col-md-4">
              <div className="image"><img src="/images2/ormimg4.webp" alt="ORM Services" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="fullsersec" style={{background: 'url(/images2/seoser-parallax-bg.webp)'}}>
          <div className="container pos-rel text-center">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h2 className="title text-white">Enhance Your Brand Recognition With Online Reputation Management Services</h2>
                <h3 className="subtitle2 text-white" />
              </div>
              <div className="col-md-11">
                {/* <h3 class="subtitle2 text-white">Mediatrenz has a dedicated and experienced team of SEO and online marketing experts who can help transform your website and increase its profitability. We will analyse your site and that of your major competitors in order to devise the best strategy for you.</h3> */}
                <p className="mb-2">The primary goal of ORM services is to build a proactive brand and then create a better customer-centric connection. It helps in creating an impactful reputation online for your business. {`That’s`} when Mediatrenz can help you big time. We are not just here to mend the online reputation marketing but will maintain a proper brand reputation. </p>
                <p className="mb-2">We are considered as one of the leading digital marketing firms, offering 360-degree digital promotion solutions. So, our ORM services form a major part of digital promotions. Being one of the tops in the line, we understand the level of pressure we carry, but that {`won’t`} hamper the quality of our work. </p>
                <p className="mb-2">Our services will directly affect your customers and your {`brand’s`} productivity challenges. We are consistently trying to repair all the negative impacts that your brand might carry to help create a reputation in the market with a strong emphasis on customer satisfaction. It helps in protecting your brand name at a continuous rate, not just for now but in the future as well. </p>
                <p className="mb-2">We are ready to work on some of the impressive business strategies. Corporate reputation management procedure will be pretty helpful to any business. So, we are ready to take the next step with you and create an impactful online image for your brand. Creating a positive image in this highly competitive market is really important, and {`that’s`} what we are thinking about! So, with us, you get the opportunity to create a positive vibe around your brand name. </p>
              </div>
            </div>
          </div>
        </section>
        <section className="fullsersec2 green-bg">
          <div className="container text-center">
            <h2 className="title text-white">The services included in our package:</h2>
            <p>We have ORM services for individuals, which will not just monitor personal reputation but will help you to understand the importance of monitoring your content. If you fail to do so, then it will result in negative feedback and finally will cost you your business. So, to improve your brand and protect it from any further damages, we have the best ORM service India in store for you. So, {`let’s`} start with the options we have.</p>
            <div className="row text-left">
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                  <i class="fi fi-tr-ad-paid"></i>
                  <h4>Building and managing reputation:</h4>
                  <p>Our ORM services are designed to build and manage online reputations for not just individuals but for the company as well. We do that by controlling online conversations. </p>
                  <ul className="bullet-style2">
                    <li>* Our services help in presenting the best results of your company forward in the market to make them highly popular.</li>
                    <li>* We will help more people to engage in your site in case you are able to offer the exact thing they intend to find in the search engines. </li>
                  </ul> 
                </div>
              </div>
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                <i class="fi fi-ts-site"></i>
                  <h4>Monitoring your online reputation:</h4>
                  <p>We are ready to monitor and explore the online reputation of your business. Our top-notch services will actually make your firm or online site popular.</p>
                  <ul className="bullet-style3 text-white">
                    <li className="text-white">* For that, we will be crafting multiple plans.</li>
                    <li className="text-white">* Our main goal is to influence the outlook of every individual regarding the firm, entity, or organization on the internet.</li>
                    <li className="text-white">* Our services help in manipulating public opinion and get it towards your side.</li>
                  </ul><br /><br /> 
                </div>
              </div>
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                <i class="fi fi-ts-site"></i>
                  <h4>Recovering the online reputation:</h4>
                  <p>As one of the leading companies with Online reputation management services in India, we will also work hard to help you recover your lost online reputation through various social media platforms. We will offer information to attract more customers to your kitty. We are here to fix the damage already done and offer the necessary alternatives to help your firm with the recovery process.</p>
                </div>
              </div>
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                <i class="fi fi-ts-octagon-xmark"></i>
                  <h4>Remove your current negative comment:</h4>
                  <p>Being an ideal ORM firm, our main intention is to remove negative and unwanted comments from your website, which can easily harm the reputation of your firm or organization. Our top-level ORM services retaliate to misleading feedback and allow your company to put the best foot forward.</p><br />
                </div>
              </div>
              <div className="col-md-6 topmarg-30 mx-auto">
                <div className="inner">
                <i class="fi fi-ts-site"></i>
                  <h4>Develop that positive reputation:</h4>
                  <p>By developing a positive reputation, we help you in managing your {`company’s`} activities well. We are always here to help satisfy your customers by presenting your best information forward on the site. So, our services will help to develop that position reputation on a social platform about your firm. Now, your website will turn to look great online as it decides the career path of your firm.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ormsec4">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h2 className="title">Reasons to choose us at Mediatrenz for ORM solutions:</h2>
                {/* <h3 class="subtitle2">Facebook advertising is one of the most effective ways to grow your brand online.</h3> */}
                <ul className="bullet-style2 half new2">
                  <li><i className='fi fi-bs-check-circle'></i> With so many ORM companies these days, what makes Mediatrenz a fashion-forward service over here? Why choose us when there are multiple other options left? Well, there are some reasons why people plan to focus on our services more. So, {`let’s`} get on with the solutions now.</li>
                  <li><i className='fi fi-bs-check-circle'></i>From us, you will be receiving the easy CRM tools for our use. We use these tools with the main purpose of building and managing relationships with you. For that, we will be offering updates on your daily tasks to perform. This tool is rather easy to use because of its simple infrastructure. </li>
                  <li><i className='fi fi-bs-check-circle'></i>With us, you get the chance to work with a dedicated project manager who understands the value of ORM service India pretty well. There is always the importance of personal touch, and {`that’s`} when our manager comes to the rescue.</li>
                  <li><i className='fi fi-bs-check-circle'></i>So, join us for an experience like never before! Get your business at the top ranks now!</li>
                </ul>
              </div>
              <div className="col-md-4">
                <div className="image"><img src="images2/fbadsimg4.webp" alt="Facebook Ads" /></div>
              </div>
            </div>
          </div>
        </section>
        <section className="bottomserviecs-sec">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12 text-center title-mb">
                <h4 className="element-subtitle text-white">Our Services</h4>
                <h2 className="title text-white">We Build Brands With <br />
                  Our Best Services</h2>
              </div>
            </div>
            <div className="row mmt-30 text-left">
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="remove-complaints-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">Remove Complaints</div>
                    </div>
                    <div className="icnbox-box-no">01</div>
                    <p>Online complaints can truly hurt a business. Sometimes...</p>
                  </Link><div className="btn-link1"><Link href="remove-complaints-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="bad-reviews-removal-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">Remove Bad Reviews</div>
                    </div>
                    <div className="icnbox-box-no">02</div>
                    <p>Being the leader in the industry, the Mediatrenz team...</p>
                  </Link><div className="btn-link1"><Link href="bad-reviews-removal-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30 mx-auto">
                <div className="intro-ser-col">
                  <Link href="orm-services.php">
                    <div className="headtl">
                      <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                      <div className="icon-boxtext">Online reputation Management</div>
                    </div>
                    <div className="icnbox-box-no">03</div>
                    <p>{`One’s`} reputation is probably the most important things...</p>
                  </Link><div className="btn-link1"><Link href="orm-services.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
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
