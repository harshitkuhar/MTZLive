"use client";
export default function Offers(offers) {
  //console.log(packages);
  const results = offers.data;
  return (
    <div className="row text-left">
      {results.map((result) => (
        <div className="col-md-6 topmarg-30" key={result.num}>
          <div className="inner">
            <span dangerouslySetInnerHTML={{ __html: result["offersicon"] }} />
            <h4>{result.offersname}</h4>
            <p>{result.offersdesc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}