import React from 'react'
import { FaBootstrap, FaCss3, FaDev, FaFigma, FaGit, FaGithub, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { GiWalrusHead } from 'react-icons/gi'
import { IoLogoJavascript } from 'react-icons/io'
import { RiNextjsFill } from 'react-icons/ri'
import { SiAdobeillustrator, SiAdobephotoshop, SiExpress, SiFirebase, SiJsonwebtokens, SiMongodb, SiTailwindcss, SiTypescript, SiVercel, SiVisualstudiocode } from 'react-icons/si'

export default function ResumeSection() {
  return (
    <div>
      <h2 className='text-5xl font-extrabold border-b-2 border-b-white mb-12 pb-2'>Resume</h2>
      <div className='flex flex-col lg:flex-row gap-8'>
        <div className='flex-1 p-8'>
          <h2 className='text-3xl font-bold border-b-[4px] border-b-cyan-400 w-fit'>Education</h2>
            <div className='my-12'>
              <ul className="timeline timeline-vertical">
                <li className=''>
                  <hr className="bg-cyan-400" />
                  <div className="timeline-start text-white text-right my-12">
                    <h2 className='text-xl font-bold text-cyan-400'>2024</h2>
                    <p className=' text-sm lg:text-justify '>Programming Hero, Dhaka</p>
                  </div>
                  <div className="timeline-end text-white text-start">
                    <h2 className='text-xl font-bold text-cyan-400'>Web Development</h2>
                    <p className=' text-sm lg:text-justify '>My unstoppable passion for web development guide me to Programming hero. Here I learned Web Development for 6 months and started journey as a front-end web developer.</p>
                  </div>
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="cyan" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </div>
                  <hr className="bg-cyan-400" />
                </li>
                <li className=''>
                  <hr className="bg-cyan-400" />
                  <div className="timeline-start text-white text-right my-12">
                    <h2 className='text-xl font-bold text-cyan-400'>2019</h2>
                    <p className=' text-sm lg:text-justify '>BRAC University, Dhaka</p>
                  </div>
                  <div className="timeline-end text-white text-start">
                    <h2 className='text-xl font-bold text-cyan-400'>Computer Science And Engineering</h2>
                    <p className=' text-sm lg:text-justify '>I Started B Sc. in Computer Science and Engineering in BRAC University, Bangladesh in 2019. But Focused Web and graphics more because of my passion. That is why I choose to become a top level web developer to show my skills.</p>
                  </div>
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="cyan" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </div>
                  <hr className="bg-cyan-400" />
                </li>
                <li className=''>
                  <hr className="bg-cyan-400" />
                  <div className="timeline-start text-white text-right my-12">
                    <h2 className='text-xl font-bold text-cyan-400'>2016</h2>
                    <p className=' text-sm lg:text-justify '>Major General Mahmudul Hassan College, Tangail</p>
                  </div>
                  <div className="timeline-end text-white text-start">
                    <h2 className='text-xl font-bold text-cyan-400'>Higher Secondary School Certificate</h2>
                    <p className=' text-sm lg:text-justify '>I Started Science Background in Major General Mahmudul Hassan College, Tangail in 2016.</p>
                  </div>
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="cyan" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </div>
                  <hr className="bg-cyan-400" />
                </li>
                <li className=''>
                  <hr className="bg-cyan-400" />
                  <div className="timeline-start text-white text-right my-12">
                    <h2 className='text-xl font-bold text-cyan-400'>2011</h2>
                    <p className=' text-sm lg:text-justify'>Bindubashini Govt. Boys{"'"} High School, Tangail</p>
                  </div>
                  <div className="timeline-end text-white text-start">
                    <h2 className='text-xl font-bold text-cyan-400'> Secondary School Certificate</h2>
                    <p className=' text-sm lg:text-justify '>I Started Science Background in Bindubashini Govt. Boys{"'"} High School, Tangail in 2011.</p>
                  </div>
                  <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="cyan" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                  </div>
                  <hr className="bg-cyan-400" />
                </li>
              </ul>
            </div>
        </div>
        <div className='flex-1 p-8'>
          <h2 className='text-3xl font-bold border-b-[4px] border-b-cyan-400 w-fit'>Skills</h2>
          <div className='my-12'>
            <h1 className='text-xl font-bold pb-4'>Front-End</h1>
            <p className='inline-flex text-nowrap flex-wrap gap-2'>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <FaHtml5 className='text-cyan-400' />HTML 5
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <FaCss3 className='text-cyan-400' />CSS 3
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <SiTailwindcss className='text-cyan-400' />Tailwind CSS
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <IoLogoJavascript className='text-cyan-400' />Java Script
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <SiTypescript className='text-cyan-400' />Type Script
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <FaReact className='text-cyan-400' />React Js
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <RiNextjsFill className='text-cyan-400' />Next Js
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <FaBootstrap className='text-cyan-400' />Bootstrap
              </span>
            </p>
          </div>
          <div className='my-12'>
            <h1 className='text-xl font-bold pb-4'>Back-End</h1>
            <p className='inline-flex text-nowrap flex-wrap gap-2'>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <SiExpress className='text-cyan-400' />Express Js
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <FaNodeJs className='text-cyan-400' />Node Js
              </span>
            </p>
          </div>
          <div className='my-12'>
            <h1 className='text-xl font-bold pb-4'>Database</h1>
            <p className='inline-flex text-nowrap flex-wrap gap-2'>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <SiMongodb className='text-cyan-400' />Mongo DB
              </span>
            </p>
          </div>
          <div className='my-12'>
            <h1 className='text-xl font-bold pb-4'>Programming Languages</h1>
            <p className='inline-flex text-nowrap flex-wrap gap-2'>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <IoLogoJavascript className='text-cyan-400' />Java Script
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <FaJava className='text-cyan-400' />Java
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <FaPython className='text-cyan-400' />Python
              </span>
            </p>
          </div>
          <div className='my-12'>
            <h1 className='text-xl font-bold pb-4'>Authentication</h1>
            <p className='inline-flex text-nowrap flex-wrap gap-2'>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <SiFirebase className='text-cyan-400' />Firebase
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <SiJsonwebtokens className='text-cyan-400' />JWT
              </span>
            </p>
          </div>
          <div className='my-12'>
            <h1 className='text-xl font-bold pb-4'>Tools</h1>
            <p className='inline-flex text-nowrap flex-wrap gap-2'>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <FaGit className='text-cyan-400' />Git
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <FaGithub className='text-cyan-400' />GitHub
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <SiVercel className='text-cyan-400' />Vercel
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <GiWalrusHead className='text-cyan-400' />Surge
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <FaFigma className='text-cyan-400' />Figma
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <FaDev className='text-cyan-400' />Dev Tools
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <SiVisualstudiocode className='text-cyan-400' />VS Code
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <SiAdobeillustrator className='text-cyan-400' />Illustrator
              </span>
              <span className='border border-cyan-400 p-2 rounded-lg inline-flex justify-center items-center gap-2'>
                <SiAdobephotoshop className='text-cyan-400' />Photoshop
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
