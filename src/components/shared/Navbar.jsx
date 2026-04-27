"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import userAvatar from "@/assets/user.png";
import Image from "next/image";
import { Button, Spinner } from "@heroui/react";

const Navbar = () => {
  const navItems = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/about",
      text: "About",
    },
    {
      href: "/career",
      text: "Career",
    },
  ];

  const { data, isPending } = useSession();
  const user = data?.user;

  return (
    <nav className="container mx-auto ">
      <header className="flex justify-between items-center ">
        <div className=""></div>
        {user&&<div className=""></div>}
        
        <ul className="flex items-center justify-end gap-4 ">
          {navItems.map((item, ind) => (
            <NavLinks key={ind} item={item}></NavLinks>
          ))}
        </ul>

        {isPending ? (
          <div className="flex flex-col items-center gap-2">
            <Spinner color="success" />
            <span className="text-xs text-muted"></span>
          </div>
        ) : user ? (
          <div className="flex  items-center gap-1 ">
            <p>{user.name}</p>
            <Image
              src={user?.image || userAvatar}
              alt="user avatar image"
              width={40}
              height={40}
              className="rounded-full"
            />
            <Button
              className="bg-[#403F3F] text-white rounded-none"
              onClick={() => signOut()}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Link href={"/signin"}>
            <Button className="bg-[#403F3F] text-white rounded-none">
              Login
            </Button>
          </Link>
        )}
      </header>
    </nav>
  );
};

export default Navbar;
