import React from 'react'
import Link from 'next/link'

const NextGenServices = () => {
  return (
    <section className="bottomserviecs-sec">
        <div className="container text-center">
        <div className="row">
            <div className="col-md-12 text-center title-mb">
            <h4 className="element-subtitle text-white">Our Services</h4>
            <h2 className="title text-white">We Build Brands With Our Best Services</h2>
            </div>
        </div>
        <div className="row mmt-30 text-left">
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
            <div className="intro-ser-col">
                <Link href="artificial-intelligence-optimization.php">
                <div className="headtl">
                    <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                    <div className="icon-boxtext">AIO</div>
                </div>
                <div className="icnbox-box-no">01</div>
                <p>AI tools, chat assistants, voice search, and intelligent summaries....</p>
                </Link><div className="btn-link1"><Link href="artificial-intelligence-optimization.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
            </div> 
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
            <div className="intro-ser-col">
                <Link href="large-language-model-optimization.php">
                <div className="headtl">
                    <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                    <div className="icon-boxtext">LLMO</div>
                </div>
                <div className="icnbox-box-no">02</div>
                <p>Whenever individuals interact with ChatGPT, Gemini, Claude...</p>
                </Link><div className="btn-link1"><Link href="large-language-model-optimization.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
            </div> 
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
            <div className="intro-ser-col">
                <Link href="generative-engine-optimization.php">
                <div className="headtl">
                    <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                    <div className="icon-boxtext">GEO</div>
                </div>
                <div className="icnbox-box-no">03</div>
                <p>The content production in the AI world is evolving rapidly...</p>
                </Link><div className="btn-link1"><Link href="generative-engine-optimization.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
            </div> 
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
            <div className="intro-ser-col">
                <Link href="search-experience-optimization.php">
                <div className="headtl">
                    <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                    <div className="icon-boxtext">SXO</div>
                </div>
                <div className="icnbox-box-no">04</div>
                <p>It is not sufficient to be ranked high in search results anymore...</p>
                </Link><div className="btn-link1"><Link href="search-experience-optimization.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
            </div> 
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
            <div className="intro-ser-col">
                <Link href="answer-engine-optimization.php">
                <div className="headtl">
                    <div className="icon-box"><i className="fi fi-ts-bullseye-arrow" /></div>
                    <div className="icon-boxtext">AEO</div>
                </div>
                <div className="icnbox-box-no">05</div>
                <p>Search is no longer just about ranking. People are posing direct queries...</p>
                </Link><div className="btn-link1"><Link href="answer-engine-optimization.php">Read More<span className="flaticon-right-arrow" /></Link></div> 
            </div> 
            </div>  
        </div>
        </div>
    </section>
  )
}

export default NextGenServices