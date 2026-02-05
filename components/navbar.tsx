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

// Ripped paper bottom edge for navbar
function RippedPaperEdge() {
  return (
    <svg
      className="absolute -bottom-3 left-0 right-0 h-4 w-full pointer-events-none"
      viewBox="0 0 1200 16"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main torn edge - irregular jagged pattern */}
      <path
        d="M0 0 L0 4 L15 6 L25 3 L40 7 L52 4 L68 8 L85 5 L95 9 L110 6 L125 10 L140 5 L155 8 L172 4 L190 9 L205 6 L220 11 L238 7 L255 10 L270 5 L288 8 L305 12 L320 7 L338 9 L355 5 L372 10 L390 6 L408 11 L425 8 L440 13 L458 9 L475 12 L492 7 L510 10 L528 14 L545 9 L562 11 L580 6 L598 10 L615 13 L632 8 L650 11 L668 7 L685 12 L702 9 L720 14 L738 10 L755 13 L772 8 L790 11 L808 15 L825 10 L842 12 L860 7 L878 11 L895 14 L912 9 L930 12 L948 8 L965 13 L982 10 L1000 15 L1018 11 L1035 13 L1052 8 L1070 12 L1088 16 L1105 11 L1122 13 L1140 9 L1158 14 L1175 10 L1192 13 L1200 11 L1200 0 Z"
        fill="white"
      />
      {/* Subtle shadow/texture line */}
      <path
        d="M0 4 L15 6 L25 3 L40 7 L52 4 L68 8 L85 5 L95 9 L110 6 L125 10 L140 5 L155 8 L172 4 L190 9 L205 6 L220 11 L238 7 L255 10 L270 5 L288 8 L305 12 L320 7 L338 9 L355 5 L372 10 L390 6 L408 11 L425 8 L440 13 L458 9 L475 12 L492 7 L510 10 L528 14 L545 9 L562 11 L580 6 L598 10 L615 13 L632 8 L650 11 L668 7 L685 12 L702 9 L720 14 L738 10 L755 13 L772 8 L790 11 L808 15 L825 10 L842 12 L860 7 L878 11 L895 14 L912 9 L930 12 L948 8 L965 13 L982 10 L1000 15 L1018 11 L1035 13 L1052 8 L1070 12 L1088 16 L1105 11 L1122 13 L1140 9 L1158 14 L1175 10 L1192 13 L1200 11"
        stroke="#E2E8F0"
        strokeWidth="0.5"
        fill="none"
      />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-h4h-navy focus:shadow-lg"
      >
        Skip to main content
      </a>
      <nav aria-label="Main navigation">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-1.5 -ml-1">
            <Image
              src="/images/h4h-blue-no-text.png"
              alt="Habitat for Humanity Western University"
              width={44}
              height={44}
              className="h-10 w-10 rounded-lg"
              priority
            />
            <span className="hidden text-lg font-bold text-h4h-navy sm:inline">
              Western Habitat for Humanity
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-h4h-cyan-light text-h4h-cyan-dark"
                    : "text-h4h-gray-600 hover:bg-h4h-gray-50 hover:text-h4h-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={EXTERNAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-lg p-2 text-h4h-gray-600 transition-colors hover:bg-h4h-gray-50 hover:text-h4h-navy"
              aria-label="Follow us on Instagram (opens in new tab)"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <Button
              asChild
              className="ml-2 rounded-lg bg-h4h-cyan font-semibold text-white hover:bg-h4h-cyan-dark"
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
                className="rounded-lg p-2 text-h4h-navy transition-colors hover:bg-h4h-gray-50"
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
      <RippedPaperEdge />
    </header>
  );
}
