import React from "react";

function Result() {
  return (
    <>
      <div className="font-semibold text-2xl">Result:</div>

      <div className="text-2xl text-white text-center py-10 px-22 rounded-2xl bg-red-700 font-semibold my-7 mx-14 w-auto">
        {" "}
        The claim is Fraudulent
      </div>
    </>
  );
}

export default Result;
