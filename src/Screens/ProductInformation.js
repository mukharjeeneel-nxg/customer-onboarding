import React from "react";
import FooterScreen from "./FooterScreen";
import Header2 from "./Header2";

const ProductInformation = () => {
  return (
    <>
      <Header2 />
      {/* <!-- Colored Gradient --> */}
      <section className="page-hero pim">
        <div className="bg"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-content-row row">
              <div className="col-md-6" data-appear-sequential>
                <div className="inner">
                  <strong className="page-title">PIM</strong>

                  <h2>Deliver product experiences that drive sales</h2>

                  <div className="sub-heading">
                    <p>
                      Harness the power of product information to improve your
                      conversion rates with fabric PIM.
                    </p>
                  </div>
                  <ul className="hero-btns-list">
                    <li>
                      <a href="#modal-request-demo" className="btn">
                        Request Demo
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="hero-img" data-appear-fade-in>
                  <div className="holder" style={{maxWidth: "none"}}>
                    <img
                      src="Images/ProductInformation/PIM_hero_2x.png"
                      className="attachment-xl"
                      alt="PIM_hero_2x"
                      data-lazy-src="../wp-content/uploads/2022/02/PIM_hero_2x.png"
                    />
                    <noscript>
                      <img
                        src="../wp-content/uploads/2022/02/PIM_hero_2x.png"
                        className="attachment-xl"
                        alt="PIM_hero_2x"
                      />
                    </noscript>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- <div className="partners-slider-wrap">
        <div className="container">
            <div className="partners style-1" data-appear-fade-in>
                                <div className="partners-slider">

                                        <div className="slide">
                        <img src="https://fabric.inc/wp-content/uploads/2022/02/CB.svg" className="inline-svg" alt="C&amp;B" height="32" width="224" />                    </div>
                                        <div className="slide">
                        <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20194%2030'%3E%3C/svg%3E" className="inline-svg" alt="Honest-logo" height="30" width="194" data-lazy-src="https://fabric.inc/wp-content/uploads/2022/03/Honest-logo.svg" /><noscript><img src="https://fabric.inc/wp-content/uploads/2022/03/Honest-logo.svg" className="inline-svg" alt="Honest-logo" height="30" width="194" /></noscript>                    </div>
                                        <div className="slide">
                        <img src="https://fabric.inc/wp-content/uploads/2022/02/logo-02.svg" className="inline-svg" alt="logo-02" height="25" width="141" />                    </div>
                                        <div className="slide">
                        <img src="https://fabric.inc/wp-content/uploads/2022/02/mcdonalds-gray-2-01.svg" className="inline-svg" alt="mcdonalds gray 2-01" height="45.99" width="97.49" />                    </div>
                                        <div className="slide">
                        <img src="https://fabric.inc/wp-content/uploads/2022/02/chicos-logo-gray-02-01-1.svg" className="inline-svg" alt="chicos-logo-gray-02-01" height="40" width="198" />                    </div>
                                        <div className="slide">
                        <img src="https://fabric.inc/wp-content/uploads/2022/02/rh-restoration-hardware-logo-vector.svg" className="inline-svg" alt="rh-restoration-hardware-logo-vector" height="55" width="92" />                    </div>
                                        <div className="slide">
                        <img src="https://fabric.inc/wp-content/uploads/2022/02/logo-01.svg" className="inline-svg" alt="logo-01" height="49" width="182" />                    </div>
                                        <div className="slide">
                        <img src="https://fabric.inc/wp-content/uploads/2022/02/logo-03.svg" className="inline-svg" alt="logo-03" height="39" width="132" />                    </div>
                                        <div className="slide">
                        <img src="https://fabric.inc/wp-content/uploads/2022/02/logo-04.svg" className="inline-svg" alt="logo-04" height="39" width="196" />                    </div>
                                        <div className="slide">
                        <img src="https://fabric.inc/wp-content/uploads/2022/02/logo-05.svg" className="inline-svg" alt="logo-05" height="55" width="161" />                    </div>
                                    </div>
            </div>
        </div>
    </div>
 --> */}
        <div className="partners-slider-wrap">
          <div className="container">
            <div className="partners style-1" data-appear-fade-in>
              <div className="partners-slider">
                <div className="slide">
                  <img
                    src="../wp-content/uploads/2022/02/CB.svg"
                    className="inline-svg"
                    alt="C&amp;B"
                    height="32"
                    width="224"
                  />{" "}
                </div>
                <div className="slide">
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20194%2030'%3E%3C/svg%3E"
                    className="inline-svg"
                    alt="Honest-logo"
                    height="30"
                    width="194"
                    data-lazy-src="../wp-content/uploads/2022/03/Honest-logo.svg"
                  />
                  <noscript>
                    <img
                      src="../wp-content/uploads/2022/03/Honest-logo.svg"
                      className="inline-svg"
                      alt="Honest-logo"
                      height="30"
                      width="194"
                    />
                  </noscript>{" "}
                </div>
                <div className="slide">
                  <img
                    src="../wp-content/uploads/2022/02/logo-02.svg"
                    className="inline-svg"
                    alt="logo-02"
                    height="25"
                    width="141"
                  />{" "}
                </div>
                <div className="slide">
                  <img
                    src="../wp-content/uploads/2022/02/mcdonalds-gray-2-01.svg"
                    className="inline-svg"
                    alt="mcdonalds gray 2-01"
                    height="45.99"
                    width="97.49"
                  />{" "}
                </div>
                <div className="slide">
                  <img
                    src="../wp-content/uploads/2022/02/chicos-logo-gray-02-01-1.svg"
                    className="inline-svg"
                    alt="chicos-logo-gray-02-01"
                    height="40"
                    width="198"
                  />{" "}
                </div>
                <div className="slide">
                  <img
                    src="../wp-content/uploads/2022/02/rh-restoration-hardware-logo-vector.svg"
                    className="inline-svg"
                    alt="rh-restoration-hardware-logo-vector"
                    height="55"
                    width="92"
                  />{" "}
                </div>
                <div className="slide">
                  <img
                    src="../wp-content/uploads/2022/02/logo-01.svg"
                    className="inline-svg"
                    alt="logo-01"
                    height="49"
                    width="182"
                  />{" "}
                </div>
                <div className="slide">
                  <img
                    src="../wp-content/uploads/2022/02/logo-03.svg"
                    className="inline-svg"
                    alt="logo-03"
                    height="39"
                    width="132"
                  />{" "}
                </div>
                <div className="slide">
                  <img
                    src="../wp-content/uploads/2022/02/logo-04.svg"
                    className="inline-svg"
                    alt="logo-04"
                    height="39"
                    width="196"
                  />{" "}
                </div>
                <div className="slide">
                  <img
                    src="../wp-content/uploads/2022/02/logo-05.svg"
                    className="inline-svg"
                    alt="logo-05"
                    height="55"
                    width="161"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>  
      </section>
      {/* <!-- Media Simple --> */}
      <section className="media-block-1 has-bg-gray">
        <div className="container">
          <div className="row" data-appear-sequential>
            <div className="col-sm-5">
              <div className="img-wrap">
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                  className="attachment-large"
                  alt="A screenshot of the Items section in fabric PIM"
                  data-lazy-src="../wp-content/uploads/2022/02/fabric-product-information-manager-items-section-1024x881.png"
                />
                <noscript>
                  <img
                    src="../wp-content/uploads/2022/02/fabric-product-information-manager-items-section-1024x881.png"
                    className="attachment-large"
                    alt="A screenshot of the Items section in fabric PIM"
                  />
                </noscript>{" "}
              </div>
            </div>{" "}
            <div className="col-sm-7">
              <div className="in-wrap">
                <h2>
                  Launch products <span>faster</span>
                </h2>
                <p>
                  Create, enrich, and manage your product information centrally
                  through connected vendor management and workflow capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Media Simple --> */}
      <section className="media-block-1 has-bg-white">
        <div className="container">
          <div className="row" data-appear-sequential>
            <div className="col-sm-7">
              <div className="in-wrap">
                <h2>
                  Deliver a <span>guided buying experience</span>
                </h2>
                <p>
                  Increase your average order value and share of wallet by
                  offering unlimited choices to your customers in the form of
                  variants, kits and bundles.
                </p>
              </div>
            </div>{" "}
            <div className="col-sm-5">
              <div className="img-wrap">
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                  className="attachment-large"
                  alt="A screenshot of the Bundles section in fabric PIM"
                  data-lazy-src="../wp-content/uploads/2022/02/fabric-product-information-manager-bundles-section-851x1024.png"
                />
                <noscript>
                  <img
                    src="../wp-content/uploads/2022/02/fabric-product-information-manager-bundles-section-851x1024.png"
                    className="attachment-large"
                    alt="A screenshot of the Bundles section in fabric PIM"
                  />
                </noscript>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Media Simple --> */}
      <section className="media-block-1 has-bg-gray">
        <div className="container">
          <div className="row" data-appear-sequential>
            <div className="col-sm-5">
              <div className="img-wrap">
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                  className="attachment-large"
                  alt="A screenshot of the Hierarchies section in fabric PIM"
                  data-lazy-src="../wp-content/uploads/2022/02/fabric-product-information-manager-hierarchies-section-1024x614.png"
                />
                <noscript>
                  <img
                    src="../wp-content/uploads/2022/02/fabric-product-information-manager-hierarchies-section-1024x614.png"
                    className="attachment-large"
                    alt="A screenshot of the Hierarchies section in fabric PIM"
                  />
                </noscript>{" "}
              </div>
            </div>{" "}
            <div className="col-sm-7">
              <div className="in-wrap">
                <h2>
                  Sell through <span>every channel</span>
                </h2>
                <p>
                  Reach customers on your website, marketplaces, social and more
                  effortlessly through built-in connections and intuitive
                  navigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Media Simple --> */}
      <section className="media-block-1 has-bg-gray">
        <div className="container">
          <div className="row" data-appear-sequential>
            <div className="col-sm-7">
              <div className="in-wrap">
                <h2>
                  Plug into your <span>existing systems</span>
                </h2>
                <p>
                  Optimize your digital evolution with our expansive network of
                  leading technology partners.
                </p>
              </div>
            </div>{" "}
            <div className="col-sm-5">
              <div className="img-wrap">
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                  className="attachment-large"
                  alt="A diagram of the integrations for fabric PIM"
                  data-lazy-src="../wp-content/uploads/2022/02/fabric-product-information-manager-integrations-1024x917.png"
                />
                <noscript>
                  <img
                    src="../wp-content/uploads/2022/02/fabric-product-information-manager-integrations-1024x917.png"
                    className="attachment-large"
                    alt="A diagram of the integrations for fabric PIM"
                  />
                </noscript>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterScreen />
    </>
  );
};

export default ProductInformation;
