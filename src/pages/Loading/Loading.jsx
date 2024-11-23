import loadingImg from "../../assets/loading/output-onlinegiftools.gif";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {/* <span className="loading loading-ring loading-lg"></span> */}
      <img src={loadingImg} alt="" />
    </div>
  );
};

export default Loading;
