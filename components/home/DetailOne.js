import DetailLeft from "./DetailOne/DetailLeft";
import DetailRight from "./DetailOne/DetailRight";

const HomeDetailOne = () => {
  return (
    <>
      <div className="everything-area positioning mt-100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <DetailLeft />

            <DetailRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDetailOne;
