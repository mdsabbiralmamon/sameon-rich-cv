'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import onlineImage from '@/app/images/onliine.png'
import useActivity from '@/app/hooks/UseActivity';
import { FaGlobe, FaMobile, FaPaperPlane, FaWindows } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';

export default function CurrentActivities() {
    const { discordStatus } = useActivity();

    const [elapsedTime, setElapsedTime] = useState('');

    useEffect(() => {
        if (!discordStatus?.activities[0]?.timestamps?.start) return;

        const startTime = discordStatus.activities[0].timestamps.start;
        const interval = setInterval(() => {
            const now = Date.now();
            const diff = now - startTime;

            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setElapsedTime(`${hours}h ${minutes}m ${seconds}s`);
        }, 1000);

        return () => clearInterval(interval);
    }, [discordStatus]);

    console.log("data received", discordStatus);

    // Extract the first activity
    const activity = discordStatus?.activities[0];

    return (
        <div className='my-24'>
            <div className=' text-center'>
                <h2 className='text-5xl font-extrabold'>Online Status</h2>
            </div>
            <div className='grid sm:gap-0 lg:gap-8 grid-cols-1 lg:grid-cols-3 my-24 '>
                <div className='flex justify-center items-center glass rounded-lg w-full mb-8 p-8 lg:h-full'>
                    <div className='text-center'>
                        <Image src={onlineImage} alt='online bg image' />
                        <h2 className='text-3xl'>I am now {" "}
                            {
                                discordStatus?.discord_status === "online" ? (
                                    <span className='text-green-500'>online</span>
                                ) : (
                                    <span className='text-red-500'>offline</span>
                                )
                            }
                        </h2>
                        {
                            discordStatus?.discord_status === "online" ? (
                                <div className='my-8'>
                                    <button className='btn rounded-full bg-cyan-400 border-none font-bold inline-flex'><FaPaperPlane /> Let{"'"} talk </button>
                                </div>
                            ) : (
                                <div className='my-8'>
                                    <button className='btn rounded-full bg-cyan-400 border-none font-bold inline-flex'><FaPaperPlane />Drop Away Message</button>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='col-span-2 space-y-8 w-full'>
                    <div className='glass rounded-lg w-full p-8'>
                        <div>
                            <h2 className='text-3xl font-bold'>Current Devices:</h2>
                            <div className='flex flex-col lg:flex-row gap-8 my-8 '>
                                <div className={`h-64 border w-full ${discordStatus?.active_on_discord_desktop ? 'border-green-500' : 'border-red-500'} rounded-lg p-8`}>
                                    <FaComputer className={`text-[10rem] mx-auto mb-4 ${discordStatus?.active_on_discord_desktop ? 'text-green-500' : 'text-red-500'}`} />
                                    {
                                        discordStatus?.active_on_discord_desktop ? <p className='text-white bg-green-500 rounded-full text-center'>Online</p> : <p className='text-white bg-red-500 rounded-full text-center'>Offline</p>
                                    }
                                </div>
                                <div className={`border w-full ${discordStatus?.active_on_discord_mobile ? 'border-green-500' : 'border-red-500'} rounded-lg p-8`}>
                                    <FaMobile className={`text-[10rem] mx-auto mb-4 ${discordStatus?.active_on_discord_mobile ? 'text-green-500' : 'text-red-500'}`} />
                                    {
                                        discordStatus?.active_on_discord_mobile ? <p className='text-white bg-green-500 rounded-full text-center'>Online</p> : <p className='text-white bg-red-500 rounded-full text-center'>Offline</p>
                                    }
                                </div>
                                <div className={`border w-full ${discordStatus?.active_on_discord_web ? 'border-green-500' : 'border-red-500'} rounded-lg p-8`}>
                                    <FaGlobe className={`text-[10rem] mx-auto mb-4 ${discordStatus?.active_on_discord_web ? 'text-green-500' : 'text-red-500'}`} />
                                    {
                                        discordStatus?.active_on_discord_web ? <p className='text-white bg-green-500 rounded-full text-center'>Online</p> : <p className='text-white bg-red-500 rounded-full text-center'>Offline</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='glass rounded-lg w-full p-8'>
                        {
                            activity ?
                                (
                                    <div>
                                        <h2 className='text-3xl font-bold'>Currently Working on:</h2>
                                        <div className='flex justify-between my-8'>
                                            <div className='flex gap-8'>
                                                <div className='p-2 bg-cyan-400 rounded-md inline-flex justify-center items-center w-24 h-24'>
                                                    <FaWindows className='text-3xl' />
                                                </div>
                                                <div>
                                                    <h2 className='text-xl font-extrabold text-cyan-400'>{activity?.name}</h2>
                                                    <p className='my-2'>Started Working at: {activity?.timestamps?.start ? new Date(activity.timestamps.start).toLocaleTimeString() : 'N/A'}</p>
                                                    <p>Time Elapsed: {elapsedTime}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <h2 className='text-3xl font-bold'>Currently Working on:</h2>
                                        <div className='flex justify-between my-8'>
                                            <div className='flex gap-8'>
                                                <div className='p-2 bg-gray-400 rounded-md inline-flex justify-center items-center w-24 h-24'>
                                                    <FaWindows className='text-3xl' />
                                                </div>
                                                <div>
                                                    <h2 className='text-xl font-extrabold text-gray-400'>I am sleeping now</h2>
                                                    <p className='my-2'>Start Working at: After finishing my sleep</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
