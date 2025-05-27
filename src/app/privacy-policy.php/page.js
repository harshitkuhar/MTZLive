import ContactSection from "../components/ContactSection";
import Link from "next/link";
import HappyClients from "../components/HappyClients";

export const metadata = {
  title : "Privacy Policy | MEDIATRENZ",
  description : "We believe in true partnership and transparency. Our aim is to provide best results to each of our clients through our best services.",
  keywords : "Privacy Policy",
  og_title : "Privacy Policy | MEDIATRENZ",
  og_description : "We believe in true partnership and transparency. Our aim is to provide best results to each of our clients through our best services.",
  og_image : "",
  og_url : "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/privacy-policy.php`, // Generate the canonical URL
  },
};

export default function Privacy() {
    return(
<>
  <div
    className="innerbanner"
    style={{ backgroundImage: "url(images2/privacy-policy-banner.webp)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcurmb-content">
            <h1 className="page-title">Privacy Policy</h1>
            <div className="breadcrumb_item ul-li">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="content-sec">
    <div className="container">
      <h5>We are committed to protecting your privacy</h5>
      <p>
        We gather the minimum amount of information about you that is
        proportionate with offering you with a suitable service. This policy
        designates the sort of processes that may consequence in data being
        collected about you. Your use of this website offers us the right to
        gather that information.
      </p>
      <h5>Information Collected</h5>
      <p>
        We may gather any or all of the information that you offer us depending
        on the kind of transaction you enter into, including your name, address,
        phone number, plus email address, together with data about your
        application of the website. Other information that may be required from
        time to time to process a request may also be collected as implicated on
        the website.
      </p>
      <h5>Information Use</h5>
      <p>
        We use the information collected principally to procedure the task for
        which you visited the website. Data collected is held in harmony with
        the Data Protection Act. All sensible precautions are taken to avert
        unauthorised access to this information. These maintain may need you to
        offer additional forms of identity should you wish to find information
        about your account details.
      </p>
      <h5>Cookies</h5>
      <p>
        Your Internet browser has the inherent facility for storing small files
        - cookies - that hold information which permits a website to distinguish
        your account. Our website takes benefit of this facility to improve your
        experience. You have the capability to prevent your computer from
        accepting cookies but, if you do, definite functionality on the website
        may be impaired.
      </p>
      <h5>Disclosing Information</h5>
      <p>
        We do not reveal any personal information obtained about you from this
        website to third parties except you permit us to do so by choosing the
        relevant boxes in registration or else competition forms. We may also
        use the information to keep in touch with you as well as inform you of
        developments linked with us. You will be provided the opportunity to
        eliminate yourself from any mailing list or comparable device. If at any
        time in the future we should wish to disclose information collected on
        this website to any third party, it would only be with your information
        as well as consent.
      </p>      
      <p>
        We may from time to time offer information of a general nature to third
        parties - for instance, the number of individuals visiting our website
        or else completing a registration form, but we will not utilize any
        information that could recognize those individuals.
      </p>
      <p>
        In addition Dummy may work with third parties for the reason of
        delivering targeted behavioural advertising to the Dummy website.
        Through the utilization of cookies, anonymous information about your
        utilization of our websites and other websites will be utilized to offer
        more applicable adverts about goods and services of interest to you.
      </p>
      <h5>Changes to this Policy</h5>
      <p>
        Any changes to our Privacy Policy will be placed here plus will succeed
        this version of our policy. We will take sensible steps to draw your
        concentration to any modifications in our policy. However, to be on the
        secure side, we recommend that you interpret this document each time you
        utilize the website to make sure that it still meets with your
        endorsement.
      </p>
      <h5>Contacting Us</h5>
      <p>
        If you have any queries about our Privacy Policy, or if you want to know
        what information we have gathered about you, please email us. You can
        also correct any accurate errors in that information or else want us to
        eliminate your details form any list under our control.
      </p>
      <h5>Text message communications</h5>
      <p>
        We use text messaging to communicate with you about your service. Normal
        messaging rates apply and the frequency of messages may vary. Mobile
        Carriers are not liable for delayed or undelivered messages.
      </p>
      <p>
        No mobile information will be shared with third parties/affiliates for
        marketing/promotional purposes. All other categories exclude text
        messaging originator opt-in data and consent; this information will not
        be shared with any third parties.
      </p>
      <h5>Opt-out of text message communications</h5>
      <p className="mb-0">
        You may opt out of text messaging at any time by replying to any message
        with STOP or contacting us at <b>stop@mediatrenz.com</b> This will end
        the communications from that particular phone number. You may continue
        to receive service-related and other non-marketing text messages from
        other phone numbers managed by Company, and you may opt out of those in
        a similar fashion.
      </p>
    </div>
  </section>
  <HappyClients/>
  <ContactSection />
</>
    )
}
