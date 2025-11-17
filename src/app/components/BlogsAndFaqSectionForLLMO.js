"use client"
import React from 'react'
import Link from "next/link";
import useSWR from "swr";
import Api from "../../../lib/api";

const fetcher = async (url) => await Api.getApi(url);

export default function BlogsAndFaqSectionForLLMO() {

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
                                    What is Large Language Model Optimization (LLMO)?
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
                                    LLMO focuses on optimizing your website or content for AI-driven search engines and generative models like ChatGPT, Gemini, and Claude, ensuring your brand appears in AI-generated responses.
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
                                    Why is LLMO important for my business?
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
                                    As AI tools increasingly shape how users find information, LLMO helps your brand stay visible in AI summaries, voice assistants, and conversational search — the next era of SEO.
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
                                    How does LLMO differ from traditional SEO?
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
                                    Traditional SEO focuses on ranking in search engines like Google, while LLMO ensures your content is structured, factual, and relevant for AI models that generate answers, not just links.
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
                                    What type of content is optimized in LLMO?
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
                                    We optimize blogs, product pages, FAQs, and knowledge-based content to ensure they are contextually clear, semantically rich, and easily understood by AI systems.
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
                                    How soon can I expect to see results with LLMO services?
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
                                    Results depend on AI model updates and content quality, but generally, you can expect noticeable improvements in visibility within AI tools and featured snippets within {`1–3`} months.
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