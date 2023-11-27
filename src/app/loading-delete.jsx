"use client";
import Lottie from "lottie-react";
import Loading from "./commons/icons/LoadingAnimation.json";

const Page = () => {
  return (
    <div className="min-h-full flex flex-col justify-center items-center">
      <Lottie animationData={Loading} />
      <p className="text-4xl font-extrabold md:mt-[-200px] mt-[-150px]">
        LOADING...
      </p>
    </div>
  );
};

export default Page;
