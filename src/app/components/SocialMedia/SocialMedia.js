"use client";
import SocialJson from "../../json/socialmedia.json";
import { usePathname } from "next/navigation";
import Services from "../seo/Services";
import ContactSection from "../ContactSection";
import HappyClients from "../HappyClients";
import Link from "next/link";

import { useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";

export default function SocialMedia() {
  const pathName = usePathname();
  const data = SocialJson.find((item) => item.slug === pathName);

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
              <h2 className="title">
                <span
                  dangerouslySetInnerHTML={{ __html: data["heading_first"] }}
                />
              </h2>
              <span dangerouslySetInnerHTML={{ __html: data["paragraph"] }} />

              <h3 className="subtitle">
                <span
                  dangerouslySetInnerHTML={{ __html: data["sub-heading"] }}
                />
              </h3>

              <span dangerouslySetInnerHTML={{ __html: data["sub-paragraph"] }} />

              <span
                dangerouslySetInnerHTML={{
                  __html: data["ios_paragraph_fifth"],
                }}
              />
            </div>
            <div className="col-md-12">
              <span
                dangerouslySetInnerHTML={{
                  __html: data["sub-paragraph_first"],
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="packagessec">
        <div className="container-fluid text-center pos-rel cstm-pd60">
          <h2 className="title text-white">{data.heading_sec2}</h2>
          <div className="psubbox">{data.heading_sub_sec2}</div>
          <div className="row justify-content-center">
            {data.packages.map((packages) => (
              <div className="cstm-col-package mt-3" key={packages.num}>
                <div className="inner">
                  <div className="packagebox">
                    <div className="num">{packages.num}</div>
                    <div className="packagename">{packages.packagename}</div>
                    <div className="packageprice">{packages.packageprice}</div>
                    <div className="btn-link1">
                      <Link href={packages.link}>
                        Select <i className="fi fi-br-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {data.heading_sub_third && (
        <section className="fbsec">
          <div className="container pos-rel">
            <div className="row">
              <div className="col-md-6">
                <h2 className="title">{data.heading_third}</h2>
                <span
                  dangerouslySetInnerHTML={{
                    __html: data["paragraph_third"],
                  }}
                />
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-lg-12 col-md-12 item-grid">
                    <div className="item pinkbg">
                      <h4
                        dangerouslySetInnerHTML={{
                          __html: data["heading_sub_third"],
                        }}
                      />
                      <span
                        dangerouslySetInnerHTML={{
                          __html: data["paragraph_sub_second"],
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {data.paragraph_parallel_third && (
        <section className="fbsec">
          <div className="container pos-rel">
            <div className="row">
              <div className="col-md-6">
                <h2 className="title">{data.heading_third}</h2>
                <h3 className="subtitle2">{data.heading_tw_third}</h3>
                <span
                  dangerouslySetInnerHTML={{
                    __html: data["paragraph_third"],
                  }}
                />
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-lg-6 col-md-6 item-grid">
                    <div className="item greenbg">
                      <h5 className="text-uppercase">
                        {data.green_heading_third}
                      </h5>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: data["paragraph_sub_third"],
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 item-grid">
                    <div className="item pinkbg">
                      <h5 className="text-uppercase">
                        {data.pink_heading_third}
                      </h5>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: data["paragraph_parallel_third"],
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {data.green_paragraph && (
        <section className="fbsec">
          <div className="container pos-rel">
            <div className="row">
              <div className="col-md-4">
                <h2 className="title">{data.heading_third}</h2>
                <span
                  dangerouslySetInnerHTML={{
                    __html: data["paragraph_third"],
                  }}
                />
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-lg-6 col-md-6 item-grid">
                    <div className="item greenbg">
                      <h5 className="text-uppercase">
                        {data.green_heading_third}
                      </h5>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: data["green_paragraph"],
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 item-grid">
                    <div className="item pinkbg">
                      <h5 className="text-uppercase">
                        {data.pink_heading_third}
                      </h5>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: data["pink_paragraph"],
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="ormsec3">
        <div
          className="image"
          style={{
            backgroundImage: `url(${data.image_fourth_url})`,
            backgroundPosition: "center",
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8 green-bg">
              <div className="inner">
                <h2 className="title text-white">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: data["heading_fourth"],
                    }}
                  />
                </h2>
                <span
                  dangerouslySetInnerHTML={{
                    __html: data["paragraph_fourth"],
                  }}
                />
                <h3 className="subtitle2 text-white">
                  {data.heading_sub_fourth}
                </h3>

                <span
                  dangerouslySetInnerHTML={{
                    __html: data["subheading_sixth"],
                  }}
                />

                <ul className="bullet-style2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: data["insta_bullet_style"],
                    }}
                  />
                </ul>

                <span
                  dangerouslySetInnerHTML={{
                    __html: data["paragraph_sub_fourth"],
                  }}
                />

                <ul className="bullet-style2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: data["insta_bullet_style_forth"],
                    }}
                  />
                </ul>

                <span
                  dangerouslySetInnerHTML={{
                    __html: data["paragraph_forth"],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {data.heading_fifth && (
        <section className="ormsec4">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h2 className="title">{data.heading_fifth}</h2>
                <h3 className="subtitle2">{data.heading_sub_fifth}</h3>

                <span
                  dangerouslySetInnerHTML={{ __html: data["paragraph_fifth"] }}
                />
              </div>
              <div className="col-md-4">
                <div className="image">
                  <img
                    src={data.image_fifth_url}
                    alt="Facebook Marketing Agency"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {data.paragraph_sub_fifth && (
        <section
          className="fullsersec"
          style={{
            backgroundImage: `url(${data.image_fifth_url})`,
            backgroundPosition: "center",
          }}
        >
          <div className="container pos-rel text-center">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <h2 className="title text-white">{data.heading_fifthh}</h2>
                <h3 className="subtitle2 text-white"></h3>
              </div>
              <div className="col-md-11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: data["paragraph_sub_fifth"],
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      <Services data={data.services} />

      <HappyClients />

      <ContactSection />
    </div>
  );
}
