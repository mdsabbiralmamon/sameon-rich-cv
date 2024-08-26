'use client';

import React, { useRef, FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const ContactUs: React.FC = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Basic validation to check if fields are filled
        if (!userName.trim() || !userEmail.trim() || !message.trim()) {
            Swal.fire({
                icon: 'warning',
                title: 'Incomplete Form',
                text: 'Please fill in all fields before submitting.',
            });
            return;
        }

        emailjs
            .send(
                'sameon-cv', // serviceID
                'sameon-cv', // templateID
                {
                    from_name: userName,
                    from_email: userEmail,
                    reply_to: userEmail,
                    message: message,
                },
                'nqtGbxhko2-OWTNTX' // publicKey
            )
            .then(
                () => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent!',
                        text: 'Your message has been sent successfully.',
                    });

                    // Clear the form fields
                    form.current?.reset();
                    setUserName('');
                    setUserEmail('');
                    setMessage('');
                },
                (error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Message Failed',
                        text: `Failed to send message: ${error.text}`,
                    });
                }
            );
    };

    return (
        <div className='mb-24' id='portfolio'>
            <div className='text-center'>
                <h2 className='text-5xl font-extrabold my-4'>Connect with me</h2>
                <h2 className='text-xl font-bold mb-12'>Why not send me your valuable feedback?</h2>
            </div>
            <div className='w-full'>
                <form className='glass rounded-lg p-8' ref={form} onSubmit={sendEmail}>
                    <div className='flex flex-col w-full items-center justify-center'>
                        <div className='w-full my-2'>
                            <label>Name</label>
                            <input 
                                className='w-full rounded-lg p-4 text-cyan-400' 
                                type="text" 
                                name="user_name" 
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className='w-full my-2'>
                            <label>Email</label>
                            <input 
                                className='w-full rounded-lg p-4 text-cyan-400' 
                                type="email" 
                                name="user_email" 
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                            />
                        </div>
                        <div className='w-full my-2'>
                            <label>Message</label>
                            <textarea 
                                className='w-full rounded-lg p-4 text-cyan-400 h-52' 
                                name="message" 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <input 
                                className='btn w-full border-none bg-cyan-400' 
                                type="submit" 
                                value="Send" 
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
