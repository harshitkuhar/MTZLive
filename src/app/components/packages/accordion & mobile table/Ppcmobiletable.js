import Link from "next/link";
export default function Ppcmobiletable() {
  return (
    <div className="container mt-50 show-768">
      <div className="row">
        <div className="col-md-12">
          <div className="bs-pricing-table-two text-center">
            <div
              className="packagepd"
              style={{
                background: "#18b169",
                borderRadius: 5,
                marginBottom: 1,
              }}
            >
              <div className="bs-pricing-item">
                <div className="bs-icon">
                  <img src="/images2/production.webp" alt="PPC Packages" />
                </div>
                <div className="head ">
                  <div className="price-title">
                    <h2 className="text-uppercase">PPC Silver</h2>
                  </div>
                  <div className="price">
                    <p>Minimum of</p>
                    <h1>
                      <sup>$</sup>249<small>/mo</small>
                    </h1>
                  </div>
                </div>
                <div
                  className="packord"
                  style={{
                    borderTop: "1px solid rgba(0,0,0,.125)",
                    paddingTop: 18,
                    marginTop: 18,
                  }}
                >
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
                    Account Set up
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
                    <table
                      cellPadding={0}
                      cellSpacing={0}
                      className="pkg-dtable"
                    >
                      <tbody>
                        <tr>
                          <td className="col-20">Google</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Bing</td>
                          <td className="col-20">
                            <span className="icon icon-danger">
                              <i className="fa fa-close" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Initial Estimate Report</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Campaign Setup</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">No. of Keywords</td>
                          <td className="col-20">25</td>
                        </tr>
                        <tr>
                          <td className="col-20">Text Ads</td>
                          <td className="col-20">5</td>
                        </tr>
                        <tr>
                          <td className="col-20">Mobile Ads</td>
                          <td className="col-20">
                            <span className="icon icon-danger">
                              <i className="fa fa-close" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Banner Ads</td>
                          <td className="col-20">
                            <span className="icon icon-danger">
                              <i className="fa fa-close" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Bid Setup</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Geo targeting Setup</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">
                            Landing Page Selection &amp; Recommendation
                          </td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">
                            Implementation of Conversion tracking Code
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
                    Campaign Maintenance
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
                    <table
                      cellPadding={0}
                      cellSpacing={0}
                      className="pkg-dtable"
                    >
                      <tbody>
                        <tr>
                          <td className="col-20">Landing Page Optimization</td>
                          <td className="col-20">
                            <span className="icon icon-danger">
                              <i className="fa fa-close" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Creating new landing pages</td>
                          <td className="col-20">
                            <span className="icon icon-danger">
                              <i className="fa fa-close" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Ad Copy Optimization</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">
                            Keyword Refinement (If Required)
                          </td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">
                            Bid Refinement (If Required)
                          </td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">A/B Testing</td>
                          <td className="col-20">
                            <span className="icon icon-danger">
                              <i className="fa fa-close" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">CTR Analysis</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">ROI Tracking</td>
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
                    Analytics Setup
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
                    <table
                      cellPadding={0}
                      cellSpacing={0}
                      className="pkg-dtable"
                    >
                      <tbody>
                        <tr>
                          <td className="col-20">Google Analytics Setup</td>
                          <td className="col-20">Basic</td>
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
                    Reporting &amp; Support
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
                    <table
                      cellPadding={0}
                      cellSpacing={0}
                      className="pkg-dtable"
                    >
                      <tbody>
                        <tr>
                          <td className="col-20">Reports</td>
                          <td className="col-20">Monthly</td>
                        </tr>
                        <tr>
                          <td className="col-20">Monthly Reports</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Dedicated Account Manager</td>
                          <td className="col-20">
                            <span className="icon icon-text">-</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Email and Chat Support</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Telephone Support</td>
                          <td className="col-20">
                            <span className="icon icon-text">-</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Minimum Period</td>
                          <td className="col-20" />
                        </tr>
                        <tr>
                          <td className="col-20">Cost Per Month</td>
                          <td className="col-20">
                            <strong>Minimum of $ 150</strong>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20" />
                          <td className="col-20">
                            <strong>or 12% of Adword Budget</strong>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20" />
                          <td className="col-20">
                            <strong>Whichever is higher</strong>
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
              style={{
                background: "#f05ba3",
                borderRadius: 5,
                marginBottom: 1,
              }}
            >
              <div className="bs-pricing-item">
                <div className="bs-icon">
                  <img src="/images2/p-starter.webp" alt="PPC Packages" />
                </div>
                <div className="head ">
                  <div className="price-title">
                    <h2 className="text-uppercase">PPC Gold</h2>
                  </div>
                  <div className="price">
                    <p>Minimum of</p>
                    <h1>
                      <sup>$</sup>449<small>/mo</small>
                    </h1>
                  </div>
                </div>
                <div
                  className="packord"
                  style={{
                    borderTop: "1px solid rgba(0,0,0,.125)",
                    paddingTop: 18,
                    marginTop: 18,
                  }}
                >
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
                    data-target="#collapse5"
                    aria-expanded="false"
                    aria-controls="collapse5"
                    className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
                  >
                    Account Set up
                  </a>
                </h4>
              </div>
              <div
                id="collapse5"
                aria-labelledby="head1"
                data-parent="#accordionExample"
                className="collapse"
              >
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      cellPadding={0}
                      cellSpacing={0}
                      className="pkg-dtable"
                    >
                      <tbody>
                        <tr>
                          <td className="col-20">Google</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Bing</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Initial Estimate Report</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Campaign Setup</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">No. of Keywords</td>
                          <td className="col-20">50</td>
                        </tr>
                        <tr>
                          <td className="col-20">Text Ads</td>
                          <td className="col-20">8</td>
                        </tr>
                        <tr>
                          <td className="col-20">Mobile Ads</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Banner Ads</td>
                          <td className="col-20">1</td>
                        </tr>
                        <tr>
                          <td className="col-20">Bid Setup</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Geo targeting Setup</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">
                            Landing Page Selection &amp; Recommendation
                          </td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">
                            Implementation of Conversion tracking Code
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
                id="head2"
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
                    Campaign Maintenance
                  </a>
                </h4>
              </div>
              <div
                id="collapse6"
                aria-labelledby="head2"
                data-parent="#accordionExample"
                className="collapse"
              >
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      cellPadding={0}
                      cellSpacing={0}
                      className="pkg-dtable"
                    >
                      <tbody>
                        <tr>
                          <td className="col-20">Landing Page Optimization</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Creating new landing pages</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Ad Copy Optimization</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">
                            Keyword Refinement (If Required)
                          </td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">
                            Bid Refinement (If Required)
                          </td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">A/B Testing</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">CTR Analysis</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">ROI Tracking</td>
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
                    data-target="#collapse7"
                    aria-expanded="false"
                    aria-controls="collapse7"
                    className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
                  >
                    Analytics Setup
                  </a>
                </h4>
              </div>
              <div
                id="collapse7"
                aria-labelledby="head3"
                data-parent="#accordionExample"
                className="collapse"
              >
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      cellPadding={0}
                      cellSpacing={0}
                      className="pkg-dtable"
                    >
                      <tbody>
                        <tr>
                          <td className="col-20">Google Analytics Setup</td>
                          <td className="col-20">Basic</td>
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
                    data-target="#collapse8"
                    aria-expanded="false"
                    aria-controls="collapse8"
                    className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
                  >
                    Reporting &amp; Support
                  </a>
                </h4>
              </div>
              <div
                id="collapse8"
                aria-labelledby="head4"
                data-parent="#accordionExample"
                className="collapse"
              >
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      cellPadding={0}
                      cellSpacing={0}
                      className="pkg-dtable"
                    >
                      <tbody>
                        <tr>
                          <td className="col-20">Reports</td>
                          <td className="col-20">Monthly</td>
                        </tr>
                        <tr>
                          <td className="col-20">Monthly Reports</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Dedicated Account Manager</td>
                          <td className="col-20">
                            <span className="icon icon-text">-</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Email and Chat Support</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Telephone Support</td>
                          <td className="col-20">
                            <span className="icon icon-text">-</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Minimum Period</td>
                          <td className="col-20" />
                        </tr>
                        <tr>
                          <td className="col-20">Cost Per Month</td>
                          <td className="col-20">
                            <strong>Minimum of $ 300</strong>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20" />
                          <td className="col-20">
                            <strong>or 12% of Adword Budget</strong>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20" />
                          <td className="col-20">
                            <strong>Whichever is higher</strong>
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
              style={{
                background: "#00aff0",
                borderRadius: 5,
                marginBottom: 1,
              }}
            >
              <div className="bs-pricing-item">
                <div className="bs-icon">
                  <img src="/images2/p-booster.webp" alt="PPC Packages" />
                </div>
                <div className="head">
                  <div className="price-title">
                    <h2 className="text-uppercase">PPC Platinum</h2>
                  </div>
                  <div className="price">
                    <p>Minimum of</p>
                    <h1>
                      <sup>$</sup>649<small>/mo</small>
                    </h1>
                  </div>
                </div>
                <div
                  className="packord"
                  style={{
                    borderTop: "1px solid rgba(0,0,0,.125)",
                    paddingTop: 18,
                    marginTop: 18,
                  }}
                >
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
                    data-target="#collapse9"
                    aria-expanded="false"
                    aria-controls="collapse9"
                    className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
                  >
                    Account Set up
                  </a>
                </h4>
              </div>
              <div
                id="collapse9"
                aria-labelledby="head1"
                data-parent="#accordionExample"
                className="collapse"
              >
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      cellPadding={0}
                      cellSpacing={0}
                      className="pkg-dtable"
                    >
                      <tbody>
                        <tr>
                          <td className="col-20">Google</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Bing</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Initial Estimate Report</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Campaign Setup</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">No. of Keywords</td>
                          <td className="col-20">100</td>
                        </tr>
                        <tr>
                          <td className="col-20">Text Ads</td>
                          <td className="col-20">12</td>
                        </tr>
                        <tr>
                          <td className="col-20">Mobile Ads</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Banner Ads</td>
                          <td className="col-20">3</td>
                        </tr>
                        <tr>
                          <td className="col-20">Bid Setup</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Geo targeting Setup</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">
                            Landing Page Selection &amp; Recommendation
                          </td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">
                            Implementation of Conversion tracking Code
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
                id="head2"
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
                    Campaign Maintenance
                  </a>
                </h4>
              </div>
              <div
                id="collapse10"
                aria-labelledby="head2"
                data-parent="#accordionExample"
                className="collapse"
              >
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      cellPadding={0}
                      cellSpacing={0}
                      className="pkg-dtable"
                    >
                      <tbody>
                        <tr>
                          <td className="col-20">Landing Page Optimization</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Creating new landing pages</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Ad Copy Optimization</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">
                            Keyword Refinement (If Required)
                          </td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">
                            Bid Refinement (If Required)
                          </td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">A/B Testing</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">CTR Analysis</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">ROI Tracking</td>
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
                    data-target="#collapse11"
                    aria-expanded="false"
                    aria-controls="collapse11"
                    className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
                  >
                    Analytics Setup
                  </a>
                </h4>
              </div>
              <div
                id="collapse11"
                aria-labelledby="head3"
                data-parent="#accordionExample"
                className="collapse"
              >
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      cellPadding={0}
                      cellSpacing={0}
                      className="pkg-dtable"
                    >
                      <tbody>
                        <tr>
                          <td className="col-20">Google Analytics Setup</td>
                          <td className="col-20">Advance &amp; Ecommerce</td>
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
                    data-target="#collapse12"
                    aria-expanded="false"
                    aria-controls="collapse12"
                    className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
                  >
                    Reporting &amp; Support
                  </a>
                </h4>
              </div>
              <div
                id="collapse12"
                aria-labelledby="head4"
                data-parent="#accordionExample"
                className="collapse"
              >
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      cellPadding={0}
                      cellSpacing={0}
                      className="pkg-dtable"
                    >
                      <tbody>
                        <tr>
                          <td className="col-20">Reports</td>
                          <td className="col-20">Monthly</td>
                        </tr>
                        <tr>
                          <td className="col-20">Monthly Reports</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Dedicated Account Manager</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Email and Chat Support</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Telephone Support</td>
                          <td className="col-20">
                            <span className="icon icon-sucess">
                              <i className="fa fa-check" />
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20">Minimum Period</td>
                          <td className="col-20" />
                        </tr>
                        <tr>
                          <td className="col-20">Cost Per Month</td>
                          <td className="col-20">
                            <strong>Minimum of $ 500</strong>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20" />
                          <td className="col-20">
                            <strong>or 12% of Adword Budget</strong>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-20" />
                          <td className="col-20">
                            <strong>Whichever is higher</strong>
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
