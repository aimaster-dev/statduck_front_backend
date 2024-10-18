import React, { useState } from 'react';
import Chat from './ChatBot';

interface Message {
    user: string;
    text: string;
}

const MessageInbox: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { user: 'You', text: newMessage }]);
            setNewMessage('');
        }
    };

    return (
        <div>
            <input type="checkbox" id="drawer-right" className="drawer-toggle" />
            <label htmlFor="drawer-right" className="btn btn-primary text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227q1.694.25 3.423.379c.35.026.67.21.865.501L12 21l2.755-4.132a1.14 1.14 0 0 1 .865-.502a48 48 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.4 48.4 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741z" />
                </svg>
            </label>
            <label className="overlay" htmlFor="drawer-right"></label>
            <div className="drawer drawer-right drawer">
                <div className="drawer-content pt-10 flex flex-col h-full">
                    <label htmlFor="drawer-right" className="btn btn-sm btn-circle btn-ghost absolute right-0 top-2">✕</label>
                    <Chat />
                </div>

            </div >
        </div >
    );
};

export default MessageInbox;
