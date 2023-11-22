import React from "react";
import "./projects.css";
import Card from "../../Components/Card";

const Projects = () => {
  const [resource, setResource] = React.useState(null);
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setData(data.projects);
        setResource(data.projects);
      });
    document.title = "PROJECTS | AIM STUDIO";
  }, []);
  const handleCommercial = () => {
    const commercialData = resource.filter((item) => item.tag === "commercial");
    setData(commercialData);
  };
  const handleRenovation = () => {
    const renovationData = resource.filter((item) => item.tag === "renovation");
    setData(renovationData);
  };
  const handleMulti = () => {
    const multiData = resource.filter((item) => item.tag === "multi-units");
    setData(multiData);
  };
  const handleResidential = () => {
    const residentialData = resource.filter(
      (item) => item.tag === "residential"
    );
    setData(residentialData);
  };
  console.log(data);
  return data ? (
    <div className='projects'>
      <div className='filterLinks'>
        <button
          onClick={() => {
            setData(resource);
          }}
        >
          All
        </button>
        <button onClick={handleCommercial}>Commercial</button>
        <button onClick={handleMulti}>Multi-units</button>
        <button onClick={handleResidential}>Residential</button>
        <button onClick={handleRenovation}>Renovation</button>
      </div>
      <div className='project-container'>
        {data.map((project) => {
          return (
            <div className='project-card' key={project.id}>
              <div className='img-container'>
                <Card
                  title={"+ READ MORE"}
                  src={project.imgURL[0]}
                  path={`/projects/${project.id}`}
                />
              </div>
              <div className='img-desc'>
                {project.address}
                <span></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default Projects;
