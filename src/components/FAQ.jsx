import Section from "./Section";
import Tagline from "./Tagline";
import useMobile from "../hooks/useMobile";

const faqs = [
  { q: "What is the AI Surveillance System?", a: "It’s a computer-vision layer that augments your existing CCTV with AI for detection, alerts, and insights—without replacing your cameras." },
  { q: "Do I need new cameras or can it work with existing CCTV?", a: "It integrates with most IP cameras, DVR/NVRs, and VMS platforms via RTSP/ONVIF. In many cases, no camera replacement is required." },
  { q: "Which events can it detect?", a: "Intrusion, loitering, line crossing, abandoned/removed object, crowding, PPE compliance, vehicle/person detection, license plates (region-dependent), and more." },
  { q: "Where does processing happen—on-prem or cloud?", a: "Both are supported. For low-latency or strict data policies, on-prem inference is recommended. Hybrid setups are also common." },
  { q: "What about privacy and compliance?", a: "We support privacy zones, redaction, and role-based access. Compliance can be aligned with local regulations (e.g., GDPR) using data retention controls." },
  { q: "How many cameras can it scale to?", a: "From a handful to thousands. We scale by adding inference nodes and smart load balancing; performance depends on resolution and FPS per stream." },
];

const FAQ = () => {
  const isMobile = useMobile();
  
  return (
    <Section id="faq">
      <div className="container">
        {/* Title/Intro stacked on top */}
        <div className="space-y-4 mb-8">
          <Tagline className="md:justify-start">Your Queries Answered</Tagline>
          <h2 className="h2">
            <span className="relative inline-block">
              FAQ
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-color-1 via-color-5 to-color-2 opacity-60" />
            </span>
          </h2>
          <p className="body-2 text-n-3 max-w-[42rem]">
            Integrate advanced AI into your existing CCTV to detect events, notify instantly, and gather rich insights—without replacing your infrastructure.
          </p>
        </div>

        {/* Questions list stacked below */}
        <div className="grid gap-5">
          {faqs.map((item, i) => (
            <div key={i} className={`p-[1px] rounded-2xl bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 ${isMobile ? "" : "transition-transform hover:scale-[1.005]"}`}>
              <details className="group rounded-[1rem] p-5 md:p-6 bg-n-8/60 backdrop-blur border border-white/10">
                <summary className="cursor-pointer flex items-start justify-between gap-4">
                  <span className="font-semibold text-base md:text-lg leading-6 hover-highlight">
                    {item.q}
                  </span>
                  <span className={`shrink-0 w-8 h-8 rounded-full bg-n-7/80 border border-white/10 flex items-center justify-center ${isMobile ? "" : "transition-transform group-open:rotate-90"}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-n-3 md:text-base">
                    {item.a}
                  </p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
