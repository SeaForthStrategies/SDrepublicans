import type { Metadata, Viewport } from "next";
import { Libre_Franklin, Source_Sans_3 } from "next/font/google";
import "./globals.css";

/** Body copy — readable, neutral; pairs with heading font */
const fontBody = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

/** Headlines, labels, hero — editorial / print-adjacent */
const fontHeading = Libre_Franklin({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Republican Leadership — Official Endorsement Guide",
  description: "A digital recreation of the official endorsement guide mailer.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  /** Keeps UI consistent with the light mailer (no OS dark-mode palette swap). */
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontBody.variable} ${fontHeading.variable} h-full antialiased`}
    >
      <body className="min-h-full min-w-0 touch-manipulation flex flex-col overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
