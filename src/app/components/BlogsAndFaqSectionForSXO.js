"use client"
import React from 'react'
import Link from "next/link";
import useSWR from "swr";
import Api from "../../../lib/api";

const fetcher = async (url) => await Api.getApi(url);

export default function BlogsAndFaqSectionForSXO() {

    const { data: blogsApi, error: blogsApiError } = useSWR('/wp-json/wp/v2/posts?categories=181&per_page=4', fetcher);

    if (blogsApiError) return <div>No Data Found!</div>;

    return (
        <section className="bg-white blog-sec">
            <div className="container">
                <div className="row">

                    <div className="col-md-6">
                        <div className="blog">
                            <div className="title-mb">
                                <h2 className="element-subtitle">Blog</h2>
                                <h2 className="title">Latest From our blog</h2>
                            </div>
                            <div>
                                {
                                blogsApi && blogsApi.map((blog)=>(
                                    <div className="blogbox clearfix" key={blog.id}>
                                    <div className="image">
                                        {blog.featured_media_src_url && (
                                        <img src={blog.featured_media_src_url} alt="featured-image"/>
                                        )}
                                    </div>
                                    <div className="btext">
                                        <h4><Link href={blog.link} target="blank">{blog.title.rendered}</Link></h4>
                                        <div className="binfo">
                                        <span className="date"><i className="fi fi-ts-calendar-days"></i>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(blog.date))}</span>
                                        <span className="autour"><i className="fi fi-tr-comment-user"></i>Admin</span>
                                        </div>
                                    </div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                    <div className="faq">
                        <div className="title-mb">
                        <h2 className="element-subtitle">FAQS</h2>
                        <h2 className="title">frequently asked questions</h2>
                        </div>
                        <div>
                        <div id="accordionExample" className="accordion shadow">
                            <div className="card">
                            <div
                                id="headingOne"
                                className="card-header bg-white shadow-sm border-0"
                            >
                                <h6 className="mb-0 font-weight-bold">
                                <a
                                    href="#"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                    className="d-block position-relative text-dark text-uppercase collapsible-link py-2"
                                >
                                    What is Search Experience Optimization (SXO)?
                                </a>
                                </h6>
                            </div>
                            <div
                                id="collapseOne"
                                aria-labelledby="headingOne"
                                data-parent="#accordionExample"
                                className="collapse show"
                            >
                                <div className="card-body p-4">
                                <p className="m-0">
                                    SXO is an advanced approach that combines SEO and UX (User Experience) to ensure visitors not only find your website but also have an engaging and conversion-focused experience once they arrive.
                                </p>
                                </div>
                            </div>
                            </div>
                            <div className="card">
                            <div
                                id="headingTwo"
                                className="card-header bg-white shadow-sm border-0"
                            >
                                <h6 className="mb-0 font-weight-bold">
                                <a
                                    href="#"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                    className="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2"
                                >
                                    How is SXO different from traditional SEO?
                                </a>
                                </h6>
                            </div>
                            <div
                                id="collapseTwo"
                                aria-labelledby="headingTwo"
                                data-parent="#accordionExample"
                                className="collapse"
                            >
                                <div className="card-body p-4">
                                <p className="font-weight-light m-0">
                                    While SEO focuses mainly on ranking and visibility, SXO focuses on both ranking and user satisfaction — ensuring visitors stay longer, engage more, and convert faster.
                                </p>
                                </div>
                            </div>
                            </div>
                            <div className="card">
                            <div
                                id="headingThree"
                                className="card-header bg-white shadow-sm border-0"
                            >
                                <h6 className="mb-0 font-weight-bold">
                                <a
                                    href="#"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                    className="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2"
                                >
                                    Why is SXO important for my business?
                                </a>
                                </h6>
                            </div>
                            <div
                                id="collapseThree"
                                aria-labelledby="headingThree"
                                data-parent="#accordionExample"
                                className="collapse"
                            >
                                <div className="card-body p-4">
                                <p className="font-weight-light m-0">
                                    Even if your website ranks high, poor user experience can lead to high bounce rates and low conversions. SXO ensures that your visitors turn into customers by optimizing the entire journey — from click to conversion.
                                </p>
                                </div>
                            </div>
                            </div>
                            <div className="card">
                            <div
                                id="headingFour"
                                className="card-header bg-white shadow-sm border-0"
                            >
                                <h6 className="mb-0 font-weight-bold">
                                <a
                                    href="#"
                                    data-toggle="collapse"
                                    data-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                    className="d-block position-relative text-dark text-uppercase collapsible-link py-2"
                                >
                                    What elements do you optimize under SXO?
                                </a>
                                </h6>
                            </div>
                            <div
                                id="collapseFour"
                                aria-labelledby="headingFour"
                                data-parent="#accordionExample"
                                className="collapse"
                            >
                                <div className="card-body p-4">
                                <p className="font-weight-light m-0">
                                    We enhance page load speed, mobile responsiveness, content clarity, internal linking, CTAs, and overall website usability — ensuring users find what they need effortlessly.
                                </p>
                                </div>
                            </div>
                            </div>
                            <div className="card">
                            <div
                                id="headingFive"
                                className="card-header bg-white shadow-sm border-0"
                            >
                                <h6 className="mb-0 font-weight-bold">
                                <a
                                    href="#"
                                    data-toggle="collapse"
                                    data-target="#collapseFive"
                                    aria-expanded="false"
                                    aria-controls="collapseFive"
                                    className="d-block position-relative text-dark text-uppercase collapsible-link py-2"
                                >
                                    How do you measure SXO performance?
                                </a>
                                </h6>
                            </div>
                            <div
                                id="collapseFive"
                                aria-labelledby="headingFive"
                                data-parent="#accordionExample"
                                className="collapse"
                            >
                                <div className="card-body p-4">
                                <p className="font-weight-light m-0">
                                    We track key UX metrics like bounce rate, session duration, click-to-conversion ratio, and user engagement to gauge how effectively your site delivers value and drives results.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </section>
    )

}