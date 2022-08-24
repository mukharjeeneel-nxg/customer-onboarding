import { Link } from "react-router-dom";

function Header2() {
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
                <a href="index.html">
                  <img
                    src="wp-content/uploads/2022/01/logo-1.svg"
                    className="inline-svg"
                    alt="logo"
                    height="50.3"
                    width="197.7"
                  />{" "}
                </a>
              </div>
              <span className="nav-opener icon-cross"></span>
            </div>

            <ul id="menu-header-menu" className="nav">
              <li className=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                <a href="#" style={{ color: "black" }}>
                  Products
                </a>
                <ul className="drop-menu product-menu">
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="commerce">
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
                          <span >Commerce Platform</span>
                        </strong>
                        <p > The most scalable commerce platform</p>
                      </div>
                    </a>
                  </li>
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="commerce-apps/index.html">
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
                    </a>
                  </li>
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="ecommerce-apis/index.html">
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
                    </a>
                  </li>
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="b2b-commerce-platform/index.html">
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
                    </a>
                  </li>
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="pim">
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
                    </a>
                  </li>
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="offers">
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
                    </a>
                  </li>
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="ordermanagement">
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
                    </a>
                  </li>
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="marketplace">
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
                    </a>
                  </li>
                </ul>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                <a href="technology-and-solution-partners/index.html" style={{color:"black"}}>
                  Partners
                </a>
              </li>
              <li className=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                <a href="#"  style={{color:"black"}}>Resources</a>
                <ul className="drop-menu">
                  <li className=" menu-item menu-item-type-custom menu-item-object-custom">
                    <a href="blog/index.html">Blog</a>
                  </li>
                  <li className=" menu-item menu-item-type-custom menu-item-object-custom">
                    <a href="https://knowledgebase.fabric.inc/knowledgebase">
                      Knowledge Base
                    </a>
                  </li>
                  <li className=" menu-item menu-item-type-custom menu-item-object-custom">
                    <a href="https://knowledgebase.fabric.inc/docs">API Docs</a>
                  </li>
                  <li className=" menu-item menu-item-type-custom menu-item-object-custom">
                    <a href="https://support.fabric.inc/hc/en-us">Support</a>
                  </li>
                </ul>
              </li>
              <li className=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children">
                <a href="#"  style={{color:"black"}}>Company</a>

                <ul className="drop-menu">
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="about">About</a>
                  </li>
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="press-room/index.html">Newsroom</a>
                  </li>
                  <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="careers/index.html">Careers</a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="utility-nav">
              <li>
                <Link to="/Contactscreen"  style={{color:"black"}}>Request Demo</Link>
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
export default Header2;
