import React from "react";
import "./service.css";
import { useParams } from "react-router-dom";

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
    <div className="service">
      <h1>{data[0].title}</h1>
      <p>{data[0].desc}</p>
      <img src={data[0].src} alt="" />
    </div>) : (
    "Loading..."
  );
};

export default Service;
