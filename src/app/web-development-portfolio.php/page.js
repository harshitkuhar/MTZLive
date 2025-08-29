import Link from "next/link";
import ContactSection from "../components/ContactSection";

export const metadata = {
  
  title : "Our Web Designing and Development Portfolio | MEDIATRENZ",
    description : "Browse our web designing & development portfolio to check our quality work that lands us with repeat business. To know more about our work contact us today!",
    keywords : "Best Web Development Company in India,Web Development Services India",
    $og_title : "Our Web Designing and Development Portfolio | MEDIATRENZ",
    $og_description : "Browse our web designing & development portfolio to check our quality work that lands us with repeat business. To know more about our work contact us today!",
    $og_image : "",
    $og_url : "",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/web-development-portfolio.php`, // Generate the canonical URL
    },
};

export default function WebdevPortfolio() {
  return (
    <>
      <div
        className="innerbanner"
        style={{
          backgroundImage:
            "url(/images2/web-development-portfolio-banner.webp)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcurmb-content">
                <h1 className="page-title">Web Development Portfolio</h1>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    {/*<li className="breadcrumb-item"><Link href="#">Portfolio</Link></li>*/}
                    <li className="breadcrumb-item active">
                      Web Development Portfolio
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container text-center">
          <p>
            Our web development portfolio not only displays your creativity and
            efficiency but also highlights your level of expertise and
            professionalism. We have worked for several large and small
            businesses. Go through our portfolio to recognize our skills.
          </p>
        </div>
      </section>

{/* 1 */}
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg1.png) #e35a9e" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts mghts2" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Elevated Truck Solution </h2>
                <p className="text-white">
                  Elevated Truck Solutions provides affordable commercial truck rentals and sales, backed by years of industry expertise. With certified technicians and a wide range of medium, heavy-duty, and sleeper trucks, they deliver reliable, well-maintained vehicles that keep businesses moving.
                </p>
                <h3>Technology Used</h3>
                <ul className="portfolio-technology">
                  <li>WordPress</li>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>CSS</li>

                  <li>MySQL</li>
                </ul>
                <Link
                  className="btn btn-yellowcolor mt-3"
                  href="https://elevatedtrucksolutions.com/"
                  target="_blank"
                  rel="nofollow"
                  tabIndex={-1}
                >
                  <i className="fi fi-rr-globe-pointer"></i> View Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 2 */}
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg2.png) #47a9f4" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Harvest Child & Youth Development Center </h2>
                <p className="text-white">
                  Since 2005, Harvest Child & Youth Development Center has been dedicated to nurturing children from 6 weeks to 12 years. With a supportive, multicultural environment and comprehensive programs, they empower young learners to grow, thrive, and prepare for future success.
                </p>
                <h3>Technology Used</h3>
                <ul className="portfolio-technology">
                  <li>WordPress</li>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>MySQL</li>
                </ul>
                <Link
                  className="btn btn-yellowcolor mt-3"
                  href="https://harvestchild.org/"
                  target="_blank"
                  rel="nofollow"
                  tabIndex={-1}
                >
                  <i className="fi fi-rr-globe-pointer" />
                  View Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 3 */}
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg3.png) #6847c9" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Premier Sport Cars</h2>
                <p className="text-white">
                  Premier Sport Cars offers a wide selection of luxury vehicles in Marbella, from cabriolets and sports cars to SUVs. With flawless service, transparent pricing, and insured rentals, they create unforgettable driving experiences tailored to every {'client’s'} lifestyle.
                </p>
                <h3>Technology Used</h3>
                <ul className="portfolio-technology">
                  <li>WordPress</li>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>MySQL</li>
                </ul>
                <Link
                  className="btn btn-yellowcolor mt-3"
                  href="https://premiersportcars.com/"
                  target="_blank"
                  rel="nofollow"
                  tabIndex={-1}
                >
                  <i className="fi fi-rr-globe-pointer"></i> View Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 4 */}
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg4.png) #47b166" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts mghts2" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Midwest Physical Therapy</h2>
                <p className="text-white">
                  Midwest Physical Therapy delivers compassionate, high-quality care to treat pain, injuries, and movement issues. With a personalized approach and focus on long-term results, they empower patients to recover, prevent future injuries, and live healthier, more active lives.
                </p>
                <h3>Technology Used</h3>
                <ul className="portfolio-technology">
                  <li>WordPress</li>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>MySQL</li>
                </ul>
                <Link
                  className="btn btn-yellowcolor mt-3"
                  href="https://themidwestpt.com/"
                  target="_blank"
                  rel="nofollow"
                  tabIndex={-1}
                >
                  <i className="fi fi-rr-globe-pointer"></i> View Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 5 */}
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg5.png) #e35a9e" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts mghts2" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Wow Kitchen Designs</h2>
                <p className="text-white">
                  Wow Kitchen Designs offers professional design services and affordable luxury cabinetry for kitchens and baths. From planning and 3D renderings to project management, they provide complete interior solutions, collaborating with homeowners and contractors to bring every vision to life.
                </p>
                <h3>Technology Used</h3>
                <ul className="portfolio-technology">
                  <li>WordPress</li>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>MySQL</li>
                </ul>
                <Link
                  className="btn btn-yellowcolor mt-3"
                  href="https://wowkitchendesigns.com/"
                  target="_blank"
                  rel="nofollow"
                  tabIndex={-1}
                >
                  <i className="fi fi-rr-globe-pointer"></i> View Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 10 */}
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg10.png) #6847c9" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Chery Chiropractic Centre</h2>
                <p className="text-white">
                  With over 25 years of experience, Dr. Carine Chery provides holistic chiropractic and physiotherapy care in Fort Myers. Dedicated to family wellness and community, the center helps patients relieve pain, restore mobility, and achieve long-term health naturally.
                </p>
                <h3>Technology Used</h3>
                <ul className="portfolio-technology">
                  <li>WordPress</li>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>MySQL</li>
                </ul>
                <Link
                  className="btn btn-yellowcolor mt-3"
                  href="https://cherychiropractic.com/"
                  target="_blank"
                  rel="nofollow"
                  tabIndex={-1}
                >
                  <i className="fi fi-rr-globe-pointer"></i> View Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 12 */}
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg12.png) #e35a9e" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Well Done Seafood</h2>
                <p className="text-white">
                  With over 30 years of expertise, Well Done Seafood specializes in strategic global sourcing across Asia, the Americas, and the Middle East. Partnering with leading processors and fisheries, they deliver high-quality, competitively priced seafood tailored for U.S. and international markets.
                </p>
                <h3>Technology Used</h3>
                <ul className="portfolio-technology">
                  <li>WordPress</li>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>MySQL</li>
                </ul>
                <Link
                  className="btn btn-yellowcolor mt-3"
                  href="https://welldoneseafood.com/"
                  target="_blank"
                  rel="nofollow"
                  tabIndex={-1}
                >
                  <i className="fi fi-rr-globe-pointer"></i> View Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 16 */}
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg16.png) #47a9f4" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts mghts2" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Smiles Travel & Tours</h2>
                <p className="text-white">
                  Smiles Travel & Tours, a family-owned company based in Livingstone, Zambia, specializes in creating unforgettable journeys. From safaris to adventure activities, they deliver exceptional travel experiences while promoting local tourism and bringing smiles to every client.
                </p>
                <h3>Technology Used</h3>
                <ul className="portfolio-technology">
                  <li>WordPress</li>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>MySQL</li>
                </ul>
                <Link
                  className="btn btn-yellowcolor mt-3"
                  href="https://smilestravelandtourza.com/"
                  target="_blank"
                  rel="nofollow"
                  tabIndex={-1}
                >
                  <i className="fi fi-rr-globe-pointer"></i> View Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 11 */}
      {/* <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg11.webp) #6847c9" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Fom Here Everything</h2>
                <p className="text-white">
                  Going beyond the print media advertisement, we make use of the
                  digital space to help you sell and expand to a global market
                  beyond boundaries. We bring an exclusive platform that is
                  designed to post your well-crafted ads to audience that you
                  never targeted before.
                </p>
                <h3>Technology Used</h3>
                <ul className="portfolio-technology">
                  <li>WordPress</li>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>MySQL</li>
                </ul>
                <Link
                  className="btn btn-yellowcolor mt-3"
                  href="https://fromhereeverything.com/en/"
                  target="_blank"
                  rel="nofollow"
                  tabIndex={-1}
                >
                  <i className="fi fi-rr-globe-pointer"></i> View Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

{/* 12 */}
      {/* <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg12.webp) #47b166" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts mghts3" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Execu Suites Inc</h2>
                <p className="text-white">
                  Execu-Suites began operations in June of 1998 in the Historic
                  Angebilt building in the heart of Downtown Orlando. Locally
                  owned and operated, Execu-Suites focus has always been to
                  provide flexible office space solutions designed to meet the
                  needs of the local entrepreneur up to the large multinational
                  company.
                </p>
                <h3>Technology Used</h3>
                <ul className="portfolio-technology">
                  <li>WordPress</li>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>MySQL</li>
                </ul>
                <Link
                  className="btn btn-yellowcolor mt-3"
                  href="https://www.execusuitesinc.com/"
                  target="_blank"
                  rel="nofollow"
                  tabIndex={-1}
                >
                  <i className="fi fi-rr-globe-pointer"></i> View Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

{/* 6 */}
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg6.png) #47a9f4" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">HerbalCart</h2>
                <p className="text-white">
                  HerbalCart follows its own way to provide professional
                  supplements, remedies and one-on-one services to each and
                  every customer. None of our products are mass produced but are
                  created by talented &amp; loving hands ensuring quality,
                  freshness and purity.
                </p>
                <h3>Technology Used</h3>
                <ul className="portfolio-technology">
                  <li>WordPress</li>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>MySQL</li>
                </ul>
                <Link
                  className="btn btn-yellowcolor mt-3"
                  href="https://www.herbalcart.com/"
                  target="_blank"
                  rel="nofollow"
                  tabIndex={-1}
                >
                  <i className="fi fi-rr-globe-pointer"></i> View Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 8 */}
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg8.png) #47b166" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Capline Dental Services</h2>
                <p className="text-white">
                  Capline Dental, an end-to-end service provider, offers a full
                  spectrum of services for dental practices, ranging from
                  credentialing and insurance billing to insurance verification.
                  We eliminate the day-to-day operational stress so that you can
                  concentrate on smiles.
                </p>
                <h3>Technology Used</h3>
                <ul className="portfolio-technology">
                  <li>WordPress</li>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>MySQL</li>
                </ul>
                <Link
                  className="btn btn-yellowcolor mt-3"
                  href="https://www.caplinedentalservices.com/"
                  target="_blank"
                  rel="nofollow"
                  tabIndex={-1}
                >
                  <i className="fi fi-rr-globe-pointer"></i> View Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 13 */}
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg13.png) #e35a9e" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Zaragoza Jewelry</h2>
                <p className="text-white">
                  Zaragoza Jewelers was founded in 2011 by two brothers who had
                  just finished school and wanted to dedicate their time to one
                  of their passions. They opened the store at one of the most
                  iconic malls in Las Vegas: The Boulevard Mall, the first mall
                  of Las Vegas.
                </p>
                <h3>Technology Used</h3>
                <ul className="portfolio-technology">
                  <li>WordPress</li>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>MySQL</li>
                </ul>
                <Link
                  className="btn btn-yellowcolor mt-3"
                  href="https://zaragozajewelry.com/"
                  target="_blank"
                  rel="nofollow"
                  tabIndex={-1}
                >
                  <i className="fi fi-rr-globe-pointer"></i> View Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* 14 */}
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg14.png) #6847c9" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts mghts2" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">dosp.no</h2>
                <p className="text-white">
                  We are a total supplier of commercial kitchen machines with
                  online store, service agreements and repairs. Our service
                  technicians have many years of experience and specialize in
                  commercial kitchens.
                </p>
                <h3>Technology Used</h3>
                <ul className="portfolio-technology">
                  <li>WordPress</li>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>MySQL</li>
                </ul>
                <Link
                  className="btn btn-yellowcolor mt-3"
                  href="https://dosp.no/"
                  target="_blank"
                  rel="nofollow"
                  tabIndex={-1}
                >
                  <i className="fi fi-rr-globe-pointer"></i> View Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
    </>
  );
}
