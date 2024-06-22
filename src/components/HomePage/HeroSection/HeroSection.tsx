'use client'

import Image from 'next/image'
import { FaFacebook, FaGithub, FaMinus, FaMoon, FaPhoneAlt, FaSkull, FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import { IoLocationSharp } from 'react-icons/io5'

import profilePhoto from '@/app/images/photo.jpg'
import { TiTick } from 'react-icons/ti'
import useActivity from '@/app/hooks/UseActivity'
import Link from 'next/link'
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
  const { discordStatus } = useActivity();

  // console.log("data received", discordStatus);

  return (
    <div className='flex flex-col md:flex-row justify-between items-center'>
      <div className='p-4'>
        <h3 className='bg-cyan-400 w-fit p-3 rounded-t-full text-xl font-bold rounded-r-full'>Hello I am</h3>
        <h2 className='text-5xl font-extrabold my-4'>Md Sabbir Al Mamon</h2>
        {/* <h4 className='text-3xl front-bold'>Front-End Developer</h4> */}
        <h4 className='text-3xl front-bold'><Typewriter
          options={{
            strings: ['Programmer', 'Designer', 'Developer', 'Front-End Developer'],
            autoStart: true,
            loop: true,
          }}
        /></h4>
        <div className='my-4'>
          <div>
            <h4 className='inline-flex justify-center items-center gap-2'><IoIosMail /> md.sabbiralmamon@gmail.com</h4>
          </div>
          <div>
            <h4 className='inline-flex justify-center items-center gap-2'><FaPhoneAlt /> +880 1798 698 004</h4>
          </div>
          <div>
            <h4 className='inline-flex justify-center items-center gap-2'><IoLocationSharp /> 59, Mohakhali, Dhaka-1212</h4>
          </div>
        </div>
        <div className='flex gap-4 py-4 text-3xl'>
          <div>
            <Link href={'https://www.facebook.com/mdsabb1ralmamon/'}><FaFacebook /></Link>
          </div>
          <div>
            <Link href={'https://twitter.com/mdsabbiralmamon'}><FaTwitter /></Link>
          </div>
          <div>
            <Link href={'https://github.com/mdsabbiralmamon/'}><FaGithub /></Link>
          </div>
          <div>
            <Link href={'https://www.linkedin.com/in/mdsabbiralmamon/'}><FaLinkedin /></Link>
          </div>
        </div>
      </div>
      <div className='p-4 flex justify-center items-center'>
        <div className='profilePhoto rounded-full border-[14px] border-gray-900'>
          <div className='profilePhoto rounded-full border-[14px] border-gray-700 relative'>
            <Image src={profilePhoto} alt='profile photo of md sabbir al mamon' height={300} width={300} className='rounded-full' />
            <div>
              {discordStatus && (
                discordStatus.discord_status === 'dnd' ? (
                  <div className="bg-red-500 border-[3px] border-white h-10 w-10 rounded-full absolute bottom-6 left-2 tooltip flex justify-center items-center cursor-pointer" data-tip="Do Not Disturb"><FaMinus /></div>
                ) : (
                  discordStatus.discord_status === 'idle' ? (
                    <div className="bg-yellow-500 border-[3px] border-white h-10 w-10 rounded-full absolute bottom-6 left-2 tooltip flex justify-center items-center cursor-pointer" data-tip="Idle"><FaMoon /></div>
                  ) : (
                    discordStatus.discord_status === 'offline' ? (
                      <div className="bg-gray-500 border-[3px] border-white h-10 w-10 rounded-full absolute bottom-6 left-2 tooltip flex justify-center items-center cursor-pointer" data-tip="Offline"><FaSkull /></div>
                    ) : (
                      <div className="bg-green-500 border-[3px] border-white h-10 w-10 rounded-full absolute bottom-6 left-2 tooltip flex justify-center items-center cursor-pointer" data-tip="Online"><TiTick /></div>
                    )
                  )
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
