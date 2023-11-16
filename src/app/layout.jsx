import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavbarApp from "../components/Navbar";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "AnimeList App",
  description: "All anime what you match is here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <NavbarApp />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
