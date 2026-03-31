import type { Metadata } from "next";
import { manrope, inter, spaceGrotesk } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "LiveIQ - The AI Front Desk",
    template: "%s - LiveIQ",
  },
  description:
    "The AI front desk built to grow Medical, Fitness, & Wellness franchises. Handles all calls + texts. Books appointments. Grows your business.",
  icons: {
    icon: "/images/FAVICON.png",
    apple: "/images/FAVICON.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
