import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg"
          alt="bg"
        />
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <form className="py-9 px-12 bg-black w-96 rounded-lg shadow-lg text-white bg-opacity-80 flex justify-center items-center flex-col">
          <h1 className="font-bold text-3xl py-3 ">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="px-3 py-2 mx-1 w-[90%] rounded my-2 bg-gray-700"
            />
          )}
          {!isSignIn && (
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-3 py-2 mx-1 w-[90%] rounded my-2 bg-gray-700"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="px-3 py-2 mx-1 w-[90%] rounded my-2 bg-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-3 py-2 mx-1 w-[90%] rounded my-2 bg-gray-700"
          />
          <button className="p-[6px] mx-1 my-2 w-[90%] text-white rounded bg-red-600 text-sm">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="  w-[90%] my-4 text-sm font-sans cursor-pointer ">
            <p onClick={toggleSignIn}>
              {isSignIn
                ? "New to Netflix?Sign Up Now"
                : "Already Registered? Sign In Now."}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// for managing the form where form has many input fields we can use external library such as formik .js
