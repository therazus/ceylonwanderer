"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Menu, Search } from "lucide-react";
import logo from "../../../public/CeylonWandererL.png";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";

export default function Navbar() {
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
                  HOME
                </Link>
                <Link
                  href="/about-us"
                  className="text-lg font-medium text-base hover:text-green-900"
                >
                  ABOUT US
                </Link>
                <Link
                  href="/local-secrets"
                  className="text-lg font-medium text-base hover:text-green-900"
                >
                  DESTINATIONS
                </Link>

                <Link
                  href="/contact"
                  className="text-lg font-medium text-base hover:text-green-900"
                >
                  CONTACT
                </Link>

                {/* Search Bar */}
                <div className="mt-4">
                  <div className="flex items-center border-b border-gray-300">
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="w-full text-sm text-base border-none focus:outline-none focus:ring-0"
                      style={{
                        outline: "none",
                        boxShadow: "none",
                      }}
                    />
                    <Button variant="ghost" size="icon" className="text-base">
                      <Search className="h-5 w-5" />
                      <span className="sr-only">Search</span>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo (Center for Mobile View) */}
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start space-x-2 absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none"
        >
          <Image
            src={logo}
            alt="Ceylon Wanderer"
            width={180}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8 text-base">
          <Link
            href="/trade-portal"
            className="text-sm font-medium text-base hover:text-green-900"
          >
            HOME
          </Link>
          <Link
            href="/about-us"
            className="text-sm font-medium text-base hover:text-green-900"
          >
            ABOUT US
          </Link>
          <Link
            href="/local-secrets"
            className="text-sm font-medium text-base hover:text-green-900"
          >
            DESTINATIONS
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-base hover:text-green-900"
          >
            CONTACT
          </Link>
        </div>

        {/* Right Section for Desktop */}
        <div className="hidden lg:flex items-center space-x-4 text-base">
          <Link
            href="https://instagram.com"
            className="text-base hover:text-green-900"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
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
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
