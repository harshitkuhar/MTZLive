"use client";
import PackageJson from "../../json/packages.json";
import HappyClients from "../HappyClients";
import ContactSection from "../ContactSection";
import CreativeWork from "../CreativeWork";
import Packages from "./Packages";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Pricetable from "./Pricetable";
import Form from "./Form";

import { useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";

export default function Package() {
  const pathName = usePathname();
  const data = PackageJson.find((item) => item.slug === pathName);
  const isSeoPackagePage = data.slug === "/seo-packages.php";
  const isGmbPackagePage = data.slug === "/local-seo-packages.php";
  const isOrmPackagePage = data.slug === "/orm-packages.php";

  const router = useRouter();
  const contentRef = useRef();

  useEffect(() => {
  const links = contentRef.current?.querySelectorAll('a[href]') || [];

  links.forEach(link => {
      const href = link.getAttribute('href');
      // Intercept only internal links
      if (href && href.startsWith('/')) {
      const handleClick = (e) => {
          e.preventDefault();
          router.push(href);
      };

      link.addEventListener('click', handleClick);
      // Cleanup on unmount
      link.__handleClick = handleClick;
      }
  });

  return () => {
      links.forEach(link => {
      if (link.__handleClick) {
          link.removeEventListener('click', link.__handleClick);
      }
      });
  };
  }, []);

  return (
    <div ref={contentRef}>
      <div
        className="innerbanner"
        style={{ backgroundImage: `url(${data.banner_image_url})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcurmb-content">
                <h1 className="page-title">{data.page_title}</h1>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      {data.breadcrums}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="bs-pricing" className="bs-pricing">
        <div className="container mmt-30">
          {data.first_heading && (
            <h2 className="title">{data.first_heading}</h2>
          )}
          {data.first_subheading && (
            <h3
              className="subtitle"
              dangerouslySetInnerHTML={{
                __html: data["first_subheading"],
              }}
            />
          )}
          {data.first_para && (
            <span
              dangerouslySetInnerHTML={{
                __html: data["first_para"],
              }}
            />
          )}
        </div>
        <div className="container" style={{ textAlign: "center" }}>
          {data.heading_second && <h1>{data.heading_second}</h1>}
        </div>

        <Pricetable data={data} />
      </section>

      <Form />

      {(isGmbPackagePage || isOrmPackagePage) && (
        <section className="ormsec2">
          <div className="container pos-rel">
            <div className="row">
              <div className="col-md-8">
                <h2 className="title">{data.ormsec2_heading}</h2>
                {/* <h3 className="subtitle2">If you (a person or a brand) are troubled by a bad reputation on the internet then you have to take steps to address it immediately because the problem will not go away by itself. </h3> */}
                <span
                  dangerouslySetInnerHTML={{
                    __html: data["ormsec2_para"],
                  }}
                />
                {/* <h4 className="subtitle3">Your reputation can face threats from many people that include</h4> */}
              </div>
              <div className="col-md-4">
                <div className="image">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: data["ormsec2_img"],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {(isSeoPackagePage || isOrmPackagePage) && (
        <section
          className="fbsec"
          style={{ background: `url(${data.fbsec_bg_img})`, "backgroundRepeat" : "no-repeat", "backgroundPosition": "right top" }}
        >
          <div className="container pos-rel">
            <div className="row">
              <div className="col-md-6">
                <h2 className="title">{data.fbsec_heading}</h2>
                <span
                  dangerouslySetInnerHTML={{ __html: data["fbsec_para"] }}
                />
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-lg-12 col-md-12 item-grid">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: data["fbsec_para2"],
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {(isSeoPackagePage || isOrmPackagePage) && (
        <section className="fullsersec2 green-bg">
          <div className="container text-center">
            <h2 className="title text-white">{data.package_heading}</h2>
            <p className="mt-2">{data.package_para1}</p>
            <div className="row text-left">
              <Packages data={data.package_cont} />
              <span
                dangerouslySetInnerHTML={{ __html: data["package_para2"] }}
              />
            </div>
          </div>
        </section>
      )}
      {isGmbPackagePage && (
        <section className="ormsec3">
          <div
            className="image"
            style={{
              backgroundImage: `url(${data.ormsec3_img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4" />
              <div className="col-md-8 pink-bg">
                <div className="inner">
                  <h2 className="title text-white">{data.ormsec3_heading}</h2>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: data["ormsec3_para"],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {(isGmbPackagePage || isOrmPackagePage) && (
        <section className="ormsec4">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h2 className="title"> {data.ormsec4_heading}</h2>
                <span
                  dangerouslySetInnerHTML={{
                    __html: data["ormsec4_para"],
                  }}
                />
              </div>
              <div className="col-md-4">
                <div className="image">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: data["ormsec4_img"],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {isOrmPackagePage && (
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img
                  className="image rounded-lg image3 mobile-hide"
                  src="images2/new/Seo-services1.jpg"
                  alt="SEO Services Packages"
                />
              </div>
              <div className="col-md-8">
                <div className="inner">
                  <h2 className="title">
                    Why choose us at MEDIATRENZ for the ORM Packages India?
                  </h2>
                  <p className="textbl">
                    Even though the competition is high, it is always important
                    to check in with the best team for help. Well, while looking
                    for Online Reputation management packages in India, we are
                    the best. Want to know why?
                  </p>
                  <ul className="bullet-style5">
                    <li>
                      <i className="fi fi-bs-check-circle"></i>We are here to
                      follow client-centric methods.
                    </li>
                    <li>
                      <i className="fi fi-bs-check-circle"></i>Our team consists
                      of certified experts for help.
                    </li>
                    <li>
                      <i className="fi fi-bs-check-circle"></i>
                      We deliver cost-effective solutions to fetch higher ROI
                      for clients.
                    </li>
                    <li>
                      <i className="fi fi-bs-check-circle"></i>
                      We are ready to perform real-time monitoring to know about
                      your {`brand's`} current buzz.
                    </li>
                  </ul>
                  <p>
                    These are a few of the many ways in which we help in
                    managing the online reputation of your brand. So, join us
                    right away!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {(isSeoPackagePage || isGmbPackagePage) && (
        <section
          className="fullsersec"
          style={{ background: `url(${data.fulsersec_img})` }}
        >
          <div className="container pos-rel text-center">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h2 className="title text-white">{data.fulsersec_heading}</h2>
              </div>
              <div className="col-md-12">
                <span
                  dangerouslySetInnerHTML={{ __html: data["fulsersec_para"] }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      <CreativeWork />
      <HappyClients />
      <ContactSection />
    </div>
  );
}
