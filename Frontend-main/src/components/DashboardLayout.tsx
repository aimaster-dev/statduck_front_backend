'use client';

import SidebarFooter from './../components/SideBar Footer';
import MenuIcon from '@heroicons/react/outline/MenuIcon';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation'


export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    const pathname = usePathname()
    console.log(pathname);
    const isActive = (path: string) => pathname === path;

    const [userData, setUserData] = useState({
        fullName: '',
        image: ''
    });
    useEffect(() => {

        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }

        // Add event listener for localStorage changes
        window.addEventListener('storage', handleStorageChange);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);


    return (
        <div>
            <div className="flex flex-row ">
                {/* side bar */}
                <div className="sm:w-full sm:max-w-[18rem] ">
                    <input type="checkbox" id="sidebar-mobile-fixed" className="sidebar-state" />
                    <label htmlFor="sidebar-mobile-fixed" className="sidebar-overlay"></label>
                    <aside className="sidebar  sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full text-base text-white bg-gray-900">
                        <section className="sidebar-title items-center p-4">
                            <div className="flex gap-16">
                                <a href="/" className="flex items-center space-x-2">
                                    <img src="/logo.svg" alt="Stat Duck Logo" className="h-8 w-auto" />

                                    <div className="flex flex-col">
                                        <span className="text-xl font-semibold">Stat Duck</span>
                                        <span className="text-xs font-normal text-content2">DashBoard</span>
                                    </div>
                                </a>
                                <a
                                    href="/"
                                    className="inline-flex items-center justify-center p-0.5 text-base font-medium text-white rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-home-move"
                                        width="34"
                                        height="34"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#ffffff"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" />
                                        <path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" />
                                        <path d="M16 19h6" />
                                        <path d="M19 16l3 3l-3 3" />
                                    </svg>
                                </a>
                            </div>

                        </section>
                        <div className="p-2">
                            <form className="max-w-md mx-auto">
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        id="default-search"
                                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-500 dark:focus:ring-blue-800 transition-all duration-300 hover:border-blue-500 hover:shadow-neon"
                                        placeholder="Search..."
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Search
                                    </button>
                                </div>
                            </form>
                            <style jsx>{`
  .hover\\:shadow-neon {
    box-shadow: 0 0 10px rgba(0, 0, 255, 0.7), 0 0 20px rgba(0, 0, 255, 0.5);
  }
`}</style>

                        </div>
                        <div className="dropdown bg-gray-900 z-100 flex h-fit w-full cursor-pointer hover:bg-gray-4 " tabIndex={-1}>
                            <label className="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4" tab-index="0">
                                <div className="flex flex-row gap-4 p-4">
                                    <div className="avatar-square avatar avatar-md">
                                        <img src={userData.image || 'https://i.pravatar.cc/150?img=30'} alt="avatar" />
                                    </div>

                                    <div className="flex flex-col">

                                        <span style={{
                                            display: 'block',
                                            maxWidth: '200px',
                                            overflowWrap: 'break-word',
                                            wordBreak: 'break-all',
                                            hyphens: 'auto'
                                        }}>
                                            {userData.fullName || 'Guest'}
                                        </span>
                                    </div>


                                </div>
                            </label>
                            <div className="dropdown-menu-right-bottom ml-2 dropdown-menu z-50 absolute">
                                <Link href="/dashboard/settings/profile" className="dropdown-item text-sm">Profile</Link>
                                <Link href="/account-settings" className="dropdown-item text-sm">Account settings</Link>
                                <Link href="/change-email" className="dropdown-item text-sm">Change email</Link>
                                <Link href="/subscriptions" className="dropdown-item text-sm">Subscriptions</Link>
                                <Link href="/change-password" className="dropdown-item text-sm">Change password</Link>
                                <Link href="/refer-a-friend" className="dropdown-item text-sm">Refer a friend</Link>
                                <Link href="/settings" className="dropdown-item text-sm">Settings</Link>
                            </div>
                        </div>

                        <section className="sidebar-content">
                            <nav className="menu rounded-md">
                                <section className="menu-section px-4">
                                    <span className="menu-title">Main menu</span>
                                    <ul className="menu-items">
                                        <Link
                                            href="/dashboard/general"
                                            className={`${isActive('/dashboard/general') ? 'menu-active' : ''} flex menu-item`}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 opacity-75"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            <span>General</span>
                                        </Link>

                                        <Link href="/dashboard/leadboard" className='flex menu-item'>                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                            <span>Lead Board</span>
                                        </Link>


                                        <li className="menu-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                            </svg>
                                            <span>Billing</span>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="menu-1" className="menu-toggle" />
                                            <label className="menu-item justify-between" htmlFor="menu-1">
                                                <div className="flex gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                    <span>Account</span>
                                                </div>

                                                <span className="menu-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </label>

                                            <div className="menu-item-collapse">
                                                <div className="min-h-0">
                                                    <label className="menu-item menu-item-disabled ml-6">Change Email</label>
                                                    <label className="menu-item ml-6">Profile</label>
                                                    <label className="menu-item ml-6">Change Password</label>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </section>
                                <div className="divider my-0"></div>
                                <section className="menu-section px-4">
                                    <span className="menu-title">Settings</span>
                                    <ul className="menu-items">
                                        <li className="menu-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="opacity-75" width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M3 21l18 0"></path>
                                                <path d="M3 10l18 0"></path>
                                                <path d="M5 6l7 -3l7 3"></path>
                                                <path d="M4 10l0 11"></path>
                                                <path d="M20 10l0 11"></path>
                                                <path d="M8 14l0 3"></path>
                                                <path d="M12 14l0 3"></path>
                                                <path d="M16 14l0 3"></path>
                                            </svg>
                                            Payments
                                        </li>
                                        <li className="menu-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="opacity-75" width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
                                                <path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                                <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2"></path>
                                            </svg>
                                            Balances
                                        </li>
                                        <li className="menu-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="opacity-75" width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                                            </svg>
                                            Customers
                                        </li>
                                        <li className="menu-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="opacity-75" width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M7 10l5 -6l5 6"></path>
                                                <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"></path>
                                                <path d="M12 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                            </svg>
                                            Products
                                        </li>
                                        <li>
                                            <input type="checkbox" id="menu-2" className="menu-toggle" />
                                            <label className="menu-item justify-between" htmlFor="menu-2">
                                                <div className="flex gap-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="opacity-75" width="22" height="22" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path>
                                                        <path d="M9 7l4 0"></path>
                                                        <path d="M9 11l4 0"></path>
                                                    </svg>
                                                    <span>Contracts</span>
                                                </div>

                                                <span className="menu-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                            </label>

                                            <div className="menu-item-collapse">
                                                <div className="min-h-0">
                                                    <label className="menu-item menu-item-disabled ml-6">Create contract</label>
                                                    <label className="menu-item ml-6">All contracts</label>
                                                    <label className="menu-item ml-6">Pending contracts</label>
                                                    <label className="menu-item ml-6">Security</label>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </section>
                            </nav>
                        </section>
                        <div className="divider my-0"></div>
                        <SidebarFooter />
                    </aside>
                </div>
                {/* main content */}
                <div className="flex w-full flex-col p-4 bg-gray-900">
                    <div className="flex items-center justify-between">
                        <a href="/" className="flex items-center space-x-2 hiden" >
                            <img src="/logo.svg" alt="Stat Duck Logo" className="h-8 w-auto" />
                            <div className="flex flex-col">
                                <span className="text-xl font-semibold">Stat Duck</span>
                                <span className="text-xs font-normal text-content2">DashBoard</span>
                            </div>
                        </a>
                        <div className="flex items-center">
                            <label htmlFor="sidebar-mobile-fixed" className="btn sm:hidden">
                                <MenuIcon className="w-6 h-6 text-white" aria-hidden="true" />
                            </label>
                        </div>
                    </div>


                    {children}
                </div>
            </div>
        </div>
    );
};

function handleStorageChange(this: Window, ev: StorageEvent) {
    throw new Error('Function not implemented.');
}

