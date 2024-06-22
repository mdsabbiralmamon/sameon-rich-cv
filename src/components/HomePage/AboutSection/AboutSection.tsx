import React from 'react'
import aboutImg from '@/app/images/aboutMe.png'
import Image from 'next/image'
import { FaDownload } from 'react-icons/fa'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <div className='h-screen flex p-8 gap-8 justify-center items-center flex-col md:flex-row' id='about'>
      <div className='flex-1'>
        <div>
          <Image src={aboutImg} alt='about me bg image' />
        </div>
      </div>
      <div className='flex-1'>
        <h2 className='text-5xl font-extrabold'>About Me</h2>
        <p className='my-4'>Hello, I{"'"}m a Md Sabbir Al Mamon, web-developer based on Bangladesh. I have rich experience in web site design & building and customization. Also I am good at</p>
        <p className='inline-flex text-nowrap flex-wrap gap-2'><span className='border border-cyan-400 p-2 rounded-lg'>HTML 5</span> <span className='border border-cyan-400 p-2 rounded-lg'>CSS 3</span> <span className='border border-cyan-400 p-2 rounded-lg'>Tailwind CSS</span> <span className='border border-cyan-400 p-2 rounded-lg'>Java Script</span> <span className='border border-cyan-400 p-2 rounded-lg'>Type Script</span> <span className='border border-cyan-400 p-2 rounded-lg'>React js</span> <span className='border border-cyan-400 p-2 rounded-lg'>Next js</span> <span className='border border-cyan-400 p-2 rounded-lg'>Express js</span></p>
        <Link href={'https://drive.google.com/file/d/1PjOzatMwk_V-ukoC7nOXHp2omeFGjDkq/view?usp=sharing'}>
        <button className='btn border-none mt-4 inline-flex justify-center items-center gap-4 bg-cyan-400 rounded-full'><FaDownload /> Download CV</button>
        </Link>
      </div>
    </div>
  )
}
