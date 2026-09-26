"use client";
import { AuroraText } from "@/components/shadcnui/aurora-text";
import {
  Menubar,
  MenubarItem,
  MenubarMenu,
} from "@/components/shadcnui/menubar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/shadcnui/sheet";
import {
  FileBadgeIcon,
  HomeIcon,
  IdCardIcon,
  MenuIcon,
  UserRoundCheckIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MobileNav = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet
      open={isOpen}
      onOpenChange={setIsOpen}>
      <SheetTrigger
        className="mt-3"
        aria-label="Nav-Menu-Button">
        <MenuIcon />
      </SheetTrigger>

      <SheetContent>
        <SheetHeader className="border-b-2">
          <AuroraText
            colors={["#833AB4", "#C13584", "#E1306C", "#FD1D1D", "#FCAF45"]}
            className="text-xl font-semibold whitespace-nowrap lg:hidden xl:block"
            speed={0}>
            Mars Academy
          </AuroraText>

          <SheetDescription className="text-balance">
            Your dedicated space to Login, access resources, and stay updated.
          </SheetDescription>
        </SheetHeader>

        <section className="w-full">
          <Menubar className="w-full flex-col items-start gap-2 border-0 shadow-none">
            <MenubarMenu>
              <MenubarItem
                className="cursor-pointer hover:bg-blue-400/6 hover:text-blue-600 focus:bg-blue-400/6 focus:text-blue-600"
                onClick={() => setIsOpen(false)}
                render={
                  <a href="https://marsacademy.in/">
                    <HomeIcon />
                    Back to Home
                  </a>
                }
              />

              <MenubarItem
                className={`${path === "/student-zone/online-registration" ? "bg-blue-400/8 text-blue-600" : "cursor-pointer hover:bg-blue-400/6 hover:text-blue-600"} w-full focus:bg-blue-400/8 focus:text-blue-600`}
                onClick={() => setIsOpen(false)}
                render={
                  <Link href="/student-zone/online-registration">
                    <FileBadgeIcon />
                    Registration
                  </Link>
                }
              />

              <MenubarItem
                className={`${path === "/student-zone" ? "bg-blue-400/8 text-blue-600" : "cursor-pointer hover:bg-blue-400/8 hover:text-blue-600"} w-full focus:bg-blue-400/6 focus:text-blue-600`}
                onClick={() => setIsOpen(false)}
                render={
                  <Link href="/student-zone">
                    <UserRoundCheckIcon /> Student Login
                  </Link>
                }
              />

              <MenubarItem
                className={`${path === "/student-zone/certificate-verification" ? "bg-blue-400/8 text-blue-600" : "cursor-pointer hover:bg-blue-400/6 hover:text-blue-600"} w-full focus:bg-blue-400/8 focus:text-blue-600`}
                onClick={() => setIsOpen(false)}
                render={
                  <Link href="/student-zone/certificate-verification">
                    <IdCardIcon />
                    Certificate Verification
                  </Link>
                }
              />
            </MenubarMenu>
          </Menubar>
        </section>

        <SheetFooter className="border-t pt-4">
          <div className="w-full text-center">
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} Mars Academy
            </p>
            <p className="text-muted-foreground text-[11px]">
              Build Skills Build Future
            </p>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
