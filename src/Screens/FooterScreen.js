export default function FooterScreen() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row footer-row" data-accordion>
          <div className="col-sm-3">
            <h5 data-more>Products</h5>
            <ul className="footer-links">
              <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                <a href="../commerce-platform/index.html">Commerce Platform</a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                <a href="../commerce-apps/index.html">Commerce Apps</a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                <a href="../ecommerce-apis/index.html">Commerce APIs</a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                <a href="../pim/index.html">Product Information (PIM)</a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                <a href="../offers/index.html">Offers</a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                <a href="../oms/index.html">Order Management (OMS)</a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                <a href="../marketplace/index.html">Marketplace</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5 data-more>Solutions</h5>
            <ul className="footer-links">
              <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                <a href="../storefront/index.html">Storefront</a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                <a href="../xm/index.html">Experience Manager (XM)</a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                <a href="../member/index.html">Member</a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                <a href="../subscriptions/index.html">Subscriptions</a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                <a href="../b2b-commerce-platform/index.html">B2B Commerce</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5 data-more>Resources</h5>
            <ul className="footer-links">
              <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                <a href="../blog/index.html">Blog</a>
              </li>
              <li className=" menu-item menu-item-type-custom menu-item-object-custom">
                <a href="https://knowledgebase.fabric.inc/knowledgebase">
                  Knowledgebase
                </a>
              </li>
              <li className=" menu-item menu-item-type-custom menu-item-object-custom">
                <a href="https://knowledgebase.fabric.inc/docs">API Docs</a>
              </li>
              <li className=" menu-item menu-item-type-custom menu-item-object-custom">
                <a href="https://support.fabric.inc/hc/en-us">Support</a>
              </li>
            </ul>

            <h5 data-more>Partners</h5>
            <ul className="footer-links">
              <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                <a href="../technology-and-solution-partners/index.html">
                  Integrator, Agency & Technology
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5 data-more>Company</h5>
            <ul className="footer-links">
              <li className=" menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-41 current_page_item">
                <a href="index.html">About</a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                <a href="../press-room/index.html">Newsroom</a>
              </li>
              <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                <a href="../careers/index.html">Careers</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="logo">
            <a href="../index.html">
              <img
                src="Images/nxg-logo.png"
                className="attachment-xl"
                alt="logo"
                height="50.3"
                width="197.7"
              />{" "}
            </a>
          </div>
          <ul className="policy-links">
            <li className="copyright">&copy; 2022 nxg-ecommerce</li>
            <li>
              <a href="../privacy-policy/index.html">Privacy Policy</a>
            </li>
            <li>
              <a href="../privacy-policy/index.html">Term of service</a>
            </li>
          </ul>
          <ul className="social-networks">
            <li>
              <a target="_blank" href="https://twitter.com/fabric_commerce">
                <i className="icon-twitter"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/teamfabric/"
              >
                <i className="icon-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
