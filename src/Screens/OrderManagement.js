import React from "react";
import FooterScreen from "./FooterScreen";
import Header2 from "./Header2";

const OrderManagement = () => {
  return (
    <>
      <Header2 />
      {/* <!-- Colored Gradient --> */}
      <section className="page-hero oms">
        <div className="bg"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-content-row row">
              <div className="col-md-5" data-appear-sequential>
                <div className="inner">
                  <strong className="page-title">OMS</strong>

                  <h2>Streamline order management</h2>

                  <div className="sub-heading">
                    <p>
                      Fulfill orders with speed, accuracy, and efficiency on
                      fabric OMS.
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
              <div className="col-md-offset-1 col-md-6">
                <div className="hero-img" data-appear-fade-in>
                  <div className="holder" style={{ maxWidth: "582px" }}>
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                      className="attachment-xl"
                      alt="OMS_2x"
                      data-lazy-src="../wp-content/uploads/2022/02/OMS_2x.png"
                    />
                    <noscript>
                      <img
                        src="../wp-content/uploads/2022/02/OMS_2x.png"
                        className="attachment-xl"
                        alt="OMS_2x"
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
            <div className="col-sm-7">
              <div className="in-wrap">
                <h2>
                  Enable <span>omnichannel fulfillment</span>
                </h2>
                <p>
                  Grow your business by connecting demand and inventory across
                  multiple stores, sales channels, and online marketplaces.
                  Support modern fulfillment methods such as buy online pick up
                  in-store (BOPIS) with ease.
                </p>
              </div>
            </div>{" "}
            <div className="col-sm-5">
              <div className="img-wrap">
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                  className="attachment-large"
                  alt="oms-1"
                  data-lazy-src="../wp-content/uploads/2022/02/oms-1-1024x923.png"
                />
                <noscript>
                  <img
                    src="../wp-content/uploads/2022/02/oms-1-1024x923.png"
                    className="attachment-large"
                    alt="oms-1"
                  />
                </noscript>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Media Simple --> */}
      <section className="media-block-1 has-bg-white">
        <div className="container">
          <div className="row" data-appear-sequential>
            <div className="col-sm-5">
              <div className="img-wrap">
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                  className="attachment-large"
                  alt="oms-2"
                  data-lazy-src="../wp-content/uploads/2022/02/oms-2-1024x902.png"
                />
                <noscript>
                  <img
                    src="../wp-content/uploads/2022/02/oms-2-1024x902.png"
                    className="attachment-large"
                    alt="oms-2"
                  />
                </noscript>{" "}
              </div>
            </div>{" "}
            <div className="col-sm-7">
              <div className="in-wrap">
                <h2>
                  Improve <span>inventory and demand accuracy</span>
                </h2>
                <p>
                  Predict demand and accurately forecast inventory. Avoid
                  understocking and last minute order rushes with pre-ordering.
                  Manage stock levels in real time by replenishing low stocks.
                  Improve margins by increasing sellable units through
                  back-order yields.
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
                  Deliver a <span>frictionless buying experience</span>
                </h2>
                <p>
                  Improve conversions by offering custom cart recommendations,
                  order tracking, and easy returns.
                </p>
              </div>
            </div>{" "}
            <div className="col-sm-5">
              <div className="img-wrap">
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                  className="attachment-large"
                  alt="oms-3"
                  data-lazy-src="../wp-content/uploads/2022/02/oms-3-987x1024.png"
                />
                <noscript>
                  <img
                    src="../wp-content/uploads/2022/02/oms-3-987x1024.png"
                    className="attachment-large"
                    alt="oms-3"
                  />
                </noscript>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Media Simple --> */}
      <section className="media-block-1 has-bg-white">
        <div className="container">
          <div className="row" data-appear-sequential>
            <div className="col-sm-5">
              <div className="img-wrap">
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                  className="attachment-large"
                  alt="oms-4"
                  data-lazy-src="../wp-content/uploads/2022/02/oms-4-1024x1013.png"
                />
                <noscript>
                  <img
                    src="../wp-content/uploads/2022/02/oms-4-1024x1013.png"
                    className="attachment-large"
                    alt="oms-4"
                  />
                </noscript>{" "}
              </div>
            </div>{" "}
            <div className="col-sm-7">
              <div className="in-wrap">
                <h2>
                  Easily plug into your <span>existing systems</span>
                </h2>
                <p>
                  Easily integrate with your favorite applications with
                  fabric&#8217;s open, API-first architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Two Column List --> */}

      <section className="factors bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="row cols-wrap" data-appear-sequential>
                <div className="col-sm-6">
                  <div className="icon-wrap">
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2049%2048'%3E%3C/svg%3E"
                      className="attachment-xl"
                      alt="inventory icon"
                      height="48"
                      width="49"
                      data-lazy-src="../wp-content/uploads/2022/02/inventory-icon-1.svg"
                    />
                    <noscript>
                      <img
                        src="../wp-content/uploads/2022/02/inventory-icon-1.svg"
                        className="attachment-xl"
                        alt="inventory icon"
                        height="48"
                        width="49"
                      />
                    </noscript>{" "}
                  </div>

                  <h3>Inventory availability</h3>

                  <p>
                    Segment stocks, preorder/backorder, manage inventory buffers
                    and alerts, automate restocking, configure update rules,
                    forecast availability, schedule restocking, and rate
                    suppliers.
                  </p>
                </div>

                <div className="col-sm-6">
                  <div className="icon-wrap">
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2049%2048'%3E%3C/svg%3E"
                      className="attachment-xl"
                      alt="flexible icon"
                      height="48"
                      width="49"
                      data-lazy-src="../wp-content/uploads/2022/02/flexible-icon-1.svg"
                    />
                    <noscript>
                      <img
                        src="../wp-content/uploads/2022/02/flexible-icon-1.svg"
                        className="attachment-xl"
                        alt="flexible icon"
                        height="48"
                        width="49"
                      />
                    </noscript>{" "}
                  </div>

                  <h3>Multichannel fulfillment</h3>

                  <p>
                    Increase sell-through rate, staff productivity, reduce
                    stock-outs, configure exception handling, and manage orders
                    based on your custom rules.
                  </p>
                </div>

                <div className="col-sm-6">
                  <div className="icon-wrap">
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2049%2048'%3E%3C/svg%3E"
                      className="attachment-xl"
                      alt="Experience icon"
                      height="48"
                      width="49"
                      data-lazy-src="../wp-content/uploads/2022/02/Experience-icon-1.svg"
                    />
                    <noscript>
                      <img
                        src="../wp-content/uploads/2022/02/Experience-icon-1.svg"
                        className="attachment-xl"
                        alt="Experience icon"
                        height="48"
                        width="49"
                      />
                    </noscript>{" "}
                  </div>

                  <h3>Distributed order management</h3>

                  <p>
                    Optimize fulfillment cost using insights from inventory,
                    logistics, and warehouse. Configure business rules to pick
                    from the store, distribution center, warehouse, or third
                    party.
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

                  <h3>Multichannel inventory</h3>

                  <p>
                    The event-driven architecture notifies storefronts of
                    inventory position changes within milliseconds. Fastest
                    Inventory API responses in the industry to display Available
                    to Promise stock.
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

                  <h3>Estimated delivery date</h3>

                  <p>
                    Enhanced estimated delivery date predictions use fulfillment
                    &amp; shipment SLAs, inventory buffers, geo conditions, and
                    warehouse capacity.
                  </p>
                </div>

                <div className="col-sm-6">
                  <div className="icon-wrap">
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2049%2048'%3E%3C/svg%3E"
                      className="attachment-xl"
                      alt="Automate icon"
                      height="48"
                      width="49"
                      data-lazy-src="../wp-content/uploads/2022/02/Automate-icon-1.svg"
                    />
                    <noscript>
                      <img
                        src="../wp-content/uploads/2022/02/Automate-icon-1.svg"
                        className="attachment-xl"
                        alt="Automate icon"
                        height="48"
                        width="49"
                      />
                    </noscript>{" "}
                  </div>

                  <h3>Automatic compliance</h3>

                  <p>
                    Track warehouse and carrier performance so that exceptions
                    notify in real-time and occur less often with an estimated
                    delivery date.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CTA Bar --> */}
      <section className="ready bg-grad">
        <div className="container" data-appear-sequential>
          <p>Learn more about our order management system.</p>

          <ul className="hero-btns-list">
            <li>
              <a href="#modal-request-demo" className="btn btn-white btn-sm">
                Request Demo
              </a>
            </li>
            <li>
              <a
                href="../docs/openapi/oms/reference/index.html"
                className="btn btn-black btn-sm"
              >
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

export default OrderManagement;
