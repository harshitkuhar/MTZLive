import Link from "next/link";
export default function AsoAccordion() {
  return (
    <div id="accordionExample" className="accordion">
      <div className="card">
        <div id="head1" className="card-header shadow-sm border-0 text-center">
          <h4 className="mb-0 font-weight-bold">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
            >
              Initial Review &amp; Depth Analysis
            </a>
          </h4>
        </div>
        <div
          id="collapseOne"
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
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
        <div id="head2" className="card-header shadow-sm border-0 text-center">
          <h4 className="mb-0 font-weight-bold">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#collapsetwo"
              aria-expanded="false"
              aria-controls="collapsetwo"
              className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
            >
              App On Page Optimization
            </a>
          </h4>
        </div>
        <div
          id="collapsetwo"
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
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
        <div id="head3" className="card-header shadow-sm border-0 text-center">
          <h4 className="mb-0 font-weight-bold">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#collapsethree"
              aria-expanded="false"
              aria-controls="collapsethree"
              className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
            >
              App Off Page Optimization
            </a>
          </h4>
        </div>
        <div
          id="collapsethree"
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
                    <td className="col-20">
                      <span className="icon-txt">20</span>
                    </td>
                    <td className="col-20">
                      <span className="icon-txt">30</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">App Classified Submission</td>
                    <td className="col-20">
                      <span className="icon-txt">5</span>
                    </td>
                    <td className="col-20">
                      <span className="icon-txt">10</span>
                    </td>
                    <td className="col-20">
                      <span className="icon-txt">20</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">App Business Listing</td>
                    <td className="col-20">
                      <span className="icon-txt">3</span>
                    </td>
                    <td className="col-20">
                      <span className="icon-txt">6</span>
                    </td>
                    <td className="col-20">
                      <span className="icon-txt">10</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">App Article</td>
                    <td className="col-20">
                      <span className="icon icon-danger">
                        <i className="fa fa-close" />
                      </span>
                    </td>
                    <td className="col-20">
                      <span className="icon-txt">1</span>
                    </td>
                    <td className="col-20">
                      <span className="icon-txt">2</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">App Article Submission</td>
                    <td className="col-20">
                      <span className="icon icon-danger">
                        <i className="fa fa-close" />
                      </span>
                    </td>
                    <td className="col-20">
                      <span className="icon-txt">10</span>
                    </td>
                    <td className="col-20">
                      <span className="icon-txt">25</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">App Blog</td>
                    <td className="col-20">
                      <span className="icon-txt">1</span>
                    </td>
                    <td className="col-20">
                      <span className="icon-txt">2</span>
                    </td>
                    <td className="col-20">
                      <span className="icon-txt">3</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">
                      App Share on Social Media Networks
                    </td>
                    <td className="col-20">
                      <span className="icon-txt">2</span>
                    </td>
                    <td className="col-20">
                      <span className="icon-txt">3</span>
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
                      <span className="icon-txt">1</span>
                    </td>
                    <td className="col-20">
                      <span className="icon-txt">2</span>
                    </td>
                    <td className="col-20">
                      <span className="icon-txt">3</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Search Engine Submission</td>
                    <td className="col-20">
                      <span className="icon-txt">5</span>
                    </td>
                    <td className="col-20">
                      <span className="icon-txt">10</span>
                    </td>
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
        <div id="head4" className="card-header shadow-sm border-0 text-center">
          <h4 className="mb-0 font-weight-bold">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#collapsefour"
              aria-expanded="false"
              aria-controls="collapsefour"
              className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
            >
              App Video Marketing
            </a>
          </h4>
        </div>
        <div
          id="collapsefour"
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
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
                      <span className="icon icon-danger">
                        <i className="fa fa-close" />
                      </span>
                    </td>
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
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
                      <span className="icon icon-danger">
                        <i className="fa fa-close" />
                      </span>
                    </td>
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
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
        <div id="head5" className="card-header shadow-sm border-0 text-center">
          <h4 className="mb-0 font-weight-bold">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#collapsefive"
              aria-expanded="false"
              aria-controls="collapsefive"
              className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
            >
              Analysis Reports
            </a>
          </h4>
        </div>
        <div
          id="collapsefive"
          aria-labelledby="head5"
          data-parent="#accordionExample"
          className="collapse"
        >
          <div className="card-body">
            <div className="table-responsive">
              <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                <tbody>
                  <tr>
                    <td className="col-20">Google Analytical Report/Monthly</td>
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
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
  );
}
