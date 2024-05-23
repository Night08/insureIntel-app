const { RefreshCcw } = require("lucide-react");

import React from "react";
import { signIn } from "next-auth/react";

function logout() {
  const handleSignin = async (provider) => {
    await signIn(provider);
  };

  // rendering components for not logged in users
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="card card-compact w-[45%] bg-base-100 shadow-2xl rounded-xl">
          <p className="text-3xl bg-black text-white p-10 font-bold text-center">
            InsureIntel: Smart Defense Against Insurance Fraud
          </p>
          <div className="card-body bg-white p-4">
            <h2 className="card-title text-red-500">Alert!</h2>
            <p className="text-lg">
              Your are not signed in. Please sign in to access the application!
            </p>
            <div className="card-actions justify-end space-x-3 my-4">
              <button
                className="btn bg-blue-800 border-blue-800 hover:bg-blue-700 text-base text-white"
                onClick={() => {
                  handleSignin("google");
                }}
              >
                Sign in with <b>Google</b>
              </button>
              <button
                className="btn bg-black hover:bg-gray-700 text-base text-white"
                onClick={() => {
                  handleSignin("github");
                }}
              >
                Sign in with <b>Github</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default logout;
