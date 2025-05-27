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
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg1.webp) #e35a9e" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts mghts2" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Plains Breaker Apparel</h2>
                <p className="text-white">
                  Plainsbreaker Apparel was inspired by the sight of seeing the
                  majestic Rocky Mountains towering over the sprawling prairies–
                  they break the vast plains of Western Canada.
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
                  href="https://www.plainsbreakerapparel.com/"
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
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg2.webp) #47a9f4" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Closet Candy</h2>
                <p className="text-white">
                  Powered by caffeine and a love for fashion, Closet Candy is a
                  clothing boutique that offers the latest in {`women's`} fashion.
                  When I started Closet Candy, it was just a simple idea my
                  husband, Chad, and I had to sell clothes in our salon in
                  Scottsdale, online, and on Facebook.
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
                  href="https://www.closetcandy.com"
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
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg3.webp) #6847c9" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Chef Zipora Global</h2>
                <p className="text-white">
                  For more than 2 decades, Chef Zipora Einav has traveled the
                  world preparing exquisite, flavorful meals for her high-end
                  clients. She uses food to empower individuals and families to
                  embrace a healthy lifestyle that satisfies the mind, body, and
                  spirit.
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
                  href="https://chefziporaglobal.com/"
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
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg4.webp) #47b166" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts mghts2" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Jain Estates</h2>
                <p className="text-white">
                  Jain Estates is two decade old Real Estate consultancy firm.
                  We have our head quarters at New Delhi, and associate offices
                  in Mumbai, Bangalore, Pune, Kolkata, Chennai etc.
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
                  href="https://www.jainoncor.com/"
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
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg5.webp) #e35a9e" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts mghts2" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Orelia</h2>
                <p className="text-white">
                  Orelia was born out of this need for beautiful, fashionable,
                  good quality yet affordable jewellery. Orelia bridges the gap
                  between high street and designer brands.
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
                  href="https://www.orelia.co.uk/"
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
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg6.webp) #47a9f4" }}
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
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg7.webp) #6847c9" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Encino Dental Esthetics</h2>
                <p className="text-white">
                  Encino Dental Esthetics is a technologically advanced and
                  inviting dental practice conveniently located in Encino,
                  California. Kaivan Kiai, DDS, and his team of dental experts
                  provide exceptional dental care for people of all ages.
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
                  href="https://www.encinodentalesthetics.com/"
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
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg8.webp) #47b166" }}
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
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg9.webp) #e35a9e" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Liv India Group</h2>
                <p className="text-white">
                  Everything we do is focused on providing the best car
                  beautification and customer service experience in the
                  Automobile industry. Our formula is simple; we make people
                  feel good by not only delivering a clean, dry and shiny car
                  every time but also healthy and sanitized vehicle.
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
                  href="https://www.livindiagroup.com/"
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
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg10.webp) #47a9f4" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts mghts2" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Zone Firewall</h2>
                <p className="text-white">
                  Zone Firewall is an award-winning company whose internet and
                  network protection services have won several awards and
                  accolades across the world.
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
                  href="https://zonefirewall.co.uk/"
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
      <section
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
      </section>
      <section
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
      </section>
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg13.webp) #e35a9e" }}
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
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg14.webp) #47a9f4" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts mghts2" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Caves Valley Tech</h2>
                <p className="text-white">
                  Caves Valley Technologies (CVT) is dedicated to the global
                  advancement of Smart Cities though high-technology solutions,
                  market consulting, and education.
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
                  href="https://www.cavesvalleytech.com/"
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
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg15.webp) #6847c9" }}
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
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg16.webp) #47b166" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts mghts2" />
            </div>
            <div className="col-md-6">
              <div className="inner">
                <h2 className="title text-white">Factory Outlet Tooling</h2>
                <p className="text-white">
                  Factory Outlet Tooling . (FOTCNC) is a leading industrial
                  manufacturing tool distributor for metalworkers, aerospace,
                  oil &amp; gas, automotive, and job shop manufacturing.
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
                  href="https://jet.fotcnc.com/"
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
      <section
        className="portfolio-sec"
        style={{ background: "url(/images2/portfolio-bg17.webp) #e35a9e" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mghts mghts4" />
            </div>
            <div className="col-md-6">
              <div className="inner lstmg">
                <h2 className="title text-white">Fegon Group</h2>
                <p className="text-white">
                  Fegon Group is a leading online electronics and e-commerce
                  retailer in the US. It is also the {`world's`} fastest growing
                  e-commerce tech company.
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
                  href="https://fegon-group.com/"
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
