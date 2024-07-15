import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { Validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.jsx";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);
  const number = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const numberValue = isSignIn ? null : number.current.value;

    let message = Validate(emailValue, passwordValue, numberValue);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // Sign Up logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: "name.current.value",
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              // ...
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = "user not found.Please Sign Up";
          setErrorMessage(errorMessage);
        });
    }
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
        <form
          className="py-9 px-12 bg-black md:w-3/12 rounded-lg shadow-lg text-white bg-opacity-80 flex justify-center items-center flex-col"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-bold md:text-3xl py-3 text-xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="px-3 py-2 mx-1 w-[90%] rounded my-2 bg-gray-700 bg-opacity-40"
            />
          )}
          {!isSignIn && (
            <input
              ref={number}
              type="tel"
              placeholder="Phone Number"
              className="px-3 py-2 mx-1 w-[90%] rounded my-2 bg-gray-700 bg-opacity-40"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="px-3 py-2 mx-1 w-[90%] rounded my-2 bg-gray-700 bg-opacity-40"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="px-3 py-2 mx-1 w-[90%] rounded my-2 bg-gray-700 bg-opacity-40"
          />
          <div className="flex w-[90%]">
            <p className="text-red-500 text-sm">{errorMessage}</p>
          </div>
          <button
            className="p-[6px] mx-1 my-2 w-[90%] text-white rounded bg-red-600 text-sm"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="w-[90%] my-4 text-sm font-sans cursor-pointer ">
            <p onClick={toggleSignIn}>
              {isSignIn
                ? "New to Netflix? Sign Up Now"
                : "Already Registered? Sign In Now."}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
