import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minh's portfolio page",
  description: "Follow me for more information",
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
