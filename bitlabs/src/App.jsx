import About from "./components/About";
import Count from "./components/Count";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service";

const App = () => {
  return (
    <>
      <div className="app-wrapper py-2 w-full">
        <Navbar />
        <Hero />
        <About />
        <Count />
        <Service />
        <Footer />
      </div>
    </>
  );
};

export default App;
