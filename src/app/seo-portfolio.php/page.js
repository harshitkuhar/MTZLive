import Link from "next/link";
import ContactSection from "../components/ContactSection";
import HappyClients from "../components/HappyClients";

export const metadata = {
  title: "Our SEO Clients Result | MEDIATRENZ",
  description: "We are recognized digital agency in India who provide best services to their clients. Our name is known in the market because of our SEO clients result.",
  keywords: "Our SEO Clients Result",
  og_title: "Our SEO Clients Result | MEDIATRENZ",
  og_description: "We are recognized digital agency in India who provide best services to their clients. Our name is known in the market because of our SEO clients result.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/seo-portfolio.php`, // Generate the canonical URL
  },
};

export default function SeoPortfolio() {
  return (
    <>
      <div
        className="innerbanner"
        style={{ backgroundImage: "url(images2/seo-portfolio-banner.webp)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcurmb-content">
                <h1 className="page-title">SEO Portfolio</h1>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    {/* <li className="breadcrumb-item"><Link href="#">Portfolio</Link></li>*/}
                    <li className="breadcrumb-item active">SEO Portfolio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="portfolio-sec3">
        <div className="container text-center">
          <p>
            Take a look at our SEO portfolio to get an idea of the type of
            projects we work on and the results we have accomplished for several
            industry-leading businesses. Please scroll through to find some of
            our SEO portfolio examples. If you have a query regarding any of our
            SEO portfolio samples, do reach us through our contact page.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <div className="inner topmarg-30">
                <div className="image">
                  <img src="images2/seo-portfolio-1.webp" alt="SEO Portfolio" />
                </div>
                <div className="table-responsive table-striped w-auto">
                  <table className="table table-bordered result-table">
                    <thead>
                      <tr>
                        <th
                          className="website-name"
                          style={{ background: "#f05ba3" }}
                          colSpan={4}
                        >
                          aboveallsportshoops.com &nbsp; | &nbsp; Google.com
                        </th>
                      </tr>
                      <tr>
                        <th className="vmd hide480">S. No.</th>
                        <th className="vmd">Keywords</th>
                        <th className="vmd">Current Ranking</th>
                        <th className="vmd hide480">Initial Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hide480">1</td>
                        <td>Summer prep showcase</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">2</td>
                        <td>Above All Sports</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">3</td>
                        <td>Houston National Summer Showcase</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">4</td>
                        <td>Houston basketball tournaments</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">5</td>
                        <td>Greater Houston Live</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">6</td>
                        <td>Zydeco Hoopfest</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">7</td>
                        <td>Summer Finale</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">8</td>
                        <td>Basketball Tournaments In Texas</td>
                        <td>7</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">9</td>
                        <td>Youth Basketball Tournaments in Texas</td>
                        <td>8</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">10</td>
                        <td>Off Da Hook</td>
                        <td>10</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="inner topmarg-30">
                <div className="image">
                  <img src="images2/seo-portfolio-3.webp" alt="SEO Portfolio" />
                </div>
                <div className="table-responsive table-striped">
                  <table className="table table-bordered result-table">
                    <thead>
                      <tr>
                        <th
                          className="website-name"
                          style={{ background: "#f05ba3" }}
                          colSpan={4}
                        >
                          showcarsign.com &nbsp; | &nbsp; Google.com
                        </th>
                      </tr>
                      <tr>
                        <th className="vmd hide480">S. No.</th>
                        <th className="vmd">Keywords</th>
                        <th className="vmd">Current Ranking</th>
                        <th className="vmd hide480">Initial Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hide480">1</td>
                        <td>Car show signs</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">2</td>
                        <td>Car show boards</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">3</td>
                        <td>Car show display board</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">4</td>
                        <td>Car show display signs</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">5</td>
                        <td>Custom car show display board</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">6</td>
                        <td>Car show reader boards</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">7</td>
                        <td>Car show display</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">8</td>
                        <td>Car show display ideas</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">9</td>
                        <td>Car show board stand</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">10</td>
                        <td>Car show poster</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="inner topmarg-30">
                <div className="image">
                  <img
                    src="images2/torontocosmeticsurgeryclinic-co.png"
                    alt="Our SEO Portfolio"
                  />
                </div>
                <div className="table-responsive table-striped">
                  <table className="table table-bordered result-table">
                    <thead>
                      <tr>
                        <th
                          className="website-name"
                          style={{ background: "#f05ba3" }}
                          colSpan={4}
                        >
                          torontocosmeticsurgeryclinic.co &nbsp; | &nbsp;
                          Google.ca
                        </th>
                      </tr>
                      <tr>
                        <th className="vmd hide480">S. No.</th>
                        <th className="vmd">Keywords</th>
                        <th className="vmd">Current Ranking</th>
                        <th className="vmd hide480">Initial Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hide480">1</td>
                        <td>Gastric Balloon Toronto</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">2</td>
                        <td>Toronto Cosmetic Surgery </td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">3</td>
                        <td>Affordable Eyelids Surgery Toronto</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">4</td>
                        <td>cosmetic surgery clinic toronto</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">5</td>
                        <td>full body makeover near me</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">6</td>
                        <td>clinic of plastic surgery in Toronto</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">7</td>
                        <td>Nose Surgery Clinic Toronto</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">8</td>
                        <td>vaginal reconstructive surgery in Toronto</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">9</td>
                        <td>Liposuction cosmetic surgery clinic Toronto</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">10</td>
                        <td>Brazilian butt lift cosmetic surgery clinic</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">11</td>
                        <td>Brazilian Butt Lift surgeons in Toronto</td>
                        <td>10</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">12</td>
                        <td>Cosmetic Surgery in Toronto</td>
                        <td>8</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">13</td>
                        <td>surgical hair replacement Toronto</td>
                        <td>9</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">14</td>
                        <td>body makeover surgery toronto</td>
                        <td>8</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">15</td>
                        <td>toronto cosmetic surgery clinic</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">16</td>
                        <td>lafontaine cosmetic surgery toronto</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">17</td>
                        <td>lap band surgery toronto</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">18</td>
                        <td>cosmetic surgery</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">19</td>
                        <td>cosmetic surgery clinic</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">20</td>
                        <td>the plastic surgery clinic toronto</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">21</td>
                        <td>toronto cosmetic surgery</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">22</td>
                        <td>cosmetic surgery clinic toronto</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">23</td>
                        <td>chin reduction surgery toronto</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">24</td>
                        <td>toronto surgery clinic</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">25</td>
                        <td>chin reduction surgery</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">26</td>
                        <td>gta plastic surgery</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">27</td>
                        <td>lap band surgery</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">28</td>
                        <td>plastic surgery clinic toronto</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">29</td>
                        <td>forehead reduction surgery toronto</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">30</td>
                        <td>cosmetic surgery toronto</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">31</td>
                        <td>plastic surgery clinic</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">32</td>
                        <td>toronto plastic surgery clinic</td>
                        <td>7</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">33</td>
                        <td>hairline lowering surgery toronto</td>
                        <td>8</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">34</td>
                        <td>plastic surgery clinics toronto</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">35</td>
                        <td>Allurion Gastric Balloon Programme</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">36</td>
                        <td>Allurion Gastric Balloon</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">37</td>
                        <td>Gastric Balloon</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">38</td>
                        <td>Gastric Balloon Toronto</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="inner topmarg-30">
                <div className="image">
                  <img src="images2/simply-cbd-net.png" alt="SEO Portfolio" />
                </div>
                <div className="table-responsive table-striped">
                  <table className="table table-bordered result-table">
                    <thead>
                      <tr>
                        <th
                          className="website-name"
                          style={{ background: "#f05ba3" }}
                          colSpan={4}
                        >
                          simply-cbd.net &nbsp; | &nbsp; Google.com
                        </th>
                      </tr>
                      <tr>
                        <th className="vmd hide480">S. No.</th>
                        <th className="vmd">Keywords</th>
                        <th className="vmd">Current Ranking</th>
                        <th className="vmd hide480">Initial Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hide480">1</td>
                        <td>weed water pineapple express</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">2</td>
                        <td>marijuana pouches</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">3</td>
                        <td>weed water gelato</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">4</td>
                        <td>cannabis pouches</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">5</td>
                        <td>euphorica tropical punch</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">6</td>
                        <td>thc pouches</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">7</td>
                        <td>cbd store in alabama</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">8</td>
                        <td>weed water cans</td>
                        <td>10</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">9</td>
                        <td>cbd store near me</td>
                        <td>10</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">10</td>
                        <td>off hours bad days gummies</td>
                        <td>10</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">11</td>
                        <td>weed water can</td>
                        <td>10</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">12</td>
                        <td>Delta 10 THC Disposable Daphne AL</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">13</td>
                        <td>Buy Pharma CBD Delta 8 Tincture in Atlanta</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">14</td>
                        <td>cbd sleep aid Atlanta</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">15</td>
                        <td>CBD Gummies Daphne AL</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">16</td>
                        <td>Buy Delta 9 THC Daphne AL</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">17</td>
                        <td>cbd gummies to aid sleep Daphne AL</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">18</td>
                        <td>Buy Delta 10 THC Tincture Atlanta</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">19</td>
                        <td>best cbd cbg gummies Daphne AL</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">20</td>
                        <td>buy cbd gummies Daphne AL</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">21</td>
                        <td>Cbd capsules Live Resin THC Atlanta</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">22</td>
                        <td>Buy cbd Edibles in Daphne AL</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">23</td>
                        <td>Online Delta 8 Water Atlanta</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">24</td>
                        <td>Buy CBD Pet Products in Daphne AL</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="inner topmarg-30">
                <div className="image">
                  <img
                    src="images2/seo-portfolio-11.webp"
                    alt="SEO Portfolio"
                  />
                </div>
                <div className="table-responsive table-striped">
                  <table className="table table-bordered result-table">
                    <thead>
                      <tr>
                        <th
                          className="website-name"
                          style={{ background: "#f05ba3" }}
                          colSpan={4}
                        >
                          westwooddentalesthetics.com &nbsp; | &nbsp; Google.com
                        </th>
                      </tr>
                      <tr>
                        <th className="vmd hide480">S. No.</th>
                        <th className="vmd">Keywords</th>
                        <th className="vmd">Current Ranking</th>
                        <th className="vmd hide480">Initial Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hide480">1</td>
                        <td>Dental Crowns westwood</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">2</td>
                        <td>Cosmetic Veneers westwood</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">3</td>
                        <td>After hours Dentist in westwood</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">4</td>
                        <td>Emergency Dentist in westwood</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">5</td>
                        <td>Dentist services in westwood</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">6</td>
                        <td>Invisalign dentist in westwood</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">7</td>
                        <td>Cosmetic Dentist in westwood</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">8</td>
                        <td>Teeth Whitening westwood</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">9</td>
                        <td>Dentist in westwood</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">10</td>
                        <td>Dental Implants westwood</td>
                        <td>8</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="inner topmarg-30">
                <div className="image">
                  <img src="images2/teamm8-com.png" alt="SEO Portfolio" />
                </div>
                <div className="table-responsive table-striped">
                  <table className="table table-bordered result-table">
                    <thead>
                      <tr>
                        <th
                          className="website-name"
                          style={{ background: "#f05ba3" }}
                          colSpan={4}
                        >
                          teamm8.com &nbsp; | &nbsp; Google.com
                        </th>
                      </tr>
                      <tr>
                        <th className="vmd hide480">S. No.</th>
                        <th className="vmd">Keywords</th>
                        <th className="vmd">Current Ranking</th>
                        <th className="vmd hide480">Initial Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hide480">1</td>
                        <td>inclusivity jockstrap</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">2</td>
                        <td>mens jockstraps</td>
                        <td>7</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">3</td>
                        <td>mens jockstrap</td>
                        <td>7</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">4</td>
                        <td>mens sexy thongs</td>
                        <td>9</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">5</td>
                        <td>man thongs</td>
                        <td>10</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">6</td>
                        <td>sexy men underwear</td>
                        <td>14</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">7</td>
                        <td>sexy mens underwear</td>
                        <td>14</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">8</td>
                        <td>mens sexy underwear</td>
                        <td>18</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">9</td>
                        <td>mens sexy underwears</td>
                        <td>20</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">10</td>
                        <td>mens swim briefs</td>
                        <td>21</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="inner topmarg-30">
                <div className="image">
                  <img
                    src="images2/seo-portfolio-15.webp"
                    alt="SEO Portfolio"
                  />
                </div>
                <div className="table-responsive table-striped">
                  <table className="table table-bordered result-table">
                    <thead>
                      <tr>
                        <th
                          className="website-name"
                          style={{ background: "#f05ba3" }}
                          colSpan={4}
                        >
                          refreshcarpetcleaning.com.au &nbsp; | &nbsp;
                          Google.com.au
                        </th>
                      </tr>
                      <tr>
                        <th className="vmd hide480">S. No.</th>
                        <th className="vmd">Keywords</th>
                        <th className="vmd">Current Ranking</th>
                        <th className="vmd hide480">Initial Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hide480">1</td>
                        <td>Carpet Water Restoration Benobble</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">2</td>
                        <td>Drying Equipment Rental Anglers paradise</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">3</td>
                        <td>Carpet Water Extraction Anglers paradise</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">4</td>
                        <td>Wet Carpet Repair Austinville</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">5</td>
                        <td>Drying Equipment Rental Austinville</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">6</td>
                        <td>Drying Equipment Rental Beechmont</td>
                        <td>7</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">7</td>
                        <td>Carpet Drying Equipment Rental Bonogin</td>
                        <td>8</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">8</td>
                        <td>Drying Equipment Rental Bonogin</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">9</td>
                        <td>Drying Equipment Rental Burleigh waters</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">10</td>
                        <td>Emergency Carpet Cleaner in Benowa waters</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">11</td>
                        <td>Wet Carpet Repair Bethania</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">12</td>
                        <td>Remove and dispose of wet carpet Bahrs Scrub</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">13</td>
                        <td>Carpet Blower Bahrs Scrub</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">14</td>
                        <td>Wet Carpet Drying Belivah</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">15</td>
                        <td>Carpet Water Restoration Burleigh waters</td>
                        <td>9</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">16</td>
                        <td>Carpet Water Damage Alberton</td>
                        <td>9</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">17</td>
                        <td>Carpet Water Extraction Bundall </td>
                        <td>15</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">18</td>
                        <td>Wet Carpet Drying Bureleigh Heads</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">19</td>
                        <td>Carpet Water Damage in Benowa</td>
                        <td>14</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="inner topmarg-30">
                <div className="image">
                  <img
                    src="images2/seo-portfolio-17.webp"
                    alt="SEO Portfolio"
                  />
                </div>
                <div className="table-responsive table-striped">
                  <table className="table table-bordered result-table">
                    <thead>
                      <tr>
                        <th
                          className="website-name"
                          style={{ background: "#f05ba3" }}
                          colSpan={4}
                        >
                          gamersgift.com &nbsp; | &nbsp; Google.co.in
                        </th>
                      </tr>
                      <tr>
                        <th className="vmd hide480">S. No.</th>
                        <th className="vmd">Keywords</th>
                        <th className="vmd">Current Ranking</th>
                        <th className="vmd hide480">Initial Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hide480">1</td>
                        <td>Steam wallet cards</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">2</td>
                        <td>Steam wallet india</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">3</td>
                        <td>Steam wallet card india</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">4</td>
                        <td>Steam gift card india</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">5</td>
                        <td>Buy steam wallet code</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">6</td>
                        <td>Steam wallet code india</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">7</td>
                        <td>Steam wallet cards india</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">8</td>
                        <td>Garena Shells</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">9</td>
                        <td>Steam wallet code</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">10</td>
                        <td>Steam wallet codes</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">11</td>
                        <td>Garena shells india</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">12</td>
                        <td>Get steam wallet</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">13</td>
                        <td>Steam wallet</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">14</td>
                        <td>5$ steam wallet card</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">15</td>
                        <td>Garena cash</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">16</td>
                        <td>Garena shells</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">17</td>
                        <td>Buy garena</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">18</td>
                        <td>Google play gift cards India</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">19</td>
                        <td>Cash loans in Delhi</td>
                        <td>15</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">20</td>
                        <td>Google play gift card india</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">21</td>
                        <td>Mol points</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">22</td>
                        <td>Mol point</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">23</td>
                        <td>Molpoints india</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">24</td>
                        <td>Psn cards</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">25</td>
                        <td>Psn card</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">26</td>
                        <td>Itunes gift cards india</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">27</td>
                        <td>Itunes gift card india</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">28</td>
                        <td>Steam autumn sale india</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">29</td>
                        <td>1000 rs steam wallet code </td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">30</td>
                        <td>500 rs steam wallet code</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">31</td>
                        <td>2500 rs steam wallet code </td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">32</td>
                        <td>$5 steam wallet cards</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">33</td>
                        <td>$10 steam wallet cards</td>
                        <td>7</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">34</td>
                        <td>$50 steam wallet cards</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">35</td>
                        <td>$60 steam wallet cards</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">36</td>
                        <td>$30 steam wallet cards</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">37</td>
                        <td>$15 steam wallet cards</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">38</td>
                        <td>1000 rs google play gift cards</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">39</td>
                        <td>1500 rs google play gift cards</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">40</td>
                        <td>750 rs google play gift cards</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">41</td>
                        <td>Aion online eu</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">42</td>
                        <td>Rohan blood feud</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">43</td>
                        <td>Ultimate game card</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">44</td>
                        <td>World of warcraft us</td>
                        <td>8</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">45</td>
                        <td>Age of conan us</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">46</td>
                        <td>Heroes of newerth sea</td>
                        <td>9</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">47</td>
                        <td>League of legends garena</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">48</td>
                        <td>PUBG Mobile Royale Pass</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">49</td>
                        <td>Pubg mobile UC</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">50</td>
                        <td>PUBG mobile UC cash India</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">51</td>
                        <td>UC cash for pubg mobile</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inner topmarg-30">
                <div className="image">
                  <img
                    src="images2/quebecphotobooth-ca.png"
                    alt="SEO Portfolio"
                  />
                </div>
                <div className="table-responsive table-striped">
                  <table className="table table-bordered result-table">
                    <thead>
                      <tr>
                        <th
                          className="website-name"
                          style={{ background: "#f05ba3" }}
                          colSpan={4}
                        >
                          quebecphotobooth.ca &nbsp; | &nbsp; Google.ca
                        </th>
                      </tr>
                      <tr>
                        <th className="vmd hide480">S. No.</th>
                        <th className="vmd">Keywords</th>
                        <th className="vmd">Current Ranking</th>
                        <th className="vmd hide480">Initial Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hide480">1</td>
                        <td>photobooth quebec</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">2</td>
                        <td>photo booth miroir a quebec</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">3</td>
                        <td>photobooth</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">4</td>
                        <td>Green screen photobooth</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">5</td>
                        <td>360 photobooth</td>
                        <td>7</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">6</td>
                        <td>360 photo booth montreal</td>
                        <td>9</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">7</td>
                        <td>360 photo booth near me</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">8</td>
                        <td>360 photo booth for rent</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">9</td>
                        <td>360 video booth for rent</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">10</td>
                        <td>360 photo booth rental</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">11</td>
                        <td>360 booth rental</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">12</td>
                        <td>360 spin photo booth</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">13</td>
                        <td>360 camera booth</td>
                        <td>8</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">14</td>
                        <td>360 booth</td>
                        <td>9</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">15</td>
                        <td>party photobooth</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">16</td>
                        <td>photobooth rental near me</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">17</td>
                        <td>photo booth rental</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">18</td>
                        <td>cheap photo booth rental</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">19</td>
                        <td>rent a 360 photo booth</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">20</td>
                        <td>location photobooth</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">21</td>
                        <td>cheap photo booth rental</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">22</td>
                        <td>360 photo booth rental price</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">23</td>
                        <td>photo booth rental service</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">24</td>
                        <td>photo booths for parties</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="inner topmarg-30">
                <div className="image">
                  <img src="images2/seo-portfolio-4.webp" alt="SEO Portfolio" />
                </div>
                <div className="table-responsive table-striped">
                  <table className="table table-bordered result-table">
                    <thead>
                      <tr>
                        <th
                          className="website-name"
                          style={{ background: "#f05ba3" }}
                          colSpan={4}
                        >
                          pearlbridal.com.au &nbsp; | &nbsp; Google.com.au
                        </th>
                      </tr>
                      <tr>
                        <th className="vmd hide480">S. No.</th>
                        <th className="vmd">Keywords</th>
                        <th className="vmd">Current Ranking</th>
                        <th className="vmd hide480">Initial Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hide480">1</td>
                        <td>Wedding dresses gold coast</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">2</td>
                        <td>Wedding dress shop Gold Coast</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">3</td>
                        <td>Bridesmaid dresses in gold coast</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">4</td>
                        <td>Plus size wedding dresses Brisbane</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">5</td>
                        <td>Plus size wedding dresses gold coast</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">6</td>
                        <td>Gold coast bridesmaid dresses</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">7</td>
                        <td>Wedding dress Brisbane</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">8</td>
                        <td>Gold Coast Wedding Dress designer</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">9</td>
                        <td>Wedding dress shops Brisbane</td>
                        <td>12</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">10</td>
                        <td>Designer wedding dresses Brisbane</td>
                        <td>16</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="inner topmarg-30">
                <div className="image">
                  <img src="images2/seo-portfolio-6.webp" alt="SEO Portfolio" />
                </div>
                <div className="table-responsive table-striped">
                  <table className="table table-bordered result-table">
                    <thead>
                      <tr>
                        <th
                          className="website-name"
                          style={{ background: "#f05ba3" }}
                          colSpan={4}
                        >
                          x-pcb.com &nbsp; | &nbsp; Google.com
                        </th>
                      </tr>
                      <tr>
                        <th className="vmd hide480">S. No.</th>
                        <th className="vmd">Keywords</th>
                        <th className="vmd">Current Ranking</th>
                        <th className="vmd hide480">Initial Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hide480">1</td>
                        <td>Hdi pcb manufacturer china</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">2</td>
                        <td>Purchase rigid flex circuit boards</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">3</td>
                        <td>Cheap flex pcb online</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">4</td>
                        <td>Quick turn rigid flex pcb</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">5</td>
                        <td>Flexible pcb manufacturer china</td>
                        <td>8</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">6</td>
                        <td>Rigid flex pcb cost china</td>
                        <td>9</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">7</td>
                        <td>Quick turn flex circuits</td>
                        <td>10</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">8</td>
                        <td>Hdi flex pcb</td>
                        <td>11</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">9</td>
                        <td>Flexible pcb quote</td>
                        <td>12</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">10</td>
                        <td>Flex pcb prototype service</td>
                        <td>15</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="inner topmarg-30">
                <div className="image">
                  <img src="images2/seo-portfolio-8.webp" alt="SEO Portfolio" />
                </div>
                <div className="table-responsive table-striped">
                  <table className="table table-bordered result-table">
                    <thead>
                      <tr>
                        <th
                          className="website-name"
                          style={{ background: "#f05ba3" }}
                          colSpan={4}
                        >
                          mondialgommesrl.it &nbsp; | &nbsp; Google.it
                        </th>
                      </tr>
                      <tr>
                        <th className="vmd hide480">S. No.</th>
                        <th className="vmd">Keywords</th>
                        <th className="vmd">Current Ranking</th>
                        <th className="vmd hide480">Initial Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hide480">1</td>
                        <td>Pneumatici seminuovi con garanzia Roma</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">2</td>
                        <td>Pneumatici nuovi economici Roma</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">3</td>
                        <td>Gomme seminuove garantite Pomezia</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">4</td>
                        <td>
                          Outlet pneumatici nuovi prezzi bassi San Giovanni
                        </td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">5</td>
                        <td>Gomme usate con garanzia Roma</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">6</td>
                        <td>Gomme seminuove usate a metà prezzo Guidonia</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">7</td>
                        <td>
                          Pneumatici gomme seminuovi garantiti e nuove
                          economiche Lariano
                        </td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">8</td>
                        <td>Offerta gomme usate Prenestina</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">9</td>
                        <td>Pneumatici nuovi in offerta Velletri</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">10</td>
                        <td>
                          Pneumatici seminuovi con garanzia al 80% e solo prime
                          marche
                        </td>
                        <td>12</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="inner topmarg-30">
                <div className="image">
                  <img
                    src="images2/onlinemeasures-com.png"
                    alt="SEO Portfolio"
                  />
                </div>
                <div className="table-responsive table-striped">
                  <table className="table table-bordered result-table">
                    <thead>
                      <tr>
                        <th
                          className="website-name"
                          style={{ background: "#f05ba3" }}
                          colSpan={4}
                        >
                          onlinemeasures.com &nbsp; | &nbsp; Google.co.nz
                        </th>
                      </tr>
                      <tr>
                        <th className="vmd hide480">S. No.</th>
                        <th className="vmd">Keywords</th>
                        <th className="vmd">Current Ranking</th>
                        <th className="vmd hide480">Initial Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hide480">1</td>
                        <td>Painters QS measure</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">2</td>
                        <td>online measures surveying platform</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">3</td>
                        <td>Steel Measure take off</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">4</td>
                        <td>QS for plastering</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">5</td>
                        <td>Online Measure take off</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">6</td>
                        <td>Painting and Plastering Quantity</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">7</td>
                        <td>Best Price QS</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">8</td>
                        <td>quantity surveyor measurement</td>
                        <td>12</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">9</td>
                        <td>painting and plastering services</td>
                        <td>18</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">10</td>
                        <td>quantity surveying companies near me</td>
                        <td>19</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">11</td>
                        <td>quantity surveyor business</td>
                        <td>20</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="inner topmarg-30">
                <div className="image">
                  <img
                    src="images2/seo-portfolio-10.webp"
                    alt="SEO Portfolio"
                  />
                </div>
                <div className="table-responsive table-striped">
                  <table className="table table-bordered result-table">
                    <thead>
                      <tr>
                        <th
                          className="website-name"
                          style={{ background: "#f05ba3" }}
                          colSpan={4}
                        >
                          encinodentalesthetics.com &nbsp; | &nbsp; Google.com
                        </th>
                      </tr>
                      <tr>
                        <th className="vmd hide480">S. No.</th>
                        <th className="vmd">Keywords</th>
                        <th className="vmd">Current Ranking</th>
                        <th className="vmd hide480">Initial Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hide480">1</td>
                        <td>Dentist Services in Encino</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">2</td>
                        <td>After hours Dentist in Encino</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">3</td>
                        <td>Emergency Dentist in Encino</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">4</td>
                        <td>Dental Crowns Encino</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">5</td>
                        <td>Dentist in Encino</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">6</td>
                        <td>Invisalign dentist in Encino</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">7</td>
                        <td>Cosmetic Veneers Encino</td>
                        <td>7</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">8</td>
                        <td>Teeth Whitening Encino</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">9</td>
                        <td>Dental Implants Encino</td>
                        <td>11</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">10</td>
                        <td>Cosmetic Dentist Encino</td>
                        <td>10</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="inner topmarg-30">
                <div className="image">
                  <img
                    src="images2/seo-portfolio-12.webp"
                    alt="SEO Portfolio"
                  />
                </div>
                <div className="table-responsive table-striped">
                  <table className="table table-bordered result-table">
                    <thead>
                      <tr>
                        <th
                          className="website-name"
                          style={{ background: "#f05ba3" }}
                          colSpan={4}
                        >
                          smilehavendentalcenter.com &nbsp; | &nbsp; Google.com
                        </th>
                      </tr>
                      <tr>
                        <th className="vmd hide480">S. No.</th>
                        <th className="vmd">Keywords</th>
                        <th className="vmd">Current Ranking</th>
                        <th className="vmd hide480">Initial Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hide480">1</td>
                        <td>Chan healing institute</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">2</td>
                        <td>Cosmetic dentistry treatments in la mesa</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">3</td>
                        <td>Cosmetic dentistry services la mesa ca</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">4</td>
                        <td>Dr stephen chan</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">5</td>
                        <td>Holistic dentist la mesa ca</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">6</td>
                        <td>Dental bridge care for floss la mesa</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">7</td>
                        <td>Dental implant surgery la mesa ca</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">8</td>
                        <td>Cosmetic dentist crowns la mesa ca</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">9</td>
                        <td>Dental implant surgery center la mesa</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">10</td>
                        <td>Dental implant surgery clinic la mesa</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">11</td>
                        <td>Bemer therapy in san diego</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">12</td>
                        <td>Ozone therapy services La Mesa</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">13</td>
                        <td>Infrared Sauna therapy la mesa</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="inner topmarg-30">
                <div className="image">
                  <img
                    src="images2/seo-portfolio-14.webp"
                    alt="SEO Portfolio"
                  />
                </div>
                <div className="table-responsive table-striped">
                  <table className="table table-bordered result-table">
                    <thead>
                      <tr>
                        <th
                          className="website-name"
                          style={{ background: "#f05ba3" }}
                          colSpan={4}
                        >
                          Acaixpress.com &nbsp; | &nbsp; Google.ae
                        </th>
                      </tr>
                      <tr>
                        <th className="vmd hide480">S. No.</th>
                        <th className="vmd">Keywords</th>
                        <th className="vmd">Current Ranking</th>
                        <th className="vmd hide480">Initial Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hide480">1</td>
                        <td>Best acai uae</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">2</td>
                        <td>Acai berry supplier UAE</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">3</td>
                        <td>Acaixpress cafe in dubai</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">4</td>
                        <td>Acai express dubai</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">5</td>
                        <td>Acai bowls delivery in dubai</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">6</td>
                        <td>Best acai in abu dhabi</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">7</td>
                        <td>Fresh organic frozen acai</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">8</td>
                        <td>Best acai dubai </td>
                        <td>7</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">9</td>
                        <td>Best acai bowl in dubai</td>
                        <td>8</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">10</td>
                        <td>Acai bowl dubai</td>
                        <td>10</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="inner topmarg-30">
                <div className="image">
                  <img
                    src="images2/seo-portfolio-16.webp"
                    alt="SEO Portfolio"
                  />
                </div>
                <div className="table-responsive table-striped">
                  <table className="table table-bordered result-table">
                    <thead>
                      <tr>
                        <th
                          className="website-name"
                          style={{ background: "#f05ba3" }}
                          colSpan={4}
                        >
                          nirafinance.com &nbsp; | &nbsp; Google.co.in
                        </th>
                      </tr>
                      <tr>
                        <th className="vmd hide480">S. No.</th>
                        <th className="vmd">Keywords</th>
                        <th className="vmd">Current Ranking</th>
                        <th className="vmd hide480">Initial Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hide480">1</td>
                        <td>Online loans app</td>
                        <td>8</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">2</td>
                        <td>Instant cash loan in india</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">3</td>
                        <td>Instant loan without documents</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">4</td>
                        <td>Quick loan india</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">5</td>
                        <td>Mini cash loan</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">6</td>
                        <td>Cash loan in india</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">7</td>
                        <td>Immediate cash loan service</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">8</td>
                        <td>Emi mobile phone</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">9</td>
                        <td>Without credit card emi</td>
                        <td>6</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">10</td>
                        <td>Emi without credit card</td>
                        <td>7</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">11</td>
                        <td>Small personal loans online</td>
                        <td>5</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">12</td>
                        <td>Small cash loans</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">13</td>
                        <td>Online loan in india</td>
                        <td>9</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">14</td>
                        <td>Zero down payment mobile phones</td>
                        <td>8</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">15</td>
                        <td>Get instant loan</td>
                        <td>11</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">16</td>
                        <td>Apply instant loan</td>
                        <td>12</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">17</td>
                        <td>Cash loans in Mumbai</td>
                        <td>7</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">18</td>
                        <td>Cash loans in Bangalore</td>
                        <td>16</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">19</td>
                        <td>Cash loans in Delhi</td>
                        <td>15</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">20</td>
                        <td>Cash loans in Chennai</td>
                        <td>16</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">21</td>
                        <td>Instant loan apply</td>
                        <td>22</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">22</td>
                        <td>Instant loan online</td>
                        <td>20</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">23</td>
                        <td>Instant personal loan app</td>
                        <td>21</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">24</td>
                        <td>Online instant personal loan</td>
                        <td>22</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">25</td>
                        <td>Personal loan instant approval</td>
                        <td>18</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">26</td>
                        <td>Loan in india</td>
                        <td>22</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="inner topmarg-30">
                <div className="image">
                  <img
                    src="images2/seo-portfolio-18.webp"
                    alt="SEO Portfolio"
                  />
                </div>
                <div className="table-responsive table-striped">
                  4
                  <table className="table table-bordered result-table">
                    <thead>
                      <tr>
                        <th
                          className="website-name"
                          style={{ background: "#f05ba3" }}
                          colSpan={4}
                        >
                          trosecurity.de &nbsp; | &nbsp; Google.de
                        </th>
                      </tr>
                      <tr>
                        <th className="vmd hide480">S. No.</th>
                        <th className="vmd">Keywords</th>
                        <th className="vmd">Current Ranking</th>
                        <th className="vmd hide480">Initial Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="hide480">1</td>
                        <td>Haus Alarmanlage Installation Troisdorf</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">2</td>
                        <td>Hausalarmsystem Firma Troisdorf</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">3</td>
                        <td>Wohnung Alarmanlage Überwachung Troisdorf</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">4</td>
                        <td>Alarmanlagen für Wohnungen in Troisdorf</td>
                        <td>3</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">5</td>
                        <td>Alarmanlage für die Firma in Troisdorf</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">6</td>
                        <td>
                          Kameraüberwachungssystem für zu Hause in Troisdorf
                        </td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">7</td>
                        <td>Auto-Alarm-Installationssystem Troisdorf</td>
                        <td>1</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">8</td>
                        <td>Kohlenmonoxid-Detektor Deutschland</td>
                        <td>9</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td className="hide480">9</td>
                        <td>Videokamera-Überwachungssystem Deutschland</td>
                        <td>2</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Einbruchmeldeanlage Alarmsystem Troisdorf</td>
                        <td>4</td>
                        <td className="vmd hide480">Not in 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HappyClients />
      <section className="packagessec">
        <div className="container-fluid text-center pos-rel cstm-pd60">
          <h2 className="title text-white">Our SEO Services Packages</h2>
          <div className="psubbox">
            HIGH QUALITY SEO Services SOLUTIONS FOR BUSINESSES
          </div>
          <div className="row">
            <div className="cstm-col-package mt-3">
              <div className="inner">
                <div className="packagebox">
                  <div className="num">01</div>
                  <div className="packagename">SEO STARTER</div>
                  <div className="packageprice">$349</div>
                  <div className="btn-link1">
                    <Link href="seo-packages.php">
                      Select
                      <i className="fi fi-br-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="cstm-col-package mt-3">
              <div className="inner">
                <div className="packagebox">
                  <div className="num">02</div>
                  <div className="packagename">SEO BOOSTER</div>
                  <div className="packageprice">$599</div>
                  <div className="btn-link1">
                    <Link href="seo-packages.php">
                      Select
                      <i className="fi fi-br-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="cstm-col-package mt-3">
              <div className="inner">
                <div className="packagebox">
                  <div className="num">03</div>
                  <div className="packagename">SEO SPEED</div>
                  <div className="packageprice">$999</div>
                  <div className="btn-link1">
                    <Link href="seo-packages.php">
                      Select
                      <i className="fi fi-br-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="cstm-col-package mt-3">
              <div className="inner">
                <div className="packagebox">
                  <div className="num">04</div>
                  <div className="packagename">SEO EDGE</div>
                  <div className="packageprice">$1299</div>
                  <div className="btn-link1">
                    <Link href="seo-packages.php">
                      Select
                      <i className="fi fi-br-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="cstm-col-package mt-3">
              <div className="inner">
                <div className="packagebox">
                  <div className="num">05</div>
                  <div className="packagename">SEO PRIME</div>
                  <div className="packageprice">$1499</div>
                  <div className="btn-link1">
                    <Link href="seo-packages.php">
                      Select
                      <i className="fi fi-br-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
