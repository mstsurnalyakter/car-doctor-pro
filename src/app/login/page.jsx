// "use client"
// import Image from 'next/image'
// import Link from 'next/link';
// import React from 'react'
// import {signIn} from "next-auth/react";

// import {BsGoogle,BsGithub} from 'react-icons/bs';

// const LoginPage = async () => {
//   const handleLogin = event =>{
//     event.preventDefault();
//      const  email = event.target.email.value;
//      const password= event.target.password.value;
//      const resp = signIn("credentials",{
//       email,password,redirect:false
//      })
//      console.log(resp);

//   }
//   return (
//     <div className="container mx-auto mt-24 px-24">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
//         <div>
//           <Image
//             width={540}
//             height={540}
//             src="/assets/images/login/login.svg"
//             alt="login image"
//           />
//         </div>
//         <div className="border p-12 ">
//           <h1 className="text-3xl text-primary  font-semibold text-center">
//             Sign In
//           </h1>
//           <form onSubmit={handleLogin} action="">
//             <div className="mb-8 space-y-4">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Enter you email here"
//                 className="input input-bordered  w-full text-black"
//               />
//             </div>

//             <div className="mb-8 space-y-4">
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Enter Password here"
//                 className="input input-bordered  w-full  text-black"
//               />
//             </div>
//             <button type="submit" className="btn btn-primary w-full">
//               SignIn
//             </button>
//           </form>
//           <div className="divider divider-primary my-6">or SignIn with</div>
//           <div className="flex items-center justify-center gap-6">
//             <button className="btn flex items-center justify-center text-primary">
//               <BsGoogle />
//             </button>
//             <button className="btn  flex items-center justify-center text-primary">
//               <BsGithub />
//             </button>
//           </div>
//           <div>
//             <h6 className="my-10 text-center">
//               Not have account?{" "}
//               <Link
//                 className="text-primary font-semibold underline"
//                 href={"/signup"}
//               >
//                 SignUp
//               </Link>
//             </h6>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage



"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn} from "next-auth/react";
import {  useSearchParams } from "next/navigation";
import SocialSignin from "@/components/shared/SocialSignin";


const Page = () => {

  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path ? path : "/",
    });
    console.log(resp);
  };

  return (
    <div className="container px-24 mx-auto py-24">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            height="540"
            width="540"
            alt="login image"
          />
        </div>
        <div className="border-2 p-12">
          <h6 className="text-3xl font-semibold text-primary text-center mb-12">
            Sign In
          </h6>
          <form onSubmit={handleLogin} action="">
            <label htmlFor="email">Email</label> <br />
            <input
              type="text"
              name="email"
              placeholder="your email"
              className="mt-3 w-full input input-bordered text-black"
            />
            <br /> <br />
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              name="password"
              placeholder="your password"
              className="w-full mt-3 input input-bordered text-black"
            />
            <br />
            <button
              type="submit"
              className="w-full btn btn-primary mt-12 text-lg"
            >
              Sign In
            </button>
          </form>
          <div>
            <h6 className="my-12 text-center">or sign in with</h6>
            <SocialSignin />
            <h6 className="my-12 text-center">
              not have account ?{" "}
              <Link className="text-primary font-semibold" href={"/signup"}>
                Sign Up
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;