import type { Metadata } from "next";
import "./globals.css";
import { OuterSans } from "./fonts";

export const metadata: Metadata = {
  title: "PRATHAM's Submission for Chainlabs",
  description: "Created by PRATHAM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={OuterSans.className}>{children}</body>
    </html>
  );
}
