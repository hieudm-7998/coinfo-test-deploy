import FutureItem from "./futured/item";

const Futured = () => {
  return (
    <>
      <div className="featured-area positioning pb-76">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div
                className="hrdd-section-title text-center wow animate fadeInDown"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <h1>
                  Unlock{" "}
                  <span className="heading-underscore">your journey</span> with
                  COINFO
                </h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-50">
            <FutureItem
              AnimeDelay="400ms"
              icon="/assets/images/icon/featured-icon-1.png"
              title="Simplicity"
              desc="Exploring Crypto space easier with the COINFO moblie app."
            />

            <FutureItem
              AnimeDelay="500ms"
              icon="/assets/images/icon/featured-icon-1.png"
              title="News Aggregator"
              desc="Up-to-date and reliable news from trustworthy sources"
            />
            <FutureItem
              AnimeDelay="600ms"
              icon="/assets/images/icon/featured-icon-4.png"
              title="Trading Signal"
              desc="Using technical analysis system to assist traders in maximising potential profit"
            />

            <FutureItem
              AnimeDelay="700ms"
              icon="/assets/images/icon/featured-icon-5.png"
              title="Risk Management"
              desc="Implementing proper risk management to secure your profit"
            />
            <FutureItem
              AnimeDelay="800ms"
              icon="/assets/images/icon/featured-icon-3.png"
              title="Optomising experience"
              desc="Real-time signals turn your confusion into clarify"
            />
          </div>
        </div>
        <img
          className="shape featured-shape"
          src="assets/images/shape/feasured-hrrd.png"
          alt=""
        />
      </div>
    </>
  );
};
export default Futured;
