'use client';

import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const ContactUs: React.FC = () => {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('sameon-cv', 'sameon-cv', form.current, {
                    publicKey: 'nqtGbxhko2-OWTNTX',
                })
                .then(
                    () => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Message Sent!',
                            text: 'Your message has been sent successfully.',
                        });

                        // Clear the form fields
                        form.current?.reset();
                    },
                    (error) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Message Failed',
                            text: `Failed to send message: ${error.text}`,
                        });
                    }
                );
        }
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
                            <input className='w-full rounded-lg p-4 text-cyan-400' type="text" name="user_name" />
                        </div>
                        <div className='w-full my-2'>
                            <label>Email</label>
                            <input className='w-full rounded-lg p-4 text-cyan-400' type="email" name="user_email" />
                        </div>
                        <div className='w-full my-2'>
                            <label>Message</label>
                            <textarea className='w-full rounded-lg p-4 text-cyan-400 h-52' name="message" />
                            <input className='btn w-full border-none bg-cyan-400' type="submit" value="Send" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
