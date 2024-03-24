// Portfolio.jsx

import React from 'react';
import Card from './card.jsx'; // Importing Card component

import projectThumbnail1 from '../../assets/images/project1.png';
import projectThumbnail2 from '../../assets/images/portfolio2.png';
import projectThumbnail3 from '../../assets/images/portfolio3.png';
import projectThumbnail4 from '../../assets/images/project4.png';
import projectThumbnail5 from '../../assets/images/project5.png';
import projectThumbnail6 from '../../assets/images/project6.png';

const Portfolio = () => {
  return (
    <div className="grid-container-template">
      <h1 className='mainText'>Hello</h1>
      <div className='flex-container'>
        {/* Render the Card component with different props */}
        <Card thumbnail={projectThumbnail1} title="Project 1" description="Description of project 1" />
        <Card thumbnail={projectThumbnail2} title="Project 2" description="Description of project 2" />
        <Card thumbnail={projectThumbnail3} title="Project 3" description="Description of project 3" />
        <Card thumbnail={projectThumbnail4} title="Project 4" description="Description of project 4" />
        <Card thumbnail={projectThumbnail5} title="Project 5" description="Description of project 5" />
        <Card thumbnail={projectThumbnail6} title="Project 6" description="Description of project 6" />
      </div>
    </div>
  );
};

export default Portfolio;
