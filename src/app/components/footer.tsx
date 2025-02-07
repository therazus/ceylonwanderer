"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Instagram, Mail, Phone } from "lucide-react";

import batchlogo from "../../../public/ayu-in-the-wild-sri-lanka-boutique-2.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-muted text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Connect Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 uppercase">
              {t("footer.connect.title")}
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:info@ayuinthewild.com"
                className="flex items-center justify-center gap-2 hover:text-gray-300 transition-colors"
              >
                <Mail size={18} />
                ceylonwanderer@gmail.com
              </a>
              <a
                href="tel:+94772481100"
                className="flex items-center justify-center gap-2 hover:text-gray-300 transition-colors"
              >
                <Phone size={18} />
                +94 77 248 1100
              </a>
              <button className="border border-white px-6 py-2 hover:bg-white hover:text-gray-900 transition-all">
                {t("footer.connect.contact")}
              </button>
            </div>
          </div>

          {/* Find Out More Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 uppercase">
              {t("footer.find-out-more.title")}
            </h3>
            <div className="space-y-4">
              <a
                href="/about"
                className="block hover:text-gray-300 transition-colors"
              >
                {t("footer.find-out-more.about")}
              </a>
              <a
                href="/travel"
                className="block hover:text-gray-300 transition-colors"
              >
                {t("footer.find-out-more.conscious-travel")}
              </a>
              <a
                href="/trade"
                className="block hover:text-gray-300 transition-colors"
              >
                {t("footer.find-out-more.trade-portal")}
              </a>
            </div>
          </div>

          {/* Advocacy Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 uppercase">
              {t("footer.advocacy.title")}
            </h3>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4">
                <img
                  src={batchlogo.src}
                  alt="Travel Sri Lanka"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <p className="text-center text-sm">
                {t("footer.advocacy.description")}
              </p>
            </div>
          </div>

          {/* Legals Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 uppercase">
              {t("footer.legals.title")}
            </h3>
            <a
              href="/privacy"
              className="hover:text-gray-300 transition-colors"
            >
              {t("footer.legals.cookies-privacypolicy")}
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
              <p>{t("footer.legals.all-rights-reserved")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
