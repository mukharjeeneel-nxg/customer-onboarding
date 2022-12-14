import FooterScreen from "./FooterScreen";
import Header2 from "./Header2";

function About() {
  return (
    <>
      <Header2 />
      {/* <!-- About --> */}
      <section className="hero-about-us">
        <div className="bg"></div>
        <div className="container">
          <div className="heading">
            <h2>
              We are the first <span>scalable commerce software company</span>{" "}
              built on retail experience
            </h2>
          </div>
          <div className="img-wrap"></div>
        </div>
      </section>
      {/* <!-- Text Carousel --> */}
      <div className="column-slider-wrap bg-white">
        <div className="container">
          <div className="inner">
            <div className="heading">
              <h2>Our Values </h2>
            </div>
            <div className="row">
              <div className="column-slider">
                <div className="slide">
                  <div className="highlight-txt">
                    <p>Seek to understand before being understood.</p>
                  </div>
                  <p>
                    <span style={{ fontWeight: " 400" }}>
                      We understand that communication starts by listening to
                      understand, and requires an appreciation of other
                      perspectives, regardless of urgency or authority, in order
                      to identify and deliver the best solutions.
                    </span>
                  </p>
                </div>
                <div className="slide">
                  <div className="highlight-txt">
                    <p>Say it like it is.</p>
                  </div>
                  <p>
                    <span style={{ fontWeight: " 400" }}>
                      We are honest and authentic, knowing transparency and
                      unwavering candor are critical to our success.
                    </span>
                  </p>
                </div>
                <div className="slide">
                  <div className="highlight-txt">
                    <p>Insist on the highest standards.</p>
                  </div>
                  <p>
                    <span style={{ fontWeight: " 400" }}>
                      We hold ourselves accountable for everything we do to
                      ensure we deliver exceptional results and anything but a
                      generic experience.
                    </span>
                  </p>
                </div>
                <div className="slide">
                  <div className="highlight-txt">
                    <p>Earn trust.</p>
                  </div>
                  <p>
                    <span style={{ fontWeight: " 400" }}>
                      We strive to be honest and authentic with a One fabric
                      mindset in order to build a better team and company.
                    </span>
                  </p>
                </div>
                <div className="slide">
                  <div className="highlight-txt">
                    <p>Consistently raise the bar.</p>
                  </div>
                  <p>
                    <span style={{ fontWeight: " 400" }}>
                      We are relentless about raising the talent bar with every
                      hire we make. We create an inclusive environment where our
                      talent can thrive and grow.
                    </span>
                  </p>
                </div>
                <div className="slide">
                  <div className="highlight-txt">
                    <p>Relentlessly pursue customer happiness.</p>
                  </div>
                  <p>
                    <span style={{ fontWeight: " 400" }}>
                      Our customers are our #1 priority. We partner with
                      customers to understand their needs and provide solutions
                      they love.
                    </span>
                  </p>
                </div>
                <div className="slide">
                  <div className="highlight-txt">
                    <p>Be self-aware and take ownership.</p>
                  </div>
                  <p>
                    <span style={{ fontWeight: " 400" }}>
                      We are conscious not to take ourselves too seriously. We
                      commit to continuously improving our performance and
                      pushing through comfort barriers, while demonstrating
                      resilience. We do not say it’s not our role or problem to
                      solve.
                    </span>
                  </p>
                </div>
                <div className="slide">
                  <div className="highlight-txt">
                    <p>Bias for execution.</p>
                  </div>
                  <p>
                    <span style={{ fontWeight: " 400" }}>
                      We prioritize relentlessly. We have a bias for action,
                      realizing the world changes quickly.
                    </span>
                  </p>
                </div>
                <div className="slide">
                  <div className="highlight-txt">
                    <p>Show gratitude not attitude.</p>
                  </div>
                  <p>
                    <span style={{ fontWeight: " 400" }}>
                      Embrace the journey. We recognize the opportunity to make
                      a difference, leaving things in a better state. We reward
                      those who bring forward and deliver solutions which
                      contribute to better ways of working.
                    </span>
                  </p>
                </div>
              </div>
              <div className="slider-nav">
                <span className="slideCount"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Media Intro Text --> */}
      <section className="media-block-1 has-bg-gray align-text-center">
        <div className="container" data-appear-sequential>
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1">
              <h2></h2>
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-12">
              <h2 style={{ textAlign: "left" }}>
                We build software to{" "}
                <span>help businesses and people connect through commerce</span>
              </h2>
              <p style={{ textAlign: "left" }}>
                When contemplating the vision for fabric, our co-founder arrived
                at this: Commerce is about trade, and trade is social dealings
                between people. It’s also a common framework across all our
                differences as humans. People
                <span style={{ fontWeight: "400" }}>
                  {" "}
                  often connect through nationality, race, religion, and other
                  constructs, but one of the best ways to connect is through
                  commerce.{" "}
                </span>
                <span style={{ fontWeight: "400" }}>
                  To facilitate this, something is needed to revolutionize
                  outdated e-commerce technology and platforms. We call this{" "}
                  <a href="../index.html">fabric</a>.
                </span>
              </p>
              <p style={{ textAlign: "left" }}>
                Similar to how cloud infrastructure supported the future of the
                internet decades ago, fabric is commerce infrastructure to
                support the future of trade. This e-commerce technology is
                delivered through our{" "}
                <a href="../commerce-platform/index.html">
                  headless commerce platform
                </a>
                , <a href="../commerce-apps/index.html">applications</a>, and{" "}
                <a href="../ecommerce-apis/index.html">APIs</a> to support
                merchandisers, operators, and developers within high-growth
                brands and retailers. With{" "}
                <a href="https://resources.fabric.inc/blog/headless-commerce">
                  headless commerce
                </a>{" "}
                as a service, these companies can connect with customers in ways
                that were only talked about before.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterScreen />
    </>
  );
}
export default About;
