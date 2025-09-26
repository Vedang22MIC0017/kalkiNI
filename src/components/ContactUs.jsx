import React, { useState } from 'react';
import Section from "./Section";
import useMobile from "../hooks/useMobile";

const ContactUs = () => {
  const isMobile = useMobile();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Section id="contact">
      <div className="container">
        {/* Animated Background Pattern - disabled on mobile */}
        {!isMobile && (
          <div className="absolute inset-0 h-full w-full opacity-5 pointer-events-none">
            <div className="absolute top-16 left-16 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-20 h-20 bg-purple-500/20 rounded-full animate-bounce delay-100"></div>
            <div className="absolute bottom-24 left-32 w-16 h-16 bg-green-500/20 rounded-full animate-ping delay-200"></div>
            <div className="absolute bottom-40 right-40 w-28 h-28 bg-yellow-500/20 rounded-full animate-pulse delay-300"></div>
          </div>
        )}

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="h2 mb-6">
              <span className="relative inline-block">
                Get In Touch
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 opacity-60" />
              </span>
            </h2>
            <p className="body-1 text-n-3 max-w-2xl mx-auto">
              Have questions about kalkiNi? Want to discuss a custom solution? 
              We'd love to hear from you. Reach out to our team and let's start the conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <div className="p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-green-500">
                <div className="rounded-[1rem] p-8 bg-n-8/90 backdrop-blur border border-white/10">
                  <h3 className="h4 mb-6 text-white">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-n-3 mb-2">Name *</label>
                        <input 
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 rounded-xl bg-n-7/50 border border-white/10 text-white placeholder-n-4 focus:border-purple-400 focus:outline-none ${isMobile ? "" : "transition-colors"}`}
                          placeholder="Your full name" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-n-3 mb-2">Email *</label>
                        <input 
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 rounded-xl bg-n-7/50 border border-white/10 text-white placeholder-n-4 focus:border-purple-400 focus:outline-none ${isMobile ? "" : "transition-colors"}`}
                          placeholder="your.email@example.com" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-n-3 mb-2">Subject</label>
                      <input 
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-n-7/50 border border-white/10 text-white placeholder-n-4 focus:border-purple-400 focus:outline-none ${isMobile ? "" : "transition-colors"}`}
                        placeholder="How can we help you?" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-n-3 mb-2">Message *</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl bg-n-7/50 border border-white/10 text-white placeholder-n-4 focus:border-purple-400 focus:outline-none resize-none ${isMobile ? "" : "transition-colors"}`}
                        placeholder="Tell us about your project or question..." 
                      />
                    </div>
                    <button 
                      type="submit"
                      className={`w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold ${isMobile ? "" : "hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"}`}
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="h4 mb-6 text-white">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <p className="text-n-3">contact@kalkini.ai</p>
                      <p className="text-n-3">support@kalkini.ai</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <p className="text-n-3">+1 (555) 123-4567</p>
                      <p className="text-n-3">+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-yellow-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Office</h4>
                      <p className="text-n-3">123 AI Innovation Drive<br />Tech Valley, CA 94089<br />United States</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Business Hours</h4>
                <div className="space-y-2 text-n-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;