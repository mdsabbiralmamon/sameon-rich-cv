import React from 'react';

type PortfolioItem = {
  _id: string;
  projectName: string;
};

type PortfolioCardProps = {
  project: PortfolioItem;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  return (
    <div className='card h-96 w-full glass flex justify-center items-center'>
      <h2 className='text-3xl font-bold'>{project.projectName}</h2>
    </div>
  );
};

export default PortfolioCard;