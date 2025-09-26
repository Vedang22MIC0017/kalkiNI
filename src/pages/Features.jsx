import Benefits from "../components/Benefits";
import Services from "../components/Services";
import Section from "../components/Section";
import Roadmap from "../components/Roadmap";

const Features = () => {
  return (
    <>
      {/* Mobile title without glass effect */}
      <div className="block sm:hidden pt-[4.75rem] pb-8">
        <div className="container">
          <div className="text-center">
            <h1 className="h1 mb-6 text-white">
              Powerful Features for Smart Security
            </h1>
            <p className="body-1 text-n-3 max-w-3xl mx-auto">
              Discover how kalkiNi transforms traditional surveillance with cutting-edge AI technology
              and intelligent automation.
            </p>
          </div>
        </div>
      </div>
      
      {/* Desktop title with glass effect */}
      <Section className="hidden sm:block pt-[4.75rem] lg:pt-[5.25rem]">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="h1 mb-6">
              <span className="block sm:inline">
                Powerful Features for{" "}
              </span>
              <span className="inline-block relative">
                <span className="hidden sm:inline">Smart Security</span>
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-purple-400 via-blue-400 to-green-400" />
              </span>
            </h1>
            <p className="body-1 text-n-3 max-w-3xl mx-auto">
              Discover how kalkiNi transforms traditional surveillance with cutting-edge AI technology
              and intelligent automation.
            </p>
          </div>
        </div>
      </Section>
      <Benefits />
      <Services />
      <Roadmap/>
    </>
  );
};

export default Features;