"use client";
import Lottie from "lottie-react";
import NotFound from "../icons/NotFound.json";

const Page = () => {
  return (
    <div className="min-h-full flex flex-col justify-center items-center">
      <Lottie animationData={NotFound} />
      <p className="text-4xl font-extrabold mt-[-100px] ">PAGE NOT FOUND</p>
    </div>
  );
};

export default Page;
