'use client';
import webJson from "../../json/website.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactSection from "../ContactSection";
import HappyClients from "../HappyClients";
import AuditForm from "./AuditForm";
import WebPortfolioSlider from "../WebPortfolioSlider";
import Services from "./Services";
import Offers from "./Offers";
import Cards from "./Cards";

import { useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";

export default function WebPage() {
    const pathName = usePathname();
    const data = webJson.find((item) => item.slug === pathName);

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
        <div className="innerbanner" style={{ backgroundImage: `url(${data.banner_image_url})` }}>
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
                        {data.page_title}
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
                    <div className="circle" />
                    <div className="circle2" />
                    <div className="image clearfix">
                        <img
                        src={data.image_first_url}
                        alt="Web Development Services"
                        />
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h2 className="title">
                        {data.heading_first}
                    </h2>
                    <span dangerouslySetInnerHTML={{__html:data["subheading_first"]}} />
                </div>
                {data.subheading_first_para && (
                    <div className="col-md-12 mt-30">
                        <span dangerouslySetInnerHTML={{__html:data["subheading_first_para"]}} />
                    </div>
                )}
                </div>
            </div>
        </section>

        <AuditForm/>

        
        {
            pathName != '/logo-designing-service.php' && (
                <WebPortfolioSlider/>
            )
        }
        

        

        {data.image_second_url && (
            <section className="fullsersec" style={{ backgroundImage: `url(${data.image_second_url})` }}>
                <div className="container pos-rel text-center">
                    <div className="row justify-content-center">
                        {data.heading_second && (
                            <div className="col-md-10">
                                <h2 className="title text-white">
                                {data.heading_second}
                                </h2>
                            </div>
                        )}
                        {data.subheading_second && (
                            <div className="col-md-11">
                                <span dangerouslySetInnerHTML={{__html:data["subheading_second"]}} />
                            </div>
                        )}

                        {data.subheading_second_bullets && (
                            <div className="row mmt-20">
                                <div className="col-md-6 mt-30">
                                <span dangerouslySetInnerHTML={{__html:data["subheading_second_bullets"]}} />
                                </div>
                                <div className="col-md-6 text-left mt-30">
                                <span dangerouslySetInnerHTML={{__html:data["subheading_second_para"]}} />
                                </div>
                            </div>
                        )}

                        {data.cards && (
                            <Cards data={data}/>
                        )}

                    </div>
                </div>
            </section>
        )}

        {data.offers_title && (
            <section className="fullsersec2 green-bg">
                <div className="container text-center">
                <h2 className="title text-white">{data.offers_title}</h2>
                {data.offers_desc && ( <p>{data.offers_desc}</p> )}
                <Offers data={data.offers_list} />
                </div>
            </section>
        )}

        <section className="ormsec4">
            <div className="container">
                {data.image_third_url && (
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="title">{data.heading_third}</h2>
                            <span dangerouslySetInnerHTML={{__html:data["subheading_third_bullets"]}} />
                            <span dangerouslySetInnerHTML={{__html:data["subheading_third"]}} />
                        </div>
                        <div className="col-md-4">
                            <div className="image">
                                <img
                                    src={data.image_third_url}
                                    alt="Web Development Services"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {!data.image_third_url && (
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <h2 className="title">{data.heading_third}</h2>
                            <span dangerouslySetInnerHTML={{__html:data["subheading_third"]}} />
                        </div>
                    </div>
                )}
                
            </div>
        </section>

        <Services data={data.services}/>

        <HappyClients/>
        <ContactSection/>
    </div>
  )
}
