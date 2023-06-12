import Lottie from "lottie-react";
import loaderSpinner from "../../assets/99109-loading.json";

const LoaderSpinner = () => {

    return (
        <div className="h-40 w-40 mx-auto mt-4">
            <Lottie animationData={loaderSpinner} />
        </div>
    );
};

export default LoaderSpinner;