"use client";
import MobileJson from "../../json/mobileapps.json";
import { usePathname } from "next/navigation";
import Services from "./Services";
import ContactSection from "../ContactSection";
import HappyClients from "../HappyClients";
import Link from "next/link";
import AuditForm from "./AuditForm";
import Packages from "./AndriodPackage";
import Portfolio from "./HomePortfolio";

import { useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";

export default function MobileApps() {
  const pathName = usePathname();
  const data = MobileJson.find((item) => item.slug === pathName);

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

      <section className="ormsec1 rmsec">
        <div className="container">
          <div className="row">
            <div className="col-md-6 clearfix">
              <div className="simagebox">
                <div className="circle"></div>
                <div className="circle2"></div>
                <div className="image clearfix">
                  <img src={data.image_first_url} alt={data.page_title} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="title">{data.heading_first}</h2>
              <span dangerouslySetInnerHTML={{ __html: data["paragraph"] }} />
            </div>
            <div className="col-md-12">
              <span
                dangerouslySetInnerHTML={{ __html: data["sub-paragraph"] }}
              />
            </div>
          </div>
        </div>
      </section>

      {data.heading_fifth_sub_second && (
        <section
          className="fullsersec"
          style={{ backgroundImage: `url(${data.img_url_fifth_sub})` }}
        >
          <div className="container pos-rel text-center">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h2 className="title text-white">{data.heading_fifth_sub}</h2>
                <h3 className="subtitle2 text-white">
                  {data.heading_fifth_sub_second}
                </h3>
              </div>
              <div className="col-md-11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: data["paragraph_fifth_sub"],
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      <AuditForm />

      <Portfolio />

      {data.heading_fifth_sub_d && (
        <section
          className="fullsersec"
          style={{ backgroundImage: `url(${data.img_url_fifth_sub})` }}
        >
          <div className="container pos-rel text-center">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h2 className="title text-white">{data.heading_fifth_sub_d}</h2>
              </div>
              <div className="col-md-11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: data["paragraph_fifth_sub"],
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="fullsersec2 green-bg">
        <div className="container text-center">
          <h2 className="title text-white">{data.package_heading}</h2>
          <p className="mt-2">{data.package_para}</p>
          <Packages data={data.package_cont} />
        </div>
      </section>

      <section className="ormsec4">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="title">{data.heading_fifth}</h2>
              <h3 className="subtitle2">{data.heading_sub_fifth}</h3>
              <span
                dangerouslySetInnerHTML={{
                  __html: data["paragraph_fifth"],
                }}
              />
            </div>
            <div className="col-md-4">
              <div className="image">
                <img
                  src={data.image_fifth_url}
                  alt="Android App Development Company"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services data={data.services} />

      <HappyClients />

      <ContactSection />
    </div>
  );
}
