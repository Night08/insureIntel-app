"use client";
import React from "react";

import { useSession, signIn } from "next-auth/react";
import Logout from "../logout/Logout";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function HomeWrapper({ children }) {
  // extracting data from usesession as session
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <>
        <div className="container min-h-screen flex justify-center items-center">
          <span className="loading loading-ball loading-xs"></span>
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-md"></span>
          <span className="loading loading-ball loading-lg"></span>
        </div>
      </>
    );
  }
  // checking if sessions exists
  if (session) {
    // rendering components for logged in users
    return (
      <>
        <Navbar />
        <div className=" container min-h-screen">{children}</div>

        <Footer />
      </>
    );
  }
  return <Logout />;
}

export default HomeWrapper;
