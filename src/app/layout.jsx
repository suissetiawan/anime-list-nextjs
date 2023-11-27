import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavbarApp from "./commons/components/Navbar";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "AnimeList App",
  description: "All anime what you match is here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={nunito.className} suppressHydrationWarning={true}>
        <NavbarApp />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
