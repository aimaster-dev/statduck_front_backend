"use client";
import DashboardLayout from '@/components/DashboardLayout';
import UserModal from '@/components/UserModal';
import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaUserEdit } from 'react-icons/fa';

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [walletAddress, setWalletAddress] = useState('');

    const [userData, setUserData] = useState({
        fullName: 'Alec M. Thompson',
        email: 'alecthompson@mail.com',
        location: 'USA',
        description: 'Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).',
        image: '/bruce-mars.jpg'
    });

    useEffect(() => {
        // Check if we're on the client side before accessing localStorage
        if (typeof window !== 'undefined') {
            // Retrieve the address from localStorage initially
            const storedAddress = localStorage.getItem('walletAddress');
            console.log("The stored address is:", storedAddress);

            if (storedAddress) {
                setWalletAddress(storedAddress);
            }

            const storedUserData = localStorage.getItem('userData');
            if (storedUserData) {
                setUserData(JSON.parse(storedUserData));
            }

            // Function to handle storage events
            const handleStorageChange = (event: StorageEvent) => {
                if (event.key === 'walletAddress') {
                    setWalletAddress(event.newValue || '');
                }
            };

            // Add event listener for localStorage changes
            window.addEventListener('storage', handleStorageChange);

            // Cleanup event listener on component unmount
            return () => {
                window.removeEventListener('storage', handleStorageChange);
            };
        }
    }, []);

    useEffect(() => {
        // Check if we're on the client side before using localStorage
        if (typeof window !== 'undefined') {
            localStorage.setItem('userData', JSON.stringify(userData));
        }
    }, [userData]);

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleModalSave = (updatedData: any) => {
        console.log('saved');
        setUserData(updatedData);
    };

    return (
        <DashboardLayout>
            <div className="min-h-screen p-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <h2 className="text-2xl font-semibold text-white">Profile</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-4">
                    <div className="bg-gray-800 p-4 rounded-lg flex items-center">
                        <img
                            src={userData.image}
                            alt="User Avatar"
                            className="w-24 h-24 rounded-lg mr-4"
                        />
                        <div>
                            <h3 className="text-xl font-semibold text-white">{userData.fullName}</h3>
                            <p className="text-sm text-gray-400">1000 XP</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">Platform Settings</h3>
                        <div className="mb-4 my-6">
                            <h4 className="text-sm font-semibold uppercase text-white mb-6">Account</h4>
                            <label className="flex items-center justify-between cursor-pointer mb-4">
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-400">Email me when someone wants to play with me</span>
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>

                            <label className="flex items-center justify-between cursor-pointer mb-4">
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-400">Email me when someone wants to message me</span>
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>

                        </div>
                        <div className="mb-4 my-6">
                            <h4 className="text-sm font-semibold uppercase text-white mb-6">Application</h4>
                            <label className="flex items-center justify-between cursor-pointer mb-4">
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-400">New launches and projects</span>
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                            <label className="flex items-center justify-between cursor-pointer mb-4">
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-400">Monthly product updates</span>
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                            <label className="flex items-center justify-between cursor-pointer mb-4">
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-400">Subscribe to newsletter</span>
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>

                        </div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-semibold text-white">Profile Information</h3>
                            <a href="#!" className="text-gray-400">
                                <FaUserEdit className="text-2xl" onClick={handleEditClick} />
                            </a>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">{userData.description}</p>
                        <hr className="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"></hr>
                        <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                            <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-gray-800 border-0 rounded-t-lg text-sm text-gray-400">
                                <strong className="text-white mr-2">User Name:</strong>
                                {userData.fullName}
                            </li>
                            <li className="relative block px-4 py-2 pl-0 leading-normal bg-gray-800 border-0 border-t-0 text-sm text-gray-400">
                                <strong className="text-white mr-2">Email:</strong>
                                {userData.email}
                            </li>
                            <li className="relative block px-4 py-2 pl-0 leading-normal bg-gray-800 border-0 border-t-0 text-sm text-gray-400">
                                <strong className="text-white mr-2">Location:</strong>
                                {userData.location}
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-white mb-4">Messages</h3>
                        <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                            <li className="relative flex items-center px-0 py-2 mb-2 border-0 rounded-t-lg text-inherit">
                                <div className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                                    <img src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/kal-visuals-square.jpg" alt="kal" className="w-full shadow-soft-2xl rounded-xl" />
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <h6 className="mb-0 leading-normal text-sm">Sophie B.</h6>
                                    <p className="mb-0 leading-tight text-xs">Hi! I need more information..</p>
                                </div>
                                <a className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100" href="#!">Reply</a>
                            </li>
                            <li className="relative flex items-center px-0 py-2 mb-2  border-0 border-t-0 text-inherit">
                                <div className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                                    <img src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/marie.jpg" alt="marie" className="w-full shadow-soft-2xl rounded-xl" />
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <h6 className="mb-0 leading-normal text-sm">Anne Marie</h6>
                                    <p className="mb-0 leading-tight text-xs">Awesome work, can you..</p>
                                </div>
                                <a className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100" href="#!">Reply</a>
                            </li>
                            <li className="relative flex items-center px-0 py-2 mb-2  border-0 border-t-0 text-inherit">
                                <div className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                                    <img src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/ivana-square.jpg" alt="ivana" className="w-full shadow-soft-2xl rounded-xl" />
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <h6 className="mb-0 leading-normal text-sm">Ivanna</h6>
                                    <p className="mb-0 leading-tight text-xs">About files I can..</p>
                                </div>
                                <a className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100" href="#!">Reply</a>
                            </li>
                            <li className="relative flex items-center px-0 py-2 mb-2  border-0 border-t-0 text-inherit">
                                <div className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                                    <img src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-4.jpg" alt="peterson" className="w-full shadow-soft-2xl rounded-xl" />
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <h6 className="mb-0 leading-normal text-sm">Peterson</h6>
                                    <p className="mb-0 leading-tight text-xs">Have a great afternoon..</p>
                                </div>
                                <a className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100" href="#!">Reply</a>
                            </li>
                            <li className="relative flex items-center px-0 py-2  border-0 border-t-0 rounded-b-lg text-inherit">
                                <div className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                                    <img src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-3.jpg" alt="nick" className="w-full shadow-soft-2xl rounded-xl" />
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <h6 className="mb-0 leading-normal text-sm">Nick Daniel</h6>
                                    <p className="mb-0 leading-tight text-xs">Hi! I need more information..</p>
                                </div>
                                <a className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100" href="#!">Reply</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-start gap-4 shadow-lg max-w-full my-4">
                    <h3 className="text-2xl font-bold text-white mb-2">Wallet Address</h3>
                    <p className="text-lg font-bold text-gray-300 break-words w-full max-w-full">
                        {walletAddress || '0x9F0a2b0C76C3cBc6A13E3A2F9e4B5A63F9F6dC6C'}
                    </p>
                </div>



            </div>
            {isModalOpen && <UserModal onClose={() => setIsModalOpen(false)} onSave={handleModalSave} userData={userData} isOpen={true} />}
        </DashboardLayout>
    );
};

export default Profile;
