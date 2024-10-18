import DashboardLayout from '@/components/DashboardLayout'
import LeadBadge from '@/components/LeadBadge';
import LeadBadgeSecond from '@/components/LeadBadgeSecond';
import LeadBafgeSecond from '@/components/LeadBadgeSecond';
import Position from '@/components/Position';
import React from 'react'

const page = () => {
    const leaderboardData = [
        { position: 4, name: 'John Doe', xpPoints: 700, coins: 300, avatar: 'https://robohash.org/johndoe' },
        { position: 5, name: 'Jane Smith', xpPoints: 600, coins: 300, avatar: 'https://robohash.org/janesmith' },
        { position: 6, name: 'Mike Johnson', xpPoints: 500, coins: 300, avatar: 'https://robohash.org/mikejohnson' },
        { position: 7, name: 'Emily Davis', xpPoints: 400, coins: 300, avatar: 'https://robohash.org/emilydavis' },
        { position: 9, name: 'Mia Martinez', xpPoints: 150, coins: 250, avatar: 'https://robohash.org/miamartinez' },
        { position: 10, name: 'Lucas Garcia', xpPoints: 100, coins: 240, avatar: 'https://robohash.org/lucasgarcia' },

    ];
    return (
        <DashboardLayout>
            <div className="min-h-screen p-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <div className="flex items-center mb-4 md:mb-0">
                        <h2 className="text-2xl font-semibold text-white">Lead Board</h2>
                    </div>
                </div>
                <div className="flex flex-wrap space-x-4 space-y-2 md:space-y-0 mb-6">
                    <button className="filter hover:brightness-110 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Today
                    </button>
                    <button className="filter hover:brightness-110 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Weekly
                    </button>
                    <button className="filter hover:brightness-110 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Monthly
                    </button>
                </div>
                <div className="grid grid-cols-1  lg:grid-cols-2 grid-rows-6 gap-4 w-full xl:grid-cols-3">
                    <div className="w-full flex justify-center lg:justify-start">
                        <div className="w-full  bg-gradient-to-r from-[#615FA6] via-[#BE4486] to-[#263C9F] border border-[#A6A6A6] rounded-lg shadow p-4 flex items-center justify-between" style={{ borderRadius: '10.8668px' }}>
                            <div className="flex-shrink-0">
                                <span className="text-4xl font-bold">1st</span>
                            </div>
                            <div className="relative flex flex-col items-center mx-4">
                                <img src="https://robohash.org/sarahwilson" alt="Avatar 1" className="w-24 h-24 bg-gray-300 rounded-full" />
                                <LeadBadge xpPoints={1200} />

                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-sm md:text-lg font-semibold text-center">Saqib Iqbal</h3>
                                <div className="border-t border-gray-300 my-2 w-full"></div>
                                <div className="flex items-center justify-center">
                                    <img src="/coin.png" alt="Coin Icon" className="w-5 h-5" />
                                    <p className="ml-2 text-gray-300">150</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center lg:justify-start">
                        <div className="w-full  bg-gradient-to-r from-[#615FA6] to-[#1D2C6F] border border-[#A6A6A6] rounded-lg shadow p-4 flex items-center justify-between" style={{ borderRadius: '10.8668px' }}>

                            <div className="flex-shrink-0">
                                <span className="text-4xl font-bold">2nd</span>
                            </div>
                            <div className="relative flex flex-col items-center mx-4">
                                <img src="https://robohash.org/chrislee" alt="Avatar 1" className="w-24 h-24 bg-gray-300 rounded-full" />
                                <LeadBadge xpPoints={1000} />
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-sm md:text-lg font-semibold text-center">Daniyal Tariq</h3>
                                <div className="border-t border-gray-300 my-2 w-full"></div>
                                <div className="flex items-center justify-center">
                                    <img src="/coin.png" alt="Coin Icon" className="w-5 h-5" />
                                    <p className="ml-2 text-gray-300">120</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center lg:justify-start">
                        <div className="w-full bg-gradient-to-r from-[#615FA6] to-[#1D2C6F] border border-[#A6A6A6] rounded-lg shadow p-4 flex items-center justify-between" style={{ borderRadius: '10.8668px' }}>

                            <div className="flex-shrink-0">
                                <span className="text-4xl font-bold">3rd</span>
                            </div>
                            <div className="relative flex flex-col items-center mx-4">
                                <img src="https://robohash.org/davidbrown" alt="Avatar 1" className="w-24 h-24 bg-gray-300 rounded-full" />
                                <LeadBadge xpPoints={800} />
                            </div>
                            <div className="flex flex-col items-center">
                                <h3 className="text-xs md:text-lg font-semibold text-center">Alec M.Thomson</h3>
                                <div className="border-t border-gray-300 my-2 w-full"></div>
                                <div className="flex items-center justify-center">
                                    <img src="/coin.png" alt="Coin Icon" className="w-5 h-5" />
                                    <p className="ml-2 text-gray-300">100</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {leaderboardData.map((entry) => (
                        <div key={entry.position} className="col-span-full flex justify-center lg:justify-start">
                            <div className="w-full bg-gradient-to-r from-[#615FA6] to-[#1D2C6F] border border-[#A6A6A6] rounded-lg shadow p-4 flex flex-col md:flex-row justify-between" style={{ borderRadius: '10.8668px' }}>
                                <div className="justify-between flex items-center mb-4 md:mb-0">
                                    <Position position={entry.position} />
                                    <div className="flex flex-col items-center mx-4 lg:mr-[120px]">
                                        <img src={entry.avatar} alt="Avatar" className="w-20 h-20 bg-gray-300 rounded-full" />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <h3 className="text-lg font-semibold text-center">{entry.name}</h3>
                                        <div className="border-t border-gray-300 my-2 w-full"></div>
                                        <div className="flex items-center justify-center">
                                            <img src="/coin.png" alt="Coin Icon" className="w-5 h-5" />
                                            <p className="ml-2 text-gray-300">{entry.coins}</p>
                                        </div>
                                    </div>
                                </div>
                                <LeadBadgeSecond xpPoints={entry.xpPoints} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}

export default page
