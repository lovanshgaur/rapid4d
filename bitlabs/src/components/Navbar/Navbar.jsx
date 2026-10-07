import CTAButton from "../util/CTAButton";
import Navlinks from "./Navlinks";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <div className="navbar-wrapper flex py-2 px-4 items-center justify-between">
        <Logo text="BitLabs" />
        <Navlinks />
        <CTAButton text="Book Now" />
      </div>
    </>
  );
};

export default Navbar;
