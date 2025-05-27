"use client";
export default function Offer_Packages(packages) {
  //console.log(packages);
  const results = packages.data;
  return (
    <div className="row text-left">
      {results.map((result) => (
        <div className="col-md-6 topmarg-30" key={result.num}>
          <div className="inner">
            <span dangerouslySetInnerHTML={{ __html: result["packagelogo"] }} />
            <h4>{result.packagename}</h4>
            <p>{result.packagedesc}</p>
            <ul className="bullet-style3">
              <span dangerouslySetInnerHTML={{ __html: result["offer_bullets"] }} />
              <span dangerouslySetInnerHTML={{__html:result["offer_bullets_add"]}} />
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}