import ContactSection from "../components/ContactSection";
import Link from "next/link";

export const metadata = {
  title: "Mobile App Portfolio | MEDIATRENZ",
  description: "MEDIATRENZ has many years of experience in Mobile App and Website Development services. We have delivered 500+ Complex Mobile Apps and Website to clients across the globe.",
  keywords: "Mobile app development services India,App development company in Noida",
  og_title: "Mobile App Portfolio | MEDIATRENZ",
  og_description: "MEDIATRENZ has many years of experience in Mobile App and Website Development services. We have delivered 500+ Complex Mobile Apps and Website to clients across the globe.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/mobile-app-portfolio.php`, // Generate the canonical URL
  },
};

export default function MobileappPortfolio() {
  return (
    <>
      <div
        className="innerbanner"
        style={{
          backgroundImage: "url(/images2/mobile-app-portfolio-banner.webp)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcurmb-content">
                <h1 className="page-title">Mobile Apps Portfolio</h1>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    {/*<li className="breadcrumb-item"><Link href="#">Portfolio</Link></li>*/}
                    <li className="breadcrumb-item active">
                      Mobile apps Portfolio
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
            MEDIATRENZ has built faith in the market for the perfect mobile
            application and website development services. Since our inception we
            have never looked back and led the success path. We have delivered
            500+ Complex Mobil e Apps and Websites for Clients across the Globe.
            We are passionate about solving difficult issues and delivering
            exceptional solutions.
          </p>
        </div>
      </section>
      <section
        className="portfolio-sec2"
        style={{
          background: "url(images2/new/app-portfoio/app-geenbg1.webp) #1fae52",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="inner">
                <h2 className="title text-white">DRIVA Online</h2>
                <p className="text-white">
                  DRIVA Online provides a professional and efficient Ride share
                  services worldwide through its latest app coupled with a
                  portfolio of Non App based services customised to individual
                  and corporate executive needs such as Navigation, Airport Meet
                  Assist, Point to Point Transfers, As Directed ground transport
                  services for roadshow itinerary management and events, Private
                  Jet charters and personal VIP security services in over 450
                  major cities worldwide.
                </p>
                {/* <h3>Technology Used</h3>
          <ul className="portfolio-technology">
            <li>Java</li>
            <li>Kolin</li>
            <li>Android Studio IDE</li>
          </ul>
          <Link className="mt-3" href="#" tabindex="-1"><img src="images2/g-play.webp" alt="Google Play"></Link> */}
              </div>
            </div>
            <div className="col-sm-6 col-md-6"></div>
          </div>
        </div>
      </section>
      <section
        className="portfolio-sec2"
        style={{
          background:
            "url(images2/new/app-portfoio/app-purplebg1.webp) #6f46ae",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="inner">
                <h2 className="title text-white">DRIVA Partner</h2>
                <p className="text-white">
                  DRIVA Partner Online provides a professional and efficient
                  Ride share services worldwide through its latest app coupled
                  with a portfolio of Non App based services customised to
                  individual and corporate executive needs such as Navigation,
                  Airport Meet Assist, Point to Point Transfers, As Directed
                  ground transport services for roadshow itinerary management
                  and events, Private Jet charters and personal VIP security
                  services in over 450 major cities worldwide.
                </p>
                {/*  <h3>Technology Used</h3>
          <ul className="portfolio-technology">
            <li>Java</li>
            <li>Kolin</li>
            <li>Android Studio IDE</li>
          </ul>
          <Link className="mt-3" href="#" tabindex="-1"><img src="images2/g-play.webp" alt="Google Play Store Optimization"></Link> */}
              </div>
            </div>
            <div className="col-sm-6 col-md-6" />
          </div>
        </div>
      </section>
      <section
        className="portfolio-sec2"
        style={{
          background: "url(images2/new/app-portfoio/app-bluebg1.webp) #00ace6",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="inner">
                <h2 className="title text-white">yathar</h2>
                <p className="text-white">
                  yathar is a new gourmet application utilizing the latest
                  technology. We will use Artificial intelligence(A.I) to
                  recommend the good restaurant for you. You can get deals with
                  coupons and make reservations for restaurants. Also, for
                  reviews and evaluations by real-name users, you can obtain
                  information on highly reliable restaurants. Furthermore, SNS
                  function allows you to know restaurants recommended by
                  friends, or you can catch the topic gourmet trend as soon as
                  possible.
                </p>
                {/*  <h3>Technology Used</h3>
          <ul className="portfolio-technology">
            <li>Java</li>
            <li>Kolin</li>
            <li>Android Studio IDE</li>
          </ul>
          <Link className="mt-3" href="#" tabindex="-1"><img src="images2/g-play.webp" alt="Google Services"></Link> */}
              </div>
            </div>
            <div className="col-sm-6 col-md-6" />
          </div>
        </div>
      </section>
      <section
        className="portfolio-sec2"
        style={{
          background: "url(images2/new/app-portfoio/app-pinkbg1.webp) #e055a6",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="inner">
                <h2 className="title text-white">TabletShablet</h2>
                <p className="text-white">
                  Tabletshablet.com- Healthcare on your Fingertips is an online
                  portal for healthcare products brought to you by Sterling Take
                  Opinion Pvt Ltd. Download the easy-to-use TabletShablet App to
                  conveniently order your medicines from anywhere, at any time.
                  Just tap the App, find your required medicines, and your order
                  will be delivered anywhere in India. The company is managed by
                  a team of entrepreneurs having an experience of 28 years in
                  the healthcare and patient dealing sector.
                </p>
                {/* <h3>Technology Used</h3>
          <ul className="portfolio-technology">
            <li>Java</li>
            <li>Kolin</li>
            <li>Android Studio IDE</li>
          </ul>
          <Link className="mt-3" href="#" tabindex="-1"><img src="images2/g-play.webp" alt="Google Play Optimization"></Link> */}
              </div>
            </div>
            <div className="col-sm-6 col-md-6" />
          </div>
        </div>
      </section>
      <section
        className="portfolio-sec2"
        style={{
          background: "url(images2/new/app-portfoio/app-geenbg2.webp) #1fae52",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="inner">
                <h2 className="title text-white">Women to Women</h2>
                <p className="text-white">
                  Women to Women is an app to find all things related to the
                  brand. As a media portal for shows, news, art and business,
                  the W2W app follows and explores the lives of different
                  business women from all walks of life as they struggle with
                  the day-to-day drama of their careers, relationships and
                  acceptance in the world. The Women to Women brand started from
                  the show {`NY's`} Women to Women, created by cast Member April S
                  Watson.
                </p>
                {/* <h3>Technology Used</h3>
          <ul className="portfolio-technology">
            <li>Java</li>
            <li>Kolin</li>
            <li>Android Studio IDE</li>
          </ul>
          <Link className="mt-3" href="#" tabindex="-1"><img src="images2/g-play.webp" alt="Google Play Store Services"></Link> */}
              </div>
            </div>
            <div className="col-sm-6 col-md-6" />
          </div>
        </div>
      </section>
      <section
        className="portfolio-sec2"
        style={{
          background:
            "url(images2/new/app-portfoio/app-purplebg2.webp) #6f46ae",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="inner">
                <h2 className="title text-white">Trucker Convoy</h2>
                <p className="text-white">
                  Trucker Convoy is the ultimate trucking networking app, where
                  companies and drivers can converse and interact for jobs, gigs
                  and purchase products related to the trucking industry. A
                  company or fleet owner can create Gigs, which are odd jobs or
                  short term contracts solicited by independent
                  contractors/drivers. Further, companies can create larger Jobs
                  to be bid-out to drivers/owners. Also, included within the app
                  is a One Stop Shop which allows users to buy/sell/rent various
                  trucking related products.
                </p>
                {/* <h3>Technology Used</h3>
          <ul className="portfolio-technology">
            <li>Java</li>
            <li>Kolin</li>
            <li>Android Studio IDE</li>
          </ul>
          <Link className="mt-3" href="#" tabindex="-1"><img src="images2/g-play.webp" alt="Google Play Store"></Link> */}
              </div>
            </div>
            <div className="col-sm-6 col-md-6" />
          </div>
        </div>
      </section>
      <section
        className="portfolio-sec2"
        style={{
          background: "url(images2/new/app-portfoio/app-bluebg2.webp) #00ace6",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="inner lstinr">
                <h2 className="title text-white">City of Downey</h2>
                <p className="text-white">
                  The official City of Downey application allows for city
                  residents to submit service requests directly to the city.
                  When a service request is submitted through the application,
                  {`it's`} logged directly into the {`city's`} ticketing system and
                  routed to the appropriate department. The application also has
                  another feature which allows app users to submit feedback
                  about service received directly to the city.
                </p>
                {/* <h3>Technology Used</h3>
          <ul className="portfolio-technology">
            <li>Java</li>
            <li>Kolin</li>
            <li>Android Studio IDE</li>
          </ul>
          <Link className="mt-3" href="#" tabindex="-1"><img src="images2/g-play.webp" alt="Google Play Store Optimization"></Link> */}
              </div>
            </div>
            <div className="col-sm-6 col-md-6" />
          </div>
        </div>
      </section>
      <section
        className="portfolio-sec2"
        style={{
          background: "url(images2/new/app-portfoio/app-pinkbg2.webp) #e055a6",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <div className="inner lstinr">
                <h2 className="title text-white">Interface</h2>
                <p className="text-white">
                  The InCompass Field Management application provides a secure
                  digital community, facilitating real-time communication,
                  reporting and collaboration between office and remote field
                  teams, executing installation projects. Now every aspect of
                  your project, from sharing documents, to generating reports,
                  to sending photos/videos, can be managed via WEB and Mobile
                  Device, through one application and shared with all project
                  team members, regardless of their location.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6" />
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
