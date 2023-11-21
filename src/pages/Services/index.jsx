import React from "react";
import "./services.css";
import Card from "../../Components/Card";
import { useEffect } from "react";

const Services = () => {
  const [data, setData] = React.useState(null);
  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => {
        setData(data.services);
      });
    document.title = "SERVICES | AIM STUDIO";
  }, []);
  console.log(data);
  return (
    <div className='services'>
      <div className='services-image'>
        <div className='filter'></div>
        <div className='services-desc'>
          <h1>services</h1>
          <p>
            With more than nineteen years industry experience, a strong network
            of industry leading suppliers and a thorough understanding of the
            intricacies of planning and approvals in the ACT, DNA can offer you
            the following services:
          </p>
        </div>
      </div>
      {data ? (
        <div className='services-container'>
          {data.map((service, index) => (
            <Card title={service.title} src={service.src} path={`/services/${service.title}`} />
          ))}
          <Card
            title={"Contact"}
            path='/contact'
            src={
              "https://images.unsplash.com/photo-1650636187799-0a09fbbd01af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Services;
