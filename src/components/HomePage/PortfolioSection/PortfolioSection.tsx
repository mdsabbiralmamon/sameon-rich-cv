'use client'

import PortfolioCard from '@/components/Shared/PortfolioCard/PortfolioCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

type PortfolioItem = {
  _id: string;
  projectName: string;
  bannerImage: string;
};

export default function PortfolioSection() {
  const [portfolioData, setPortfolioData] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    axios.get('/api/getPortfolioData')
      .then((response) => {
        setPortfolioData(response.data.portfolioData);
      })
  },[]);
  // console.log("portfoliodata", portfolioData);
  
  return (
    <div className='mb-24' id='portfolio'>
      <div className=' text-center'>
        <h2 className='text-5xl font-extrabold my-4'>Portfolio</h2>
        <h2 className='text-xl font-bold mb-24'>My Works</h2>
      </div>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {
          portfolioData.map(project => <PortfolioCard key={project._id} project={project} />)
        }
      </div>
    </div>
  )
}
