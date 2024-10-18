// pages/dashboard/general.tsx
import React from 'react';
import DashboardLayout from '../../../components/DashboardLayout';
import Card from '@/components/GameCard';

const General: React.FC = () => {
    return (
        <DashboardLayout>
            <div className="min-h-screen">
                <div className="p-4">
                    <nav className="block w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
                        <div className="w-[100%] flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
                            <div className="capitalize">
                                <nav aria-label="breadcrumb" className="w-fit">
                                    <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                                        <li className="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
                                            <a href="#">
                                                <p className="block antialiased font-sans text-sm leading-normal text-white font-normal  transition-all hover:text-blue-500 hover:opacity-100">dashboard</p>
                                            </a>
                                            <span className="text-gray-300 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">/</span>
                                        </li>
                                        <li className="flex items-center text-white antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-blue-500">
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">home</p>
                                        </li>
                                    </ol>
                                </nav>
                                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">home</h6>
                            </div>
                            <form className="w-full flex items-start max-w-lg mx-auto">
                                <label htmlFor="voice-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search your Game..." required />
                                    <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
                                        </svg>
                                    </button>
                                </div>
                                <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>Search
                                </button>
                            </form>
                            <div className="flex items-center">
                                <button className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-300 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                                    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-blue-gray-500">
                                            <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                </button>
                                <button aria-expanded="false" aria-haspopup="menu" id=":r2:" className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-300 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
                                    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-blue-gray-500">
                                            <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </nav>
                    <div className="mt-12">
                        <div className="mb-12 grid gap-y-10 gap-x-10 md:grid-cols-2 xl:grid-cols-3">
                            {/* Card 1 */}
                            <div className="bg-transparent p-4 flex gap-4 max-w-sm  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <div className="w-[50%] flex items-center justify-center ">
                                    {/* Icon */}
                                    <svg className='w-32 h-32' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 438 512.01"><path fill="#26292B" fill-rule="nonzero" d="M12.39 96.25h64.26c-.03-10.18.06-6.99.23-18.08V37.73h282.28v40.49c.08 11.25.06 8.04-.06 18.07h66.54v.03c6.3 0 11.56 4.95 11.85 11.31.9 18.52.73 36.72-1.53 53.67-2.34 17.61-6.92 33.87-14.83 47.78-7.78 13.68-18.77 25.06-33.97 33.19-14.1 7.54-28.08 11.98-50 12.86-7.1 23.94-33.07 45.13-52.79 63.09-23.78 18.17-41.69 31.87-27.77 73.82h6.99c16.62 0 30.19 13.57 30.19 30.19v12.16h16.79c8.17 0 15.62 3.34 21.03 8.73 5.39 5.4 8.73 12.82 8.73 21.02v20.19c0 3.77-3.07 6.84-6.85 6.84H102.6c-3.78 0-6.84-3.07-6.84-6.84v-20.19c0-8.16 3.33-15.58 8.72-20.98l.05-.04c5.4-5.39 12.82-8.73 20.98-8.73h16.78v-12.16c0-16.55 13.64-30.19 30.19-30.19h9.59c12.43-39.58-3.86-52.4-26.37-70.13-26.04-15.62-47.01-47.08-58.74-66.96-22.73-.72-32.29-5.02-46.69-12.78-15.11-8.14-26.01-19.53-33.7-33.21-7.8-13.88-12.31-30.11-14.6-47.71-2.17-16.7-2.35-34.57-1.49-52.77v-.33c0-6.58 5.33-11.9 11.91-11.9zm345.44 43.45c-1.49 29.14-4.12 51.71-7.81 69.62 7.74-1.63 14.11-4.1 19.3-7.34 6.2-3.86 10.82-8.93 14.24-15.02 3.69-6.58 6.01-14.37 7.44-23.13 1.18-7.29 1.73-15.38 1.92-24.11h-34.54l-.55-.02zm-280.16 0h-31.2c.15 8.73.64 16.85 1.74 24.22 1.31 8.83 3.47 16.63 6.96 23.14 3.23 6.05 7.68 11.1 13.77 14.96 4.86 3.1 10.81 5.49 18.05 7.11-5.15-20.25-7.97-43.1-9.32-69.43z" /><path fill="#FFCE6B" fill-rule="nonzero" d="M358.38 127.82h41.77c2.62 0 4.75 2.12 4.75 4.73 0 23.91-2.16 44.51-10.98 60.22-8.77 15.62-26.29 27.68-52.7 29.43-4.19 8.48-5.38 15.44-10.55 21.33 42.32-1.12 66.72-16.71 80.15-40.31 14.18-24.97 16.55-59.21 14.82-95.03h-67.26v19.63z" /><path fill="#fff" fill-rule="nonzero" d="M77.52 108.15H12.39c-1.77 35.81.51 70.03 14.55 95 13.25 23.57 37.45 39.15 79.59 40.34-3.23-5.9-2.53-12.09-8.75-20.46-26.13-2.23-44.66-14.66-53.07-30.39-8.42-15.71-10.21-36.25-10.21-60.1a4.75 4.75 0 0 1 4.74-4.74h38.28v-19.65z" /><path fill="#26292B" fill-rule="nonzero" d="M307.59 434.35v.04h2.98c8.17 0 15.63 3.33 21.02 8.73 5.4 5.4 8.74 12.82 8.74 21.02v41.02c0 3.78-3.08 6.85-6.85 6.85H102.6c-3.77 0-6.85-3.07-6.85-6.85v-41.02c0-8.16 3.34-15.58 8.74-20.97l.04-.05c5.4-5.4 12.82-8.73 20.98-8.73h2.98v-.04h179.1z" /><path fill="#fff" fill-rule="nonzero" d="M272.67 454.72h-134.8c-4.56 0-8.69 1.85-11.67 4.83l-.05.04a16.475 16.475 0 0 0-4.82 11.68v20.37h193.42v-20.37c0-4.52-1.84-8.65-4.87-11.68-2.98-2.98-7.11-4.87-11.67-4.87h-25.54zm-76.94-57.92h24.55v-68.76c-85.58-30.43-94.33-134.96-114.74-280.12H86.97v103.34c1.71 39.31 8.3 68.41 17.37 90.7 8.99 22.02 20.54 37.41 32.36 49.38 8.62 8.75 17.64 15.83 25.9 22.34 31.8 24.98 40.98 35.89 33.13 83.12z" /><path fill="#FFCE6B" fill-rule="nonzero" d="M218.9 396.8h24.07c-14.98-49.06 6.5-65.44 34.8-87.05 31.04-23.7 71.39-54.47 71.39-155.74V47.92H104.85c13.18 93.71 21.21 170.49 48.28 221.32 10.74 18.22 22.63 32.75 35.84 43.02 6.41 4.73 13.42 8.82 21.11 12.25 2.79 1.11 5.63 2.07 8.53 2.85v.57l.29.11v68.76z" /><path fill="#26292B" fill-rule="nonzero" d="m233.53 100.38 6.46 15.73 5.93 14.45 32.6 2.46c4.63.34 8.11 4.38 7.77 9.01a8.435 8.435 0 0 1-3.25 6.04l-24.67 20.91 7.73 31.69c1.09 4.5-1.68 9.04-6.18 10.13-2.36.57-4.72.09-6.6-1.15l-27.55-17.06-27.76 17.19c-3.95 2.43-9.12 1.21-11.55-2.73a8.378 8.378 0 0 1-1.02-6.38l7.73-31.69-24.96-21.16c-3.54-2.99-3.98-8.3-.98-11.84a8.36 8.36 0 0 1 5.79-2.95l32.6-2.47L218 100.38c2.87-6.99 12.72-6.84 15.53 0z" /><path fill="#fff" fill-rule="nonzero" d="m225.77 102.74 14.6 35.57 38.41 2.9-29.41 24.92 9.11 37.35-32.71-20.26-32.72 20.26 9.11-37.35-29.4-24.92 38.4-2.9 14.61-35.57z" /><path fill="#fff" d="m289.27 257.78-.28.37c-3.09-2.23-6.63-3.04-10.62-2.4-3.98.63-7.1 2.51-9.34 5.59l-.38-.27c2.24-3.09 3.04-6.64 2.4-10.63-.64-3.98-2.5-7.1-5.58-9.33.09-.13 9.3 2.28 10.89 2.03 3.99-.64 7.1-2.5 9.35-5.6l.38.28c-2.24 3.08-3.05 6.63-2.4 10.62.62 3.98 2.49 7.1 5.58 9.34zm34.84-62.8-.28.38c-3.09-2.24-6.63-3.04-10.62-2.4-3.98.63-7.1 2.49-9.34 5.58l-.38-.27c2.24-3.09 3.03-6.63 2.4-10.62-.64-3.99-2.5-7.1-5.58-9.34l.27-.38c3.09 2.24 6.64 3.05 10.62 2.4 3.98-.63 7.11-2.49 9.35-5.58l.38.27c-2.24 3.09-3.05 6.63-2.41 10.62.62 3.99 2.49 7.1 5.59 9.34zm8.22-86.64-.5.7c-5.65-4.1-12.14-5.57-19.43-4.4-7.29 1.16-12.99 4.57-17.09 10.23l-.7-.5c4.1-5.66 5.58-12.14 4.39-19.44-1.17-7.3-4.58-13-10.22-17.08l.5-.69c5.66 4.09 12.14 5.56 19.44 4.4 7.29-1.17 12.98-4.58 17.08-10.24l.69.5c-4.09 5.65-5.56 12.14-4.4 19.43 1.17 7.3 4.58 13 10.24 17.09z" /><path fill="#252D32" fill-rule="nonzero" d="M67.04 0h317.48c6.52 0 12.46 2.67 16.74 6.96 4.29 4.28 6.96 10.21 6.96 16.74 0 6.53-2.67 12.47-6.96 16.75-4.28 4.29-10.22 6.96-16.74 6.96H67.04c-6.53 0-12.46-2.67-16.74-6.96-4.29-4.28-6.96-10.22-6.96-16.74 0-6.54 2.67-12.47 6.96-16.75C54.58 2.67 60.51 0 67.04 0z" /><path fill="#fff" d="m102.12 37.06-4.98-26.71h-30.1c-3.67 0-7.02 1.51-9.43 3.92-2.41 2.42-3.92 5.76-3.92 9.43s1.51 7.02 3.92 9.44c2.41 2.41 5.76 3.92 9.43 3.92h35.08z" /><path fill="#FFCE6B" d="m102.12 37.06-4.98-26.71h287.38c3.66 0 7.01 1.51 9.43 3.92 2.41 2.42 3.92 5.76 3.92 9.44 0 3.66-1.51 7.01-3.92 9.43-2.42 2.41-5.77 3.92-9.43 3.92h-282.4z" /></svg>
                                </div>
                                <div className="w-[50%] flex flex-col justify-center">
                                    {/* Heading */}
                                    <h3 className="text-2xl md:text-3xl my-2 font-sans font-bold dark:text-gray-200">Ranking
                                    </h3>
                                    {/* Divider */}
                                    <div className="divider divider-primary my-0"></div>
                                    {/* Number */}
                                    <p className="oldstyle-nums text-xl">
                                        21312
                                    </p>
                                </div>

                            </div>

                            {/* Card 2 */}
                            <div className="bg-transparent p-4 flex gap-4 max-w-sm  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <div className="w-[50%] flex items-center justify-center">
                                    {/* Icon */}
                                    <svg className='w-32 h-32' xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 360 511.48"><path fill="#D0401B" d="M144.83 306.61l151.45-26.08L360 429.51l-78.8-.9-64.75 52.53z" /><path fill="#F60" d="M231.94 290.08l-162.37 4.3L0 459.86l78.8-.91 64.75 52.53z" /><path fill="#F5C800" d="M183.21.03c9.35-.4 16.72 2.86 24.15 7.59 9.44 5.98 20.06 17.8 33.17 25.3 18.45 10.54 52.62-4 70.12 21.99 10.2 15.16 10.68 27.04 11.44 38.78.82 12.67 3.04 24.32 16.01 41.47 21.46 28.38 25.93 47.27 14.87 66.96-7.54 13.42-23.41 20.88-27.09 29.38-7.81 18.09.83 31.72-9.87 52.81-7.43 14.62-18.89 24.26-34.16 29.18-12.87 4.14-25.79-1.85-36.1 2.48-18.12 7.61-31.48 25.3-45.89 29.77-5.57 1.73-11.11 2.58-16.65 2.54-5.53.04-11.08-.81-16.64-2.54-14.42-4.47-27.78-22.16-45.89-29.77-10.31-4.33-23.23 1.66-36.11-2.48-15.26-4.92-26.73-14.56-34.16-29.18-10.7-21.09-2.05-34.72-9.87-52.81-3.67-8.5-19.55-15.96-27.09-29.38-11.05-19.69-6.58-38.58 14.88-66.96 12.96-17.15 15.18-28.8 16-41.47.76-11.74 1.24-23.62 11.45-38.78 17.5-25.99 51.66-11.45 70.11-21.99 13.12-7.5 23.73-19.32 33.17-25.3 7.44-4.73 14.81-7.99 24.15-7.59z" /><path fill="#FFDD61" d="M183.21.04c9.35-.41 16.71 2.86 24.15 7.58 9.44 5.98 20.06 17.8 33.17 25.3 14.67 8.38 39.28.91 57.55 10.56L91.95 314.9c-2.45-.2-4.92-.62-7.38-1.41-15.27-4.92-26.73-14.55-34.16-29.18-10.7-21.09-2.05-34.72-9.87-52.81-3.67-8.5-19.55-15.96-27.09-29.38-11.06-19.69-6.58-38.58 14.88-66.96 12.96-17.14 15.18-28.8 16-41.47.76-11.74 1.24-23.62 11.44-38.78 17.51-26 51.68-11.45 70.12-21.99 13.12-7.5 23.74-19.32 33.17-25.3C166.5 2.9 173.87-.37 183.21.04z" /><path fill="#E37E00" d="M182.71 46.79c71.81 0 130.03 58.22 130.03 130.04s-58.22 130.03-130.03 130.03c-71.82 0-130.04-58.21-130.04-130.03S110.89 46.79 182.71 46.79z" /><path fill="#fff" d="M182.71 72.88c57.41 0 103.94 46.54 103.94 103.95 0 57.41-46.53 103.95-103.94 103.95S78.76 234.24 78.76 176.83c0-57.41 46.54-103.95 103.95-103.95z" /><path fill="#383838" fill-rule="nonzero" d="M175.17 115.83h18.94l-.44 11.93c7.96.5 14.91 1.29 20.88 2.39l-4.33 23.12h-22.37c-3.48 0-5.79.54-6.93 1.63-1.15 1.1-1.77 3.19-1.87 6.27l9.4 1.04c11.43 1.3 19.32 4.23 23.64 8.8 4.33 4.58 6.49 10.49 6.49 17.76 0 7.26-.75 13.05-2.24 17.37-1.49 4.33-3.63 7.63-6.41 9.92-5.08 3.88-11.74 6.12-19.99 6.71l-.45 15.07h-19.24l.6-15.07c-9.45-.69-17.46-1.89-24.02-3.58l4.32-23.72c8.26 2.2 16.91 3.29 25.96 3.29 3.78 0 7.31-.2 10.59-.6v-6.26l-9.25-1.05c-11.93-1.19-19.88-4.67-23.86-10.44-3.48-5.07-5.22-11.68-5.22-19.84 0-10.74 2.21-18.54 6.64-23.41 4.42-4.88 10.66-7.86 18.71-8.96l.45-12.37z" /></svg>
                                </div>
                                <div className="w-[50%] flex flex-col justify-center">
                                    {/* Heading */}
                                    <h3 className="text-2xl md:text-3xl my-2 font-sans font-bold dark:text-gray-200">XP Points
                                    </h3>
                                    {/* Divider */}
                                    <div className="hidden sm:flex divider divider-primary my-0"></div>
                                    {/* Number */}
                                    <p className="oldstyle-nums text-xl">
                                        231
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className=" bg-transparent p-4 flex gap-4 max-w-sm  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <div className="w-full flex flex-col justify-center">
                                    {/* Heading */}
                                    <h3 className="text-2xl md:text-3xl my-2 font-sans font-bold dark:text-gray-200">Active Games
                                    </h3>
                                    {/* Divider */}
                                    <div className="divider divider-primary my-0"></div>

                                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                        <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500" style={{ width: '45%' }}></div>
                                    </div>
                                    <p className="oldstyle-nums text-xl">
                                        231/500
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col gap-5'>
                            <h3 className="text-3xl font-bold mb-4 dark:text-white">Remaining Games</h3>
                            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">

                                <div className="flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                        <img src="/sonic-icon.svg" alt="" className="w-10 h-10 text-white" />
                                    </div>
                                    <div className="p-4 text-right">

                                        <h4 className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">342 XP</h4>
                                        <p className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                                            Trivial Pursuit</p>
                                    </div>
                                    <div className="border-t border-blue-gray-50 p-4">
                                        <div className="flex justify-between">
                                            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                                <strong className="text-green-500">Remaining Progress</strong>
                                            </p>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-500  rounded-lg hover:bg-teal-700 focus:outline-none  dark:bg-teal-500  dark:hover:bg-teal-500">
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="mt-5 max-w-full flex items-center gap-x-1">
                                            <div className="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500">
                                            </div>
                                            <div className="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" ></div>
                                            <div className="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" ></div>
                                            <div className="w-full h-2.5 flex flex-col justify-center overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500" ></div>
                                            <div>
                                                <div className="w-10 text-end">
                                                    <span className="text-sm text-gray-800 dark:text-black">100%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                        <img src="/quiz-icon.svg" alt="" className="w-10 h-10 text-white" />
                                    </div>
                                    <div className="p-4 text-right">

                                        <h4 className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">342 XP</h4>
                                        <p className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                                            Pub quiz</p>
                                    </div>
                                    <div className="border-t border-blue-gray-50 p-4">
                                        <div className="flex justify-between">
                                            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                                <strong className="text-green-500">Remaining Progress</strong>
                                            </p>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-500  rounded-lg hover:bg-teal-700 focus:outline-none  dark:bg-teal-500  dark:hover:bg-teal-500">
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div>
                                            <div className="inline-block mb-2 ms-[calc(50%-1.25rem)] py-0.5 px-1.5 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg bg-teal-500 ">50%</div>
                                            <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" >
                                                <div className="flex flex-col justify-center rounded-full overflow-hidden  text-xs text-white text-center whitespace-nowrap transition duration-500 bg-teal-500 " style={{ width: "50%" }}></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                                    <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                        <img src="/3.svg" alt="" className="w-10 h-10 text-white" />
                                    </div>
                                    <div className="p-4 text-right">
                                        <h4 className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">342 XP</h4>
                                        <p className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                                            SongPop Classic</p>
                                    </div>
                                    <div className="border-t border-blue-gray-50 p-4">
                                        <div className="flex justify-between">
                                            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                                <strong className="text-green-500">Remaining Progress</strong>
                                            </p>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-500  rounded-lg hover:bg-teal-700 focus:outline-none  dark:bg-teal-500  dark:hover:bg-teal-500">
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </a>
                                        </div>

                                        <div>
                                            <div className="inline-block mb-2 ms-[calc(50%-1.25rem)] py-0.5 px-1.5 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg bg-teal-500 ">50%</div>
                                            <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" >
                                                <div className="flex flex-col justify-center rounded-full overflow-hidden  text-xs text-white text-center whitespace-nowrap transition duration-500 bg-teal-500 " style={{ width: "50%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col gap-5'>
                            <h3 className="text-3xl font-bold mb-4 dark:text-white">Games To Play</h3>
                            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">

                                <Card
                                    xp="342 XP"
                                    title="Trivial Pursuit"
                                    imageSrc="/sonic-icon.svg"
                                    link="/dashboard/lobby"
                                />
                                <Card
                                    xp="342 XP"
                                    title="Saqib Iqbal"
                                    imageSrc="/sonic-icon.svg"
                                    link="/dashboard/lobby"
                                />
                                <Card
                                    xp="342 XP"
                                    title="Daniyal Tariq"
                                    imageSrc="/sonic-icon.svg"
                                    link="/dashboard/lobby"
                                />
                                <Card
                                    xp="342 XP"
                                    title="Trivial Pursuit"
                                    imageSrc="/sonic-icon.svg"
                                    link="/dashboard/lobby"
                                />

                            </div>

                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                                <Card
                                    xp="342 XP"
                                    title="Trivial Pursuit"
                                    imageSrc="/sonic-icon.svg"
                                    link="/dashboard/lobby"
                                />
                                <Card
                                    xp="342 XP"
                                    title="Trivial Pursuit"
                                    imageSrc="/sonic-icon.svg"
                                    link="/dashboard/lobby"
                                />
                                <Card
                                    xp="342 XP"
                                    title="Trivial Pursuit"
                                    imageSrc="/sonic-icon.svg"
                                    link="/dashboard/lobby"
                                />
                                <Card
                                    xp="342 XP"
                                    title="Trivial Pursuit"
                                    imageSrc="/sonic-icon.svg"
                                    link="/dashboard/lobby"
                                />

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </DashboardLayout >
    );
};

export default General;
