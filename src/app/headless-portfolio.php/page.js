import ContactSection from "../components/ContactSection";
import Link from "next/link";

export const metadata = {
  title: "",
  description: "",
  keywords: "",
  og_title: "",
  og_description: "",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/headless-portfolio.php`, // Generate the canonical URL
  },
};

export default function HeadlessPortfolio() {
    return(
      <>
        <div
          className="innerbanner"
          style={{ backgroundImage: "url(/images2/headless-portfolio-banner.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcurmb-content">
                  <h1 className="page-title">Headless Portfolio</h1>
                  <div className="breadcrumb_item ul-li">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">Headless Portfolio</li>
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
              Our design portfolio not only showcases our creativity and innovation but
              also highlights our mastery in headless website architecture. {`We've`}
              partnered with businesses of all sizes to create visually stunning,
              user-centric designs that are both flexible and future-proof. Explore our
              portfolio to see how our designs elevate user experiences and set new
              standards in digital aesthetics.
            </p>
          </div>
        </section>
        <section className="headless-bg">
          <div className="container">
            <div className="hdless-bg-white">
              <div className="row  ">
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="headless-web-img">
                    <img src="images2/headless-portfolio2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-8 col-sm-8 col-xs-12">
                  <div className="headless-web-content">
                    <h3>Digital Agency / IT services </h3>
                    <p>
                      Digital Agency specializes in website design, digital marketing,
                      and related services, delivering innovative solutions to enhance
                      your online presence and drive business growth across industries.
                    </p>
                    <Link href="https://digital.mediatrenz.com/" target="_blank">
                      Live Preview
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hdless-bg-white">
              <div className="row  ">
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="headless-web-img">
                    <img src="images2/headless-portfolio1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-8 col-sm-8 col-xs-12">
                  <div className="headless-web-content">
                    <h3>EmailNow / Campaigns</h3>
                    <p>
                      Tailored for businesses in 2023 and the future, this platform
                      offers lightning-fast performance with an elegant design {`that’s`}
                      optimized for SEO. Its customizable features and complete content
                      control allow you to achieve outstanding results across various
                      industries, leaving a lasting and impactful impression in your
                      market.
                    </p>
                    <Link href="https://emailnow.mediatrenz.com/" target="_blank">
                      Live Preview
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hdless-bg-white">
              <div className="row  ">
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="headless-web-img">
                    <img src="images2/headless-portfolio3.png" alt="" />
                  </div>
                </div>
                <div className="col-md-8 col-sm-8 col-xs-12">
                  <div className="headless-web-content">
                    <h3>MTZ Homes</h3>
                    <p>
                      Real Estate specializes in finding your ideal property with a
                      focus on personalized service and local market expertise. From
                      dream homes to investment opportunities, MTZ Homes provides
                      tailored solutions for all your real estate needs.
                    </p>
                    <Link href="https://property.mediatrenz.com/" target="_blank">
                      Live Preview
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hdless-bg-white">
              <div className="row  ">
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="headless-web-img">
                    <img src="images2/headless-portfolio4.png" alt="" />
                  </div>
                </div>
                <div className="col-md-8 col-sm-8 col-xs-12">
                  <div className="headless-web-content">
                    <h3>Well Food</h3>
                    <p>
                      Delicious Foods Co. is dedicated to bringing you the finest in
                      culinary delights. We offer an extensive selection of
                      high-quality, fresh, and flavorful products, including gourmet
                      snacks, ready-to-eat meals, and specialty ingredients. Our
                      commitment to excellence ensures that every bite delivers
                      exceptional taste, whether {`you're`} enjoying a quick snack or
                      preparing a full-course meal.
                    </p>
                    <Link href="https://food.mediatrenz.com/" target="_blank">
                      Live Preview
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hdless-bg-white">
              <div className="row  ">
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="headless-web-img">
                    <img src="images2/headless-portfolio5.png" alt="" />
                  </div>
                </div>
                <div className="col-md-8 col-sm-8 col-xs-12">
                  <div className="headless-web-content">
                    <h3>Consultia Tax</h3>
                    <p>
                      
                      Tax Consulting specializes in comprehensive tax planning,
                      compliance, and advisory services. Expert solutions to optimize
                      your tax strategy and ensure full regulatory compliance.
                    </p>
                    <Link href="https://consult.mediatrenz.com/" target="_blank">
                      Live Preview
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactSection />
      </>
    )
}
