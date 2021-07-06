import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>
        Guillermo López García
      </strong>
      <p>
        Now in development, 
        <a
          target="_blank" rel="noopener noreferrer"
          href="https://github.com/guilogar"
        >
          see my repositories
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
