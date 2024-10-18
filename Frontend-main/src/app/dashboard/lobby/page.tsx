"use client";

import DashboardLayout from '@/components/DashboardLayout';
import QuestionPopover from '@/components/QuestionPopover';
import React, { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import PlusCard from '@/components/PlusCard';
import MessageInbox from '@/components/MessageInbox';
import { BackspaceIcon, UserAddIcon } from '@heroicons/react/outline';

const PageContent: React.FC = () => {
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const xp = searchParams.get('xp');
    const router = useRouter();

    const [friendsCount, setFriendsCount] = useState(1);

    const handleAddFriend = () => {
        if (friendsCount < 8) {
            setFriendsCount(prevCount => prevCount + 1);
        }
    };
    const isFirstCardFixed = true;

    const handleStart = () => {
        router.push(`/dashboard/game-play?title=${title}&xp=${xp}`);

    };

    return (
        <DashboardLayout>
            <div className="min-h-screen p-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <h2 className="text-2xl font-semibold text-white">{title}</h2>
                        <QuestionPopover />
                    </div>
                    <MessageInbox />
                </div>
                <div className="mt-2">
                    <p className="text-lg text-gray-300">Earn {xp}</p>
                </div>
                <div className="flex justify-center ">
                    <div className="flex gap-4 mt-6">
                        <button type="button" className="flex items-center justify-center text-white bg-gradient-to-r from-green-500 via-green-500 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm w-32 h-12">
                            <BackspaceIcon className="w-5 h-5 mr-2" />
                            Exit lobby
                        </button>
                        <button type="button" className="flex items-center justify-center text-white bg-gradient-to-r from-green-500 via-green-500 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm w-32 h-12">
                            <UserAddIcon className="w-5 h-5 mr-2" />
                            Invite friends
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center min-h-[80vh] p-4">
                    <div className="mt-20 w-full max-w-4xl">
                        <div className="flex justify-start mb-8 text-gray-600 dark:text-gray-400 text-lg font-medium">
                            {friendsCount}/8 Players
                        </div>

                        <div className='flex flex-col gap-5'>
                            <div className="mb-12 grid gap-y-10 gap-x-16 md:grid-cols-2 xl:grid-cols-4">
                                {[...Array(4)].map((_, index) => (
                                    <PlusCard
                                        key={index}
                                        onAddFriend={handleAddFriend}
                                        isFirst={index === 0 && isFirstCardFixed}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <div className="mb-12 grid gap-y-10 gap-x-16 md:grid-cols-2 xl:grid-cols-4">
                                {[...Array(4)].map((_, index) => (
                                    <PlusCard
                                        key={index + 4}
                                        onAddFriend={handleAddFriend}
                                        isFirst={false}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={handleStart}
                                className="px-10 py-4 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white font-bold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-blue-800 hover:via-blue-700 hover:to-blue-800"
                            >
                                Start
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

const Page: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PageContent />
        </Suspense>
    );
};

export default Page;
