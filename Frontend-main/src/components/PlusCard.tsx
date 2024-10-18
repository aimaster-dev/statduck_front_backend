import React from 'react';

interface PlusCardProps {
    onAddFriend: () => void;
    isFirst: boolean;
}

const PlusCard: React.FC<PlusCardProps> = ({ onAddFriend, isFirst }) => {
    return (
        <div
            className="xl:w-[135px] h-[126px] flex items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer relative"
            onClick={onAddFriend}
        >
            {isFirst ? (
                <img src='/logo.svg' alt="Fixed" className="w-full h-full object-contain" />
            ) : (
                <svg
                    className="w-8 h-8 text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m7-7H5" />
                </svg>
            )}
        </div>
    );
};

export default PlusCard;
