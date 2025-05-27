import ContactSection from "../components/ContactSection";
import Link from "next/link";
import HappyClients from "../components/HappyClients";

export const metadata = {
  title: "VPS Server Services India | MEDIATRENZ",
  description: "You can contact us for VPS Server, a new way to know that your website runs at very high performance including speed, privacy, hosting control, management.",
  keywords: "VPS Server Services India",
  og_title: "VPS Server Services India | MEDIATRENZ",
  og_description: "You can contact us for VPS Server, a new way to know that your website runs at very high performance including speed, privacy, hosting control, management.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/vps-server.php`, // Generate the canonical URL
  },
};

export default function VpsServer() {
  return (
    <>
      <div className="innerbanner" style={{backgroundImage: 'url(/images2/vps-server-banner.webp)'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcurmb-content">
                  <h1 className="page-title">VPS Server</h1>
                  <div className="breadcrumb_item ul-li">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="https://mediatrenz.com">Home</Link></li>
                      {/* <li class="breadcrumb-item"><Link href="#">Server</Link></li>*/}
                      <li className="breadcrumb-item active">VPS Server</li>
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
                    <img src="/images2/vps-server-img1.webp" alt="VPS Server" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="title">Breathe new life into your website with MEDIATRENZ VPS Server</h2>
                {/* <h3 class="subtitle">Consistent hosting performance for rapidly growing businesses</h3> */}
                <p className="mb-0">VPS is the new method to make sure that your website runs at very elevated performance, including speed, privacy, hosting control, management, the aptitude to upgrade at will, and several other astonishing advantages for your domain.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="fullsersec" style={{background: 'url(/images2/vps-parallax-bg.webp)'}}>
          <div className="container pos-rel text-center">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <h2 className="title text-white">Powerful VPS Hosting</h2>
                <h3 className="subtitle2 text-white">Full root access to user | Integrated cPanel for VPS Server | Near-instant Provisioning</h3>
              </div>
              <div className="col-md-12">
                <div className="bg-gradient">
                  <div className="row m-auto text-center">
                    <div className="col-lg-4 princing-item blue">
                      <div className="pricing-divider ">
                        <h3 className="text-light">Starter</h3>
                        <h4 className="my-0 text-light"><span className="h4">$</span>120<span className="h5">/mo</span></h4>
                        <h5 className="thin-text3">Only Linux OS Support</h5>
                        <svg className="pricing-divider-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                          <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729 c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
                          <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729 c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
                          <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716 H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
                          <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428 c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
                        </svg>
                      </div>
                      <div className="card-body bg-white mt-0 shadow">
                        <ul className="list-unstyled mb-3 position-relative">
                          <li><b> Lightweight Container</b></li>
                          <li><b>2GB - 8GB</b> RAM</li>
                          <li><b>2 Core - 4 Core </b>CPU</li>
                          <li><b>20GB - 120GB</b> SSD RAID 10</li>
                          <li><b>1 Dedicated</b> IP</li>
                          <li><b>2 TB</b>  Bandwidth</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block  btn-custom ">Select Plan</button>
                      </div>
                    </div>
                    <div className="col-lg-4 princing-item red mgt30-res768">
                      <div className="pricing-divider ">
                        <div className="ribbon">Recommended</div>
                        <h3 className="text-light">Performance</h3>
                        <h4 className="my-0 text-light"><span className="h4">$</span>250<span className="h5">/mo</span></h4>
                        <h5 className="thin-text3">Linux &amp; Windows OS Support</h5>                      
                        <svg className="pricing-divider-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                          <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729 c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
                          <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729 c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
                          <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716 H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
                          <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428 c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
                        </svg>
                      </div>
                      <div className="card-body bg-white mt-0 shadow">
                        <ul className="list-unstyled mb-3 position-relative">
                          <li><b> Full Virtualization</b></li>
                          <li><b>2GB - 8GB</b> RAM</li>
                          <li><b>2 Core - 4 Core </b>CPU</li>
                          <li><b>20GB - 120GB</b> SSD RAID 10</li>
                          <li><b>1 Dedicated</b> IP</li>
                          <li><b>2 TB</b>  Bandwidth</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block  btn-custom ">Select Plan</button>
                      </div>
                    </div>
                    <div className="col-lg-4 princing-item green mgt30-res768">
                      <div className="pricing-divider ">
                        <h3 className="text-light">Business</h3>
                        <h4 className="my-0 text-light"><span className="h4">$</span>450<span className="h5">/mo</span></h4>
                        <h5 className="thin-text3">Only Linux OS Support</h5>
                        <svg className="pricing-divider-img" enableBackground="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xmlSpace="preserve" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
                          <path className="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729 c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6" />
                          <path className="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729 c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6" />
                          <path className="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716 H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7" />
                          <path className="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428 c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF" />
                        </svg>
                      </div>
                      <div className="card-body bg-white mt-0 shadow">
                        <ul className="list-unstyled mb-3 position-relative">
                          <li><b> Redundant Hardware</b></li>
                          <li><b>2GB - 8GB</b> RAM</li>
                          <li><b>2 Core - 4 Core </b>CPU</li>
                          <li><b>20GB - 120GB</b> SSD RAID 10</li>
                          <li><b>1 Dedicated</b> IP</li>
                          <li><b>2 TB</b>  Bandwidth</li>
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
          <div className="container-fluid text-center">
            <h2 className="title">Why choose VPS Server Hosting?</h2>
            <div className="row">
              <div className="col-md-3 topmarg-30">
                <div className="inner">
                  <div className="icon"><img src="/images2/h-control.webp" alt="VPS Server" /></div>
                  <h4>Expandable SSD storage</h4>
                  <p className="mb-0">Our resilient SSD Block Storage permits you boost the storage of your VPS Hosting Plan of US Server. You can select the additional size ranging from 10 GB to 500 GB from your order administration panel.</p>
                </div>
              </div>
              <div className="col-md-3 topmarg-30">
                <div className="inner">
                  <div className="icon"><img src="/images2/h-security.webp" alt="VPS Server" /></div>
                  <h4>Full root access to user</h4>
                  <p className="mb-0">The VPS servers come with full root access which allows administrator access over your hosting surroundings, along with the aptitude to install custom software without any constraints. Furthermore, our Server Management Panel offers you total control of the server with actions like Rebuild, Web-based VNC, Restart, Shutdown, Resource Monitoring and many more.</p>
                </div>
              </div>
              <div className="col-md-3 topmarg-30">
                <div className="inner">
                  <div className="icon"><img src="/images2/fast-access.webp" alt="VPS Server" /></div>
                  <h4>Incorporated cpanel for VPS server</h4>
                  <p className="mb-0">The primary servers powering our VPS Hosting Servers are built with high-performance computing solutions, SSD storage drives, as well as top-tier network links. Furthermore, we have cautiously optimized the virtualization environment along with density for rock-solid performance.</p>
                </div>
              </div>
              <div className="col-md-3 topmarg-30">
                <div className="inner">
                  <div className="icon"><img src="/images2/h-control.webp" alt="VPS Server" /></div>
                  <h4>Near-instant provisioning</h4>
                  <p className="mb-0">While some VPS Hosting providers take hours or days to obtain your server up and running. Unlike several Virtual Server hosting service providers, we {`don't`} charge any setup cost.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fullsersec2 green-bg">
          <div className="container text-center">
            <h2 className="title text-white">Technical Specifications of Virtual Server Hosting</h2>
            <div className="row text-left">
              <div className="col-md-4 topmarg-30">
                <div className="inner">
                <i class="fi fi-tr-shield-keyhole"></i>
                  <h4>Guaranteed Resources in VPS Server</h4>
                  <p>Our Linux KVM based VPS makes sure reliable top-notch performance along with the resources of the server can be scaled as your business expands.</p>
                </div>
              </div>
              <div className="col-md-4 topmarg-30">
                <div className="inner">
                <i class="fi fi-tr-shield-keyhole"></i>
                  <h4>Secure Environment</h4>
                  <p>Each VPS Server functions in total isolation from the other tenants and you can simply enhance the server security through cPanel or else Plesk.</p>
                </div>
              </div>
              <div className="col-md-4 topmarg-30">
                <div className="inner">
                <i class="fi fi-tr-shield-keyhole"></i>
                  <h4>Cutting Edge Server Hardware</h4>
                  <p>Newest servers mean more Compute, Memory as well as equipped with SSD based storage. All these donate to a better performance of the VMs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fullsersec" style={{background: 'url(/images2/quraadsbg.webp)'}}>
          <div className="container pos-rel text-center">
            <div className="row justify-content-center">
              <div className="col-md-11">
                <h2 className="title text-white">Top of the line network</h2>
                <h3 className="subtitle2 text-white">Our network is intended with several reputed ISPs to make sure high stability, eradicate single point of failure with integrated DDoS protection, at NO supplementary cost!</h3>
              </div>
              <div className="col-md-11">
                <p>Economical VPS hosting is fundamentally possible and MEDIATRENZ has proved that. Now, for the cost of shared web hosting you can have your own, personal cloud server and no more share your web hosting space with anyone else. A top-class performance with the lowest price assurance is our objective! {`That's`} why we never oversell our virtual server resources as well as your websites will run without any stoppages on an unbelievably high speed.</p>
                <p>Professional Customer Success {`team's`} help is something that you {`won't`} discover anywhere else for unmanaged VPS hosting services. Yet, our Team of experts is always prepared to help you at any time any day with no delays - and {`that's`} another motive why MEDIATRENZ cloud VPS is in fact, your finest VPS hosting preference. Here, at MEDIATRENZ, our customers happiness is our primary priority and when in need - a helping hand is always specified.</p>
                <p className="mb-0">Advanced cloud-based infrastructure, a simple and manageable VPS control panel makes MEDIATRENZ virtual private server your number one preference. Only with a few clicks you can install the most admired OS or web scripts, power your virtual server on and off, reboot it, make backups, restore containers through cpanel and much more! MEDIATRENZ cloud server hosting - your finest virtual private server selection India has to offer!</p>
              </div>
            </div>
          </div>
        </section>
        <section className="ormsec4">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="title">MEDIATRENZ VPS Hosting Features</h2>
                <div className="row mt-30"> 
                  <div className="col-xs-6 col-sm-4 col-md-2 ds-feature">
                    <div className="featureImg"><img className="img-responsive" src="/images2/ds-f12.webp" alt="VPS Server" /></div>
                    <p>Optional cPanel</p>
                  </div>   
                  <div className="col-xs-6 col-sm-4 col-md-2 ds-feature">
                    <div className="featureImg"><img className="img-responsive" src="/images2/ds-f5.webp" alt="VPS Server" /></div>
                    <p>RAID-10 VPS Storage</p>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-2 ds-feature">
                    <div className="featureImg"><img className="img-responsive" src="/images2/ds-f4.webp" alt="VPS Server" /></div>
                    <p>Scale Up Servers</p>
                  </div>                 
                  <div className="col-xs-6 col-sm-4 col-md-2 ds-feature">
                    <div className="featureImg"><img className="img-responsive" src="/images2/ds-f9.webp" alt="VPS Server" /></div>
                    <p>Live Migration</p>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-2 ds-feature">
                    <div className="featureImg"><img className="img-responsive" src="/images2/ds-f3.webp" alt="VPS Server" /></div>
                    <p>Live Snapshots</p>
                  </div>                  
                  <div className="col-xs-6 col-sm-4 col-md-2 ds-feature">
                    <div className="featureImg"><img className="img-responsive" src="/images2/ds-f6.webp" alt="VPS Server" /></div>
                    <p>Daily VPS Backup</p>
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
