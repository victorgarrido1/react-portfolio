import projectThumbnail from '../../assets/images/project_1'

// Define a functional component named Card
const Card = () => {
    return (
      <div className="card">
        <img src={projectThumbnail} alt="Description" />
        <h2>React</h2>
        <p>Description of the project</p>
      </div>
    );
  };
  
  // Export the Card component so it can be imported and used in other parts of your application
  export default Card;