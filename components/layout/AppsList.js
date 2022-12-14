const AppsList = (props) => {
  return (
    <>
      <div
        className="col-md-4 col-12 wow animate fadeInUp mb-2"
        data-wow-delay="250ms"
        data-wow-duration="1500ms"
      >
        <div className="news-box">
          <img
            className="d-block mx-auto img-fluid mb-3"
            src={props.icon}
            alt=""
          />
          <div className="news-category">{props.category}</div>
          <div className="news-heading">{props.heading}</div>
          <div className="news-readmore">
            <button>Read more →</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AppsList;
