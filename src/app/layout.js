import { Rubik, Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Head from "./components/Head";
import Header from "./components/Header";
import Footer from "./components/Footer";

const rubik = Rubik({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["700"], variable: '--font-poppins' });

export const metadata = {
  title: "#1 Best SEO Company & Consultant in India | Mediatrenz",
  description: "Looking for SEO Company India? Mediatrenz has 50+ highly trained experts that served 20+ countries and have done 2000+ projects. Get Quote Now",
  keywords: "Website Development Company India, Hire Web Developer India",
  og_title: "Website Development Company India | Hire Web Developer India",
  og_description: "MEDIATRENZ is a trusted & reliable website development company in India. We provide customer-centric and result-oriented website development services across the world.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}`, // Generate the canonical URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className} ${poppins.variable}`} suppressHydrationWarning>
        <Head/>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
