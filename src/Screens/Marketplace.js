import React from "react";
import FooterScreen from "./FooterScreen";
import Header2 from "./Header2";

const Marketplace = () => {
  return (
    <>
      <Header2 />
      {/* <!-- Colored Gradient --> */}
      <section className="page-hero marketplace">
        <div className="bg"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-content-row row">
              <div className="col-md-6" data-appear-sequential>
                <div className="inner">
                  <strong className="page-title">Marketplace</strong>

                  <h2>Ignite new revenue streams</h2>

                  <div className="sub-heading">
                    <p>
                      Rapidly launch, operate, and scale curated assortments
                      from an unlimited number of dropship suppliers.
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
                  <div className="holder" style={{ maxWidth: "714px" }}>
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                      className="attachment-xl"
                      alt="Marketplace_2x"
                      data-lazy-src="../wp-content/uploads/2022/02/Marketplace_2x.png"
                    />
                    <noscript>
                      <img
                        src="../wp-content/uploads/2022/02/Marketplace_2x.png"
                        className="attachment-xl"
                        alt="Marketplace_2x"
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
      <section className="media-block-1 has-bg-white">
        <div className="container">
          <div className="row" data-appear-sequential>
            <div className="col-sm-5">
              <div className="img-wrap">
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                  className="attachment-large"
                  alt="Merchant-Products-ProductDetail@2x"
                  data-lazy-src="../wp-content/uploads/2022/02/Merchant-Products-ProductDetail%402x-1024x929.png"
                />
                <noscript>
                  <img
                    src="../wp-content/uploads/2022/02/Merchant-Products-ProductDetail%402x-1024x929.png"
                    className="attachment-large"
                    alt="Merchant-Products-ProductDetail@2x"
                  />
                </noscript>{" "}
              </div>
            </div>{" "}
            <div className="col-sm-7">
              <div className="in-wrap">
                <h2>
                  Deliver best in class <span>customer experiences</span>
                </h2>
                <p>
                  Improve customer retention and acquire new ones with curated
                  products that enhance your brand. Maintain your commitment to
                  customers by ensuring timely, accurate, and available
                  deliveries.
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
                  Integrate seamlessly for the{" "}
                  <span>fastest time-to-market</span>
                </h2>
                <p>
                  Go live with new dropship inventory in days, not months, with
                  end-to-end support for any dropship integrations. Multiply
                  your efficiency and harness the power of modular architecture
                  by connecting to other applications on the fabric Commerce
                  Platform.
                </p>
              </div>
            </div>{" "}
            <div className="col-sm-5">
              <div className="img-wrap">
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                  className="attachment-large"
                  alt="Merchant-Connections-SuppliersList@2x"
                  data-lazy-src="../wp-content/uploads/2022/02/Merchant-Connections-SuppliersList%402x-1024x773.png"
                />
                <noscript>
                  <img
                    src="../wp-content/uploads/2022/02/Merchant-Connections-SuppliersList%402x-1024x773.png"
                    className="attachment-large"
                    alt="Merchant-Connections-SuppliersList@2x"
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
                  alt="group_235567_2_x"
                  data-lazy-src="../wp-content/uploads/2022/02/group_235567_2_x-1024x977.png"
                />
                <noscript>
                  <img
                    src="../wp-content/uploads/2022/02/group_235567_2_x-1024x977.png"
                    className="attachment-large"
                    alt="group_235567_2_x"
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
                  Launch faster, grow bigger, and operate more efficiently by
                  leveraging our expansive network of technology partners.
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
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2049%2049'%3E%3C/svg%3E"
                      className="attachment-xl"
                      alt="Integrate icon"
                      height="49"
                      width="49"
                      data-lazy-src="../wp-content/uploads/2022/02/Integrate-icon-1.svg"
                    />
                    <noscript>
                      <img
                        src="../wp-content/uploads/2022/02/Integrate-icon-1.svg"
                        className="attachment-xl"
                        alt="Integrate icon"
                        height="49"
                        width="49"
                      />
                    </noscript>{" "}
                  </div>

                  <h3>Flexible supplier onboarding</h3>

                  <p>
                    Connect to suppliers via EDI, API, SFTP, ShipStation, or the
                    fabric Marketplace portal to unlock new retail sales
                    channels in days.
                  </p>
                </div>

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

                  <h3>Simplified merchandising</h3>

                  <p>
                    Trade product proposals with suppliers, automate attribute
                    certification, and stay in total control of products and
                    pricing.
                  </p>
                </div>

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

                  <h3>Streamlined order management</h3>

                  <p>
                    Review all orders from a single dashboard and leverage
                    custom reporting on business KPIs.
                  </p>
                </div>

                <div className="col-sm-6">
                  <div className="icon-wrap">
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2049%2048'%3E%3C/svg%3E"
                      className="attachment-xl"
                      alt="Payments icon"
                      height="48"
                      width="49"
                      data-lazy-src="../wp-content/uploads/2022/02/Payments-icon-1.svg"
                    />
                    <noscript>
                      <img
                        src="../wp-content/uploads/2022/02/Payments-icon-1.svg"
                        className="attachment-xl"
                        alt="Payments icon"
                        height="48"
                        width="49"
                      />
                    </noscript>{" "}
                  </div>

                  <h3>Transaction automation</h3>

                  <p>
                    Manage transactions via EDI, API, SFTP, or the fabric
                    Marketplace™ portal to ensure orders are shipped as fast as
                    possible.
                  </p>
                </div>

                <div className="col-sm-6">
                  <div className="icon-wrap">
                    <img
                      src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2049%2048'%3E%3C/svg%3E"
                      className="attachment-xl"
                      alt="Customize icon"
                      height="48"
                      width="49"
                      data-lazy-src="../wp-content/uploads/2022/02/Customize-icon-1.svg"
                    />
                    <noscript>
                      <img
                        src="../wp-content/uploads/2022/02/Customize-icon-1.svg"
                        className="attachment-xl"
                        alt="Customize icon"
                        height="48"
                        width="49"
                      />
                    </noscript>{" "}
                  </div>

                  <h3>Easy invoicing</h3>

                  <p>
                    Handle complex invoicing across multiple suppliers and
                    retailers from a single, intuitive UI.
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

                  <h3>Automated supplier compliance</h3>

                  <p>
                    Invite suppliers, monitor their performance, and ensure
                    compliance with user-friendly tools.
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

                  <h3>Platform integrations</h3>

                  <p>
                    Integrate seamlessly with leading e-commerce platforms or
                    create your own custom experience using dropship APIs.
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

                  <h3>Omnichannel capabilities</h3>

                  <p>
                    Enable curated assortments across all user endpoints without
                    the risk of managing inventory.
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
              <h1>FAQ</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="faq-section">
        <div className="container" data-appear-sequential>
          <ul className="accordion" data-accordion>
            <li>
              <a href="#" className="h4 opener" data-more>
                What is fabric Marketplace?{" "}
              </a>
              <div className="slide">
                <p>
                  fabric Marketplace is a Commerce as a Service (CaaS) solution
                  that enables retailers and suppliers to connect, creating
                  additional streams of revenue for both parties. For retailers,
                  fabric Marketplace is an all-inclusive solution for seamless
                  product assortment expansion via a network of dropship-capable
                  suppliers. For suppliers, fabric Marketplace offers a rapid
                  and friction-free expansion of digital selling channels.
                  fabric Marketplace provides all the technology necessary to
                  drive incremental revenue streams, ensure best-in-class
                  customer experiences, and integrate into any e-commerce stack.
                </p>
              </div>
            </li>
            <li>
              <a href="#" className="h4 opener" data-more>
                What is dropshipping?{" "}
              </a>
              <div className="slide">
                <p>
                  Dropshipping is when a retailer fulfills orders via a
                  third-party supplier who ships products directly to the
                  customer on their behalf. The retailer does not hold inventory
                  of this product and typically the customer is unaware that
                  their product was sourced differently than traditional
                  inventory.
                </p>
              </div>
            </li>
            <li>
              <a href="#" className="h4 opener" data-more>
                Who is fabric Marketplace for?{" "}
              </a>
              <div className="slide">
                <p>
                  fabric Marketplace is an effective way to grow revenue for any
                  business that sells a product. Most companies leverage
                  dropship inventory to complement a traditional e-commerce
                  model, but many companies have grown $100M+ businesses in
                  under 15 months solely through dropship inventory.
                </p>
              </div>
            </li>
            <li>
              <a href="#" className="h4 opener" data-more>
                What are the benefits of dropshipping?{" "}
              </a>
              <div className="slide">
                <p>
                  Dropshipping enables a retailer to grow its revenue through
                  low-risk and low-cost inventory. The time to market for
                  dropship inventory is considerably faster than traditional
                  inventory, which means greater flexibility and time-to-market.
                  Dropshipping products can also be strategically leveraged for
                  heavy and bulky products, reducing supply chain costs and
                  resources. Retailers can expand their product assortment
                  without the upfront investment of manufacturing and massive
                  product orders.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- CTA Bar --> */}
      <section className="ready bg-grad">
        <div className="container" data-appear-sequential>
          <p>Learn more about dropshipping and our marketplace platform.</p>

          <ul className="hero-btns-list">
            <li>
              <a href="#modal-request-demo" className="btn btn-white btn-sm">
                Request Demo
              </a>
            </li>
            <li>
              <a
                href="https://resources.fabric.inc/blog/marketplace"
                className="btn btn-black btn-sm"
              >
                Press Release
              </a>
            </li>
          </ul>
        </div>
      </section>

      <FooterScreen />
    </>
  );
};

export default Marketplace;
