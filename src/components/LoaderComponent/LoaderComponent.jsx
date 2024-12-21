import { ThreeDots } from "react-loader-spinner";

const LoaderComponent = ({ width, height }) => {
  return (
    <ThreeDots
      visible={true}
      height={height}
      width={width}
      color="#9be1a0"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default LoaderComponent;
