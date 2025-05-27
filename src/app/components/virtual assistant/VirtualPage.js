"use client";
import VirtualassistantJson from "../../json/virtualassistant.json";
import HappyClients from "../HappyClients";
import ContactSection from "../ContactSection";
import CreativeWork from "../CreativeWork";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuditForm from "../seo/AuditForm";
import VirtualService from "./VirtualServices";

import { useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";

export default function VirtualPage() {
  const pathName = usePathname();
  const data = VirtualassistantJson.find((item) => item.slug === pathName);

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
      <section className="ormsec1 pb-0">
        <div className="container pos-rel">
          <div className="row justify-content-center">
            <div className="col-md-6 clearfix">
              <div className="simagebox">
                <div className="circle" />
                <div className="circle2" />
                <div className="image clearfix">
                  <img src={data.first_img_url} alt={data.image_alt} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="title mb-2">{data.first_heading}</h3>
              <h4>{data.first_subheading}</h4>
              <span dangerouslySetInnerHTML={{ __html: data["first_para"] }} />
              <h4>{data.first_subheading2}</h4>
              <span dangerouslySetInnerHTML={{ __html: data["first_para2"] }} />
            </div>
            <div className="col">
              <span dangerouslySetInnerHTML={{ __html: data["first_para3"] }} />
              <h4>{data.first_subheading3}</h4>
              <span dangerouslySetInnerHTML={{ __html: data["first_para4"] }} />
              <h4>{data.first_subheading4}</h4>
              <span dangerouslySetInnerHTML={{ __html: data["first_para5"] }} />
              <h4>{data.first_subheading5}</h4>
              <span dangerouslySetInnerHTML={{ __html: data["first_para6"] }} />
              <h4>{data.first_subheading6}</h4>
              <span dangerouslySetInnerHTML={{ __html: data["first_para7"] }} />
              <h4>{data.first_subheading7}</h4>
              <span dangerouslySetInnerHTML={{ __html: data["first_para8"] }} />
              <h4>{data.first_subheading8}</h4>
              <span dangerouslySetInnerHTML={{ __html: data["first_para9"] }} />
            </div>
          </div>
        </div>
      </section>
      <AuditForm />
      <VirtualService />
      <CreativeWork />
      <HappyClients />
      <ContactSection />
    </div>
  );
}
