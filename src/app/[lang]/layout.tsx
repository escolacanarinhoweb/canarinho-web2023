import "./globals.css";
import { Sofia, Comic_Neue, Mulish } from "next/font/google";

// const inter = Inter({ subsets: ['latin'] })
const sofia = Sofia({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-sofia",
});
const comic_neue = Comic_Neue({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-comic-neue",
});
const mulish = Mulish({ subsets: ["latin"], variable: "--font-mulish" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${sofia.variable} ${comic_neue.variable} ${mulish.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
