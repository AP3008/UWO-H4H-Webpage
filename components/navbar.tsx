"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { NAV_LINKS, EXTERNAL_LINKS } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-h4h-cyan shadow-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-h4h-navy focus:shadow-lg"
      >
        Skip to main content
      </a>
      <nav aria-label="Main navigation">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/h4h-logo.png"
              alt="Habitat for Humanity Western University"
              width={180}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-white/20 text-white"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={EXTERNAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-lg p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Follow us on Instagram (opens in new tab)"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <Button
              asChild
              className="ml-2 bg-white text-h4h-cyan hover:bg-white/90 font-semibold"
            >
              <a
                href={EXTERNAL_LINKS.membership}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Us
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="rounded-lg p-2 text-white transition-colors hover:bg-white/10"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-white">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-2 pt-8">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-h4h-cyan-light text-h4h-cyan-dark"
                          : "text-h4h-gray-600 hover:bg-h4h-gray-50 hover:text-h4h-navy"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <hr className="my-2 border-h4h-gray-200" />
                <a
                  href={EXTERNAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-h4h-gray-600 transition-colors hover:bg-h4h-gray-50 hover:text-h4h-navy"
                >
                  <Instagram className="h-5 w-5" />
                  Instagram
                </a>
                <Button
                  asChild
                  className="mx-4 mt-2 bg-h4h-cyan text-white hover:bg-h4h-cyan-dark"
                >
                  <a
                    href={EXTERNAL_LINKS.membership}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Us
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
