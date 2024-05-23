"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { useSession, signOut } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  return (
    <nav className="flex justify-between py-4 px-4 md:px-8 items-center sticky top-0 z-50 bg-white shadow-sm">
      <div>
        <h1 className="text-2xl font-bold">InsureIntel</h1>
      </div>
      <div>
        <ul className="flex space-x-6 items-center ">
          <li>
            <Link
              href="/"
              className="text-lg text-gray-700 hover:text-gray-900"
            >
              {pathname == "/" ? <b>Home</b> : "Home"}
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-lg text-gray-700 hover:text-gray-900"
            >
              {pathname == "/about" ? <b>About</b> : "About"}
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className=" text-lg text-gray-700 hover:text-gray-900"
            >
              {pathname == "/contact" ? <b>Contact</b> : "Contact"}
            </Link>
          </li>
          <li>
            <div className="flex space-x-3">
              <Button
                onClick={() => {
                  signOut();
                  toast.success(`You're sucessfully logged out!`);
                }}
              >
                <p className="px-1 text-lg">Log out </p>
              </Button>
              <Image
                src={session.user?.image}
                height={45}
                width={45}
                title={`${session.user?.name}: ${session.user?.email}`}
                alt="profile"
                className="mr-3 ml-1 object-cover rounded-full"
              />{" "}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
