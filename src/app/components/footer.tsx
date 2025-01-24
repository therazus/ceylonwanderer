import React from "react";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

import batchlogo from "../../../public/ayu-in-the-wild-sri-lanka-boutique-2.png";

const Footer = () => {
  return (
    <footer className="bg-muted text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Connect Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6">CONNECT</h3>
            <div className="space-y-4">
              <a
                href="mailto:info@ayuinthewild.com"
                className="flex items-center justify-center gap-2 hover:text-gray-300 transition-colors"
              >
                <Mail size={18} />
                info@ayuinthewild.com
              </a>
              <a
                href="tel:+94772481100"
                className="flex items-center justify-center gap-2 hover:text-gray-300 transition-colors"
              >
                <Phone size={18} />
                +94 77 248 1100
              </a>
              <button className="border border-white px-6 py-2 hover:bg-white hover:text-gray-900 transition-all">
                contact
              </button>
            </div>
          </div>

          {/* Find Out More Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6">FIND OUT MORE</h3>
            <div className="space-y-4">
              <a
                href="/about"
                className="block hover:text-gray-300 transition-colors"
              >
                About us
              </a>
              <a
                href="/villas"
                className="block hover:text-gray-300 transition-colors"
              >
                Luxury Villas
              </a>
              <a
                href="/travel"
                className="block hover:text-gray-300 transition-colors"
              >
                Conscious Travel
              </a>
              <a
                href="/trade"
                className="block hover:text-gray-300 transition-colors"
              >
                Trade Portal
              </a>
            </div>
          </div>

          {/* Advocacy Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6">ADVOCACY</h3>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
                <img
                  src={batchlogo.src}
                  alt="Travel Sri Lanka"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <p className="text-center text-sm">
                Collaboration on sustainable tourism
              </p>
            </div>
          </div>

          {/* Legals Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6">LEGALS</h3>
            <a
              href="/privacy"
              className="hover:text-gray-300 transition-colors"
            >
              Cookies & Privacy Policy
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/50 text-center">
          <div className="flex flex-col items-center gap-4">
            {/* Social Icon */}
            <div className="gap-4">
              <a
                href="https://www.instagram.com/ceylonwanderer_/"
                className="hover:text-gray-300 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
            {/* Text Content */}
            <div className="text-sm">
              <p>© Ceylon Wanderer 2025</p>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
