import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import userAvatar from '@/assets/user.png'
import Image from "next/image";
import { Button } from "@heroui/react";
const Navbar = () => {
    const navItems=[
        {
            href:'/',
            text:'Home'
        },
        {
            href:'/about',
            text:'About'
        },
        {
            href:'/career',
            text:'Career'
        },
    ]
  return (
    <nav className="container mx-auto ">
      <header className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          
        </div>
        <ul className="flex items-center gap-4">
          {navItems.map((item,ind)=><NavLinks key={ind} item={item}></NavLinks>)}
        </ul>
        <div className="flex items-center gap-1">
            <Image
            src={userAvatar}
            alt="user avatar image"
            width={40}
            height={40}
            />
            <Button className='bg-[#403F3F] text-white rounded-none'>Login</Button>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
