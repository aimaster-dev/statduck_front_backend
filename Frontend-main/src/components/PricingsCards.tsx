import React from 'react'

const PricingsCards = () => {
    return (
        <div className="pt-5 bg-gray-900" id="pricing">
            <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-7xl text-center">
                    <h1 className="text-base font-semibold leading-7 text-indigo-400">Subscription Plans</h1>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        <span className="bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                            Lost your health? </span> Choose a plan to continue playing or wait to regain your strength.
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
                    Pick a plan that suits you best and get back in the game!
                </p>

                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
                        <div className="flex items-center justify-between gap-x-4">
                            <h2 id="current-subscription" className="text-lg font-semibold leading-8 text-white">Free Subscription</h2>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-gray-300">You are currently subscribed to the free plan.</p>
                        <p className="mt-6 flex items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-white">$ 0 / month</span>
                        </p>
                        <div aria-describedby="current-subscription"
                            className="bg-gray-500 text-gray-300 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 cursor-not-allowed">
                            Currently Subscribed
                        </div>
                        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                    <path fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"></path>
                                </svg>
                                Limited access
                            </li>
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                    <path fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"></path>
                                </svg>
                                Basic features
                            </li>
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                    <path fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"></path>
                                </svg>
                                Standard support
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white/5 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10">
                        <div className="flex items-baseline justify-between gap-x-4">
                            <h2 id="product2" className="text-lg font-semibold leading-8 text-white">Standard</h2>
                            <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">Most Popular</p>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-gray-300">Top plan with key features and trivia boosts.</p>

                        <p className="mt-6 flex items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-white">$ 20 / month</span>
                        </p>
                        <a href="/dashboard/order" aria-describedby="product2"
                            className="bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Subscribe
                            Now</a>
                        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                    <path fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"></path>
                                </svg>
                                120 trivia questions
                            </li>
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                    <path fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"></path>
                                </svg>
                                3 different trivia categories
                            </li>
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                    <path fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"></path>
                                </svg>
                                Health boost-up
                            </li>
                        </ul>
                    </div>
                    <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
                        <div className="flex items-center justify-between gap-x-4">
                            <h2 id="product3" className="text-lg font-semibold leading-8 text-white">Custom Request</h2>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-gray-300">Tailored plan for your unique trivia needs.</p>
                        <p className="mt-6 flex items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-white">$ 50 / unit</span><span className="text-sm font-semibold leading-6 text-gray-300"></span>
                        </p>
                        <a href="/order" aria-describedby="product3"
                            className="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Order
                            Now</a>
                        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                    <path fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"></path>
                                </svg>
                                240 trivia questions
                            </li>
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                    <path fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"></path>
                                </svg>
                                6 different trivia categories
                            </li>
                            <li className="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    aria-hidden="true" className="h-6 w-5 flex-none text-white">
                                    <path fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"></path>
                                </svg>
                                Fast delivery
                            </li>
                        </ul>
                    </div>

                </div>
                <footer className="mt-20 text-center text-lg text-gray-300 italic pt-4">
                    Note: All prices are in USD.
                </footer>
            </div>
        </div>
    )
}

export default PricingsCards