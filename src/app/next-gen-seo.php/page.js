import ContactSection from "../components/ContactSection";
import Link from "next/link";
import HappyClients from "../components/HappyClients";
import NextGenServices from "../components/NextGenServices";

export const metadata = {
  title: "Next-Gen SEO | Modern Strategies for Higher Rankings With Mediatrenz",
  description: "Discover next-generation SEO techniques designed to boost visibility, improve search rankings, and drive long-term growth. Explore cutting-edge strategies for 2025 and beyond.",
  keywords: "Next-Gen SEO",
  og_title: "Next-Gen SEO | Modern Strategies for Higher Rankings With Mediatrenz",
  og_description: "Discover next-generation SEO techniques designed to boost visibility, improve search rankings, and drive long-term growth. Explore cutting-edge strategies for 2025 and beyond.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/next-gen-seo.php`, // Generate the canonical URL
  },
};

export default function Seomobile() {
  return (
    <>
      <div
        className="innerbanner"
        style={{ backgroundImage: "url(/images2/next-gen-seo.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcurmb-content">
                <h1 className="page-title">Professional NEXT GEN SEO Services India</h1>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    {/* <li className="breadcrumb-item"><Link href="#">SEO</Link></li>*/}
                    <li className="breadcrumb-item active">NEXT-Gen SEO</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NextGenServices/>
      <HappyClients />
      <ContactSection />
    </>
  );
}
