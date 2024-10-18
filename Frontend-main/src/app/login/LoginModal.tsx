import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';

const LoginModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Link href="/login" passHref legacyBehavior>
        <a
          onClick={(e) => {
            e.preventDefault();
            setShowModal(true);
          }}
          className="outline-none flex relative text-gray-700 dark:text-gray-300 rounded-full p-2 lg:p-3 border border-gray-100 dark:border-gray-900"
        >
          <AiOutlineUser className="w-6 h-6" />
          <span className="sr-only">login</span>
        </a>
      </Link>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <form className="grid gap-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Sign Into Your Account</h3>

              <div className="grid gap-2">
                <div>
                  <label htmlFor="login-email" className="block text-left text-gray-700 dark:text-gray-300 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Type your email address"
                    id="login-email"
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label htmlFor="login-pass" className="block text-left text-gray-700 dark:text-gray-300 font-medium mb-1">Password</label>
                  <input
                    type="password"
                    placeholder="Type your password"
                    id="login-pass"
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  You do not have an account? <a href="/signup" className="text-blue-500 dark:text-blue-400 font-medium">Sign up</a>
                </span>
                <a href="#" className="text-sm text-blue-500 dark:text-blue-400">You forgot your password</a>
                <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Log In</button>
              </div>
            </form>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
