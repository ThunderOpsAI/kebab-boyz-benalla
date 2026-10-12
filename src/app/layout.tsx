import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kebab Boyz Benalla | Custom Kebabs, Halal Snack Packs (HSPs) & Pides",
  description: "Freshly sliced lamb, chicken & mixed donor kebabs, crispy chips, holy trinity sauces, and loaded HSPs in Benalla at 54C Carrier St. Call (03) 5762 7757 for scheduled pickup.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-amber-200 selection:text-amber-900 bg-stone-900 text-stone-100">
        {children}
      </body>
    </html>
  );
}
