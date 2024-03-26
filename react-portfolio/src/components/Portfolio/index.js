import './index.scss'
import React from 'react'
import projectThumbnail1 from '../../assets/images/project1.png'
import projectThumbnail2 from '../../assets/images/portfolio2.png'
import projectThumbnail3 from '../../assets/images/portfolio3.png'
import projectThumbnail4 from '../../assets/images/project4.png'
import projectThumbnail5 from '../../assets/images/project5.png'
import projectThumbnail6 from '../../assets/images/project6.png'

const Portfolio = () => {
  // Define the Card component inside the Portfolio component
  const Card = ({ thumbnail, title, description }) => (
    <div className="projectIcons">
      <div className="column">
        <img
          src={thumbnail}
          alt="Description"
          style={{ maxWidth: '350%', maxHeight: '200px' }}
        />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )

  // Array of project details
  const projects = [
    {
      thumbnail: projectThumbnail1,
      title: 'Project 1',
      description: 'Description of project 1',
    },
    {
      thumbnail: projectThumbnail2,
      title: 'Project 2',
      description: 'Description of project 2',
    },
    {
      thumbnail: projectThumbnail3,
      title: 'Project 3',
      description: 'Description of project 3',
    },
    {
      thumbnail: projectThumbnail4,
      title: 'Project 4',
      description: 'Description of project 4',
    },
    {
      thumbnail: projectThumbnail5,
      title: 'Project 5',
      description: 'Description of project 5',
    },
    {
      thumbnail: projectThumbnail6,
      title: 'Project 6',
      description: 'Description of project 6',
    },
  ]

  return (
    <div
      className="grid-container-template"
      style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: '20px' }}>
    
      {/* Render the first 3 Card components */}
      <div
        className="flex-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <h1 className="mainText">Hello</h1>
        {projects.slice(0, 3).map((project, index) => (
          <Card
            key={index}
            thumbnail={project.thumbnail}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
      {/* Render the last 3 Card components */}
      <div
     
      >
        {/* Render the last 3 Card components */}
        {projects.slice(3).map((project, index) => (
          <Card
            key={index + 3}
            thumbnail={project.thumbnail}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
