import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

const LoginWith = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold">Login With</h1>
      <div className="mt-4 space-y-2 mb-7">
        <h1 className="border border-blue-400 flex gap-1 items-center justify-center text-blue-400 p-1 rounded-sm">
          <FaGoogle></FaGoogle> Login With Google
        </h1>
        <h1 className="border border-gray-500 flex gap-1 items-center justify-center text-gray-500 p-1 rounded-sm">
          <FaGithub></FaGithub> Login With Github
        </h1>
      </div>
      <h1 className="text-lg font-semibold">Find Us On</h1>
      <div className="mt-4 border border-gray-300">
        <h1 className="border-b border-gray-200 flex gap-2 items-center text-[#706F6F] p-2 font-semibold ">
          <FaFacebook color="blue"/> Facebook
        </h1>
        <h1 className="border-b border-gray-200 flex gap-2 items-center text-[#706F6F] p-2 font-semibold ">
          <BsTwitter color="blue"/> Twitter
        </h1>
        <h1 className=" flex gap-2 items-center text-[#706F6F] p-2 font-semibold">
          <FaLinkedin color="blue" /> LinkedIn
        </h1>
      </div>
    </div>
  );
};

export default LoginWith;
