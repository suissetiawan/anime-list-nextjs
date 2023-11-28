import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Poppins, Nunito } from "next/font/google";
import { Providers } from "./providers";
import NavbarApp from "./commons/components/Navbar";
import TopLoader from "./commons/components/TopLoader";

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
        <TopLoader />
        <Providers>
          <div className="p-4 md:p-10">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
