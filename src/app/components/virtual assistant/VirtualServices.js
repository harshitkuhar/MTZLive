import Link from "next/link";
export default function VirtualService() {
  return (
    <section className="bottomserviecs-sec">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12 text-center title-mb">
            <h4 className="element-subtitle text-white">
              Our Virtual Services
            </h4>
            <h2 className="title text-white">
              We Build Brands With Our Best Services
            </h2>
          </div>
        </div>
        <div className="row mmt-30 text-left">
          <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
            <div className="intro-ser-col">
              <Link href="virtual-assistant.php">
                <div className="headtl">
                  <div className="icon-box">
                    <i className="fi fi-ts-user-headset" />
                  </div>
                  <div className="icon-boxtext">
                    Virtual Assistant Services
                  </div>
                </div>
                <div className="icnbox-box-no">01</div>
                <p>
                  At Mediatrenz, we understand how day-to-day activities could
                  ...
                </p>
              </Link>
              <div className="btn-link1">
                <Link href="virtual-assistant.php">
                  Read More
                  <i className="fi fi-rr-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
            <div className="intro-ser-col">
              <Link href="lead_generation.php">
                <div className="headtl">
                  <div className="icon-box">
                    <i className="fi fi-ts-lead-management" />
                  </div>
                  <div className="icon-boxtext">Lead Generation</div>
                </div>
                <div className="icnbox-box-no">02</div>
                <p>Effective lead generation is vital for business growth...</p>
              </Link>
              <div className="btn-link1">
                <Link href="lead_generation.php">
                  Read More
                  <i className="fi fi-rr-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
            <div className="intro-ser-col">
              <Link href="email_assistance.php">
                <div className="headtl">
                  <div className="icon-box">
                    <i className="fi fi-ts-clip-mail" />
                  </div>
                  <div className="icon-boxtext">Email Assistance </div>
                </div>
                <div className="icnbox-box-no">03</div>
                <p>
                  Efficient email management is essential for maintaining
                  effective...
                </p>
              </Link>
              <div className="btn-link1">
                <Link href="email_assistance.php">
                  Read More
                  <i className="fi fi-rr-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
            <div className="intro-ser-col">
              <Link href="administration_services.php">
                <div className="headtl">
                  <div className="icon-box">
                    <i className="fi fi-tr-invite-alt" />
                  </div>
                  <div className="icon-boxtext">Administration Services </div>
                </div>
                <div className="icnbox-box-no">04</div>
                <p>
                  Effective administrative support is the backbone of a
                  well-organized...
                </p>
              </Link>
              <div className="btn-link1">
                <Link href="administration_services.php">
                  Read More
                  <i className="fi fi-rr-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
            <div className="intro-ser-col">
              <Link href="bookkeeping.php">
                <div className="headtl">
                  <div className="icon-box">
                    <i className="fi fi-ts-files-medical" />
                  </div>
                  <div className="icon-boxtext"> Bookkeeping </div>
                </div>
                <div className="icnbox-box-no">05</div>
                <p>
                  Maintaining accurate financial records is vital for the
                  success of any...
                </p>
              </Link>
              <div className="btn-link1">
                <Link href="bookkeeping.php">
                  Read More
                  <i className="fi fi-rr-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
            <div className="intro-ser-col">
              <Link href="by_posts_and_content.php">
                <div className="headtl">
                  <div className="icon-box">
                    <i className="fi fi-ts-web-design" />
                  </div>
                  <div className="icon-boxtext">By Posts and Content </div>
                </div>
                <div className="icnbox-box-no">06</div>
                <p>
                  Creating engaging and relevant content is essential for
                  connecting...
                </p>
              </Link>
              <div className="btn-link1">
                <Link href="by_posts_and_content.php">
                  Read More
                  <i className="fi fi-rr-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
            <div className="intro-ser-col">
              <Link href="seo-optimization-services.php">
                <div className="headtl">
                  <div className="icon-box">
                    <i className="fi fi-ts-house-chimney-user"></i>
                  </div>
                  <div className="icon-boxtext">
                    Real Estate Administrative Assistant Services
                  </div>
                </div>
                <div className="icnbox-box-no">07</div>
                <p>
                  NIn the competitive real estate market, effective
                  administrative support...
                </p>
              </Link>
              <div className="btn-link1">
                <Link href="VA-Real-Estate.php">
                  Read More
                  <i className="fi fi-rr-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
