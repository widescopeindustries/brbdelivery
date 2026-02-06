import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brbdeliveries.com"),
  title: "BRB Deliveries | Grocery & Errand Delivery in Streetman, Corsicana & Richland Chambers",
  description: "Personal delivery service for Streetman, Corsicana & Richland Chambers Lake. Grocery shopping, errands & more. Call Elise: 469-506-6606. Same-day delivery available!",
  keywords: [
    "grocery delivery streetman tx",
    "corsicana delivery service",
    "richland chambers lake delivery",
    "personal shopper corsicana",
    "errand runner streetman texas",
    "same day delivery navarro county",
    "grocery delivery corsicana",
    "local delivery service texas",
  ],
  authors: [{ name: "Elise Contreras" }],
  creator: "BRB Deliveries",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brbdeliveries.com",
    siteName: "BRB Deliveries",
    title: "BRB Deliveries | Local Delivery Service",
    description: "Personal delivery service for Streetman, Corsicana & Richland Chambers Lake. Call Elise: 469-506-6606",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BRB Deliveries - Bringing Love & Convenience Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRB Deliveries | Local Delivery Service",
    description: "Personal delivery service for Streetman, Corsicana & Richland Chambers Lake.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://brbdeliveries.com",
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
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "BRB Deliveries",
              "description": "Personal delivery service for Streetman, Corsicana & Richland Chambers Lake area",
              "url": "https://brbdeliveries.com",
              "telephone": "+1-469-506-6606",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "316 Brandywine Ave",
                "addressLocality": "Streetman",
                "addressRegion": "TX",
                "postalCode": "75859",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 31.8795,
                "longitude": -96.3219
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Streetman",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Texas"
                  }
                },
                {
                  "@type": "City",
                  "name": "Corsicana",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Texas"
                  }
                },
                {
                  "@type": "Place",
                  "name": "Richland Chambers Reservoir"
                }
              ],
              "openingHours": "Mo-Sa 08:00-19:00",
              "priceRange": "$$",
              "serviceType": ["Grocery Delivery", "Errand Running", "Personal Shopping"]
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
