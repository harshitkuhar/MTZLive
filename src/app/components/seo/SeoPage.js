'use client';
import SeoJson from "../../json/seo.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Packages from "./Packages";
import AuditForm from "./AuditForm";
import ContactSection from "../ContactSection";
import HappyClients from "../HappyClients";
import Services from "./Services";
import CreativeWork from "../CreativeWork";
import Image from "next/image";

import { useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";

export default function SeoPage() {

  const pathName = usePathname();
  const data = SeoJson.find((item) => item.slug === pathName)

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
      <div className="innerbanner" style={{ backgroundImage: `url(${data.banner_image_url})`}} >
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
                    <li className="breadcrumb-item active">{data.breadcrums}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="ormsec1">
        <div className="container pos-rel ">
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-6 col-xs-12 clearfix">
              <div className="simagebox">
                <div className="circle" />
                <div className="circle2" />
                <div className="image clearfix">
                  <img
                    src={data.image_first_url}
                    alt={data.page_title}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <h3 className="title">
                <span dangerouslySetInnerHTML={{__html:data["heading_first"]}} />
              </h3>
              <span dangerouslySetInnerHTML={{__html:data["subheading_first"]}} />
            </div>
            <div className='col-md-12'>
              <span dangerouslySetInnerHTML={{__html:data["subheading_first_bullets"]}} />
            </div>
          </div>
        </div>
      </section>

      {data.heading_second  && (
        <section className="affor-seo-ser2">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h2 className="title text-white">
                  {data.heading_second}
                </h2>
                <p className="mb-0">
                  {data.subheading_second}
                </p>
                <ul className="bullet-style2">
                  <span dangerouslySetInnerHTML={{__html:data["subheading_second_bullets"]}} />
                </ul>
              </div>
              <div className="col-md-4">
                <div className="image">
                  <img
                    src={data.image_second_url}
                    className="img-fluid"
                    alt={data.page_title}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {data.heading_fifth  && (
        <section className="fbsec">
          <div className="container pos-rel">
            <div className="row">
              <div className="col-md-6">
                <h2 className="title"><span dangerouslySetInnerHTML={{__html:data["heading_fifth"]}} /></h2>
                <p className="mb-0"><span dangerouslySetInnerHTML={{__html:data["subheading_fifth"]}} /></p> 
                <p className="mb-0"><span dangerouslySetInnerHTML={{__html:data["subheading_fifth_second"]}} /></p>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-lg-12 col-md-12 item-grid">
                    <div className="item pinkbg">
                      <ul className="bullet-style2">
                        <span dangerouslySetInnerHTML={{__html:data["subheading_fifth_bullets"]}} />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Packages data={data.packages} heading={data.packages_heading} desc={data.packages_desc}/>
      
      <AuditForm/>

      {data.heading_third  && (
        <section className="ormsec2">
          <div className="container pos-rel">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h2 className="title"><span dangerouslySetInnerHTML={{__html:data["heading_third"]}} /></h2>
                <span dangerouslySetInnerHTML={{__html:data["subheading_third"]}} />
                <ul className="bullet-style5">
                  <span dangerouslySetInnerHTML={{__html:data["subheading_third_bullets"]}} />
                </ul>
              </div>
              <div className="col-md-4">
              {data.image_third_url  && (
                <div className="image">
                  <img  
                    src={data.image_third_url}
                    alt={data.page_title}
                  />
                </div>
                )}

                {data.image_third_url_2  && (
                  <div className="image_2">
                    <img  
                      src={data.image_third_url_2}
                      alt={data.page_title}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {data.heading_sixth  && (
        <section className="ormsec3">
          <div className="image" style={{backgroundImage: "url(" + `${data.sixth_image_url}` + ")",display:"center"}}></div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-8 green-bg">
                <div className="inner">
                  <h2 className="title text-white"><span dangerouslySetInnerHTML={{__html:data["heading_sixth"]}} /></h2>
                  <p className="mb-0">
                    <span dangerouslySetInnerHTML={{__html:data["subheading_sixth"]}} />
                  </p>
                  <ul className="bullet-style2">
                    <span dangerouslySetInnerHTML={{__html:data["subheading_sixth_bullets"]}} />
                  </ul>
                  <p className="mb-0">
                    <span dangerouslySetInnerHTML={{__html:data["subheading_sixth_second"]}} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {data.heading_seventh  && (
        <section className="ormsec2">
          <div className="container pos-rel">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h2 className="title"><span dangerouslySetInnerHTML={{__html:data["heading_seventh"]}} /></h2>
                <p className="mb-0">
                  <span dangerouslySetInnerHTML={{__html:data["subheading_seventh"]}} />
                </p>
                <ul className="bullet-style5">
                  <span dangerouslySetInnerHTML={{__html:data["subheading_seventh_bullets"]}} />
                </ul>
              </div>
              <div className="col-md-4">
                <div className="image">
                  <img
                    src={data.image_seventh_url}
                    alt="SEO Optimization Services"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      { data.heading_fourth && (
        <section className="fullsersec" style={{ background: `url(${data.image_fourth_url})` }}>
          <div className="container pos-rel text-center">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h2 className="title text-white">{data.heading_fourth}</h2>
                <h3 className="subtitle2 text-white" />
              </div>
              <div className="col-md-11">
                  <span dangerouslySetInnerHTML={{__html:data["subheading_fourth"]}} />
              </div>
            </div>
          </div>
        </section>
      )}


      { data.heading_tenth && (
        <section className="ormsec2">
          <div className="container pos-rel">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h2 className="title">{data.heading_tenth}</h2>
                <p className="mb-0">
                  <span dangerouslySetInnerHTML={{__html:data["tenth_desc"]}} />
                </p> 
              </div>
              <div className="col-md-4">
                <div className="image">
                  <img src={data.tenth_img} alt="SEO CONSULTING FIRM" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {data.box_subheading_eighth_one  && (
        <section className="fullsersec2 green-bg">
          <div className="container text-center">
            <h2 className="title text-white"><span dangerouslySetInnerHTML={{__html:data["heading_eighth"]}} /></h2>
            <p><span dangerouslySetInnerHTML={{__html:data["subheading_eighth"]}} /></p>
            <div className="row text-left">

              {data.box_subheading_eighth_one  && (
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                  {data.box_icon_eight_one && (
                    <i className={data.box_icon_eight_one}></i>
                  )}
                  <h4><span dangerouslySetInnerHTML={{__html:data["box_heading_eighth_one"]}} /></h4>
                  <p><span dangerouslySetInnerHTML={{__html:data["box_subheading_eighth_one"]}} /></p>
                </div>
              </div>
              )}

              {data.box_subheading_eighth_two  && (
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                {data.box_icon_eight_two && (
                  <i className={data.box_icon_eight_two}></i>
                )}
                  <h4><span dangerouslySetInnerHTML={{__html:data["box_heading_eighth_two"]}} /></h4>
                  <p><span dangerouslySetInnerHTML={{__html:data["box_subheading_eighth_two"]}} /></p>
                </div>
              </div>
              )}

              {data.box_subheading_eighth_three  && (
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                {data.box_icon_eight_three && (
                  <i className={data.box_icon_eight_three}></i>
                )}
                  <h4><span dangerouslySetInnerHTML={{__html:data["box_heading_eighth_three"]}} /></h4>
                  <p><span dangerouslySetInnerHTML={{__html:data["box_subheading_eighth_three"]}} /></p>
                </div>
              </div>
              )}

              {data.box_subheading_eighth_four  && (
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                {data.box_icon_eight_four && (
                  <i className={data.box_icon_eight_four}></i>
                )}
                  <h4><span dangerouslySetInnerHTML={{__html:data["box_heading_eighth_four"]}} /></h4>
                  <p><span dangerouslySetInnerHTML={{__html:data["box_subheading_eighth_four"]}} /></p>
                </div>
              </div>
              )}

              {data.box_subheading_eighth_five  && (
              <div className="col-md-6 topmarg-30">
                <div className="inner">
                {data.box_icon_eight_five && (
                  <i className={data.box_icon_eight_five}></i>
                )}
                  <h4><span dangerouslySetInnerHTML={{__html:data["box_heading_eighth_five"]}} /></h4>
                  <p><span dangerouslySetInnerHTML={{__html:data["box_subheading_eighth_five"]}} /></p>
                </div>
              </div>
              )}
            </div>
          </div>
        </section>
      )}

      {data.heading_ninth  && (
        <section className="ormsec4">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="title">{data.heading_ninth}</h2>
                <p className="mb-0 paragraph"><span dangerouslySetInnerHTML={{__html:data["subheading_ninth"]}} /></p>
              </div>
            </div>
          </div>
        </section>
      )}

      <Services data={data.services}/>

      <CreativeWork/>

      <HappyClients/>

      <ContactSection/>
    </div>
  )
}
