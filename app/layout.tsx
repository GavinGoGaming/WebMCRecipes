import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebMC Recipes",
  description: "WebMC Recipe list",
  icons: "https://play.webmc.fun/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
