import Link from "next/link";

export default function Services(services) {
  const results = services.data;
  return (
    <section className="bottomserviecs-sec">
        <div className="container text-center">
            <div className="row">
                <div className="col-md-12 text-center title-mb">
                    <h4 className="element-subtitle text-white">Our Services</h4>
                    <h2 className="title text-white">
                    We Build Brands With Our Best Services
                    </h2>
                </div>
            </div>
            <div className="row mmt-30 text-left">

            {results.map((result)=>(
                <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30" key={result.num}>
                    <div className="intro-ser-col">
                        <Link href={result.link}>
                            <div className="headtl">
                            <div className="icon-box">
                                <span dangerouslySetInnerHTML={{__html:result["serviceicon"]}} />
                            </div>
                            <div className="icon-boxtext">{result.servicename}</div>
                            </div>
                            <div className="icnbox-box-no">{result.num}</div>
                            <p>
                                {result.servicedesc}
                            </p>
                        </Link>
                        <div className="btn-link1">
                            <Link href={result.link}>
                                Read More <i className="fi fi-br-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  )
}