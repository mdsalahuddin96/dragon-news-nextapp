'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({item}) => {
    const pathName=usePathname()
    const isActive=pathName===item.href
    return (
        <li>
            <Link href={item.href} className={`${isActive&&'border-b border-gray-700 font-semibold'}`}>{item.text}</Link>
        </li>
    );
};

export default NavLinks;