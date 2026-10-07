import Image from "../util/Image";

const HeroBackground = () => {
  return (
    <>
      <div className="hero-background w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=3840&q=90"
          alt="Hero Image"
        />
      </div>
    </>
  );
};

export default HeroBackground;
