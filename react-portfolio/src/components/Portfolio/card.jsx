import projectThumbnail1 from '../../assets/images/project1.png'
import projectThumbnail2 from '../../assets/images/portfolio2.png'
import projectThumbnail3 from '../../assets/images/portfolio3.png'
import projectThumbnail4 from '../../assets/images/project4.png'
import projectThumbnail5 from '../../assets/images/project5.png'
import projectThumbnail6 from '../../assets/images/project6.png'



// Define a functional component named Card
const Card = ({ thumbnail, title, description}) => {
    return (
      <>
      <div className="projectIcons">
        <img src={projectThumbnail1} alt="Description" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="projectIcons">
        <img src={projectThumbnail2} alt="Description" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="projectIcons">
        <img src={projectThumbnail3} alt="Description" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="projectIcons">
        <img src={projectThumbnail4} alt="Description" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="projectIcons">
        <img src={projectThumbnail5} alt="Description" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="projectIcons">
        <img src={projectThumbnail6} alt="Description" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      </>
    );
  };
  
  // Export the Card component so it can be imported and used in other parts of your application
  export default Card;