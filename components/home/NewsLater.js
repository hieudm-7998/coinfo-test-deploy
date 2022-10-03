const HomeNewsLater = () => {
  return (
    <>
      <div className="hrrd-subscribe-area positioning pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="hrrd-subscribe-wrap">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12">
                    <div
                      className="hrdd-section-title hrrd-subscribe-title text-center wow animate fadeInDown"
                      data-wow-delay="100ms"
                      data-wow-duration="1500ms"
                    >
                      <h1>
                        Interested to <span className="box-around-text">stay up-to-date</span> with cryptocurrencies?
                      </h1>
                      <p>
                        Get the lastest news, updates, and trading signals by
                        subscribing to our newsletter.{" "}
                      </p>
                    </div>
                    <form
                      action="#"
                      className="wow animate flipInX"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <input type="text" placeholder="Email" />
                      <button className="common-btn btn-hrrd-1">
                        Subscribe Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeNewsLater;
