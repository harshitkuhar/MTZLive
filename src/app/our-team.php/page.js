import ContactSection from "../components/ContactSection";
import Link from "next/link";
import HappyClients from "../components/HappyClients";

export const metadata = {
  title: "Our Team | Meet the Professionals of MEDIATRENZ",
  description: "MEDIATRENZ has professional team for all department that helps our clients in digital media advertising, software application and other required services.",
  keywords: "Our Team, Meet Our Team",
  og_title: "Our Team | Meet the Professionals of MEDIATRENZ",
  og_description: "MEDIATRENZ has professional team for all department that helps our clients in digital media advertising, software application and other required services.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/our-team.php`, // Generate the canonical URL
  },
};

export default function Ourteam() {
  return (
    <>
      <div
        className="innerbanner"
        style={{ backgroundImage: "url(/images2/team-banner.webp)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcurmb-content">
                <h1 className="page-title">Our Team</h1>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Our Team</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="about-inner-section team-sec">
        <div className="container">
          <h6>
            Meet the competent team of MEDIATRENZ. We are business professionals
            and digital marketing specialists that work devotedly to get the
            best results for our clients. We have built a competent team that
            plan, design, develop, and execute an established marketing program
            that will help you attain business goals.
          </h6>
          <p>
            Each of our team members is dedicated to helping you grow your
            business, whether you are an established business or a young
            start-up. Our knowledge, expertise and experience will help you
            attract new business online and convert website traffic into loyal
            customers. We will give your business a distinct edge over your
            competitors.
          </p>
          <p>
            We have multiple abilities; you can rely on us to fulfil your
            vision. Our creative approach ensures we are always open for
            communication. Our procedure helps to keep branding and message
            uniformity throughout your marketing endeavours. We have an
            optimistic approach that supports our creativity to flourish.
          </p>
          <p>
            We spend a lot of time with our customers while we are working
            together to carry out your business goals. Our passion allows us to
            constantly innovate to convey excellent products and services. As a
            consequence, we empower our clients with marketing solutions and
            services that solve real life marketing requirements.
          </p>
        </div>
      </section>

      <HappyClients />
      <ContactSection />
    </>
  );
}
