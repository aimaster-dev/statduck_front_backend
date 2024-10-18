import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';

type FormData = {
    Name: string;
    Email: string;
    Message: string;
};

type FormErrors = {
    Name?: string;
    Email?: string;
    Message?: string;
};

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        Name: '',
        Email: '',
        Message: ''
    });
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const validateField = (name: keyof FormData, value: string) => {
        let error = '';
        switch (name) {
            case 'Name':
                if (!value) {
                    error = 'Name is required';
                } else if (!/^[a-zA-Z\s]+$/.test(value)) {
                    error = 'Name can only contain letters and spaces';
                }
                break;
            case 'Email':
                if (!value) {
                    error = 'Email is required';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    error = 'Email address is invalid';
                }
                break;
            case 'Message':
                if (!value) {
                    error = 'Message is required';
                } else if (value.length < 10) {
                    error = 'Message must be at least 10 characters long';
                } else if (value.length > 500) {
                    error = 'Message must be less than 500 characters';
                }
                break;
        }
        return error;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        const error = validateField(name as keyof FormData, value);
        setFormErrors({
            ...formErrors,
            [name]: error
        });
    };

    const validateForm = () => {
        let errors: FormErrors = {};
        for (const [key, value] of Object.entries(formData)) {
            const error = validateField(key as keyof FormData, value);
            if (error) {
                errors[key as keyof FormErrors] = error;
            }
        }

        return errors;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSuccessMessage('');
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsSubmitting(true);

        const userID = 'lB1NqZSQe4BG_i94L';
        const serviceID = 'service_0bj3gwf';
        const templateID = 'template_njl746j';

        const templateParams = {
            to_email: 'your-email@example.com', 
            from_name: formData.Name,
            reply_to: formData.Email,
            Name: formData.Name,
            Email: formData.Email,
            Message: formData.Message
        };

        try {
            await emailjs.send(serviceID, templateID, templateParams, userID);
            setSuccessMessage('Message sent successfully!');
            setFormData({ Name: '', Email: '', Message: '' });
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        } catch (error) {
            alert('Failed to send message.');
            console.error('EmailJS error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form id="contactForm" onSubmit={handleSubmit}>
            <div className="mb-6">
                <div className="mx-0 mb-1 sm:mb-4">
                    <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Your name"
                        className={`w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 ${formErrors.Name && 'border-red-500'}`}
                        name="Name"
                        value={formData.Name}
                        onChange={handleChange}
                    />
                    {formErrors.Name && <p className="text-red-500 text-xs">{formErrors.Name}</p>}
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                    <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        className={`mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 ${formErrors.Email && 'border-red-500'}`}
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                    />
                    {formErrors.Email && <p className="text-red-500 text-xs">{formErrors.Email}</p>}
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                    <textarea
                        id="message"
                        name="Message"
                        cols={30}
                        rows={5}
                        placeholder="Write your message..."
                        className={`mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 ${formErrors.Message && 'border-red-500'}`}
                        value={formData.Message}
                        onChange={handleChange}
                    ></textarea>
                    {formErrors.Message && <p className="text-red-500 text-xs">{formErrors.Message}</p>}
                </div>
            </div>
            <div className="text-center">
                <button
                    type="submit"
                    className={`w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0 ${isSubmitting && 'opacity-50 cursor-not-allowed'}`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
            </div>
        </form>
    );
};

export default ContactForm;
