"use client";

import {
  Menubar,
  MenubarItem,
  MenubarMenu,
} from "@/components/shadcnui/menubar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

const NavBar = () => {
  const path = usePathname();

  return (
    <nav className="flex items-center justify-between px-6 py-2 shadow">
      <Link href={"/student-zone"}>
        <Image
          src="/logo.png"
          alt="mars-academy-logo"
          height={400}
          width={400}
          loading="eager"
          className="h-9 w-auto"
        />
      </Link>

      <Menubar className="hidden space-x-4 border-0 shadow-none lg:flex">
        <MenubarMenu>
          <MenubarItem
            className="cursor-pointer hover:bg-blue-400/6 hover:text-blue-600 focus:bg-blue-400/6 focus:text-blue-600"
            render={<a href="https://marsacademy.in/">Back to Home</a>}
          />

          <MenubarItem
            className={`${path === "/student-zone/online-registration" ? "bg-blue-400/8 text-blue-600" : "cursor-pointer hover:bg-blue-400/6 hover:text-blue-600"} focus:bg-blue-400/8 focus:text-blue-600`}
            render={
              <Link href="/student-zone/online-registration">Registration</Link>
            }
          />

          <MenubarItem
            className={`${path === "/student-zone" ? "bg-blue-400/8 text-blue-600" : "cursor-pointer hover:bg-blue-400/8 hover:text-blue-600"} focus:bg-blue-400/6 focus:text-blue-600`}
            render={<Link href="/student-zone">Student Login</Link>}
          />

          <MenubarItem
            className={`${path === "/student-zone/certificate-verification" ? "bg-blue-400/8 text-blue-600" : "cursor-pointer hover:bg-blue-400/6 hover:text-blue-600"} focus:bg-blue-400/8 focus:text-blue-600`}
            render={
              <Link href="/student-zone/certificate-verification">
                Certificate Verification
              </Link>
            }
          />
        </MenubarMenu>
      </Menubar>

      <nav className="block lg:hidden">
        <MobileNav />
      </nav>
    </nav>
  );
};

export default NavBar;
