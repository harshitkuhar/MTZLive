import Link from "next/link";
export default function PpcAccordion() {
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
            Account Set up
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
                  <td className="col-20">Google</td>
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
                  <td className="col-20">Bing</td>
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
                  <td className="col-20">Initial Estimate Report</td>
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
                  <td className="col-20">Campaign Setup</td>
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
                  <td className="col-20">No. of Keywords</td>
                  <td className="col-20">25</td>
                  <td className="col-20">50</td>
                  <td className="col-20">100</td>
                </tr>
                <tr>
                  <td className="col-20">Text Ads</td>
                  <td className="col-20">5</td>
                  <td className="col-20">8</td>
                  <td className="col-20">12</td>
                </tr>
                <tr>
                  <td className="col-20">Mobile Ads</td>
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
                  <td className="col-20">Banner Ads</td>
                  <td className="col-20">
                    <span className="icon icon-danger">
                      <i className="fa fa-close" />
                    </span>
                  </td>
                  <td className="col-20">1</td>
                  <td className="col-20">3</td>
                </tr>
                <tr>
                  <td className="col-20">Bid Setup</td>
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
                  <td className="col-20">Geo targeting Setup</td>
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
                    Landing Page Selection &amp; Recommendation
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
                    Implementation of Conversion tracking Code
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
            Campaign Maintenance
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
                  <td className="col-20">Landing Page Optimization</td>
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
                  <td className="col-20">Creating new landing pages</td>
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
                  <td className="col-20">Ad Copy Optimization</td>
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
                  <td className="col-20">Keyword Refinement (If Required)</td>
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
                  <td className="col-20">Bid Refinement (If Required)</td>
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
                  <td className="col-20">A/B Testing</td>
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
                  <td className="col-20">CTR Analysis</td>
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
                  <td className="col-20">ROI Tracking</td>
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
            Analytics Setup
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
                  <td className="col-20">Google Analytics Setup</td>
                  <td className="col-20">Basic</td>
                  <td className="col-20">Basic</td>
                  <td className="col-20">Advance &amp; Ecommerce</td>
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
            Reporting &amp; Support
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
                  <td className="col-20">Reports</td>
                  <td className="col-20">Monthly</td>
                  <td className="col-20">Monthly</td>
                  <td className="col-20">Monthly</td>
                </tr>
                <tr>
                  <td className="col-20">Monthly Reports</td>
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
                  <td className="col-20">Dedicated Account Manager</td>
                  <td className="col-20">
                    <span className="icon icon-text">-</span>
                  </td>
                  <td className="col-20">
                    <span className="icon icon-text">-</span>
                  </td>
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
                  <td className="col-20">Telephone Support</td>
                  <td className="col-20">
                    <span className="icon icon-text">-</span>
                  </td>
                  <td className="col-20">
                    <span className="icon icon-text">-</span>
                  </td>
                  <td className="col-20">
                    <span className="icon icon-sucess">
                      <i className="fa fa-check" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="col-20">Minimum Period</td>
                  <td className="col-20" />
                  <td className="col-20" />
                  <td className="col-20" />
                </tr>
                <tr>
                  <td className="col-20">Cost Per Month</td>
                  <td className="col-20">
                    <strong>Minimum of $ 249</strong>
                  </td>
                  <td className="col-20">
                    <strong>Minimum of $ 449</strong>
                  </td>
                  <td className="col-20">
                    <strong>Minimum of $ 649</strong>
                  </td>
                </tr>
                <tr>
                  <td className="col-20" />
                  <td className="col-20">
                    <strong>or 12% of Adword Budget</strong>
                  </td>
                  <td className="col-20">
                    <strong>or 12% of Adword Budget</strong>
                  </td>
                  <td className="col-20">
                    <strong>or 12% of Adword Budget</strong>
                  </td>
                </tr>
                <tr>
                  <td className="col-20" />
                  <td className="col-20">
                    <strong>Whichever is higher</strong>
                  </td>
                  <td className="col-20">
                    <strong>Whichever is higher</strong>
                  </td>
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
  
  );
}
