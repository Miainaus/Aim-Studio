import React from "react";
import "./service.css";
import { useParams } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

const Service = () => {
  const params = useParams();
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch(`/api/services/${params.title}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.services);
      });
  }, [params.title]);
  console.log(data);
  return data ? (
    <div className='service'>
      <h1>{data[0].title}</h1>
      <p>{data[0].desc}</p>
      <div className='service-detail'>
        <img src={data[0].src} alt='' />
        <ul>
          {data[0].details.map((detail) => (
            <li><GoDotFill /> {detail}</li>
          ))}
          <li></li>
        </ul>
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default Service;
