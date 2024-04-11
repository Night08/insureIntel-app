import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button"


function Navbar() {
  return (
    <nav className="flex justify-between py-4 px-4 md:px-8 items-center sticky top-0 z-50 bg-white shadow-sm">
      <div>
        <h1 className="text-2xl font-bold">InsureIntel</h1>
      </div>
      <div>
        <ul className="flex space-x-6 items-center ">
          <li>
            <Link href="/" className="text-lg text-gray-600 hover:text-gray-800">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-lg text-gray-600 hover:text-gray-800">
              About
            </Link>
          </li>
          
          <li>
            <Link href="/contact" className=" text-lg text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </li>
          <li>
            <Button>
                <p className="pl-4 pr-4 text-lg">Login</p>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
