import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nextum AI — KOBİ'ler için Stratejik AI Asistanı",
  description:
    "7 boyutlu organizasyonel teşhis ve 90 günlük eylem planıyla şirketinizin stratejik körlüğünü aşın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
