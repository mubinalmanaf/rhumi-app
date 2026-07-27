import type { Metadata, Viewport } from "next";
import { Lora, Figtree } from "next/font/google";
import "./globals.css";
import SkyBackground from "@/components/SkyBackground";

// Match the app: Lora (serif — verses/display), Figtree (sans — UI/body).
const serif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const sans = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://rhumi.app";
const TITLE = "Rhumi — Begin again, quietly.";
const DESCRIPTION =
  "A still point in a loud world. One verse, one reflection, and a gentle companion for the quiet moments of your day. Request early access.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rhumi.app"),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Rhumi",
  keywords: [
    "Rhumi",
    "daily reflection",
    "mindfulness",
    "Qur'an reflection",
    "spiritual companion",
    "calm",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Rhumi",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1B1826",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="grain antialiased">
        <SkyBackground />
        {children}
      </body>
    </html>
  );
}
