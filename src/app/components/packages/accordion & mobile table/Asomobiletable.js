import Link from "next/link";
export default function Asomobiletable() {
  return (
    <div className="container mt-50 show-768">
  <div className="row">
    <div className="col-md-12">
      <div className="bs-pricing-table-two text-center">
        <div
          className="packagepd"
          style={{ background: "#18b169", borderRadius: 5, marginBottom: 1 }}
        >
          <div className="bs-pricing-item">
            <div className="bs-icon">
              <img src="/images2/production.webp" alt="Our Effective Results" />
            </div>
            <div className="head ">
              <div className="price-title">
                <h2 className="text-uppercase">Starter</h2>
              </div>
              <div className="price">
                <h1>
                  <sup>$</sup>199<small>/mo</small>
                </h1>
              </div>
            </div>
            <div className="keynum mb-0">
              <p>
                <strong>5 Keywords</strong>
              </p>
            </div>
            <div className="keynum cen mb-0 mt-0">
              <p>
                <strong>iOS or Android Platform</strong>
              </p>
            </div>
            <div className="keynum mt-0">
              <p>
                <strong>6 Months</strong>
              </p>
            </div>
            <div className="packord">
              <Link
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#ordermodal"
                className="btn btn-maincolor"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-12 pkg-dlist">
      <div id="accordionExample" className="accordion">
        <div className="card">
          <div
            id="head1"
            className="card-header shadow-sm border-0 text-center"
          >
            <h4 className="mb-0 font-weight-bold">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse1"
                aria-expanded="false"
                aria-controls="collapse1"
                className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
              >
                Initial Review &amp; Depth Analysis
              </a>
            </h4>
          </div>
          <div
            id="collapse1"
            aria-labelledby="head1"
            data-parent="#accordionExample"
            className="collapse"
          >
            <div className="card-body">
              <div className="table-responsive">
                <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                  <tbody>
                    <tr>
                      <td className="col-20">Website Technical Analysis</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Keyword Research Analysis</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Localization</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">Competitive Analysis</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">Content Duplicacy Check</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            id="head2"
            className="card-header shadow-sm border-0 text-center"
          >
            <h4 className="mb-0 font-weight-bold">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
                className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
              >
                App On Page Optimization
              </a>
            </h4>
          </div>
          <div
            id="collapse2"
            aria-labelledby="head2"
            data-parent="#accordionExample"
            className="collapse"
          >
            <div className="card-body">
              <div className="table-responsive">
                <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                  <tbody>
                    <tr>
                      <td className="col-20">App Title Tag Optimization</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Keywords Optimization</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Description Optimization</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">Google Play for Android App</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">
                        Windows Store for Windows Phone App
                      </td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">iTunes for iOS App</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Category</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Icon</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Tagging</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            id="head3"
            className="card-header shadow-sm border-0 text-center"
          >
            <h4 className="mb-0 font-weight-bold">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse3"
                aria-expanded="false"
                aria-controls="collapse3"
                className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
              >
                App Off Page Optimization
              </a>
            </h4>
          </div>
          <div
            id="collapse3"
            aria-labelledby="head3"
            data-parent="#accordionExample"
            className="collapse"
          >
            <div className="card-body">
              <div className="table-responsive">
                <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                  <tbody>
                    <tr>
                      <td className="col-20">App Bookmarking Submission</td>
                      <td className="col-20">
                        <span className="icon-txt">10</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Classified Submission</td>
                      <td className="col-20">
                        <span className="icon-txt">5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Business Listing</td>
                      <td className="col-20">
                        <span className="icon-txt">3</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Article</td>
                      <td className="col-20">
                        <span className="icon icon-danger">
                          <i className="fa fa-close" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Article Submission</td>
                      <td className="col-20">
                        <span className="icon icon-danger">
                          <i className="fa fa-close" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Blog</td>
                      <td className="col-20">
                        <span className="icon-txt">1</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">
                        App Share on Social Media Networks
                      </td>
                      <td className="col-20">
                        <span className="icon-txt">2</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">
                        Customer Reviews/Ratings Submissions
                      </td>
                      <td className="col-20">
                        <span className="icon-txt">1</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">Search Engine Submission</td>
                      <td className="col-20">
                        <span className="icon-txt">5</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            id="head4"
            className="card-header shadow-sm border-0 text-center"
          >
            <h4 className="mb-0 font-weight-bold">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse4"
                aria-expanded="false"
                aria-controls="collapse4"
                className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
              >
                App Video Marketing
              </a>
            </h4>
          </div>
          <div
            id="collapse4"
            aria-labelledby="head4"
            data-parent="#accordionExample"
            className="collapse"
          >
            <div className="card-body">
              <div className="table-responsive">
                <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                  <tbody>
                    <tr>
                      <td className="col-20">
                        YouTube Account Setup &amp; ASO Preview Video Promotion
                      </td>
                      <td className="col-20">
                        <span className="icon icon-danger">
                          <i className="fa fa-close" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">
                        Dailymotion Account Setup &amp; ASO Preview Video
                      </td>
                      <td className="col-20">
                        <span className="icon icon-danger">
                          <i className="fa fa-close" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">
                        Vimeo Account Setup &amp; ASO Preview Video
                      </td>
                      <td className="col-20">
                        <span className="icon icon-danger">
                          <i className="fa fa-close" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            id="head5"
            className="card-header shadow-sm border-0 text-center"
          >
            <h4 className="mb-0 font-weight-bold">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse5"
                aria-expanded="false"
                aria-controls="collapse5"
                className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
              >
                Analysis Reports
              </a>
            </h4>
          </div>
          <div
            id="collapse5"
            aria-labelledby="head5"
            data-parent="#accordionExample"
            className="collapse"
          >
            <div className="card-body">
              <div className="table-responsive">
                <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                  <tbody>
                    <tr>
                      <td className="col-20">
                        Google Analytical Report/Monthly
                      </td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">
                        E-mail/Call/Skype Support/WhatsApp
                      </td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row mt-70">
    <div className="col-md-12">
      <div className="bs-pricing-table-two text-center">
        <div
          className="packagepd"
          style={{ background: "#f05ba3", borderRadius: 5, marginBottom: 1 }}
        >
          <div className="bs-pricing-item">
            <div className="bs-icon">
              <img src="/images2/p-starter.webp" alt="Starter Packages" />
            </div>
            <div className="head ">
              <div className="price-title">
                <h2 className="text-uppercase">Medium</h2>
              </div>
              <div className="price">
                <h1>
                  <sup>$</sup>349<small>/mo</small>
                </h1>
              </div>
            </div>
            <div className="keynum mb-0">
              <p>
                <strong>10 Keywords</strong>
              </p>
            </div>
            <div className="keynum cen mb-0 mt-0">
              <p>
                <strong>iOS or Android Platform</strong>
              </p>
            </div>
            <div className="keynum mt-0">
              <p>
                <strong>6 Months</strong>
              </p>
            </div>
            <div className="packord">
              <Link
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#ordermodal"
                className="btn btn-maincolor"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-12 pkg-dlist">
      <div id="accordionExample" className="accordion">
        <div className="card">
          <div
            id="head1"
            className="card-header shadow-sm border-0 text-center"
          >
            <h4 className="mb-0 font-weight-bold">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse6"
                aria-expanded="false"
                aria-controls="collapse6"
                className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
              >
                Initial Review &amp; Depth Analysis
              </a>
            </h4>
          </div>
          <div
            id="collapse6"
            aria-labelledby="head1"
            data-parent="#accordionExample"
            className="collapse"
          >
            <div className="card-body">
              <div className="table-responsive">
                <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                  <tbody>
                    <tr>
                      <td className="col-20">Website Technical Analysis</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Keyword Research Analysis</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Localization</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">Competitive Analysis</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">Content Duplicacy Check</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            id="head2"
            className="card-header shadow-sm border-0 text-center"
          >
            <h4 className="mb-0 font-weight-bold">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse7"
                aria-expanded="false"
                aria-controls="collapse7"
                className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
              >
                App On Page Optimization
              </a>
            </h4>
          </div>
          <div
            id="collapse7"
            aria-labelledby="head2"
            data-parent="#accordionExample"
            className="collapse"
          >
            <div className="card-body">
              <div className="table-responsive">
                <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                  <tbody>
                    <tr>
                      <td className="col-20">App Title Tag Optimization</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Keywords Optimization</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Description Optimization</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">Google Play for Android App</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">
                        Windows Store for Windows Phone App
                      </td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">iTunes for iOS App</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Category</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Icon</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Tagging</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            id="head3"
            className="card-header shadow-sm border-0 text-center"
          >
            <h4 className="mb-0 font-weight-bold">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse8"
                aria-expanded="false"
                aria-controls="collapse8"
                className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
              >
                App Off Page Optimization
              </a>
            </h4>
          </div>
          <div
            id="collapse8"
            aria-labelledby="head3"
            data-parent="#accordionExample"
            className="collapse"
          >
            <div className="card-body">
              <div className="table-responsive">
                <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                  <tbody>
                    <tr>
                      <td className="col-20">App Bookmarking Submission</td>
                      <td className="col-20">
                        <span className="icon-txt">20</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Classified Submission</td>
                      <td className="col-20">
                        <span className="icon-txt">10</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Business Listing</td>
                      <td className="col-20">
                        <span className="icon-txt">6</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Article</td>
                      <td className="col-20">
                        <span className="icon-txt">1</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Article Submission</td>
                      <td className="col-20">
                        <span className="icon-txt">10</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Blog</td>
                      <td className="col-20">
                        <span className="icon-txt">2</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">
                        App Share on Social Media Networks
                      </td>
                      <td className="col-20">
                        <span className="icon-txt">3</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">
                        Customer Reviews/Ratings Submissions
                      </td>
                      <td className="col-20">
                        <span className="icon-txt">2</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">Search Engine Submission</td>
                      <td className="col-20">
                        <span className="icon-txt">10</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            id="head4"
            className="card-header shadow-sm border-0 text-center"
          >
            <h4 className="mb-0 font-weight-bold">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse9"
                aria-expanded="false"
                aria-controls="collapse9"
                className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
              >
                App Video Marketing
              </a>
            </h4>
          </div>
          <div
            id="collapse9"
            aria-labelledby="head4"
            data-parent="#accordionExample"
            className="collapse"
          >
            <div className="card-body">
              <div className="table-responsive">
                <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                  <tbody>
                    <tr>
                      <td className="col-20">
                        YouTube Account Setup &amp; ASO Preview Video Promotion
                      </td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">
                        Dailymotion Account Setup &amp; ASO Preview Video
                      </td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">
                        Vimeo Account Setup &amp; ASO Preview Video
                      </td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            id="head5"
            className="card-header shadow-sm border-0 text-center"
          >
            <h4 className="mb-0 font-weight-bold">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse10"
                aria-expanded="false"
                aria-controls="collapse10"
                className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
              >
                Analysis Reports
              </a>
            </h4>
          </div>
          <div
            id="collapse10"
            aria-labelledby="head5"
            data-parent="#accordionExample"
            className="collapse"
          >
            <div className="card-body">
              <div className="table-responsive">
                <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                  <tbody>
                    <tr>
                      <td className="col-20">
                        Google Analytical Report/Monthly
                      </td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">
                        E-mail/Call/Skype Support/WhatsApp
                      </td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row mt-70">
    <div className="col-md-12">
      <div className="bs-pricing-table-two text-center">
        <div
          className="packagepd"
          style={{ background: "#00aff0", borderRadius: 5, marginBottom: 1 }}
        >
          <div className="bs-pricing-item">
            <div className="bs-icon">
              <img
                src="/images2/p-booster.webp"
                alt="Business Booster Package"
              />
            </div>
            <div className="head">
              <div className="price-title">
                <h2 className="text-uppercase">Premium</h2>
              </div>
              <div className="price">
                <h1>
                  <sup>$</sup>599<small>/mo</small>
                </h1>
              </div>
            </div>
            <div className="keynum mb-0">
              <p>
                <strong>20 Keywords</strong>
              </p>
            </div>
            <div className="keynum cen mb-0 mt-0">
              <p>
                <strong>iOS or Android Platform</strong>
              </p>
            </div>
            <div className="keynum mt-0">
              <p>
                <strong>6 Months</strong>
              </p>
            </div>
            <div className="packord">
              <Link
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#ordermodal"
                className="btn btn-maincolor"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-12 pkg-dlist">
      <div id="accordionExample" className="accordion">
        <div className="card">
          <div
            id="head1"
            className="card-header shadow-sm border-0 text-center"
          >
            <h4 className="mb-0 font-weight-bold">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse11"
                aria-expanded="true"
                aria-controls="collapse11"
                className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
              >
                Initial Review &amp; Depth Analysis
              </a>
            </h4>
          </div>
          <div
            id="collapse11"
            aria-labelledby="head1"
            data-parent="#accordionExample"
            className="collapse"
          >
            <div className="card-body">
              <div className="table-responsive">
                <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                  <tbody>
                    <tr>
                      <td className="col-20">Website Technical Analysis</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Keyword Research Analysis</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Localization</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">Competitive Analysis</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">Content Duplicacy Check</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            id="head2"
            className="card-header shadow-sm border-0 text-center"
          >
            <h4 className="mb-0 font-weight-bold">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse12"
                aria-expanded="false"
                aria-controls="collapse12"
                className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
              >
                App On Page Optimization
              </a>
            </h4>
          </div>
          <div
            id="collapse12"
            aria-labelledby="head2"
            data-parent="#accordionExample"
            className="collapse"
          >
            <div className="card-body">
              <div className="table-responsive">
                <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                  <tbody>
                    <tr>
                      <td className="col-20">App Title Tag Optimization</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Keywords Optimization</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Description Optimization</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">Google Play for Android App</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">
                        Windows Store for Windows Phone App
                      </td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">iTunes for iOS App</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Category</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Icon</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Tagging</td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            id="head3"
            className="card-header shadow-sm border-0 text-center"
          >
            <h4 className="mb-0 font-weight-bold">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse13"
                aria-expanded="false"
                aria-controls="collapse13"
                className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
              >
                App Off Page Optimization
              </a>
            </h4>
          </div>
          <div
            id="collapse13"
            aria-labelledby="head3"
            data-parent="#accordionExample"
            className="collapse"
          >
            <div className="card-body">
              <div className="table-responsive">
                <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                  <tbody>
                    <tr>
                      <td className="col-20">App Bookmarking Submission</td>
                      <td className="col-20">
                        <span className="icon-txt">30</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Classified Submission</td>
                      <td className="col-20">
                        <span className="icon-txt">20</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Business Listing</td>
                      <td className="col-20">
                        <span className="icon-txt">10</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Article</td>
                      <td className="col-20">
                        <span className="icon-txt">2</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Article Submission</td>
                      <td className="col-20">
                        <span className="icon-txt">25</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">App Blog</td>
                      <td className="col-20">
                        <span className="icon-txt">3</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">
                        App Share on Social Media Networks
                      </td>
                      <td className="col-20">
                        <span className="icon-txt">5</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">
                        Customer Reviews/Ratings Submissions
                      </td>
                      <td className="col-20">
                        <span className="icon-txt">3</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">Search Engine Submission</td>
                      <td className="col-20">
                        <span className="icon-txt">15</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            id="head4"
            className="card-header shadow-sm border-0 text-center"
          >
            <h4 className="mb-0 font-weight-bold">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse14"
                aria-expanded="false"
                aria-controls="collapse14"
                className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
              >
                App Video Marketing
              </a>
            </h4>
          </div>
          <div
            id="collapse14"
            aria-labelledby="head4"
            data-parent="#accordionExample"
            className="collapse"
          >
            <div className="card-body">
              <div className="table-responsive">
                <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                  <tbody>
                    <tr>
                      <td className="col-20">
                        YouTube Account Setup &amp; ASO Preview Video Promotion
                      </td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">
                        Dailymotion Account Setup &amp; ASO Preview Video
                      </td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">
                        Vimeo Account Setup &amp; ASO Preview Video
                      </td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            id="head5"
            className="card-header shadow-sm border-0 text-center"
          >
            <h4 className="mb-0 font-weight-bold">
              <a
                href="#"
                data-toggle="collapse"
                data-target="#collapse15"
                aria-expanded="false"
                aria-controls="collapse15"
                className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
              >
                Analysis Reports
              </a>
            </h4>
          </div>
          <div
            id="collapse15"
            aria-labelledby="head5"
            data-parent="#accordionExample"
            className="collapse"
          >
            <div className="card-body">
              <div className="table-responsive">
                <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                  <tbody>
                    <tr>
                      <td className="col-20">
                        Google Analytical Report/Monthly
                      </td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-20">
                        E-mail/Call/Skype Support/WhatsApp
                      </td>
                      <td className="col-20">
                        <span className="icon icon-sucess">
                          <i className="fa fa-check" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
