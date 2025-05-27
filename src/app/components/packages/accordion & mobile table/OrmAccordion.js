import Link from "next/link";
export default function OrmAccordion() {
  return (
    <div id="accordionExample" className="accordion">
      <div className="card">
        <div id="head1" className="card-header shadow-sm border-0 text-center">
          <h4 className="mb-0 font-weight-bold">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
              className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
            >
              Initial Review &amp; Analysis
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
                    <td className="col-20">In Depth ORM Analysis</td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Keywords Research &amp; Analysis</td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Baseline Ranking Check</td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">
                      Negative &amp; Positive Links Filter
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Initial Report Preparation</td>
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
        <div id="head1" className="card-header shadow-sm border-0 text-center">
          <h4 className="mb-0 font-weight-bold">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
            >
              Content Marketing Monthly Basis
            </a>
          </h4>
        </div>
        <div
          id="collapseTwo"
          aria-labelledby="head1"
          data-parent="#accordionExample"
          className="collapse"
        >
          <div className="card-body">
            <div className="table-responsive">
              <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                <tbody>
                  <tr>
                    <td className="col-20">Article Writing</td>
                    <td className="col-20">1</td>
                    <td className="col-20">2</td>
                    <td className="col-20">4</td>
                    <td className="col-20">5</td>
                  </tr>
                  <tr>
                    <td className="col-20">Press Release Writing</td>
                    <td className="col-20">1</td>
                    <td className="col-20">2</td>
                    <td className="col-20">3</td>
                    <td className="col-20">4</td>
                  </tr>
                  <tr>
                    <td className="col-20">Blog Post Writing</td>
                    <td className="col-20">1</td>
                    <td className="col-20">2</td>
                    <td className="col-20">4</td>
                    <td className="col-20">5</td>
                  </tr>
                  <tr>
                    <td className="col-20">Web 2.0 Cotent Writing</td>
                    <td className="col-20">1</td>
                    <td className="col-20">2</td>
                    <td className="col-20">3</td>
                    <td className="col-20">4</td>
                  </tr>
                  <tr>
                    <td className="col-20">Guest Post Content Writing</td>
                    <td className="col-20">
                      <span className="icon icon-danger">
                        <i className="fa fa-close" />
                      </span>
                    </td>
                    <td className="col-20">
                      <span className="icon icon-danger">
                        <i className="fa fa-close" />
                      </span>
                    </td>
                    <td className="col-20">1</td>
                    <td className="col-20">2</td>
                  </tr>
                  <tr>
                    <td className="col-20">PDF Writing</td>
                    <td className="col-20">
                      <span className="icon icon-danger">
                        <i className="fa fa-close" />
                      </span>
                    </td>
                    <td className="col-20">
                      <span className="icon icon-danger">
                        <i className="fa fa-close" />
                      </span>
                    </td>
                    <td className="col-20">1</td>
                    <td className="col-20">2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div id="head1" className="card-header shadow-sm border-0 text-center">
          <h4 className="mb-0 font-weight-bold">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
            >
              Monthly Basis ORM Activities
            </a>
          </h4>
        </div>
        <div
          id="collapseThree"
          aria-labelledby="head1"
          data-parent="#accordionExample"
          className="collapse"
        >
          <div className="card-body">
            <div className="table-responsive">
              <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                <tbody>
                  <tr>
                    <td className="col-20">
                      Phrases Protected &amp; Monitored
                    </td>
                    <td className="col-20">1-2</td>
                    <td className="col-20">3-4</td>
                    <td className="col-20">5-6</td>
                    <td className="col-20">7-8</td>
                  </tr>
                  <tr>
                    <td className="col-20">Search Positions Protected</td>
                    <td className="col-20">1st Page</td>
                    <td className="col-20">1st Page</td>
                    <td className="col-20">1-2 Page</td>
                    <td className="col-20">1-3 Page</td>
                  </tr>
                  <tr>
                    <td className="col-20">Search Positions Monitored</td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Development of Micro-sites</td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Blog Set Up</td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Article Submissions</td>
                    <td className="col-20">1</td>
                    <td className="col-20">2</td>
                    <td className="col-20">3</td>
                    <td className="col-20">5</td>
                  </tr>
                  <tr>
                    <td className="col-20">Press Releases Submissions</td>
                    <td className="col-20">1</td>
                    <td className="col-20">2</td>
                    <td className="col-20">3</td>
                    <td className="col-20">4</td>
                  </tr>
                  <tr>
                    <td className="col-20">Social Media Bookmarking</td>
                    <td className="col-20">10</td>
                    <td className="col-20">15</td>
                    <td className="col-20">20</td>
                    <td className="col-20">25</td>
                  </tr>
                  <tr>
                    <td className="col-20">Social Media Profiles Creation</td>
                    <td className="col-20">5</td>
                    <td className="col-20">10</td>
                    <td className="col-20">15</td>
                    <td className="col-20">20</td>
                  </tr>
                  <tr>
                    <td className="col-20">Blog Network Distribution</td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Web2.0 Creation</td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Web2.0 Posting</td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Web2.0 Promotion</td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Quora Answers (Q/A)</td>
                    <td className="col-20">
                      <span className="icon icon-danger">
                        <i className="fa fa-close" />
                      </span>
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
                    <td className="col-20">Slide Share Presentations</td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Photo Sharing</td>
                    <td className="col-20">
                      <span className="icon icon-danger">
                        <i className="fa fa-close" />
                      </span>
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
                    <td className="col-20">Video Creation</td>
                    <td className="col-20">
                      <span className="icon icon-danger">
                        <i className="fa fa-close" />
                      </span>
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
                    <td className="col-20">Video Submissions</td>
                    <td className="col-20">
                      <span className="icon icon-danger">
                        <i className="fa fa-close" />
                      </span>
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
                    <td className="col-20">Video Promotion</td>
                    <td className="col-20">
                      <span className="icon icon-danger">
                        <i className="fa fa-close" />
                      </span>
                    </td>
                    <td className="col-20">
                      <span className="icon icon-danger">
                        <i className="fa fa-close" />
                      </span>
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
                  </tr>
                  <tr>
                    <td className="col-20">PPT Submissions</td>
                    <td className="col-20">
                      <span className="icon icon-danger">
                        <i className="fa fa-close" />
                      </span>
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
        <div id="head1" className="card-header shadow-sm border-0 text-center">
          <h4 className="mb-0 font-weight-bold">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
            >
              {" "}
              Social Media Promotion &amp; Sharing
            </a>
          </h4>
        </div>
        <div
          id="collapseFour"
          aria-labelledby="head1"
          data-parent="#accordionExample"
          className="collapse"
        >
          <div className="card-body">
            <div className="table-responsive">
              <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                <tbody>
                  <tr>
                    <td className="col-20">Facebook – Promotion</td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Twitter – Promotion</td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Linkedin – Promotion</td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Flickr – Promotion</td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">YouTube – Promotion</td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Business Profile Linking</td>
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
        <div id="head1" className="card-header shadow-sm border-0 text-center">
          <h4 className="mb-0 font-weight-bold">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
              className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
            >
              Monthly Report
            </a>
          </h4>
        </div>
        <div
          id="collapseFive"
          aria-labelledby="head1"
          data-parent="#accordionExample"
          className="collapse"
        >
          <div className="card-body">
            <div className="table-responsive">
              <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                <tbody>
                  <tr>
                    <td className="col-20">Reporting</td>
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
        <div id="head1" className="card-header shadow-sm border-0 text-center">
          <h4 className="mb-0 font-weight-bold">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
              className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
            >
              Customer Support
            </a>
          </h4>
        </div>
        <div
          id="collapseSix"
          aria-labelledby="head1"
          data-parent="#accordionExample"
          className="collapse"
        >
          <div className="card-body">
            <div className="table-responsive">
              <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                <tbody>
                  <tr>
                    <td className="col-20">Phone Support</td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Skype / Email Support</td>
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Price Per Month</td>
                    <td className="col-20">
                      <strong>$ 380</strong>
                    </td>
                    <td className="col-20">
                      <strong>$ 680</strong>
                    </td>
                    <td className="col-20">
                      <strong>$ 980</strong>
                    </td>
                    <td className="col-20">
                      <strong>$ 1280</strong>
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
