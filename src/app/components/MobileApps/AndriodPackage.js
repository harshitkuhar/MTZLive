"use client";
export default function Packages(packages) {
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
          </div>
        </div>
      ))}
    </div>
  );
}
