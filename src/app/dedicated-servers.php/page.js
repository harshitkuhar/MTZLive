import ContactSection from "../components/ContactSection";
import Link from "next/link";
import HappyClients from "../components/HappyClients";
import AuditForm from "../components/FormWithNotesField";

export const metadata = {
  title: "Dedicated Server Services | MEDIATRENZ",
  description: "We assure you of a range of proficiency in bare metal. We offer a diverse range of high-performance dedicated servers to suit the demanding requirements of all companies.",
  keywords: "Dedicated Server Services",
  og_title: "Dedicated Server Services | MEDIATRENZ",
  og_description: "We assure you of a range of proficiency in bare metal. We offer a diverse range of high-performance dedicated servers to suit the demanding requirements of all companies.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/dedicated-servers.php`, // Generate the canonical URL
  },
};

export default function DedicatedServers() {
  return (
    <>
      <div className="innerbanner" style={{backgroundImage: 'url(/images2/dedicated-servers-banner.webp)'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcurmb-content">
                  <h1 className="page-title">Dedicated Server</h1>
                  <div className="breadcrumb_item ul-li">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                      {/*<li class="breadcrumb-item"><Link href="#">Server</Link></li>*/}
                      <li className="breadcrumb-item active">Dedicated Server</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="ormsec1 rmsec">
          <div className="container">
            <div className="row">
              <div className="col-md-6 clearfix">
                <div className="simagebox">
                  <div className="circle" />
                  <div className="circle2" />
                  <div className="image clearfix">
                    <img src="/images2/dedicated-servers-img1.webp" alt="Dedicated Server" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="title">Choose A Dedicated Hosting Provider to build and grow your website with ease</h2>
                {/* <h3 class="subtitle">Get the Highest Level of Performance and Security with Dedicated Servers.</h3> */}
                <p>With MEDIATRENZ, you are assured our range of proficiency in bare metal. Our dedicated servers benefit from next-generation components.</p>
                <p>We offer diverse ranges of high-performance dedicated servers, tailored to the most demanding requirements of all companies.</p>
                <p className="mb-0">Host your website, set out your high-resilience infrastructure, or else customise your machine to suit your projects in just a few clicks.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="fullsersec" style={{background: 'url(/images2/dedicated-parallax-bg.webp)'}}>
          <div className="container pos-rel text-center">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <h2 className="title text-white">Get high-powered Dedicated Server Hosting</h2>
                <h3 className="subtitle2 text-white">High-performance Servers | Maximum Control | Instant Provisioning</h3>
              </div>
              <div className="col-md-12">
                <div className="bg-gradient">
                  <div className="row m-auto text-center">
                    <div className="col-lg-4 princing-item blue">
                      <div className="pricing-divider ">
                        <h3 className="text-light">Starter</h3>
                        <h4 className="my-0 text-light"><span className="h4">$</span>120<span className="h5">/mo</span></h4>
                        <h5 className="thin-text3">DUAL PROCESSOR 8 Core</h5>
                        <svg className="pricing-divider-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                          <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729 c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
                          <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729 c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
                          <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716 H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
                          <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428 c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
                        </svg>
                      </div>
                      <div className="card-body bg-white mt-0 shadow">
                        <ul className="list-unstyled mb-3 position-relative">
                          <li><b> Intel Xeon L5420 (2.50 GHz)</b></li>
                          <li><b>8 GB</b> RAM</li>
                          <li><b>500 GB</b> SATA HDD</li>
                          <li><b>33 TB </b>Bandwidth on 1Gbps Port</li>
                          <li><b>1 IP Address</b> IPV4 Addresses</li>
                          <li><b>12 MB</b> L2 Cache</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block  btn-custom ">Select Plan</button>
                      </div>
                    </div>
                    <div className="col-lg-4 princing-item red mgt30-res768">
                      <div className="pricing-divider ">
                        <div className="ribbon">Recommended</div>
                        <h3 className="text-light">Performance</h3>
                        <h4 className="my-0 text-light"><span className="h4">$</span>250<span className="h5">/mo</span></h4>
                        <h5 className="thin-text3">DUAL PROCESSOR 12(24) Core</h5>                      
                        <svg className="pricing-divider-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                          <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729 c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
                          <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729 c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
                          <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716 H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
                          <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428 c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
                        </svg>
                      </div>
                      <div className="card-body bg-white mt-0 shadow">
                        <ul className="list-unstyled mb-3 position-relative">
                          <li><b>Intel Xeon X5650 (2.66 GHz)</b></li>
                          <li><b>8 GB</b> RAM</li>
                          <li><b>1T</b> SATA HDD</li>
                          <li><b>33 TB </b>Bandwidth on 1Gbps Port</li>
                          <li><b>1 IP Address</b> IPV4 Addresses</li>
                          <li><b>12 MB</b> SmartCache</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block  btn-custom ">Select Plan</button>
                      </div>
                    </div>
                    <div className="col-lg-4 princing-item green mgt30-res768">
                      <div className="pricing-divider ">
                        <h3 className="text-light">Business</h3>
                        <h4 className="my-0 text-light"><span className="h4">$</span>450<span className="h5">/mo</span></h4>
                        <h5 className="thin-text3">DUAL PROCESSOR 8(16) Core</h5>
                        <svg className="pricing-divider-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                          <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729 c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
                          <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729 c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
                          <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716 H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
                          <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428 c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
                        </svg>
                      </div>
                      <div className="card-body bg-white mt-0 shadow">
                        <ul className="list-unstyled mb-3 position-relative">
                          <li><b>Intel Xeon L5630 (2.13 GHz)</b></li>
                          <li><b>24 GB</b> RAM</li>
                          <li><b>500 GB</b> SATA HDD</li>
                          <li><b>33 TB</b> Bandwidth on 1Gbps Port</li>
                          <li><b>1 IP Address</b> IPV4 Addresses</li>
                          <li><b>12 MB</b> SmartCache</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block  btn-custom ">Select Plan</button>
                      </div>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="serprocess-sec">
          <div className="container text-center">
            <h2 className="title">Why Use Dedicated Hosting?</h2>
            <div className="row">
              <div className="col-md-3 topmarg-30">
                <div className="inner">
                  <div className="icon"><img src="/images2/h-control.webp" alt="Dedicated Server" /></div>
                  <h4>Maximum Performance</h4>
                  <p className="mb-0">Your resources are completely dedicated bare metal servers built with next-gen components. We design, fabricate and manage 400k physical servers globally to provide you optimised formations for your specific projects.</p>
                </div>
              </div>
              <div className="col-md-3 topmarg-30">
                <div className="inner">
                  <div className="icon"><img src="/images2/h-performance.webp" alt="Dedicated Server" /></div>
                  <h4>Availability</h4>
                  <p className="mb-0">Deploy your servers in less than one hundred and twenty seconds, in our thirty data centres around the world. Get benefit from a safe, high-resilience network, to make sure stability of service for your customers.</p>
                </div>
              </div>
              <div className="col-md-3 topmarg-30">
                <div className="inner">
                  <div className="icon"><img src="/images2/h-flexibilty.webp" alt="Dedicated Server" /></div>
                  <h4>Scalability</h4>
                  <p className="mb-0">By making an infrastructure with our dedicated servers, you erect a dependable technical platform for your business applications. The scalability of your infrastructure is further improved by the ability to interconnect your servers with other our solutions, such as Hosted Private Cloud as well as Public Cloud.</p>
                </div>
              </div>
              <div className="col-md-3 topmarg-30">
                <div className="inner">
                  <div className="icon"><img src="/images2/h-security.webp" alt="Dedicated Server" /></div>
                  <h4>Durability</h4>
                  <p className="mb-0">By hosting your servers with MEDIATRENZ, you benefit from modern and unique solutions across our complete infrastructure like the anti-DDoS solution developed by our experts. We continually foresee your future needs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fullsersec2 green-bg">
          <div className="container text-center">
            <h2 className="title text-white">How Can Our Dedicated Servers Help?</h2>
            <div className="row text-left justify-content-center">
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                <i class="fi fi-tr-chart-line-up"></i>
                  <h4>Bandwidth and unlimited traffic</h4>
                  <p>Each MEDIATRENZ dedicated server has a minimum public bandwidth, with a burst accessible to absorb sporadic peak traffic. Incoming as well as outgoing traffic is limitless and free (with the exception of our data centres positioned in Asia Pacific). You also have the alternative of boosting your bandwidth capacity, if required.</p>
                </div>
              </div>
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                <i class="fi fi-tr-chart-line-up"></i>
                  <h4>Server resources are not shared</h4>
                  <p>When you select a dedicated hosting provider, you obtain the full resources of single server. You {`don’t`} need to concern about other websites clogging up the {`server’s`} CPU as well as RAM. With a dedicated server, you can be sure that awful scripts running on another website or spikes in bandwidth practice {`won’t`} slow your server down.</p>
                </div>
              </div>
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                <i class="fi fi-tr-chart-line-up"></i>
                  <h4>Distributions</h4>
                  <p>You can install several operating systems automatically through the MEDIATRENZ Control Panel. This embraces several operating systems (Windows Server, Debian, Ubuntu or CentOS), Plesk as well as cPanel web management interfaces, and also Microsoft SQL Server for databases. Virtualisation solutions, such as VMware, CoreOS and Windows Hyper-V, are also accessible.</p>
                </div>
              </div>
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                <i class="fi fi-tr-chart-line-up"></i>
                  <h4>Flexibility</h4>
                  <p>A dedicated server allows the flexibility of customizing the server to the {`customer’s`} exclusive requirements for CPU, RAM, disk space as well as software. They may either provide software a client {`doesn’t`} need or lack things that they do. A dedicated server permits organizations a customizable server environment that fits their requirements.</p>
                </div>
              </div>
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                <i class="fi fi-tr-chart-line-up"></i>
                  <h4>Assistance and support</h4>
                  <p>By renting servers from MEDIATRENZ, you get technical support through telephone and email. You can also chat to our advisors, who are equipped to help. We also provide a range of guides and an online help centre to help you in installing and managing your services.</p>
                </div>
              </div>
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                <i class="fi fi-tr-chart-line-up"></i>
                  <h4>Anti-DDoS protection</h4>
                  <p>To assure utmost security for your infrastructures, an anti-DDoS system is incorporated with all MEDIATRENZ dedicated servers. It ensures service continuity for your applications from any attacks.</p>
                </div>
              </div>
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                <i class="fi fi-tr-chart-line-up"></i>
                  <h4>Enhanced performance and security</h4>
                  <p>Selecting a dedicated hosting provider guarantees utmost uptime for your website. If your website obtains lot traffic, though, dedicated servers provide more constancy and dependability than shared hosting.</p>
                  <p>With a dedicated server, you can also be certain that you {`aren’t`} sharing space with a malicious website or else a potential spammer. Dedicated hosting permits enhanced security, predominantly noteworthy for businesses handling responsive transactions over FTP or else SSL.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ormsec4">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="title">MEDIATRENZ Dedicated Hosting Features</h2>
                <div className="row mt-30">
                  <div className="col-xs-6 col-sm-4 col-md-2 ds-feature">
                    <div className="featureImg"><img className="img-responsive" src="/images2/ds-f1.webp" alt="Dedicated Server" /></div>
                    <p>24/7 Support</p>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-2 ds-feature">
                    <div className="featureImg"><img className="img-responsive" src="/images2/ds-f2.webp" alt="Dedicated Server" /></div>
                    <p>Blazing Fast SSDs</p>
                  </div>                    
                  <div className="col-xs-6 col-sm-4 col-md-2 ds-feature">
                    <div className="featureImg"><img className="img-responsive" src="/images2/ds-f11.webp" alt="Dedicated Server" /></div>
                    <p>Root Access</p>
                  </div>                    
                  <div className="col-xs-6 col-sm-4 col-md-2 ds-feature">
                    <div className="featureImg"><img className="img-responsive" src="/images2/ds-f8.webp" alt="Dedicated Server" /></div>
                    <p>Web-Based Graphs</p>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-2 ds-feature">
                    <div className="featureImg"><img className="img-responsive" src="/images2/ds-f5.webp" alt="Dedicated Server" /></div>
                    <p>Redundant Storage</p>
                  </div>                    
                  <div className="col-xs-6 col-sm-4 col-md-2 ds-feature">
                    <div className="featureImg"><img className="img-responsive" src="/images2/ds-f12.webp" alt="Dedicated Server" /></div>
                    <p>Compliance Ready</p>
                  </div>
                </div>
                <div className="row mt-30"> 
                  <div className="col-xs-6 col-sm-4 col-md-2 ds-feature">
                    <div className="featureImg"><img className="img-responsive" src="/images2/ds-f4.webp" alt="Dedicated Server" /></div>
                    <p>Manage Your Servers</p>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-2 ds-feature">
                    <div className="featureImg"><img className="img-responsive" src="/images2/ds-f10.webp" alt="Dedicated Server" /></div>
                    <p>Additional IP Address</p>
                  </div>                     
                  <div className="col-xs-6 col-sm-4 col-md-2 ds-feature">
                    <div className="featureImg"><img className="img-responsive" src="/images2/ds-f9.webp" alt="Dedicated Server" /></div>
                    <p>High Availability Infrastructure</p>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-2 ds-feature">
                    <div className="featureImg"><img className="img-responsive" src="/images2/ds-f3.webp" alt="Dedicated Server" /></div>
                    <p>Remote Reboot Control</p>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-2 ds-feature">
                    <div className="featureImg"><img className="img-responsive" src="/images2/ds-f7.webp" alt="Dedicated Server" /></div>
                    <p>Manage Your Resources</p>
                  </div>                  
                  <div className="col-xs-6 col-sm-4 col-md-2 ds-feature">
                    <div className="featureImg"><img className="img-responsive" src="/images2/ds-f6.webp" alt="Dedicated Server" /></div>
                    <p>Optional Daily Backup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bottomserviecs-sec">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12 text-center title-mb">
                <h4 className="element-subtitle text-white">Our Services</h4>
                <h2 className="title text-white">We Build Brands With <br />
                  Our Best Services</h2>
              </div>
            </div>
            <div className="row mmt-30 text-left">
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="dedicated-servers.php">
                    <div className="headtl">
                      <div className="icon-box"><i class="fi fi-tr-database"></i></div>
                      <div className="icon-boxtext">Dedicated Server</div>
                    </div>
                    <div className="icnbox-box-no">01</div>
                    <p>Dedicated Servers Hosting With Minimum Cost and Maximum Control...</p>
                  </Link><div className="btn-link1"><Link href="dedicated-servers.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="cloud-server.php">
                    <div className="headtl">
                      <div className="icon-box"><i class="fi fi-tr-database"></i></div>
                      <div className="icon-boxtext">Cloud Server</div>
                    </div>
                    <div className="icnbox-box-no">02</div>
                    <p>Our Cheap Cloud hosting packages are designed to power your businesses...</p>
                  </Link><div className="btn-link1"><Link href="cloud-server.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
                <div className="intro-ser-col">
                  <Link href="vps-server.php">
                    <div className="headtl">
                      <div className="icon-box"><i class="fi fi-tr-database"></i></div>
                      <div className="icon-boxtext">VPS Server</div>
                    </div>
                    <div className="icnbox-box-no">03</div>
                    <p> VPS is a popular hosting option for small and medium-sized businesses...</p>
                  </Link><div className="btn-link1"><Link href="vps-server.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
                </div> 
              </div>           
            </div>
          </div>
        </section>

      <HappyClients />
      <ContactSection />
    </>
  );
}
