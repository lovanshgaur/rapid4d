import React from "react";
import CTAButton from "../util/CTAButton";

const HeroText = () => {
  return (
    <>
      <div className="hero-text absolute z-200 text-white w-full flex items-center flex-col pt-10 text-center h-full justify-center">
        <h1 className="text-6xl text-shadow-lg">Unleash your inner champion today. <br /> All in one place.</h1>
        <h4 className="w-[40%] p-3 text-lg text-shadow-lg">Practical learning, expert guidance, and a community built to help you turn knowledge into real-world skills.</h4>
        <CTAButton text="Start your own Journey" />
      </div>
    </>
  );
};

export default HeroText;
