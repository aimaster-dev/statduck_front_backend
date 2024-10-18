import React from 'react';

const Testimonial = () => {
    return (
        <section className="w-full pb-12">
            <div className="container mx-auto">
                <div className="max-w-100vh mx-auto text-center">
                    <h2 className="text-5xl sm:text-6xl font-bold mb-4">Testimonials</h2>
                    <p className="text-xl mb-8">See what our users are saying about us.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Testimonial 1 */}
                        <div className="p-4 rounded-lg shadow-md">
                            <div className="custom-bg rounded-lg p-4 flex flex-col justify-between h-full">
                                <div className="flex-shrink-0 mb-4">
                                    <img className="h-20 w-20 rounded-full mx-auto" src="/avatar.png" alt="Avatar 1" />
                                </div>
                                <div className="text-center">
                                    <p className="text-lg mb-4"> StatDucks has completely transformed my gaming experience! Not only am I having a blast playing my favorite sports games, 
                                        but I'm also learning so much about different strategies and techniques. The best part? I'm earning cryptocurrency while doing it!</p>
                                    <p className="text-gray-300">-Tori</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="p-4 rounded-lg shadow-md">
                            <div className="custom-bg rounded-lg p-4 flex flex-col justify-between h-full">
                                <div className="flex-shrink-0 mb-4">
                                    <img className="h-20 w-20 rounded-full mx-auto" src="/avatar.png" alt="Avatar 2" />
                                </div>
                                <div className="text-center">
                                    <p className="text-lg mb-4">The platform makes learning about sports fun and rewarding. I love how I can earn crypto just by playing and improving my skills. The NFT features are a great addition, letting me create and trade unique digital items.</p>
                                    <p className="text-gray-300">- Daniyal</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="p-4 rounded-lg shadow-md">
                            <div className="custom-bg rounded-lg p-4 flex flex-col justify-between h-full">
                                <div className="flex-shrink-0 mb-4">
                                    <img className="h-20 w-20 rounded-full mx-auto" src="/avatar.png" alt="Avatar 3" />
                                </div>
                                <div className="text-center">
                                    <p className="text-lg mb-4">StatDucks is the ultimate platform for anyone who loves sports and wants to earn while they play. The educational aspect is fantastic – I've learned so much about different sports, and the interactive games keep me engaged. Earning cryptocurrency is a huge bonus!</p>
                                    <p className="text-gray-300">- harsh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
