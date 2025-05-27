'use client'
import { usePathname } from "next/navigation";
import HappyClients from "../HappyClients";
import ContactSection from "../ContactSection";
import AdvertisingJson from "../../json/advertising.json"
import Packages from "./Packages";
import Offer_Packages from "./offer_Packages";
import Link from "next/link";
import Services from "./Services";

import { useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";

export default function AdvertisingPage() {
    const pathName = usePathname();
    const data = AdvertisingJson.find((item) => item.slug === pathName);
    
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
        <div className="innerbanner " style={{ backgroundImage: `url(${data.banner_image_url})`, backgroundPosition: 'center center'}}>
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
        <section className="ormsec1 rmsec">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 clearfix">
                        <div className="simagebox">
                            <div className="circle"></div>
                            <div className="circle2"></div>
                            <div className="image clearfix">
                            <img
                                src={data.image_first_url}
                                alt={data.page_title}
                            />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="title"><span dangerouslySetInnerHTML={{__html:data["heading_first"]}} /></h2>
                        {/* <h3 className="subtitle"><span dangerouslySetInnerHTML={{__html:data["subtitle_first"]}} /></h3> */}
                        <span dangerouslySetInnerHTML={{__html:data["paragraph_first"]}} />
                    </div>
                    <div className="col-md-12">
                        <span dangerouslySetInnerHTML={{__html:data["paragraph_full"]}} />
                    </div>
                </div>
            </div>
        </section>
            
        <Packages data={data.packages} heading={data.packages_heading} subheading={data.packages_subheading} />
            
        <section className="fullsersec" style={{ background: `url(${data.third_banner_image_url})` }}>
            <div className="container pos-rel text-center">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h2 className="title text-white">{data.heading_third}</h2>
                        <h3 className="subtitle2 text-white" />
                    </div>
                        <div className="col-md-11">
                        
                            <span dangerouslySetInnerHTML={{ __html: data["third_paragraph"] }} />
                            <span dangerouslySetInnerHTML={{ __html: data["third_bullets"] }} />
                             <span dangerouslySetInnerHTML={{ __html: data["third_paragraph_end"] }} />
                    </div>
                </div>
            </div>
            </section>  
            
            {data.package_heading && (
                <section className="fullsersec2 green-bg">
                    <div className="container text-center">
                        <h2 className="title text-white">{data.package_heading}</h2>
                        <p className="mt-2">{data.package_para}</p>
                        <Offer_Packages data={data.package_cont} />
                    </div>
                </section>
            )}
            {data.fourth_title && (
            <section className="ormsec4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="title">{data.fourth_title}</h2>
                            <h3 className="subtitle"><span dangerouslySetInnerHTML={{__html:data["fourth_sub_heading"]}} /></h3>
                            <ul className="bullet-style1">
                                <span dangerouslySetInnerHTML={{__html:data["fourth_bullets"]}} />
                            </ul>
                            <span dangerouslySetInnerHTML={{__html:data["fourth_paragraph"]}} />
                            
                            
                        </div>
                        <div className="col-md-4">
                            <div className="image">
                                <img src={data.image_forth_url} alt={data.page_title}/>
                            </div>
                        </div>
                    </div>
                </div>
                </section> 
            )}                
            {data.fifth_title &&(
                <section className="ormsec4">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                                <h2 className="title">{data.fifth_title}</h2>
                                <p> {data.fifth_paragraph}</p>
                        </div>
                    </div>
                    </div>
                </section>
            )}                
              
        <Services data={data.services} />
        <HappyClients/>
        <ContactSection/>
        </div>
    )
}