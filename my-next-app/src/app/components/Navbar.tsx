"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GrTechnology } from "react-icons/gr";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="p-4 bg-background/50 z-10   sticky top-0 border-b backdrop-blur">
      <div className="container flex justify-between px-4 mx-auto items-center">
        {/* Logo */}
        <div className="font-bold text-xl flex items-center justify-center gap-1 text-purple-700 dark:text-purple-600">
          <GrTechnology />
          VibeWithJawaid
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className="hover:underline decoration-purple-700 decoration-4 hover:decoration-purple-700"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="hover:underline decoration-purple-700 decoration-4 hover:decoration-purple-700"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="hover:underline decoration-purple-700 decoration-4 hover:decoration-purple-700"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:underline decoration-purple-700 decoration-4 hover:decoration-purple-700"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="text-2xl">
                <IoMenu />
              </button>
            </SheetTrigger>

            <SheetContent className="bg-background/50 backdrop-blur-sm">
              <SheetHeader>
                <SheetTitle className="font-bold my-4 text-purple-700 dark:text-purple-600 flex items-center justify-center">
                  <GrTechnology />
                  VibeWithJawaid
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-4 items-start px-4 text-purple-700">
                    <Link href="/" onClick={closeMenu} className="hover:text-purple-500">
                      Home
                    </Link>
                    <Link href="/blog" onClick={closeMenu} className="hover:text-purple-500">
                      Blog
                    </Link>
                    <Link href="/about" onClick={closeMenu} className="hover:text-purple-500">
                      About
                    </Link>
                    <Link href="/contact" onClick={closeMenu} className="hover:text-purple-500">
                      Contact
                    </Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
