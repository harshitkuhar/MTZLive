"use client";
import SeoAccordion from "./accordion & mobile table/SeoAccordion";
import Seomobiletable from "./accordion & mobile table/Seomobiletable";
import SmoAccordion from "./accordion & mobile table/SmoAccordion";
import Smomobiletable from "./accordion & mobile table/Smomobiletable";
import GmbAccordion from "./accordion & mobile table/gmbAccordion";
import Gmbmobiletable from "./accordion & mobile table/Gmbmobiletable";
import OrmAccordion from "./accordion & mobile table/OrmAccordion";
import PpcAccordion from "./accordion & mobile table/PpcAccordion";
import AsoAccordion from "./accordion & mobile table/AsoAccordion";
import Ormmobiletable from "./accordion & mobile table/Ormmobiletable";
import Ppcmobiletable from "./accordion & mobile table/Ppcmobiletable";
import Asomobiletable from "./accordion & mobile table/Asomobiletable";

export default function Pricetable({ data }) {
  const results = data.plan;
  const slug = data.slug;

  const isSeoPackagePage = slug === "/seo-packages.php";
  const isSmoPackagePage = slug === "/smo-packages.php";
  const isGmbPackagePage = slug === "/local-seo-packages.php";
  const isOrmPackagePage = slug === "/orm-packages.php";
  const isPpcPackagePage = slug === "/ppc-packages.php";
  const isAsoPackagePage = slug === "/aso-packages.php";

  return (
    <>
      <div className="container-fluid mt-50 hide-768">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive tb-top">
              <table className="bs-pricing-table-two text-center">
                <thead>
                  <tr>
                    {results.map((result) => (
                      <th className="col-20" key={result.number}>
                        <div className="bs-pricing-item">
                          <div className="bs-icon">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: result["img"],
                              }}
                            />
                          </div>
                          <div className="head ">
                            <div className="price-title">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: result["title"],
                                }}
                              />
                            </div>
                            <div className="price">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: result["price"],
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {['keyword', 'platform', 'proposed'].map((key) => (
                    <tr key={key}>
                      {results.some(result => result[key]) && (
                        <>
                          {results.map(result => (
                            <td className="col-20" key={result.number}>
                              <h6>
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: result[key],
                                  }}
                                />
                              </h6>
                            </td>
                          ))}
                        </>
                      )}
                    </tr>
                  ))}
                  <tr>
                    {results.map((result) => (
                      <td className="col-20" key={result.number}>
                        <span
                          dangerouslySetInnerHTML={{ __html: result["paybtn"] }}
                        />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-12 pkg-dlist">
            {isSeoPackagePage && <SeoAccordion />}
            {isSmoPackagePage && <SmoAccordion />}
            {isGmbPackagePage && <GmbAccordion />}
            {isOrmPackagePage && <OrmAccordion />}
            {isPpcPackagePage && <PpcAccordion />}
            {isAsoPackagePage && <AsoAccordion />}

            <div className="card border-top-0">
              <div className="card-body">
                <div className="table-responsive">
                  <table cellPadding={0} cellSpacing={0} className="pkg-dtable">
                    <tbody>
                      <tr>
                        {results.map((result) => (
                          <td className="col-20" key={result.number}>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: result["paybtn2"],
                              }}
                            />
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSeoPackagePage && <Seomobiletable />}
      {isSmoPackagePage && <Smomobiletable />}
      {isGmbPackagePage && <Gmbmobiletable />}
      {isOrmPackagePage && <Ormmobiletable />}
      {isPpcPackagePage && <Ppcmobiletable/>}
      {isAsoPackagePage && <Asomobiletable/>}



    </>
  );
}
