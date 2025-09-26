import Pricing from "../components/Pricing";
import Section from "../components/Section";
import FAQ from "../components/FAQ";
import ContactUs from "../components/ContactUs"
const PricingPage = () => {
  return (
    <>
      {/* Mobile title without glass effect */}
      <div className="block sm:hidden pt-[4.75rem] pb-8">
        <div className="container">
          <div className="text-center">
            <h1 className="h1 mb-6 text-white">
              Choose Your Perfect Plan
            </h1>
            <p className="body-1 text-n-3 max-w-3xl mx-auto">
              Scale your security solution with flexible pricing options designed to grow with your needs.
              From startups to enterprises, we have the right plan for you.
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
                Choose Your{" "}
              </span>
              <span className="inline-block relative">
                <span className="hidden sm:inline">Perfect Plan</span>
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-purple-400 via-blue-400 to-green-400" />
              </span>
            </h1>
            <p className="body-1 text-n-3 max-w-3xl mx-auto">
              Scale your security solution with flexible pricing options designed to grow with your needs.
              From startups to enterprises, we have the right plan for you.
            </p>
          </div>
        </div>
      </Section>
      <FAQ/>
      <Pricing />
      <ContactUs/>
      
    </>
  );
};

export default PricingPage;