'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {IoHomeOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaWrench } from "react-icons/fa";

export default function NavBar() {
    const pathname = usePathname();

    return (
        <header className="z-10 fixed flex justify-center pointer-events-none top-4 left-0 right-0">
            <nav className="pointer-events-auto overflow-hidden max-w-[95vw]">
                <ul className="flex p-3 dark:bg-black border border-white/7 rounded-full gap-3 overflow-x-auto scrollbar-hide">
                    <li>
                        <Link
                        href="/"
                        className={`flex p-2.5 gap-1  items-center border border-white/7 rounded-full ${pathname == '/' ? 'bg-white/24' : 'bg-zinc-100/5'}`}>
                            <IoHomeOutline className="size-4.5 mb-1"/>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/About"
                        className={`flex p-2.5 gap-1 justify-center items-center border border-white/7 rounded-full ${pathname == '/About' ? 'bg-white/24' : 'bg-zinc-100/5'}`}>
                            <IoIosInformationCircleOutline className="size-4.5"/>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/Tech"
                        className={`flex p-2.5 gap-1.5 justify-center items-center border border-white/7 rounded-full ${pathname == '/Tech' ? 'bg-white/24' : 'bg-zinc-100/5'}`}>
                            <FaWrench className="size-4.5"/>
                            Tech
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
