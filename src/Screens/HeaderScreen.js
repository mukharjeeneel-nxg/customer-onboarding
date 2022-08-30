import { Link, NavLink } from "react-router-dom";

export default function HeaderScreen() {
  return (
    <>
      <header id="header" className="header-transparent">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img
                src="Images/nxg-logo.svg"
                className="inline-svg"
                alt="logo"
              />{" "}
            </Link>
          </div>
          <span className="nav-opener icon-menu"></span>
          <nav className="navbar">
            <div className="nav-head">
              <div className="logo">
                <Link to="index.html">
                  <img
                    src="wp-content/uploads/2022/01/logo-1.svg"
                    className="inline-svg"
                    alt="logo"
                    height="50.3"
                    width="197.7"
                  />{" "}
                </Link>
              </div>
              <span className="nav-opener icon-cross"></span>
            </div>

            <ul id="menu-header-menu" className="nav">
              <li className=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                <Link to="#">Products</Link>
                <ul className="drop-menu product-menu">
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="/commerce">
                      <div className="ico-wrap">
                        <img
                          src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2072%2057'%3E%3C/svg%3E"
                          className="attachment-large"
                          alt="Commerce Platform-logo"
                          height="57"
                          width="72"
                          data-lazy-src="https://fabric.inc/wp-content/uploads/2022/02/Commerce-Platform-logo.svg"
                        />
                        <noscript>
                          <img
                            src="wp-content/uploads/2022/02/Commerce-Platform-logo.svg"
                            className="attachment-large"
                            alt="Commerce Platform-logo"
                            height="57"
                            width="72"
                          />
                        </noscript>
                      </div>
                      <div className="desc">
                        <strong>
                          <span>Commerce Platform</span>
                        </strong>
                        <p>The most scalable commerce platform</p>
                      </div>
                    </Link>
                  </li>
                  {/* <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="commerce-apps/index.html">
                      <div className="ico-wrap">
                        <img
                          src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2072%2057'%3E%3C/svg%3E"
                          className="attachment-large"
                          alt="Commerce Apps-logo"
                          height="57"
                          width="72"
                          data-lazy-src="https://fabric.inc/wp-content/uploads/2022/02/Commerce-Apps-logo.svg"
                        />
                        <noscript>
                          <img
                            src="wp-content/uploads/2022/02/Commerce-Apps-logo.svg"
                            className="attachment-large"
                            alt="Commerce Apps-logo"
                            height="57"
                            width="72"
                          />
                        </noscript>
                      </div>
                      <div className="desc">
                        <strong>
                          <span>Commerce Apps</span>
                        </strong>
                        <p>Commerce management tools</p>
                      </div>
                    </Link>
                  </li> */}
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="ecommerce-apis/index.html">
                      <div className="ico-wrap">
                        <img
                          src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2072%2057'%3E%3C/svg%3E"
                          className="attachment-large"
                          alt="APIs-logo"
                          height="57"
                          width="72"
                          data-lazy-src="https://fabric.inc/wp-content/uploads/2022/02/APIs-logo.svg"
                        />
                        <noscript>
                          <img
                            src="wp-content/uploads/2022/02/APIs-logo.svg"
                            className="attachment-large"
                            alt="APIs-logo"
                            height="57"
                            width="72"
                          />
                        </noscript>
                      </div>
                      <div className="desc">
                        <strong>
                          <span>Commerce APIs</span>
                        </strong>
                        <p>Building blocks of commerce</p>
                      </div>
                    </Link>
                  </li>
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="b2b-commerce-platform/index.html">
                      <div className="ico-wrap">
                        <img
                          src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2072%2057'%3E%3C/svg%3E"
                          className="attachment-large"
                          alt="B2B-logo"
                          height="57"
                          width="72"
                          data-lazy-src="https://fabric.inc/wp-content/uploads/2022/02/B2B-logo.svg"
                        />
                        <noscript>
                          <img
                            src="wp-content/uploads/2022/02/B2B-logo.svg"
                            className="attachment-large"
                            alt="B2B-logo"
                            height="57"
                            width="72"
                          />
                        </noscript>
                      </div>
                      <div className="desc">
                        <strong>
                          <span>B2B Commerce</span>
                        </strong>
                        <p>Better B2B buying experiences</p>
                      </div>
                    </Link>
                  </li>
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="pim">
                      <div className="ico-wrap">
                        <img
                          src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2072%2057'%3E%3C/svg%3E"
                          className="attachment-large"
                          alt="PIM-logo"
                          height="57"
                          width="72"
                          data-lazy-src="https://fabric.inc/wp-content/uploads/2022/02/PIM-logo.svg"
                        />
                        <noscript>
                          <img
                            src="wp-content/uploads/2022/02/PIM-logo.svg"
                            className="attachment-large"
                            alt="PIM-logo"
                            height="57"
                            width="72"
                          />
                        </noscript>
                      </div>
                      <div className="desc">
                        <strong>
                          <span>Product Information (PIM)</span>
                        </strong>
                        <p>Drive product-led growth</p>
                      </div>
                    </Link>
                  </li>
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="offers">
                      <div className="ico-wrap">
                        <img
                          src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2072%2057'%3E%3C/svg%3E"
                          className="attachment-large"
                          alt="Offers-logo"
                          height="57"
                          width="72"
                          data-lazy-src="https://fabric.inc/wp-content/uploads/2022/02/Offers-logo.svg"
                        />
                        <noscript>
                          <img
                            src="wp-content/uploads/2022/02/Offers-logo.svg"
                            className="attachment-large"
                            alt="Offers-logo"
                            height="57"
                            width="72"
                          />
                        </noscript>
                      </div>
                      <div className="desc">
                        <strong>
                          {" "}
                          <span>Offers</span>
                        </strong>
                        <p>Simplify pricing and promotions</p>
                      </div>
                    </Link>
                  </li>
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="ordermanagement">
                      <div className="ico-wrap">
                        <img
                          src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2072%2057'%3E%3C/svg%3E"
                          className="attachment-large"
                          alt="OMS-logo"
                          height="57"
                          width="72"
                          data-lazy-src="https://fabric.inc/wp-content/uploads/2022/02/OMS-logo.svg"
                        />
                        <noscript>
                          <img
                            src="wp-content/uploads/2022/02/OMS-logo.svg"
                            className="attachment-large"
                            alt="OMS-logo"
                            height="57"
                            width="72"
                          />
                        </noscript>
                      </div>
                      <div className="desc">
                        <strong>
                          <span>Order Management (OMS)</span>
                        </strong>
                        <p>Streamline order fulfillment</p>
                      </div>
                    </Link>
                  </li>
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="marketplace">
                      <div className="ico-wrap">
                        <img
                          src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2072%2057'%3E%3C/svg%3E"
                          className="attachment-large"
                          alt="Marketplace-logo"
                          height="57"
                          width="72"
                          data-lazy-src="https://fabric.inc/wp-content/uploads/2022/02/Marketplace-logo.svg"
                        />
                        <noscript>
                          <img
                            src="wp-content/uploads/2022/02/Marketplace-logo.svg"
                            className="attachment-large"
                            alt="Marketplace-logo"
                            height="57"
                            width="72"
                          />
                        </noscript>
                      </div>
                      <div className="desc">
                        <strong>
                          <span>Marketplace</span>
                        </strong>
                        <p>Ignite new revenue streams</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                <Link to="pricing">
                  Pricing
                </Link>
              </li>
              <li className=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                <Link to="#">Resources</Link>
                <ul className="drop-menu">
                  <li className=" menu-item menu-item-type-custom menu-item-object-custom">
                    <Link to="blog/index.html">Blog</Link>
                  </li>
                  <li className=" menu-item menu-item-type-custom menu-item-object-custom">
                    <Link to="https://knowledgebase.fabric.inc/knowledgebase">
                      Knowledge Base
                    </Link>
                  </li>
                  <li className=" menu-item menu-item-type-custom menu-item-object-custom">
                    <Link to="https://knowledgebase.fabric.inc/docs">API Docs</Link>
                  </li>
                  <li className=" menu-item menu-item-type-custom menu-item-object-custom">
                    <Link to="https://support.fabric.inc/hc/en-us">Support</Link>
                  </li>
                </ul>
              </li>
              <li className=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                <Link to="#">Company</Link>

                <ul className="drop-menu">
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="about">About</Link>
                  </li>
                  {/* <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="press-room/index.html">Newsroom</Link>
                  </li> */}
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="careers/index.html">Careers</Link>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="utility-nav">
              <li>
                <Link to="/Contactscreen">Request Demo</Link>
              </li>
              <li>
                {" "}
                <Link to="/register" className="btn btn-sm">
                  Register Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
