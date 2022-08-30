import React from "react";
import FooterScreen from "./FooterScreen";
import Header2 from "./Header2";

const Offers = () => {
  return (
    <>
      <Header2 />

      {/* -- Colored Gradient --*/}
      <section className="page-hero marketplace">
        <div className="bg"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-content-row row">
              <div className="col-md-6" data-appear-sequential>
                <div className="inner">
                  <strong className="page-title">Offers</strong>

                  <h2>Simplify pricing and promotions</h2>

                  <div className="sub-heading">
                    <p>
                      <span style={{ fontWeight: "400" }}>
                        Improve your average order value and conversion rate
                        with fabric’s flexible pricing and promotions engine.
                      </span>
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
                  <div className="holder" style={{ maxWidth: "642px" }}>
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                      className="attachment-xl"
                      alt="customizable pricing and promotion software"
                      data-lazy-src="../wp-content/uploads/2022/02/Offers_2x.png"
                    />
                    <noscript>
                      <img
                        src="../wp-content/uploads/2022/02/Offers_2x.png"
                        className="attachment-xl"
                        alt="customizable pricing and promotion software"
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

      {/* <!-- Media Simple 1 --> */}
      <section className="media-block-1 has-bg-white">
        <div className="container">
          <div className="row" data-appear-sequential>
            <div className="col-sm-5">
              <div className="img-wrap">
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                  className="attachment-large"
                  alt="offers_run promotions that convert"
                  data-lazy-src="../wp-content/uploads/2022/02/offers_run-promotions-that-convert-928x1024.png"
                />
                <noscript>
                  <img
                    src="../wp-content/uploads/2022/02/offers_run-promotions-that-convert-928x1024.png"
                    className="attachment-large"
                    alt="offers_run promotions that convert"
                  />
                </noscript>{" "}
              </div>
            </div>{" "}
            <div className="col-sm-7">
              <div className="in-wrap">
                <h2>
                  Run <span>promotions that convert</span>
                </h2>
                <p>
                  <span style={{ fontWeight: "400" }}>
                    Convert visitors into buyers by personalizing your
                    promotions. Create promotions based on sku, quantity, order
                    value, and buy/get criteria. Create inclusion and exclusion
                    lists. Schedule seasonal promotions. Automatically apply the
                    best available promotional price.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Media Simple2 --> */}
      <section className="media-block-1 has-bg-gray">
        <div className="container">
          <div className="row" data-appear-sequential>
            <div className="col-sm-7">
              <div className="in-wrap">
                <h2>
                  Create and <span>manage coupons</span>
                </h2>
                <p>
                  <span style={{ fontWeight: " 400" }}>
                    Enable customer coupons at checkout. Create single or
                    multiple use coupons for returning customers. Define coupon
                    eligibility, stacking, and usage rules. Schedule seasonal
                    coupons.
                  </span>
                </p>
              </div>
            </div>{" "}
            <div className="col-sm-5">
              <div className="img-wrap">
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                  className="attachment-large"
                  alt="offers_create and manage coupons"
                  data-lazy-src="../wp-content/uploads/2022/02/offers_create-and-manage-coupons-743x1024.png"
                />
                <noscript>
                  <img
                    src="../wp-content/uploads/2022/02/offers_create-and-manage-coupons-743x1024.png"
                    className="attachment-large"
                    alt="offers_create and manage coupons"
                  />
                </noscript>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Two Column List --> */}

      <section className="factors ">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="row cols-wrap" data-appear-sequential>
                <div className="col-sm-6">
                  <div className="icon-wrap">
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2049%2049'%3E%3C/svg%3E"
                      className="attachment-xl"
                      alt="Customer icon"
                      height="49"
                      width="49"
                      data-lazy-src="../wp-content/uploads/2022/02/Customer-icon-2.svg"
                    />
                    <noscript>
                      <img
                        src="../wp-content/uploads/2022/02/Customer-icon-2.svg"
                        className="attachment-xl"
                        alt="Customer icon"
                        height="49"
                        width="49"
                      />
                    </noscript>{" "}
                  </div>

                  <h3>Customer segmentation</h3>

                  <p>
                    <span style={{ fontWeight: "400" }}>
                      Define customer segments and offer segment-based
                      discounts. Create price lists for special account-based
                      pricing.
                    </span>
                  </p>
                </div>

                <div className="col-sm-6">
                  <div className="icon-wrap">
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2049%2049'%3E%3C/svg%3E"
                      className="attachment-xl"
                      alt="Platform icon"
                      height="49"
                      width="49"
                      data-lazy-src="../wp-content/uploads/2022/02/Platform-icon-1.svg"
                    />
                    <noscript>
                      <img
                        src="../wp-content/uploads/2022/02/Platform-icon-1.svg"
                        className="attachment-xl"
                        alt="Platform icon"
                        height="49"
                        width="49"
                      />
                    </noscript>{" "}
                  </div>

                  <h3>Promotion stacking</h3>

                  <p>
                    <span style={{ fontWeight: "400" }}>
                      Build stacking rules and use multiple promos on the same
                      product for different campaigns without bleeding margins.
                    </span>
                  </p>
                </div>

                <div className="col-sm-6">
                  <div className="icon-wrap">
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2049%2048'%3E%3C/svg%3E"
                      className="attachment-xl"
                      alt="Speed icon"
                      height="48"
                      width="49"
                      data-lazy-src="../wp-content/uploads/2022/02/Speed-icon-1.svg"
                    />
                    <noscript>
                      <img
                        src="../wp-content/uploads/2022/02/Speed-icon-1.svg"
                        className="attachment-xl"
                        alt="Speed icon"
                        height="48"
                        width="49"
                      />
                    </noscript>{" "}
                  </div>

                  <h3>Price & promotion scheduling</h3>

                  <p>
                    <span style={{ fontWeight: "400" }}>
                      Set and schedule new prices, promotions, and coupons to
                      align with marketing campaigns.
                    </span>
                  </p>
                </div>

                <div className="col-sm-6">
                  <div className="icon-wrap">
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2049%2048'%3E%3C/svg%3E"
                      className="attachment-xl"
                      alt="Configure icon"
                      height="48"
                      width="49"
                      data-lazy-src="../wp-content/uploads/2022/02/Configure-icon-1.svg"
                    />
                    <noscript>
                      <img
                        src="../wp-content/uploads/2022/02/Configure-icon-1.svg"
                        className="attachment-xl"
                        alt="Configure icon"
                        height="48"
                        width="49"
                      />
                    </noscript>{" "}
                  </div>

                  <h3>Bulk price uploads</h3>

                  <p>
                    <span style={{ fontWeight: "400" }}>
                      Quickly set up price, clearance price, and item cost by
                      uploading a CSV file.
                    </span>
                  </p>
                </div>

                <div className="col-sm-6">
                  <div className="icon-wrap">
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2049%2048'%3E%3C/svg%3E"
                      className="attachment-xl"
                      alt="Fullfilment icon"
                      height="48"
                      width="49"
                      data-lazy-src="../wp-content/uploads/2022/02/Fullfilment-icon-1.svg"
                    />
                    <noscript>
                      <img
                        src="../wp-content/uploads/2022/02/Fullfilment-icon-1.svg"
                        className="attachment-xl"
                        alt="Fullfilment icon"
                        height="48"
                        width="49"
                      />
                    </noscript>{" "}
                  </div>

                  <h3>Shipping discounts</h3>

                  <p>
                    <span style={{ fontWeight: "400" }}>
                      Meet market demands for free and low-cost shipping with
                      promos while optimizing your fulfillment strategy.
                    </span>
                  </p>
                </div>

                <div className="col-sm-6">
                  <div className="icon-wrap">
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2049%2049'%3E%3C/svg%3E"
                      className="attachment-xl"
                      alt="Reward icon"
                      height="49"
                      width="49"
                      data-lazy-src="../wp-content/uploads/2022/02/Reward-icon-1.svg"
                    />
                    <noscript>
                      <img
                        src="../wp-content/uploads/2022/02/Reward-icon-1.svg"
                        className="attachment-xl"
                        alt="Reward icon"
                        height="49"
                        width="49"
                      />
                    </noscript>{" "}
                  </div>

                  <h3>Global exclusions</h3>

                  <p>
                    <span style={{ fontWeight: "400" }}>
                      Exclude low-margin or high-demand, limited-supply products
                      from any promotional campaign.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- FAQ --> */}
      <section className="faq-row">
        <div className="container">
          <div className="row" data-appear-sequential>
            <div className="col-sm-6">
              <h1>FAQs</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="faq-section">
        <div className="container" data-appear-sequential>
          <ul className="accordion" data-accordion>
            <li>
              <a href="#" className="h4 opener" data-more>
                Do you need pricing and promotions software?{" "}
              </a>
              <div className="slide">
                <p>
                  You compete in a market where customers are looking for the
                  best value of the product they purchase. Pricing, coupons, and
                  promotions are critical factors for encouraging customers to
                  make purchase decisions. If you are still manually setting the
                  price of a product with spreadsheets and struggling to give
                  customers attractive coupons and promotions, fabric Offers is
                  for you.
                </p>
              </div>
            </li>
            <li>
              <a href="#" className="h4 opener" data-more>
                What types of promotions does fabric support?{" "}
              </a>
              <div className="slide">
                <p>
                  fabric supports three promotion types: 1) a percent off or
                  amount off (discount) for SKUs or groups of SKUs with certain
                  attributes and within certain categories, 2) a discount for a
                  minimum cart value, and 3) a discount for a minimum cart
                  quantity. For promotion types related to minimum cart values
                  and quantities, you can implement multiple tiers such as 10%
                  off minimum cart values of $1000 and 20% off minimum cart
                  values of $1500.
                </p>
              </div>
            </li>
            <li>
              <a href="#" className="h4 opener" data-more>
                What types of prices does fabric support?{" "}
              </a>
              <div className="slide">
                <p>
                  fabric supports four price types: 1) cost, or the amount paid
                  to procure an item, 2) price, or the selling price of an item,
                  3) clearance price, or the lowest selling price offered for an
                  item, and 4) promotional price, or the discounted prices of an
                  item.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- CTA Bar --> */}
      <section className="ready bg-grad">
        <div className="container" data-appear-sequential>
          <h3>Learn more about our pricing and promotions engine.</h3>

          <ul className="hero-btns-list">
            <li>
              <a
                href="https://knowledgebase.fabric.inc/knowledgebase/offers"
                className="btn btn-black btn-sm"
              >
                Product Docs
              </a>
            </li>
            <li>
              <a href="../docs/index.html" className="btn btn-white btn-sm">
                API Docs
              </a>
            </li>
          </ul>
        </div>
      </section>

      <FooterScreen />
    </>
  );
};

export default Offers;
