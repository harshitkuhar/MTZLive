import Link from "next/link";
import ContactSection from "../components/ContactSection";
import HappyClients from "../components/HappyClients";
import AuditForm from "../components/FormWithWebsiteField";

export const metadata = {
  title: "Get Free Website Analysis Report | Free Website Audit Report",
  description: "Get the free website analysis report of your business website with problem and solutions. We cover technical+On-page+Competitors+Keywords+Suggestions.",
  keywords: "Website Analysis Report, Free Website Analysis Report, Website Audit Report",
  og_title: "Get Free Website Analysis Report | Free Website Audit Report",
  og_description: "Get the free website analysis report of your business website with problem and solutions. We cover technical+On-page+Competitors+Keywords+Suggestions.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/free-website-analysis.php`, // Generate the canonical URL
  },
};

export default function FreeWebsiteAnalysis() {
  return (
    <>
      <div className="innerbanner" style={{backgroundImage: 'url(/images2/web-development-portfolio-banner.webp)'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcurmb-content">
                <h1 className="page-title">Free Website Analysis</h1>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="https://mediatrenz.com">Home</Link></li>
                    {/*<li className="breadcrumb-item"><Link href="#">Portfolio</Link></li>*/}
                    <li className="breadcrumb-item active">Free Website Analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container text-center">
          <p>Our web development portfolio not only displays your creativity and efficiency but also highlights your level of expertise and professionalism. We have worked for several large and small businesses. Go through our portfolio to recognize our skills.</p>
        </div>
      </section>
      <section className="ranking-form form1">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="form-heading">
                <h2 className="title">WOULD YOU LIKE TO HAVE A FREE WEBSITE AUDIT?</h2>
                <p className="text-white" style={{paddingBottom: '30px'}}>Get Your Free Website Analysis Audit Report! <br /> &amp; {`We'll`} Tell You What To Fix and How. </p>                   
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
                    <input type="hidden" name="form_page_name" defaultValue="Free Website Analysis" />
                    <input type="hidden" name="form_name" defaultValue="free_website_analysis" />
                    <p className="message" />
                  </div>
                </form> */}
                <AuditForm/>
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