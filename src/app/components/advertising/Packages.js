"use_client"
import Link from "next/link";

export default function Packages(packages) {
  const results = packages.data;
  

  return (
    <section className="packagessec">
        <div className="container-fluid text-center pos-rel cstm-pd60">
          	<h2 className="title text-white">{packages.heading}</h2>
          	<div className="psubbox">{packages.subheading}</div>
          <div className="row justify-content-center">
            {results.map((result)=>(
              <div className="cstm-col-package mt-3" key={result.num}>
                <div className="inner">
                  <div className="packagebox">
                    <div className="num">{result.num}</div>
                    <div className="packagename">{result.packagename}</div>
                    <div className="packageprice">{result.packageprice}</div>
                    <div className="btn-link1"><Link href={result.link}>Select <i className="fi fi-br-arrow-right"></i></Link></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
	</section>
  )
}