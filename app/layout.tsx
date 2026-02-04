import type { Metadata } from "next";
import { Geist, Geist_Mono, Shadows_Into_Light_Two } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shadowsFont = Shadows_Into_Light_Two({
  weight: "400",
  variable: "--font-shadows",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Habitat for Humanity — Western University",
    template: "%s | H4H Western",
  },
  description:
    "Western University's chapter of Habitat for Humanity. Join us in building affordable housing and empowering communities in London, Ontario.",
  openGraph: {
    title: "Habitat for Humanity — Western University",
    description:
      "Join Western's chapter of Habitat for Humanity. Build homes, build hope.",
    siteName: "H4H Western",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${shadowsFont.variable} antialiased`}
      >
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
