"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGoogle, BsGithub } from "react-icons/bs";

const signUpPage = async () => {
  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mx-auto mt-24 px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div>
          <Image
            width={540}
            height={540}
            src="/assets/images/login/login.svg"
            alt="login image"
          />
        </div>
        <div className="border p-12 ">
          <h1 className="text-3xl text-primary  font-semibold text-center">
            Sign Up
          </h1>
          <form onSubmit={handleSignUp} action="">
            <div className="mb-8 space-y-4">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter you Name here"
                className="input input-bordered  w-full text-black"
              />
            </div>
            <div className="mb-8 space-y-4">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter you email here"
                className="input input-bordered  w-full text-black"
              />
            </div>

            <div className="mb-8 space-y-4">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password here"
                className="input input-bordered  w-full  text-black"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              SignIn
            </button>
          </form>
          <div className="divider divider-primary my-6">or SignIn with</div>
          <div className="flex items-center justify-center gap-6">
            <button className="btn flex items-center justify-center text-primary">
              <BsGoogle />
            </button>
            <button className="btn  flex items-center justify-center text-primary">
              <BsGithub />
            </button>
          </div>
          <div>
            <h6 className="my-10 text-center">
              Already have an account.{" "}
              <Link
                className="text-primary font-semibold underline"
                href={"/login"}
              >
                SignIn
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signUpPage;
