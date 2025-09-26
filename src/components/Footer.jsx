import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section className="!px-0">
      <div className="container grid gap-8 md:grid-cols-2 xl:grid-cols-4 items-start">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-n-7 flex items-center justify-center">
              <img src="src/assets/logok.jpg" />
            </div>
            <div className="text-xl font-semibold">KalkiNi</div>
          </div>
          <p className="text-sm text-n-3">A modern AI experience. Create, collaborate, and explore.</p>
        </div>

        <div>
          <div className="font-semibold mb-4">Product</div>
          <ul className="space-y-2 text-sm text-n-3">
            <li><a href="#features" className="hover:text-n-1">Features</a></li>
            <li><a href="#how-to-use" className="hover:text-n-1">How it works</a></li>
            <li><a href="#pricing" className="hover:text-n-1">Pricing</a></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-4">Resources</div>
          <ul className="space-y-2 text-sm text-n-3">
            <li><a href="#roadmap" className="hover:text-n-1">Roadmap</a></li>
            <li><a href="#" className="hover:text-n-1">Docs</a></li>
            <li><a href="#" className="hover:text-n-1">Community</a></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-4">Stay up to date</div>
          <form className="flex gap-3">
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-n-7 border border-white/10 placeholder:text-n-4 focus:outline-none" />
            <button className="px-5 py-3 rounded-xl bg-n-1 text-n-8 font-semibold">Subscribe</button>
          </form>
          <div className="mt-4 flex gap-3">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              >
                <img src={item.iconUrl} width={16} height={16} alt={item.title} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-n-4">© {new Date().getFullYear()} KalkiNi. All rights reserved.</p>
        <div className="text-xs text-n-4">Terms • Privacy • Cookies</div>
      </div>
    </Section>
  );
};

export default Footer;
