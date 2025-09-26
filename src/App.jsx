import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MatrixRainGreen from "./components/effects/MatrixRainGreen";
import MatrixRainPurple from "./components/effects/MatrixRainPurple";
import MatrixRainBlue from "./components/effects/MatrixRainBlue";
import MatrixRainGold from "./components/effects/MatrixRainGold";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import PricingPage from "./pages/PricingPage";
import Contact from "./pages/Contact";

const App = () => {
  const location = useLocation();
  const path = location.pathname;

  // Function to render the appropriate MatrixRain component based on current page
  const renderMatrixRain = () => {
    switch (path) {
      case "/":
        return <MatrixRainGreen />;
      case "/features":
        return <MatrixRainPurple />;
      case "/pricing":
        return <MatrixRainBlue />;
      case "/contact":
        return <MatrixRainGold />;
      default:
        return <MatrixRainGreen />;
    }
  };

  return (
    <>
      {renderMatrixRain()}
      <div className="pt-12 md:pt-14 lg:pt-[4.5rem] overflow-hidden min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
