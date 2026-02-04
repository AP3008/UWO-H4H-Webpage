import Link from "next/link";
import Image from "next/image";
import { Instagram, ExternalLink } from "lucide-react";
import { NAV_LINKS, EXTERNAL_LINKS } from "@/lib/data";
import { SketchyDivider, StarDoodle } from "@/components/sketchy-elements";

export function Footer() {
  return (
    <footer className="relative bg-h4h-navy text-white overflow-hidden">
      {/* Wavy top edge */}
      <SketchyDivider
        className="absolute -top-1 left-0 right-0"
        color="#1B2A4A"
        flip
      />

      {/* Decorative stars */}
      <StarDoodle className="absolute top-8 right-[5%] w-4 h-4 text-white/10" />
      <StarDoodle className="absolute bottom-16 left-[8%] w-3 h-3 text-white/10" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Image
              src="/images/h4h-logo.png"
              alt="Habitat for Humanity Western University"
              width={160}
              height={42}
              className="h-9 w-auto"
            />
            <p className="text-sm leading-relaxed text-white/70">
              The Western University chapter of Habitat for Humanity is
              dedicated to building affordable housing and empowering
              communities in London, Ontario.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={EXTERNAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Instagram className="h-4 w-4" />
                  @h4hwesternuniversity
                  <span className="sr-only">(opens in new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.membership}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                  Become a Member
                  <span className="sr-only">(opens in new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-white/50 sm:flex-row">
            <p>
              &copy; {new Date().getFullYear()} Habitat for Humanity — Western
              University Chapter
            </p>
            <p>Part of Habitat for Humanity Canada</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
