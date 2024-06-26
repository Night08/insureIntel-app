import React from "react";

function page() {
  return (
    <>
      <div className="container flex flex-col justify-center items-center w-[70%]">
        <div className="my-8">
          {" "}
          <p className="text-2xl font-semibold text-center mb-5">Join Us</p>
          Join the growing number of insurance companies that trust InsureIntel
          to safeguard their operations and improve their fraud detection
          capabilities. Together, we can build a more secure and efficient
          insurance industry.
        </div>
        <div>
          <p className="text-2xl font-semibold text-center mb-5">Contact Us</p>
          Have questions or want to learn more about how InsureIntel can help
          your organization? Reach out to us today, and let’s explore how we can
          work together to combat insurance fraud.
          <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 mt-10">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
                <div className="text-center pb-6">
                  <h1 className="text-3xl">Contact Us!</h1>

                  <p className="text-gray-300">
                    Fill up the form below to send us a message.
                  </p>
                </div>

                <form>
                  <input
                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />

                  <input
                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />

                  <input
                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Subject"
                    name="_subject"
                  />

                  <textarea
                    className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline "
                    type="text"
                    placeholder="Type your message here..."
                    name="message"
                  ></textarea>

                  <div className="flex justify-between">
                    <input
                      className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                      value="Send ➤"
                    />
                    <input
                      className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="reset"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
