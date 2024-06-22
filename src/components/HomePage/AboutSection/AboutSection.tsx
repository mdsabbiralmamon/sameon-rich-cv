import React from 'react'
import aboutImg from '@/app/images/aboutMe.png'
import Image from 'next/image'
import { FaCode, FaDownload, FaHtml5 } from 'react-icons/fa'
import Link from 'next/link'
import { SiAdobexd } from 'react-icons/si'

export default function AboutSection() {
  return (
    <div>
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
      <div>
        <h2 className='text-3xl font-extrabold text-center'>What I Do</h2>
        <div className='grid gap-8 grid-cols-1 lg:grid-cols-3 my-24'>
          <div className='card glass p-8'>
            <SiAdobexd className='text-3xl text-cyan-400' />
            <h2 className='text-3xl my-4 font-bold'>Web Design</h2>
            <p>Creating visually appealing and user-friendly web designs that provide an engaging and intuitive user experience. My focus is on crafting custom designs that align with your brand and meet your business goals.</p>
          </div>
          <div className='card glass p-8'>
            <FaCode className='text-3xl text-cyan-400' />
            <h2 className='text-3xl my-4 font-bold'>Web Development</h2>
            <p>Developing high-quality, responsive websites using modern web technologies. I ensure that your website is not only aesthetically pleasing but also fully functional, optimized for performance, and accessible on all devices.</p>
          </div>
          <div className='card glass p-8'>
            <FaHtml5 className='text-3xl text-cyan-400' />
            <h2 className='text-3xl my-4 font-bold'>Design to HTML</h2>
            <p>Transforming design mockups into fully functional HTML/CSS templates. I take great care to ensure that the conversion process maintains the integrity of the original design while producing clean, efficient, and semantic code.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
