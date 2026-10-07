import HeroText from "./Hero/Herotext";
import HeroBackground from "./Hero/HeroBackground";

const Hero = () => {
  return (
    <>
      <div className="hero-wrapper h-[90vh] mx-2 rounded-2xl overflow-hidden relative">
        <HeroBackground />
        <HeroText />
      </div>
    </>
  );
};

export default Hero;
