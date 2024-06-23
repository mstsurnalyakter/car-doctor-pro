// import { useSession, signOut } from "next-auth/react";
"use client";
import { signOut, useSession } from "next-auth/react";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsCartXFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";


const NavBar = () => {
const session = useSession()


  return (
    <div className="bg-base-100 text-slate-900">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems?.map((item) => (
                <Link href={item.path} key={item.title}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <Link href={"/"}>
            <Image alt="logo" src="/assets/logo.svg" height={60} width={100} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-10">
            {navItems?.map((item) => (
              <Link
                className="font-semibold hover:text-primary duration-300"
                href={item.path}
                key={item.title}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex space-x-3 items-center">
            <BsCartXFill className="text-lx" />
            <FaSearch className="text-lx" />
            <a className="btn btn-outline btn-primary px-8">Appointment</a>
            {/* hhhhhhhhh */}
            {/* <div>
            <Image alt={session?.data?.user?.name} src={session?.data?.user?.image} height={50} width={50} className="rounded-full"/>
          </div> */}
            {session?.status === "loading" && <h6>Loading....</h6>}
            {session?.status === "unauthenticated" && (
              <Link href="/login" className="btn btn-primary px-8">
                Login
              </Link>
            )}
            {session?.status === "authenticated" && (
              <button
                className="btn btn-outline btn-ghost px-8"
                onClick={() => signOut()}
              >
                Logout
              </button>
            )}
            {/* <Link href={'/login'} className="btn btn-primary px-8">SignIn</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}


 const navItems = [
   {
     title: "Home",
     path: "/",
   },
   {
     title: "About",
     path: "/about",
   },
   {
     title: "Services",
     path: "/services",
   },
   {
     title: "Blog",
     path: "/blog",
   },
   {
     title: "Contacts",
     path: "/contacts",
   },
 ];

















export default NavBar