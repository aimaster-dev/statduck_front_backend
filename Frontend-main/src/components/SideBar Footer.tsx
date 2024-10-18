import React, { useState } from 'react';

const SidebarFooter: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <section className="sidebar-footer justify-end bg-gray-2">
            <div
                role="alert"
                className="relative flex w-full px-4 py-4 mt-auto text-base text-white bg-gray-900 rounded-lg font-regular"
            >
                <div className="mr-12">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-12 h-12 mb-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                        />
                    </svg>
                    <h6 className="block mb-1 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
                        Upgrade to PRO
                    </h6>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-inherit opacity-80">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam exercitationem delectus accusantium. Quos nesciunt provident, adipisci sint iste consequatur id!
                    </p>
                    <div className="flex gap-3 mt-4">
                        <a href="#" className="block font-sans text-sm antialiased font-medium leading-normal text-inherit opacity-80" onClick={handleClose}>
                            Dismiss
                        </a>
                        <a href="/dashboard/pricing" className="block font-sans text-sm antialiased font-medium leading-normal text-inherit">
                            Upgrade Now
                        </a>
                    </div>
                </div>
                <button
                    onClick={handleClose}
                    className="!absolute top-3 right-3 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </section>
    );
};

export default SidebarFooter;
