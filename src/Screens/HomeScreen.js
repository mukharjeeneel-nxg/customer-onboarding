import FooterScreen from "./FooterScreen";
import HeaderScreen from "./HeaderScreen";

export default function HomeScreen() {
  return (
    <>
      <HeaderScreen />
      {/**home alt */}
      <section className="page-hero home is-white">
        <div className="bg"></div>
        <div className="hero-content" id="scene-wrapper--hero-wave">
          <canvas id="scene-hero-wave"></canvas>
          <div className="container">
            <div className="hero-content-row row">
              <div className="col-md-6" data-appear-sequential>
                <div className="inner">
                  <h2>The future of commerce</h2>

                  <div className="sub-heading">
                    <p>
                      A modular and headless platform for modern e-commerce
                      experiences
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
                  <div className="holder" style={{ maxWidth: "700px" }}>
                    <img
                      src="http://localhost:3001/element/element-main.svg"
                      className="attachment-xl"
                      alt="Homepage_2x"
                      data-lazy-src="wp-content/uploads/2022/02/Homepage_2x.png"
                    />
                    <noscript>
                      <img
                        src="wp-content/uploads/2022/02/Homepage_2x.png"
                        className="attachment-xl"
                        alt="Homepage_2x"
                      />
                    </noscript>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="partners-slider-wrap">
          <div className="container">
            <div className="partners style-1" data-appear-fade-in>
              <div className="partners-slider">
                <div className="slide">
                  <img
                    src="wp-content/uploads/2022/02/CB.svg"
                    className="inline-svg"
                    alt="C&amp;B"
                    height="32"
                    width="224"
                  />
                </div>
                <div className="slide">
                  <img
                    src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20194%2030'%3E%3C/svg%3E"
                    className="inline-svg"
                    alt="Honest-logo"
                    height="30"
                    width="194"
                    data-lazy-src="wp-content/uploads/2022/03/Honest-logo.svg"
                  />
                  <noscript>
                    <img
                      src="wp-content/uploads/2022/03/Honest-logo.svg"
                      className="inline-svg"
                      alt="Honest-logo"
                      height="30"
                      width="194"
                    />
                  </noscript>
                </div>
                <div className="slide">
                  <img
                    src="wp-content/uploads/2022/02/logo-02.svg"
                    className="inline-svg"
                    alt="logo-02"
                    height="25"
                    width="141"
                  />
                </div>
                <div className="slide">
                  <img
                    src="wp-content/uploads/2022/02/mcdonalds-gray-2-01.svg"
                    className="inline-svg"
                    alt="mcdonalds gray 2-01"
                    height="45.99"
                    width="97.49"
                  />
                </div>
                <div className="slide">
                  <img
                    src="wp-content/uploads/2022/02/chicos-logo-gray-02-01-1.svg"
                    className="inline-svg"
                    alt="chicos-logo-gray-02-01"
                    height="40"
                    width="198"
                  />
                </div>
                <div className="slide">
                  <img
                    src="wp-content/uploads/2022/02/rh-restoration-hardware-logo-vector.svg"
                    className="inline-svg"
                    alt="rh-restoration-hardware-logo-vector"
                    height="55"
                    width="92"
                  />
                </div>
                <div className="slide">
                  <img
                    src="wp-content/uploads/2022/02/logo-01.svg"
                    className="inline-svg"
                    alt="logo-01"
                    height="49"
                    width="182"
                  />
                </div>
                <div className="slide">
                  <img
                    src="wp-content/uploads/2022/02/logo-03.svg"
                    className="inline-svg"
                    alt="logo-03"
                    height="39"
                    width="132"
                  />
                </div>
                <div className="slide">
                  <img
                    src="wp-content/uploads/2022/02/logo-04.svg"
                    className="inline-svg"
                    alt="logo-04"
                    height="39"
                    width="196"
                  />
                </div>
                <div className="slide">
                  <img
                    src="wp-content/uploads/2022/02/logo-05.svg"
                    className="inline-svg"
                    alt="logo-05"
                    height="55"
                    width="161"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/**media block */}
      <article className="bg-white media ">
        <div className="container" data-appear-sequential>
          <div className="heading">
            <h2>
              The future of commerce is <span>headless</span>
            </h2>
          </div>
          <div className="row">
            <div className="img-hold">
              <div className="img">
                <img
                  src="http://localhost:3001/element/element-main.svg"
                  className="attachment-large"
                  alt="CommerceHeadless_2x"
                  data-lazy-src="wp-content/uploads/2022/02/CommerceHeadless_2x-1024x886.jpg"
                />
                <noscript>
                  <img
                    src="http://localhost:3001/element/element-main.svg"
                    className="attachment-large"
                    alt="CommerceHeadless_2x"
                  />
                </noscript>
              </div>
            </div>
            <div className="description" data-appear-sequential>
              <h3>
                Headless means connecting every sales channel (head) to a single
                source with NXG-Ecommerce .
              </h3>

              <ul>
                <li>
                  Connect product, pricing, and order data across every channel.
                </li>
                <li>
                  Create new experiences for new channels with the same data.
                </li>
                <li>Update content for every channel from one place.</li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/**future */}

      <article className="bg-gray media alt">
        <div className="container" data-appear-sequential>
          <div className="heading">
            <h2>
              The future of commerce is <span>flexible</span>
            </h2>
          </div>
          <div className="row">
            <div className="img-hold">
              <div className="img">
                <img
                  src="http://localhost:3001/element/element-main.svg"
                  className="attachment-large"
                  alt="Best Partners Stripe MailChimp PayPal and More"
                  data-lazy-src="wp-content/uploads/2022/02/Partners_2x-1024x812.png"
                />
                <noscript>
                  <img
                    src="http://localhost:3001/element/element-main.svg"
                    className="attachment-large"
                    alt="Best Partners Stripe MailChimp PayPal and More"
                  />
                </noscript>
              </div>
            </div>
            <div className="description" data-appear-sequential>
              <h3>
                Flexible means choosing the technology you need to stay relevant
                and launch fast.
              </h3>

              <ul>
                <li>
                  Use{" "}
                  <a href="commerce-platform/index.html">
                    NXG-Ecommerce commerce platform
                  </a>{" "}
                  or individual{" "}
                  <a href="commerce-apps/index.html">NXG-Ecommerce products</a>.
                </li>
                <li>
                  Connect NXG-Ecommerce with third-party and custom-built
                  technology.
                </li>
                <li>
                  Move away from rigid platforms and patchy integrations with
                  APIs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/**testimonials */}
      <section className="testimonial bg-black">
        <div className="container">
          <div className="row">
            <div className="col-sm-5" data-appear-block>
              <h2>
                The future of commerce is <span>NXG-Ecommerce </span>
              </h2>
            </div>
            <div className="col-sm-7">
              <blockquote data-appear-sequential>
                <q>
                  NXG-Ecommerce's headless architecture supports our strategic,
                  omnichannel architecture methodology. All the functions across
                  the NXG-Ecommerce commerce platform and suite of products can
                  be easily reused on all channels.{" "}
                </q>
                <footer className="blockquote-footer">
                  <div className="avatar">
                    <img
                      src="http://localhost:3001/element/element-main.svg"
                      className="attachment-large"
                      alt="home-img11"
                      data-lazy-src="wp-content/uploads/2022/01/home-img11.png"
                    />
                    <noscript>
                      <img
                        src="wp-content/uploads/2022/01/home-img11.png"
                        className="attachment-large"
                        alt="home-img11"
                      />
                    </noscript>
                  </div>
                  <cite>
                    <span className="name">Scott Saeger</span>
                    CIO @ GNC{" "}
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/*media block list */}
      <article className="media style_02 ">
        <div className="container">
          <div className="heading" data-appear-sequential>
            <h2>
              NXG-Ecommerce is for <span>merchandisers</span>
            </h2>

            <h3>
              Move from spreadsheets to a product and experience management
              platform.
            </h3>
          </div>
          <div className="row" data-appear-sequential>
            <div className="img-hold">
              <div className="img">
                <img
                  src="http://localhost:3001/element/element-main.svg"
                  className="attachment-large"
                  alt="image-1 (1)"
                  data-lazy-src="wp-content/uploads/2022/02/image-1-1-986x1024.png"
                />
                <noscript>
                  <img
                    src="http://localhost:3001/element/element-main.svg"
                    className="attachment-large"
                    alt="image-1 (1)"
                  />
                </noscript>
              </div>
            </div>
            <div className="description">
              <ul>
                <li>
                  Manage product information across all channels with 
                  <a href="pim/index.html">NXG-Ecommerce PIM</a>.
                </li>
                <li>
                  Configure pricing and promos for all products with{" "}
                  <a href="offers/index.html">NXG-Ecommerce Offers</a>.
                </li>
                <li>
                  Increase product assortment through dropshipping with 
                  <a href="marketplace/index.html">NXG-Ecommerce Marketplace</a>
                  .
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/*media block list 2 */}
      <article className="media style_02 ">
        <div className="container">
          <div className="heading" data-appear-sequential>
            <h2>
              NXG-Ecommerce is for <span>operators</span>
            </h2>

            <h3>Move from broken systems to a connected commerce ecosystem.</h3>
          </div>
          <div className="row" data-appear-sequential>
            <div className="img-hold">
              <div className="img">
                <img
                  src="http://localhost:3001/element/element-main.svg"
                  className="attachment-large"
                  alt="image-3 (1)"
                  data-lazy-src="wp-content/uploads/2022/02/image-3-1.png"
                />
                <noscript>
                  <img
                    src="http://localhost:3001/element/element-main.svg"
                    className="attachment-large"
                    alt="image-3 (1)"
                  />
                </noscript>
              </div>
            </div>
            <div className="description">
              <ul>
                <li>
                  Analyze orders and run reports on GMV with 
                  <a href="oms/index.html">NXG-Ecommerce OMS</a>.
                </li>
                <li>
                  Optimize campaigns, content, and experiences with 
                  <a href="xm/index.html">NXG-Ecommerce XM</a>.
                </li>
                <li>
                  Plan and execute any e-commerce initiative from a single
                  system.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* media block list 3 */}
      <article className="media style_02 ">
        <div className="container">
          <div className="heading" data-appear-sequential>
            <h2>
              NXG-Ecommerce is for <span>developers</span>
            </h2>

            <h3>Create a tech stack as demanding as your customers.</h3>
          </div>
          <div className="row" data-appear-sequential>
            <div className="img-hold">
              <div className="img">
                <img
                  src="http://localhost:3001/element/element-main.svg"
                  className="attachment-large"
                  alt="image-2 (1)"
                  data-lazy-src="wp-content/uploads/2022/02/image-2-1-1024x818.png"
                />
                <noscript>
                  <img
                    src="http://localhost:3001/element/element-main.svg"
                    className="attachment-large"
                    alt="image-2 (1)"
                  />
                </noscript>
              </div>
            </div>
            <div className="description">
              <ul>
                <li>
                  Break down monolithic platforms with 
                  <a href="ecommerce-apis/index.html">headless commerce APIs</a>
                  .
                </li>
                <li>Connect, configure, and extend commerce functionality.</li>
                <li>
                  Create experience components for business users with our
                  headless CMS.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* animation text */}
      <section className="get-started bg-black">
        <div className="container">
          <div className="row fabric-slider" data-appear-sequential>
            <div className="col-sm-6">
              <strong className="title">Get started with</strong>
              <div className="fabric-slider-tabs ">
                <div className="slide">NXG-Ecommerce commerce platform</div>
                <div className="slide">NXG-Ecommerce commerce apps</div>
                <div className="slide">NXG-Ecommerce commerce APIs</div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="fabric-slider-content">
                <div className="glow"></div>
                <div className="fabric-slider-slides">
                  <div className="slide">
                    <figure>
                      <div className="slide-image">
                        <img
                          src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                          className="attachment-large"
                          alt="fabric-commerce-1"
                          data-lazy-src="wp-content/uploads/2022/01/fabric-commerce-1-1024x929.png"
                        />
                        <noscript>
                          <img
                            src="wp-content/uploads/2022/01/fabric-commerce-1-1024x929.png"
                            className="attachment-large"
                            alt="fabric-commerce-1"
                          />
                        </noscript>
                      </div>
                      <figcaption>
                        Use our foundational products for a complete and
                        connected commerce solution.{" "}
                      </figcaption>
                    </figure>
                  </div>
                  <div className="slide">
                    <figure>
                      <div className="slide-image">
                        <img
                          src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                          className="attachment-large"
                          alt="fabric-commerce-2"
                          data-lazy-src="wp-content/uploads/2022/01/fabric-commerce-2-1024x768.png"
                        />
                        <noscript>
                          <img
                            src="wp-content/uploads/2022/01/fabric-commerce-2-1024x768.png"
                            className="attachment-large"
                            alt="fabric-commerce-2"
                          />
                        </noscript>
                      </div>
                      <figcaption>
                        Augment your existing commerce solution or upgrade a
                        broken system piece by piece.{" "}
                      </figcaption>
                    </figure>
                  </div>
                  <div className="slide">
                    <figure>
                      <div className="slide-image">
                        <img
                          src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                          className="attachment-large"
                          alt="fabric-commerce-3"
                          data-lazy-src="wp-content/uploads/2022/01/fabric-commerce-3-1-1024x640.png"
                        />
                        <noscript>
                          <img
                            src="wp-content/uploads/2022/01/fabric-commerce-3-1-1024x640.png"
                            className="attachment-large"
                            alt="fabric-commerce-3"
                          />
                        </noscript>
                      </div>
                      <figcaption>
                        Integrate our commerce technology with any backend
                        system, user interface, or customer experience.{" "}
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* image with text slider  */}
      <section className="choose-section">
        <div className="container">
          <div className="heading" data-appear-sequential>
            <h2>Meet our customers</h2>

            <h3>
              We support B2B, B2C, and D2C commerce <br /> initiatives at these
              great companies.
            </h3>
          </div>
          <div className="main-slider" data-appear-fade-in>
            <div className="slide">
              <img
                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                className="attachment-xl"
                alt="Group 236023"
                data-lazy-src="wp-content/uploads/2022/01/Group-236023-2048x1287.jpg"
              />
              <noscript>
                <img
                  src="wp-content/uploads/2022/01/Group-236023-2048x1287.jpg"
                  className="attachment-xl"
                  alt="Group 236023"
                />
              </noscript>
            </div>
            <div className="slide">
              <img
                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                className="attachment-xl"
                alt="Group 236024"
                data-lazy-src="wp-content/uploads/2022/01/Group-236024-2048x1287.jpg"
              />
              <noscript>
                <img
                  src="wp-content/uploads/2022/01/Group-236024-2048x1287.jpg"
                  className="attachment-xl"
                  alt="Group 236024"
                />
              </noscript>
            </div>
            <div className="slide">
              <img
                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                className="attachment-xl"
                alt="Group 236025"
                data-lazy-src="wp-content/uploads/2022/01/Group-236025-2048x1287.jpg"
              />
              <noscript>
                <img
                  src="wp-content/uploads/2022/01/Group-236025-2048x1287.jpg"
                  className="attachment-xl"
                  alt="Group 236025"
                />
              </noscript>
            </div>
            <div className="slide">
              <img
                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                className="attachment-xl"
                alt="Group 236026"
                data-lazy-src="wp-content/uploads/2022/01/Group-236026-2048x1287.jpg"
              />
              <noscript>
                <img
                  src="wp-content/uploads/2022/01/Group-236026-2048x1287.jpg"
                  className="attachment-xl"
                  alt="Group 236026"
                />
              </noscript>
            </div>
            <div className="slide">
              <img
                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%200%200'%3E%3C/svg%3E"
                className="attachment-xl"
                alt="chicos"
                data-lazy-src="wp-content/uploads/2022/02/chicos-2048x1399.jpg"
              />
              <noscript>
                <img
                  src="wp-content/uploads/2022/02/chicos-2048x1399.jpg"
                  className="attachment-xl"
                  alt="chicos"
                />
              </noscript>
            </div>
          </div>
        </div>
      </section>

      {/* cta bar */}
      <section className="ready bg-grad">
        <div className="container" data-appear-sequential>
          <h2 style={{ color: "white" }}>Latest News</h2>

          <p style={{ color: "white" }}>
            NXG-Ecommerce Recognized as a Strong Performer in 2022 Gartner Peer
            Insights™ ‘Voice of the Customer’ Report for Digital Commerce
          </p>

          <ul className="hero-btns-list">
            <li>
              <a
                href="blog/gartner-voc-report-2022/index.html"
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
}
