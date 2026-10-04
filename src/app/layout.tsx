import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import { site } from "@/data/site";
import { MotionRoot } from "@/components/Motion";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://adnan-patel.vercel.app"),
  title: site.title,
  description: site.description,
  openGraph: { title: site.title, description: site.description, type: "website", siteName: site.name },
  twitter: { card: "summary", title: site.title, description: site.description },
};
export const viewport: Viewport = { themeColor: "#0D0E0F" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans"><MotionRoot>{children}</MotionRoot></body>
    </html>
  );
}
