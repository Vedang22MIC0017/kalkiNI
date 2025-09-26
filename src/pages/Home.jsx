import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration"; 
import Hero from "../components/Hero";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";
import FoundersNote from "../components/FoundersNote";

const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Roadmap />
      <FoundersNote/>
    </>
  );
};

export default Home;