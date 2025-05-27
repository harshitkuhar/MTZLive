'use client'
import React from 'react'
// import { currencyConvertor } from "../components/CurrencyConverter";
import Link from 'next/link';

const PackageSection = () => {
  return (
    <>
        <section className="packagessec">
            <div className="container-fluid text-center pos-rel cstm-pd60">
            <h2 className="title text-white">Our eCommerce SEO Services Packages</h2>
            <div className="psubbox">HIGH QUALITY eCommerce SEO Services SOLUTIONS FOR BUSINESSES</div>
            <div className="row">
                <div className="cstm-col-package mt-3">
                <div className="inner">
                    <div className="packagebox">
                    <div className="num">01</div>
                    <div className="packagename">SEO STARTER</div>
                    <div className="packageprice">$349</div>
                    <div className="btn-link1"><Link href="seo-packages.php">Select<span className="flaticon-right-arrow" /></Link></div>
                    </div>
                </div>
                </div>
                <div className="cstm-col-package mt-3">
                <div className="inner">
                    <div className="packagebox">
                    <div className="num">02</div>
                    <div className="packagename">SEO BOOSTER</div>
                    <div className="packageprice">$599</div>
                    <div className="btn-link1"><Link href="seo-packages.php">Select<span className="flaticon-right-arrow" /></Link></div>
                    </div>
                </div>
                </div>
                <div className="cstm-col-package mt-3">
                <div className="inner">
                    <div className="packagebox">
                    <div className="num">03</div>
                    <div className="packagename">SEO SPEED</div>
                    <div className="packageprice">$999</div>
                    <div className="btn-link1"><Link href="seo-packages.php">Select<span className="flaticon-right-arrow" /></Link></div>
                    </div>
                </div>
                </div>
                <div className="cstm-col-package mt-3">
                <div className="inner">
                    <div className="packagebox">
                    <div className="num">04</div>
                    <div className="packagename">SEO EDGE</div>
                    <div className="packageprice">$1299</div>
                    <div className="btn-link1"><Link href="seo-packages.php">Select<span className="flaticon-right-arrow" /></Link></div>
                    </div>
                </div>
                </div>
                <div className="cstm-col-package mt-3">
                <div className="inner">
                    <div className="packagebox">
                    <div className="num">05</div>
                    <div className="packagename">SEO PRIME</div>
                    <div className="packageprice">$1499</div>
                    <div className="btn-link1"><Link href="seo-packages.php">Select<span className="flaticon-right-arrow" /></Link></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default PackageSection