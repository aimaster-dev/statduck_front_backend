import React, { useState } from 'react';

interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    userData: {
        fullName: string;
        email: string;
        location: string;
        description: string;
        image: string;
    };
    onSave: (updatedData: any) => void;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, userData, onSave }) => {
    const [fullName, setFullName] = useState(userData.fullName);
    const [email, setEmail] = useState(userData.email);
    const [location, setLocation] = useState(userData.location);
    const [description, setDescription] = useState(userData.description || '');
    const [file, setFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState(userData.image || '');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files ? e.target.files[0] : null;
        if (selectedFile) {
            const fileURL = URL.createObjectURL(selectedFile);
            setFile(selectedFile);
            setImagePreview(fileURL);
        }
    };

    const handleSave = () => {
        const updatedData = {
            fullName,
            email,
            location,
            description,
            image: imagePreview || userData.image,
            file,
        };
        onSave(updatedData);
        onClose();
    };

    return (
        isOpen ? (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center p-4">
                <div className="bg-gray-800 p-6 rounded-lg max-w-lg w-full mx-auto max-h-screen overflow-y-auto">
                    <h2 className="text-white text-xl mb-4 text-center">Edit Profile</h2>
                    <div className="flex flex-col items-center mb-4">
                        <img
                            src={imagePreview || '/bruce-mars.jpg'}
                            alt="User Avatar"
                            className="w-24 h-24 rounded-full mb-4 object-cover"
                        />
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-1">Full Name:</label>
                        <input
                            type="text"
                            className="w-full p-2 rounded-md bg-gray-700 text-gray-300"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-1">Email:</label>
                        <input
                            type="email"
                            className="w-full p-2 rounded-md bg-gray-700 text-gray-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-1">Location:</label>
                        <input
                            type="text"
                            className="w-full p-2 rounded-md bg-gray-700 text-gray-300"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-1">Description:</label>
                        <textarea
                            className="w-full p-2 rounded-md bg-gray-700 text-gray-300"
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-end gap-2">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded-md"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        ) : null
    );
};

export default UserModal;
