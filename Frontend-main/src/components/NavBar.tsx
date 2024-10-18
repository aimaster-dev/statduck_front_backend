"use client";
import LoginModal from '../app/login/LoginModal';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineUser, AiOutlineWallet } from 'react-icons/ai';
const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);
    const toggleNavbar = () => {
        setOpenNavbar(!openNavbar);
    };
    const closeNavbar = () => {
        setOpenNavbar(false);
    };

    return (
        <header className="absolute inset-x-0 top-0 z-50 py-6">
            <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
                <nav className="w-full flex justify-between gap-6 relative">
                    <div className="min-w-max inline-flex relative">
                        <Link href="/" className="relative flex items-center gap-3">
                            <div className="relative w-7 h-7 overflow-hidden flex rounded-xl">

                                <Image src="/logo.svg" alt="Logo" width={28} height={28} className="rounded-xl" />


                            </div>
                            <div className="inline-flex text-lg font-semibold text-gray-900 dark:text-white">
                                StatDucks
                            </div>
                        </Link>
                    </div>
                    <div onClick={closeNavbar} aria-hidden="true" className={`
                        fixed inset-0 bg-gray-800/60 bg-opacity-50 backdrop-filter backdrop-blur-xl
                        ${openNavbar ? "flex lg:hidden" : "hidden"}
                    `} />
                    <div className={`
                        flex overflow-hidden duration-300 ease-linear flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-between lg:items-center absolute lg:relative top-full lg:top-0 bg-white dark:bg-gray-950 lg:!bg-transparent border-x border-x-gray-100 dark:border-x-gray-900 lg:border-x-0
                        ${openNavbar ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-10 lg:visible lg:opacity-100 lg:-translate-y-0"}
                    `}>
                        <ul className="border-t border-gray-100 dark:border-gray-900 lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-gray-700 dark:text-gray-300 w-full lg:justify-center lg:items-center">
                            <li>
                                <Link href="/" className="duration-300 font-medium ease-linear hover:text-[#AFFFCF] py-3">
                                    Home
                                </Link>

                            </li>
                            <li>
                                <Link href="/contact" className="duration-300 font-medium ease-linear hover:text-[#AFFFCF] py-3">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="duration-300 font-medium ease-linear  hover:text-[#AFFFCF] py-3">
                                    About us
                                </Link>
                            </li>

                           

                            <li>
                                <Link href="#" className="duration-300 font-medium ease-linear  hover:text-[#AFFFCF] py-3">
                                    Tokenomics
                                </Link>
                            </li>
                        </ul>
                        <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-gray-100 dark:border-gray-900 lg:border-0 px-6 lg:px-0">
                            <Link href="#" className="flex justify-center items-center w-full sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]">
                                <span className="relative z-10 text-white">
                                    Get Started
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="min-w-max flex items-center gap-x-3">
                        <button className="outline-none flex relative text-gray-700 dark:text-gray-300 rounded-full p-2 lg:p-3 border border-gray-100 dark:border-gray-900 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 dark:flex hidden">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 dark:hidden">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                            <span className="sr-only">switch theme</span>
                        </button>
                        <Link href="/login" className="outline-none flex relative text-gray-700 dark:text-gray-300 rounded-full p-2 lg:p-3 border border-gray-100 dark:border-gray-900">
                            <AiOutlineUser className="w-6 h-6" />
                            <span className="sr-only">wallet</span>
                        </Link>
                        <Link href="/wallet" className="outline-none flex relative text-gray-700 dark:text-gray-300 rounded-full p-2 lg:p-3 border border-gray-100 dark:border-gray-900">
                            <AiOutlineWallet className="w-6 h-6" />
                            <span className="sr-only">wallet</span>
                        </Link>
                        <button onClick={toggleNavbar} className="lg:hidden lg:invisible outline-none w-7 h-auto flex flex-col relative">
                            <span className="sr-only">
                                toggle navbar
                            </span>
                            <span className={`
                                w-6 h-0.5 rounded-full bg-gray-700 dark:bg-gray-300 transition-transform duration-300 ease-linear
                                ${openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""}
                            `} />
                            <span className={`
                                w-6 h-0.5 rounded-full bg-gray-700 dark:bg-gray-300 origin-center mt-1 transition-all duration-300 ease-linear
                                ${openNavbar ? "scale-x-0 opacity-0" : ""}
                            `} />
                            <span className={`
                                w-6 h-0.5 rounded-full bg-gray-700 dark:bg-gray-300 mt-1 transition-all duration-300 ease-linear
                                ${openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""}
                            `} />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
