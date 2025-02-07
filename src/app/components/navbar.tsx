"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, Languages, ChevronDown } from "lucide-react";
import logo from "../../../public/CeylonWandererL.png";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";

import { useLanguage } from "../context/language-context";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <nav className="absolute top-0 left-0 z-20 w-full bg-white">
      <div className="flex h-14 items-center justify-between px-4 md:px-6 lg:h-40">
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-base">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white text-base">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/trade-portal"
                  className="text-lg font-medium text-base hover:text-green-900"
                >
                  {t("navbar.home")}
                </Link>
                <Link
                  href="/about-us"
                  className="text-lg font-medium text-base hover:text-green-900"
                >
                  {t("navbar.about_us")}
                </Link>
                <Link
                  href="/local-secrets"
                  className="text-lg font-medium text-base hover:text-green-900"
                >
                  {t("navbar.destinations")}
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium text-base hover:text-green-900"
                >
                  {t("navbar.contact")}
                </Link>

                {/* Search Bar */}
                <div className="mt-4">
                  <div className="flex items-center border-b border-gray-300">
                    <Input
                      type="search"
                      placeholder={t("navbar.search") as string}
                      className="w-full text-sm text-base border-none focus:outline-none focus:ring-0"
                      style={{
                        outline: "none",
                        boxShadow: "none",
                      }}
                    />
                    <Button variant="ghost" size="icon" className="text-base">
                      <Search className="h-5 w-5" />
                      <span className="sr-only">
                        {t("navbar.search_placeholder")}
                      </span>
                    </Button>
                  </div>
                </div>

                {/* Language Switcher for Mobile */}
                <div className="mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setLanguage(language === "en" ? "de" : "en")}
                    className="flex w-full items-center space-x-2 border border-gray-200 rounded-md px-2 py-2 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <Languages className="h-5 w-5 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {language === "en" ? "En" : "De"}
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-500 ml-auto" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo (Center for Mobile View, Left for Desktop) */}
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start space-x-2 absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none"
        >
          <Image
            src={logo || "/placeholder.svg"}
            alt="Ceylon Wanderer"
            width={180}
            height={60}
            className="object-contain w-auto h-8 lg:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8 text-base">
          <Link
            href="/trade-portal"
            className="text-sm font-medium text-base hover:text-green-900"
          >
            {t("navbar.home")}
          </Link>
          <Link
            href="/about-us"
            className="text-sm font-medium text-base hover:text-green-900"
          >
            {t("navbar.about_us")}
          </Link>
          <Link
            href="/local-secrets"
            className="text-sm font-medium text-base hover:text-green-900"
          >
            {t("navbar.destinations")}
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-base hover:text-green-900"
          >
            {t("navbar.contact")}
          </Link>
        </div>

        {/* Right Section for Desktop */}
        <div className="hidden lg:flex items-center space-x-4 text-base">
          <div className="flex items-center border-b border-gray-300">
            <Input
              type="search"
              placeholder="Search..."
              className="w-64 text-sm text-base border-none focus:outline-none focus:ring-0"
              style={{
                outline: "none",
                boxShadow: "none",
              }}
            />
            <Button variant="ghost" size="icon" className="text-base">
              <Search className="h-5 w-5" />
              <span className="sr-only">{t("navbar.search_placeholder")}</span>
            </Button>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "de" : "en")}
            className="flex items-center space-x-2 border border-gray-200 rounded-md px-2 py-2 bg-white hover:bg-gray-50 transition-colors"
          >
            <Languages className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              {language === "en" ? "En" : "De"}
            </span>
            <ChevronDown className="h-4 w-4 text-gray-500 ml-1" />
          </Button>
        </div>

        {/* Mobile Search Button */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" className="text-base">
            <Search className="h-5 w-5" />
            <span className="sr-only">{t("navbar.search_placeholder")}</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
