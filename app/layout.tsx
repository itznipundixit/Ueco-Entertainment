import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsappButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://uecoentertainment.com"), // ✅ ADD THIS

  title: "UECO Entertainment | Events • Production • Experiences",
  description:
    "UECO Entertainment is a premier event production and creative experiences company delivering unforgettable events.",

  keywords: [
    "UECO Entertainment",
    "event management company",
    "event production",
    "concert production",
    "corporate events",
    "live events India",
  ],

  openGraph: {
    title: "UECO Entertainment",
    description:
      "Creating unforgettable events, productions, and creative experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UECO Entertainment OG Image",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
