import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { FaArrowRight, FaProjectDiagram } from 'react-icons/fa';

type PortfolioItem = {
  _id: string;
  projectName: string;
  bannerImage: string;
  clientGitHub: string;
  serverGitHub: string;
  liveLink: string;
  projectDescription: string;
};

type PortfolioCardProps = {
  project: PortfolioItem;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  const dialogRef = useRef<HTMLDialogElement>(null); // Ref to store dialog element reference

  const handleShowModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal(); // Show the dialog if the ref is available
    }
  };

  const dialogId = `projectDetails_${project._id}`; // Unique ID for each dialog

  return (
    <>
      <button onClick={handleShowModal}>
        <div className='card h-96 w-full flex justify-center items-center overflow-hidden relative group hover:border-[8px] hover:border-cyan-400 transition-all duration-500 ease-in-out'>
          <Image
            className='absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-500'
            src={project.bannerImage}
            alt={`${project.bannerImage} image`}
            width={1000}
            height={1000}
          />
          <h2 className='inline-flex justify-start items-center gap-2 text-3xl font-bold absolute -bottom-20 bg-cyan-400 w-full p-4 group-hover:bottom-10 transition-all duration-500 group'>
            {project.projectName}
            <FaArrowRight className='hover:text-4xl group-hover:translate-x-1 transition-all duration-500 ease-in-out' />
          </h2>
        </div>
      </button>
      <dialog id={dialogId} className="modal" ref={dialogRef}>
        <div className="modal-box glass">
          <h3 className="font-bold text-3xl inline-flex gap-4 items-center mb-8"><FaProjectDiagram className='text-cyan-400' /> {project.projectName}</h3>
          <p><span className='text-xl text-cyan-400 font-bold'>Project Description :</span> {project.projectDescription}</p>
          <p><span className='text-xl text-cyan-400 font-bold'>Live Link :</span> <Link href={project.liveLink}><span className='link'>{project.liveLink}</span></Link></p>
          <p><span className='text-xl text-cyan-400 font-bold'>GitHub Link :</span> <Link href={project.serverGitHub}><span className='link'>Server Side</span></Link> || <Link href={project.clientGitHub}><span className='link'>Client Side</span></Link></p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-ghost border-2 border-cyan-400">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default PortfolioCard;
