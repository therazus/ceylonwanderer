"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search } from "lucide-react";
import logo from "../../../public/CeylonWandererL.png";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { LanguageSwitcher } from "../components/language-switcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

export default function Navbar() {
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
                {/* New Menu Items for Mobile */}
                <Link
                  href="/gallery"
                  className="text-lg font-medium text-base hover:text-green-900"
                >
                  {t("navbar.gallery")}
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-medium text-base hover:text-green-900"
                >
                  {t("navbar.blog")}
                </Link>
                <Link
                  href="/faq"
                  className="text-lg font-medium text-base hover:text-green-900"
                >
                  {t("navbar.faq")}
                </Link>
                <Link
                  href="/sustainability"
                  className="text-lg font-medium text-base hover:text-green-900"
                >
                  {t("navbar.sustainability")}
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
                  <LanguageSwitcher />
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
          {/* Desktop Dropdown Menu background color white with pointer cursor */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center justify-center p-2 rounded-md hover:bg-gray-200"
              >
                <Menu className="h-6 w-6" /> {/* Three-line menu icon */}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 bg-white shadow-md border border-gray-200"
            >
              <DropdownMenuItem
                asChild
                className="cursor-pointer hover:bg-gray-100"
              >
                <Link
                  href="/gallery"
                  className="w-full text-base block px-4 py-2"
                >
                  {t("navbar.gallery")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="cursor-pointer  hover:bg-gray-100"
              >
                <Link
                  href="/blog"
                  className="w-full text-base  block px-4 py-2"
                >
                  {t("navbar.blog")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="cursor-pointer  hover:bg-gray-100"
              >
                <Link href="/faq" className="w-full text-base  block px-4 py-2">
                  {t("navbar.faq")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="cursor-pointer hover:bg-gray-100"
              >
                <Link
                  href="/sustainability"
                  className="w-full text-base  block px-4 py-2"
                >
                  {t("navbar.sustainability")}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <LanguageSwitcher />
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
