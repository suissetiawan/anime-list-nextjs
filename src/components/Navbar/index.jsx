import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import InputSearch from "./InputSearch";

const NavbarApp = () => {
  return (
    <Navbar isBordered className="w-screen" maxWidth="full" height="5rem">
      <NavbarContent justify="start">
        <Link href="/" className="mr-4">
          <p className="font-bold text-2xl text-secondary-600">ANIMELIST</p>
        </Link>
        <div className="hidden sm:flex gap-3 ">
          <NavbarItem>
            <Link href="/populer" aria-current="page">
              Populer Anime
            </Link>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <InputSearch />
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarApp;
