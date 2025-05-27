import Link from "next/link";
export default function SmoAccordion() {
  return (
    <div id="accordionExample" className="accordion">
      <div className="card">
        <div id="head1" className="card-header shadow-sm border-0 text-center">
          <h4 className="mb-0 font-weight-bold">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#collapseZero"
              aria-expanded="false"
              aria-controls="collapseZero"
              className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
            >
              Strategy
            </a>
          </h4>
        </div>
        <div
          id="collapseZero"
          aria-labelledby="head1"
          data-parent="#accordionExample"
          className="collapse"
        >
          <div className="card-body">
            <div className="table-responsive">
              <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                <tbody>
                  <tr>
                    <td className="col-20">Target Business Goal</td>
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
                    <td className="col-20">Account Management</td>
                    <td className="col-20">1 Platform</td>
                    <td className="col-20">2 Platform</td>
                    <td className="col-20">3 Platform</td>
                    <td className="col-20">4 Platform</td>
                  </tr>
                  <tr>
                    <td className="col-20">Analysis of Audience</td>
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
                      Create Content and Marketing Strategy
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
                    <td className="col-20">Profile Content Writing</td>
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
                    <td className="col-20">Facebook Photo Album</td>
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
                    <td className="col-20">
                      Keyword Based Content for Postings
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">Images Creation for Post</td>
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
                    <td className="col-20">Advertiment Support</td>
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
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
            >
              Facebook Monthly Promotion Activities
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
                    <td className="col-20">
                      Facebook Setup &amp; Optimization
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
                    <td className="col-20">Creative Image Creation</td>
                    <td className="col-20">10</td>
                    <td className="col-20">15</td>
                    <td className="col-20">18</td>
                    <td className="col-20">20</td>
                  </tr>
                  <tr>
                    <td className="col-20">Facebook Video Uploads</td>
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
                    <td className="col-20">
                      Facebook Cover Image Creation &amp; Upload
                    </td>
                    <td className="col-20">1</td>
                    <td className="col-20">1</td>
                    <td className="col-20">1</td>
                    <td className="col-20">2</td>
                  </tr>
                  <tr>
                    <td className="col-20">Facebook Timeline Posting</td>
                    <td className="col-20">10</td>
                    <td className="col-20">15</td>
                    <td className="col-20">18</td>
                    <td className="col-20">20</td>
                  </tr>
                  <tr>
                    <td className="col-20">Facebook Join Group</td>
                    <td className="col-20">5</td>
                    <td className="col-20">10</td>
                    <td className="col-20">12</td>
                    <td className="col-20">18</td>
                  </tr>
                  <tr>
                    <td className="col-20">Facebook Post Sharing in Group</td>
                    <td className="col-20">5</td>
                    <td className="col-20">10</td>
                    <td className="col-20">15</td>
                    <td className="col-20">20</td>
                  </tr>
                  <tr>
                    <td className="col-20">Target Page Likes</td>
                    <td className="col-20">Paid Activity</td>
                    <td className="col-20">Paid Activity</td>
                    <td className="col-20">Paid Activity</td>
                    <td className="col-20">Paid Activity</td>
                  </tr>
                  <tr>
                    <td className="col-20">Geo Targeted Fans (Likes)</td>
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
                    <td className="col-20">Facebook Insight Monitoring</td>
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
                      Video Sharing (Provided by Client)
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
                    <td className="col-20">
                      Blog Posting (Provided by Client)
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
              Twitter Monthly Promotion Activities
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
              <table cellPadding={0} cellSpacing={0} className="pkg-dtable ">
                <tbody>
                  <tr>
                    <td className="col-20">Twitter Setup</td>
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
                    <td className="col-20">Profile Optimization</td>
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
                      Background Image Creation &amp; Upload
                    </td>
                    <td className="col-20">1</td>
                    <td className="col-20">1</td>
                    <td className="col-20">1</td>
                    <td className="col-20">2</td>
                  </tr>
                  <tr>
                    <td className="col-20">Average Daily Tweets</td>
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
                    <td className="col-20">Average Daily Re-tweets</td>
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
                    <td className="col-20">
                      Keyword Based Content for Postings
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
                    <td className="col-20">
                      Research and follow relevant accounts
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
                    <td className="col-20">Tweets Posting</td>
                    <td className="col-20">10</td>
                    <td className="col-20">15</td>
                    <td className="col-20">20</td>
                    <td className="col-20">25</td>
                  </tr>
                  <tr>
                    <td className="col-20">Twitter Updates &amp; Engagement</td>
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
                    <td className="col-20">#HasTag Trend Research</td>
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
                    <td className="col-20">#HasTag Trend Research</td>
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
                    <td className="col-20">#HasTag Trend Research</td>
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
              Linkedin Monthly Promotion Activities
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
                    <td className="col-20">Linkedin Profile Creation</td>
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
                    <td className="col-20">Linkedin – Company Page Creation</td>
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
                    <td className="col-20">Targeted Linnkdin Connections</td>
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
                    <td className="col-20">Join Groups</td>
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
                    <td className="col-20">Linkedin Post Sharing</td>
                    <td className="col-20">10</td>
                    <td className="col-20">15</td>
                    <td className="col-20">18</td>
                    <td className="col-20">25</td>
                  </tr>
                  <tr>
                    <td className="col-20">
                      Creative Cover Page Image Creation
                    </td>
                    <td className="col-20">1</td>
                    <td className="col-20">1</td>
                    <td className="col-20">1</td>
                    <td className="col-20">2</td>
                  </tr>
                  <tr>
                    <td className="col-20">
                      Participation in Group Discussion
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
              Pinterest Monthly Promotion Activities
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
                    <td className="col-20">Pinterest Profile Setup</td>
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
                    <td className="col-20">Organise &amp; Share Images</td>
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
                    <td className="col-20">Repin Pinboard</td>
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
                    <td className="col-20">
                      Create Board &amp; Contribute to Other Board
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
                    <td className="col-20">Increase Followers and Following</td>
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
        <div id="head7" className="card-header shadow-sm border-0 text-center">
          <h4 className="mb-0 font-weight-bold">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#collapseseven"
              aria-expanded="false"
              aria-controls="collapseseven"
              className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
            >
              Instagram Monthly Promotion Activities
            </a>
          </h4>
        </div>
        <div
          id="collapseseven"
          aria-labelledby="head7"
          data-parent="#accordionExample"
          className="collapse"
        >
          <div className="card-body">
            <div className="table-responsive">
              <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                <tbody>
                  <tr>
                    <td className="col-20">Account Setup</td>
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
                    <td className="col-20">Profiile Optimization</td>
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
                    <td className="col-20">Profile Content Writing</td>
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
                    <td className="col-20">Instagram Post</td>
                    <td className="col-20">10</td>
                    <td className="col-20">12</td>
                    <td className="col-20">15</td>
                    <td className="col-20">20</td>
                  </tr>
                  <tr>
                    <td className="col-20">Instagram Followers</td>
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
                    <td className="col-20">Brand Centric Content</td>
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
                    <td className="col-20">Images/Meme Sharing</td>
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
                    <td className="col-20">Use Hashtags</td>
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
                    <td className="col-20">Increase Followers and Following</td>
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
                    <td className="col-20"># Hastag Trends Research</td>
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
                      Video Sharing (Provided by Client)
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div id="head8" className="card-header shadow-sm border-0 text-center">
          <h4 className="mb-0 font-weight-bold">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#collapseeight"
              aria-expanded="false"
              aria-controls="collapseeight"
              className="d-block position-relative text-uppercase collapsible-link py-2 collapsed"
            >
              YouTube Monthly Promotion Activities
            </a>
          </h4>
        </div>
        <div
          id="collapseeight"
          aria-labelledby="head8"
          data-parent="#accordionExample"
          className="collapse"
        >
          <div className="card-body">
            <div className="table-responsive">
              <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                <tbody>
                  <tr>
                    <td className="col-20">YouTube – Background Design</td>
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
                    <td className="col-20">YouTube Video Uploads</td>
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
                      Title &amp; Description Optimization
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
                    <td className="col-20">Tags Optimization</td>
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
                    <td className="col-20">Increase Popularity/Views</td>
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
                    <td className="col-20">
                      Inbound Links Embeded to Other sites
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
                    <td className="col-20">
                      <span className="icon icon-sucess">
                        <i className="fa fa-check" />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="col-20">YouTube – Subscriber Adding</td>
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
                    <td className="col-20">Increase Rating &amp; Comments</td>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
