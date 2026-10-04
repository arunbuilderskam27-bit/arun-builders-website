import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { businessData } from "@/data/config";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: `${businessData.name} | Builders in Madurai`,
  description: businessData.description,
  keywords: ["builders in Madurai", "construction company in Madurai", "house construction Madurai", "residential construction Madurai", "commercial construction Madurai", "building contractors Madurai", "renovation services Madurai", "builders near Nagamalai Puthukottai"],
  openGraph: {
    title: `${businessData.name} | Premium Construction Services`,
    description: businessData.description,
    url: businessData.websiteUrl,
    siteName: businessData.name,
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": businessData.name,
              "image": businessData.projects[0]?.image || "",
              "@id": businessData.websiteUrl,
              "url": businessData.websiteUrl,
              "telephone": businessData.phone,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Nagamalai Puthukottai",
                "addressLocality": "Madurai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "625019",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 9.9405, // Approximation for Nagamalai Puthukottai
                "longitude": 78.0436
              },
              "sameAs": Object.values(businessData.socialMedia).filter(url => url && !url.includes('placeholder'))
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans pb-20 lg:pb-0`}>
        {children}
      </body>
    </html>
  );
}
