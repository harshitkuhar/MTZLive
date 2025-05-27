import ContactSection from "../components/ContactSection";
import Link from "next/link";
import HappyClients from "../components/HappyClients";

export const metadata = {
  title : "Refund-and-Cancellation | MEDIATRENZ",
  description : "Each of our customers is very important to us and we try to help them in every way possible. We have a refund and cancellation policy in place.",
  keywords : "Refund and Cancellation",
  og_title : "Refund-and-Cancellation | MEDIATRENZ",
  og_description : "Each of our customers is very important to us and we try to help them in every way possible. We have a refund and cancellation policy in place.",
  og_image : "",
  og_url : "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/refund-and-cancellation.php`, // Generate the canonical URL
  },
};

export default function Refund() {
    return(
      <>
        <div
          className="innerbanner"
          style={{
            backgroundImage: "url(images2/refund-and-cancellation-banner.webp)"
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcurmb-content">
                  <h1 className="page-title">Refund &amp; Cancellation</h1>
                  <div className="breadcrumb_item ul-li">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Refund &amp; Cancellation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="content-sec">
          <div className="container">
            <h5>Refund and Cancellation</h5>
            <p>
              Mediatrenz believes in helping its consumers as far as possible, and has
              consequently a liberal cancellation policy. Under this policy:
            </p>
            <p>
              Cancellations will be believed only if the demand is made within twelve
              hours of placing an order. However, the cancellation request will not be
              entertained if the orders have been communicated to the
              vendors/merchants/execution team as well as they have initiated the
              procedure of shipping or else working on them.
            </p>
            <p>
              There is no cancellation of orders placed under the Same Day Delivery
              grouping. No cancellations are entertained for those products/services
              that the Mediatrenz marketing team has obtained on exceptional occasions
              or else events/offers such as Month end offers, discount promotions,
              Halloweens, Christmas, New Year etc. These are restricted
              occasion/events offers/scheme as well as therefore cancellations are not
              possible.
            </p>
            <p>
              Money once salaried will not be returned back in any case even if the
              cancellation is placed within twelve hours. The money can be adjusted
              against a future order within ninety days.
            </p>
            <p>
              Any shortage in service because of any third party like hosting, server,
              images, content writing etc, Mediatrenz will not be accountable at all.
              Any efforts Meditrenz has to put while coordinating/liaisoning with them
              has to be paid as per the criterion rate of the company.
            </p>
            <p>
              In case you feel that the product obtained is not as shown on the site
              or as per your expectations, you must bring it to the notice of our
              customer service within 24 hours of obtaining the product. The Customer
              Service Team after looking into your grievance will take a suitable
              decision.
            </p>
            <h5>Refund Policy</h5>
            <p>
              When you purchase our products/services, Due to the nature of business,
              Mediatrenz do not provide any money back policy. If you are, for any
              reason, not completely happy with your buy, you must bring it to the
              notice of our customer service within 24 hours of obtaining the product.
              The Customer Service Team after looking into your objection will take a
              suitable decision.
            </p>
            <p>
              No cancellations are considered for services that our marketing team has
              provided on special occasions. These are restricted time offers and
              cannot be cancelled. Digital marketing packages are not refundable, but
              the customer may cancel with a notice written thirty days in advance.
            </p>
            <p>
              We do not provide refunds on deposits or payments for projects that are
              abandoned or lay inactive for more than 30 days.
            </p>
            <h5>Subscription Policy</h5>
            <p>
              Thank you for choosing Mediatrenz for your digital marketing needs. We
              aim to provide unparalleled services in SEO, SMO, GMB, ORM, PPC, and ASO
              to enhance your online presence and drive success for your business.
            </p>
            <h5>Cancellation of Subscription</h5>
            <p>
              In the event that you wish to cancel your subscription with us, we
              kindly request that you notify us at least 30 days (1 month) prior to
              the desired cancellation date. This allows us to process your request
              effectively and ensures a smooth transition. Informing us 1 month prior
              also enables us to use our resources on other priority tasks, and
              staying true to our unwavering commitments to our esteemed clients like
              you. Please note that any cancellation requests made less than 30 days
              in advance will not be regarded as valid.
            </p>
          </div>
        </section>
        <HappyClients/>
        <ContactSection />
      </>
    )
}
