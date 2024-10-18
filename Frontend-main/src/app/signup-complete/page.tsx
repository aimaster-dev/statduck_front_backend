const SignupComplete = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Signup Complete</h3>
                <p className="text-gray-700 dark:text-gray-300">Your account has been created successfully!</p>
                <a href="/" className="text-blue-500 dark:text-blue-400 font-medium">Go to Home</a>
            </div>
        </div>
    );
};

export default SignupComplete;
