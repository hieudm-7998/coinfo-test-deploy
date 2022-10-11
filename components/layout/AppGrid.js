import AppsList from "./AppsList";

const LayoutAppGrid = () => {
  return (
    <>
      <div className="news-area my-5 pb-76 pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="hrdd-section-title text-center wow animate fadeInDown"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <h1 className="crypto-heading">Crypto Trending News</h1>
              </div>
            </div>
          </div>
          <div className="row mt-50">
            <AppsList
              icon="assets/images/news-1.png"
              category="Design"
              heading="How great Content helps drive success in Marketplace"
            />
            <AppsList
              icon="assets/images/news-2.png"
              category="Marketing"
              heading="Strossle International AB ranked #1 on Deloitte 2018"
            />
            <AppsList
              icon="assets/images/news-3.png"
              category="Development"
              heading="What All Marketers Should Know About Brand Safe"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default LayoutAppGrid;
