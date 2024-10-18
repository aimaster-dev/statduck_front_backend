// HowItWorks.tsx

import React from 'react';
import Image from 'next/image';
import { CheckCircleIcon, SparklesIcon, CurrencyDollarIcon } from '@heroicons/react/outline'; // Import icons from Heroicons

const HowItWorks = () => {
    return (
        <section className="relative lg:pt-24 pb-24">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/how-bg.svg"
                    alt="Background"
                    fill
                    style={{ objectFit: 'cover' }}
                />

            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white flex flex-col justify-center items-center">
                {/* Section Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-5xl sm:text-6xl font-bold mb-4">How It Works</h2>
                    <p className="text-xl">Let's kick things off with these easy-to-follow steps</p>
                </div>


                {/* Cards Container */}
                <div className="flex flex-wrap justify-center gap-6">
                    {/* Card 1: Sign Up and Customize */}
                    <div className="bg-gray-800 bg-opacity-80 rounded-lg p-6 sm:max-w-md flex flex-col items-center custom-bg">
                        <CheckCircleIcon className="h-12 w-12 text-yellow-400 mb-4" />
                        <h3 className="text-2xl sm:text-3xl font-medium mb-2">Sign Up and Customize</h3>
                        <p className="text-lg mb-4 text-center">Create your account in minutes and set up your unique profile. Customize your avatar with exclusive NFT items and get ready to dive into the game.</p>
                    </div>

                    {/* Card 2: Play Trivia and Compete */}
                    <div className="bg-gray-800 bg-opacity-80 rounded-lg p-6 sm:max-w-md flex flex-col items-center custom-bg">
                        <SparklesIcon className="h-12 w-12 text-blue-400 mb-4" />
                        <h3 className="text-2xl sm:text-3xl font-medium mb-2">Play Trivia and Compete</h3>
                        <p className="text-lg mb-4 text-center">Engage in interactive sports trivia games, challenge friends, and join tournaments. Answer questions correctly to earn crypto rewards and climb the leaderboard.</p>
                    </div>

                    {/* Card 3: Earn and Trade */}
                    <div className="bg-gray-800 bg-opacity-80 rounded-lg p-6 sm:max-w-md flex flex-col items-center custom-bg">
                        <CurrencyDollarIcon className="h-12 w-12 text-green-400 mb-4" />
                        <h3 className="text-2xl sm:text-3xl font-medium mb-2">Earn and Trade</h3>
                        <p className="text-lg mb-4 text-center">Receive cryptocurrency rewards for your achievements and participate in our marketplace. Mint, trade, and collect unique NFTs to enhance your gaming experience and showcase your skills.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
