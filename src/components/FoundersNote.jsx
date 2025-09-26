import React from 'react';
import Section from "./Section";
import founder1 from '../assets/founder1.svg';
import founder2 from '../assets/founder2.svg';
import founder3 from '../assets/founder3.svg';
import linkedinIcon from '../assets/linkedin.svg';
import twitterIcon from '../assets/twitter.svg';
import useMobile from '../hooks/useMobile';

// Founder Profile Component
const FounderProfile = ({ image, name, role, bio, linkedin, twitter, isMobile }) => {
  return (
    <div className="relative group">
      <div className={`p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 ${isMobile ? "" : "transition-transform hover:scale-105"}`}>
        <div className="rounded-[1rem] p-6 bg-n-8/90 backdrop-blur border border-white/10 h-full">
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Profile Image */}
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/20">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            
            {/* Name and Role */}
            <div>
              <h3 className="font-bold text-lg text-white">{name}</h3>
              <p className="text-sm text-purple-400 font-medium">{role}</p>
            </div>
            
            {/* Bio */}
            <p className="text-sm text-n-3 leading-relaxed">{bio}</p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-white/10 ${isMobile ? "" : "hover:bg-white/20 transition-colors"} group`}
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 text-white" />
              </a>
              <a 
                href={twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-white/10 ${isMobile ? "" : "hover:bg-white/20 transition-colors"} group`}
              >
                <img src={twitterIcon} alt="Twitter" className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FoundersNote = () => {
  const isMobile = useMobile();
  const founders = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      image: founder1,
      bio: "Visionary leader with 10+ years in AI and machine learning. Previously at Google AI.",
      linkedin: "https://linkedin.com/in/alexchen",
      twitter: "https://twitter.com/alexchen"
    },
    {
      name: "Sarah Johnson",
      role: "CTO & Co-Founder",
      image: founder2,
      bio: "Technical architect specializing in computer vision and surveillance systems.",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson"
    },
    {
      name: "David Kumar",
      role: "CPO & Co-Founder",
      image: founder3,
      bio: "Product strategist focused on creating intuitive AI-powered user experiences.",
      linkedin: "https://linkedin.com/in/davidkumar",
      twitter: "https://twitter.com/davidkumar"
    }
  ];

  return (
    <Section id="founders-note">
      <div className="container relative">
        {/* Animated Background Pattern - disabled on mobile */}
        {!isMobile && (
          <div className="absolute inset-0 h-full w-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-16 w-16 h-16 bg-blue-500/30 rounded-full animate-bounce delay-100"></div>
            <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-500/30 rounded-full animate-ping delay-200"></div>
            <div className="absolute bottom-32 right-32 w-24 h-24 bg-yellow-500/30 rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-pink-500/30 rounded-full animate-bounce delay-500 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        )}
        
        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="h2 mb-6">
              <span className="relative inline-block">
                Meet Our Founders
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 opacity-60" />
              </span>
            </h2>
            <p className="body-1 text-n-3 max-w-3xl mx-auto">
              We built kalkiNi to revolutionize surveillance with AI intelligence. Our mission is to make
              advanced security accessible, intelligent, and seamlessly integrated.
            </p>
          </div>
          
          {/* Founders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {founders.map((founder, index) => (
              <FounderProfile key={index} {...founder} isMobile={isMobile} />
            ))}
          </div>
          
          {/* Common Message */}
          <div className="text-center">
            <div className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 max-w-4xl mx-auto">
              <div className="rounded-[1rem] p-8 md:p-10 bg-n-8/90 backdrop-blur border border-white/10">
                <h3 className="h4 mb-6 text-white">A Message from Our Founders</h3>
                <blockquote className="text-lg md:text-xl leading-relaxed text-n-2 italic">
                  "We believe that every organization deserves intelligent security solutions that grow with their needs.
                  Our journey began with a simple vision: to make AI-powered surveillance accessible, reliable, and 
                  extraordinarily effective. Today, we're proud to deliver technology that doesn't just monitor—it 
                  understands, learns, and protects what matters most to you."
                </blockquote>
                <div className="flex justify-center items-center mt-8 space-x-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-1"></div>
                  <span className="text-sm text-n-4 font-medium tracking-wider">THE KALKI TEAM</span>
                  <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FoundersNote;
