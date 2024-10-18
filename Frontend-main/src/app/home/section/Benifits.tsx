import React from 'react';

const Benefits = () => {
    return (
        <section className="w-[100%]">
            <div className="container mx-auto px-4">
                <div className="center-item flex flex-col justify-center  lg:justify-between">
                    <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-left">Benefits You Will Get</h2>
                    <p className="text-xl mb-8 text-left">See what our users are saying about us.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
                        {/* Benefit 1 */}
                        <div className="custom-bg py-6 
                        px-4 rounded-xl shadow-md flex flex-col items-left justify-center text-center h-auto w-80">

                            <img src="token.png" alt="Placeholder" className="h-[250px] w-[350px] rounded-xl mb-4" />
                            <h3 className="text-xl font-bold mb-2 p-0 text-center">Earn Cryptocurrency</h3>

                            <ul className="space-y-4 text-left p-0 text-gray-500 dark:text-gray-400">
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Receive crypto rewards for correct answers and achievements.</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Secure and instant transactions using the Polygon blockchain.</span>
                                </li>
                                
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Accumulate valuable digital assets as you play and win.</span>
                                </li>
                                
                            </ul>

                        </div>


                        {/* Benefit 2 */}
                        <div className="custom-bg py-6 
                        px-4 rounded-xl shadow-md flex flex-col items-left justify-center text-center h-auto w-80">

                            <img src="education.png" alt="Placeholder" className="h-[250px] w-[350px] rounded-xl mb-4" />
                            <h3 className="text-xl font-bold mb-2 p-0 text-center">Enhance Knowledge</h3>

                            <ul className="space-y-4 text-left p-0 text-gray-500 dark:text-gray-400">
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Expand your understanding of various sports and historical events.</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Learn through engaging and interactive trivia questions.</span>
                                </li>
                                
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Stay updated with the latest sports facts and news.</span>
                                </li>
                                
                            </ul>

                        </div>

                        {/* Benefit 3 */}
                        <div className="custom-bg py-6 
                        px-4 rounded-xl shadow-md flex flex-col items-left justify-center text-center h-auto w-80">

                            <img src="nft.png" alt="Placeholder" className="h-[250px] w-[350px] rounded-xl mb-4" />
                            <h3 className="text-xl font-bold mb-2 p-0 text-center">Exclusive NFT Ownership</h3>

                            <ul className="space-y-4 text-left p-0 text-gray-500 dark:text-gray-400">
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Customize and own unique avatars and items as NFTs.</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Trade and collect rare, limited-edition items on our marketplace.</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Showcase your gaming achievements with exclusive digital assets.</span>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Benefits;
