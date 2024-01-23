import React, { useRef, useState } from "react";
import Header from "./Header";
import { validationCheck } from "../utils/validationCheck";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignINForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonclicked = () => {
    const message = validationCheck(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //Signup Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg_img"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" text-white bg-opacity-80 rounded-lg p-8 pb-10 w-3/12 my-36 mx-auto left-0 right-0 absolute  bg-black"
      >
        <h1 className="font-bold text-3xl p-2 mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-2 my-4 w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-2 my-4 w-full bg-gray-700"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-2 my-4 w-full  bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <p className="font-bold text-lg text-red-600 py-4">{errorMessage}</p>

        <button
          onClick={handleButtonclicked}
          className="p-4   mt-10  bg-red-800 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="p-4 my-4">
            New to Netflix?
            <span className="cursor-pointer px-2" onClick={toggleSignINForm}>
              Sign up now
            </span>
          </p>
        ) : (
          <p className="p-4 my-4">
            Already Registered?
            <span className="cursor-pointer px-2" onClick={toggleSignINForm}>
              Sign In now
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
