
import ContactSection from "../components/ContactSection";
import Link from "next/link";
import HappyClients from "../components/HappyClients";

export const metadata = {
  title : "Testimonials | MEDIATRENZ",
    description : "We create a comprehensive and fast digital marketing strategy that drives great results for SEO. Our team is quick to respond and adapt to your brand's needs.",
    keywords : "Testimonials",
    og_title : "Testimonials | MEDIATRENZ",
    og_description : "We create a comprehensive and fast digital marketing strategy that drives great results for SEO. Our team is quick to respond and adapt to your brand's needs.",
    og_image : "",
    og_url : "",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/testimonials.php`, // Generate the canonical URL
    },
};

export default function Testimonials() {
    return(
<>
  <div
    className="innerbanner"
    style={{ backgroundImage: "url(images2/testimonials-bg.webp)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcurmb-content">
            <h1 className="page-title">Testimonials</h1>
            <div className="breadcrumb_item ul-li">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Testimonials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="testimonials-sec">
    <div className="container text-center">
      <p className="paragraph">
        Our partnership and efforts make our premeditated marketing initiatives
        even stronger and more powerful. We win when our clients thrive.
      </p>
      <p className="paragraph">
        We seamlessly execute our complete digital marketing strategy with
        incredible skill and expertise. Our ability to offer consistent results
        and provide the newest techniques keeps customer’s brand ahead of the
        competition in an ever-changing digital atmosphere.
      </p>
      <p className="paragraph">
        We have received nearly perfect remarks from client references, which
        applaud the agency for being customer-oriented.
      </p>
      <p className="paragraph">
        We are very approachable and take time to explain the methods we can
        improve our online presence. Our customers are happy with the work we
        have done for them to date and have provided a significant improvement
        in online sales as well as calls to the office as a result.
      </p>
      <p className="paragraph">
        We convey comprehensive, fast and well intended digital marketing
        strategy that has yielded great results in terms of content, SEO, and
        Social Media. Our team is fast to respond and adapt to the needs of your
        brand.
      </p>
      <p className="paragraph">
        We are knowledgeable and up to date with all the newest Google changes
        and challenge which is very significant. We understand the online
        advertising world very well. We expect to see your testimonial here
        soon! Scroll down to know what our client says about us.
      </p>
      <div className="row justify-content-center mtbp">
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="image-box">
            {/* <iframe width="" height="" src="https://www.youtube.com/embed/_24r2rStTPY?rel=0&controls=0&autoplay=0&mute=1&modestbranding=1&showinfo=0&fs=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <img
              data-src="images2/testinomial1.webp"
              alt="Testimonials"
              className="img-responsive center-block lazy entered loaded"
              data-toggle="modal"
              data-target="#imageModal1"
              data-ll-status="loaded"
              src="images2/testinomial1.webp"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="image-box">
            {/*  <div className="embed-responsive embed-responsive-16by9">
                           <iframe width="" height="" src="https://www.youtube.com/embed/7yfrWTTATaM?rel=0&controls=0&autoplay=0&mute=1&modestbranding=1&showinfo=0&fs=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                 
                        </div> */}
            <img
              data-src="images2/testinomial2.webp"
              alt="Testimonials"
              className="img-responsive center-block lazy entered loaded"
              data-toggle="modal"
              data-target="#imageModal2"
              data-ll-status="loaded"
              src="images2/testinomial2.webp"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="image-box">
            {/*     <div className="embed-responsive embed-responsive-16by9">
                           <iframe width="" height="" src="https://www.youtube.com/embed/TfZo-oDlBhw?rel=0&controls=0&autoplay=0&mute=1&modestbranding=1&showinfo=0&fs=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>                                   
                           </iframe>
                        </div> */}
            <img
              data-src="images2/testinomial3.webp"
              alt="Testimonials"
              className="img-responsive center-block lazy entered loaded"
              data-toggle="modal"
              data-target="#imageModal3"
              data-ll-status="loaded"
              src="images2/testinomial3.webp"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="image-box">
            {/*   <div className="embed-responsive embed-responsive-16by9">
                           <iframe width="" height="" src="https://www.youtube.com/embed/t_dZysdqlqY?rel=0&controls=0&autoplay=0&mute=1&modestbranding=1&showinfo=0&fs=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>                                   
                           </iframe>
                        </div> */}
            <img
              data-src="images2/testinomial4.webp"
              className="img-responsive center-block lazy entered loaded"
              data-toggle="modal"
              data-target="#imageModal4"
              data-ll-status="loaded"
              src="images2/testinomial4.webp"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="image-box">
            {/*    <div className="embed-responsive embed-responsive-16by9">
                           <iframe width="" height="" src="https://www.youtube.com/embed/5Lv4_8RreHc?rel=0&controls=0&autoplay=0&mute=1&modestbranding=1&showinfo=0&fs=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                 
                        </div> */}
            <img
              data-src="images2/testinomial5.webp"
              alt="Testimonials"
              className="img-responsive center-block lazy entered loaded"
              data-toggle="modal"
              data-target="#imageModal5"
              data-ll-status="loaded"
              src="images2/testinomial5.webp"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="image-box">
            {/*   <div className="embed-responsive embed-responsive-16by9">
                           <iframe width="" height="" src="https://www.youtube.com/embed/4itNlNN39NA?rel=0&controls=0&autoplay=0&mute=1&modestbranding=1&showinfo=0&fs=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                                 
                        </div> */}
            <img
              data-src="images2/testinomial6.webp"
              alt="Testimonials"
              className="img-responsive center-block lazy entered loaded"
              data-toggle="modal"
              data-target="#imageModal6"
              data-ll-status="loaded"
              src="images2/testinomial6.webp"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <HappyClients/>
  <ContactSection />
</>
    )
}
