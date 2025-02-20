import { RingLoader } from "react-spinners";
interface LoadingSpinnerProps {
  smallHeight?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? "h-[250px]" : "h-[70vh]"}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <RingLoader size={100} color="#d67c0d" />
    </div>
  );
};

export default LoadingSpinner;
