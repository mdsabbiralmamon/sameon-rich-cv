import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

type PortfolioItem = {
  _id: string;
  projectName: string;
  bannerImage: string;
};

type PortfolioCardProps = {
  project: PortfolioItem;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  return (
    <div className='card h-96 w-full flex justify-center items-center overflow-hidden cursor-pointer relative group hover:border-[8px] hover:border-cyan-400 transition-all duration-500 ease-in-out'>
      <Image className='absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-all duration-500' src={project.bannerImage} alt={`${project.bannerImage} image`} width={1000} height={1000} />
      <h2 className=' inline-flex justify-start items-center gap-2 text-3xl font-bold absolute -bottom-20 bg-cyan-400 w-full p-4 group-hover:bottom-10 transition-all duration-500 group'>{project.projectName} <FaArrowRight className='hover:text-4xl group-hover:translate-x-1 transition-all duration-500 ease-in-out' /></h2>
    </div>
  );
};

export default PortfolioCard;