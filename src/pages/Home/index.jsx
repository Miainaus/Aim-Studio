import "./home.css";
import Card from "../../Components/Card";
import SmoothScroll from "../../Components/SmoothScroll";
import { GoArrowRight } from "react-icons/go";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [imageUrl3, setImageUrl3] = useState("");
  const [imageUrl4, setImageUrl4] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    document.title = "HOME | AIM STUDIO";
    const fetchRandomImage = async () => {
      try {
        await fetch("/api/projects")
          .then((res) => res.json())
          .then((data) => {
            setData(data.projects);
            setImageUrl1(
              data.projects[0].imgURL[Math.floor(Math.random() * 4)]
            );
            setImageUrl2(
              data.projects[1].imgURL[Math.floor(Math.random() * 4)]
            );
            setImageUrl3(
              data.projects[2].imgURL[Math.floor(Math.random() * 4)]
            );
            setImageUrl4(
              data.projects[3].imgURL[Math.floor(Math.random() * 4)]
            );
          });
      } catch (error) {
        console.error("Error fetching random image:", error);
      }
    };
    fetchRandomImage();
    const intervalId = setInterval(fetchRandomImage, 2000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className='home'>
      <div className='home-mobile-image'>
        <img
          src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />
      </div>
      <div className='home-container'>
        <div className='home-desc'>
          <h1>Architecture & Design</h1>
          <h4>
            We design dream homes, offer great customer service and are an
            affordable building design company who are known for our detailed
            plans.
          </h4>
        </div>
        {imageUrl1 ? (
          <div className='home-showcase'>
            <Card
              src={imageUrl1}
              title={"+ READ MORE"}
              path={`/projects/${data[0].id}`}
            />
            <Card
              src={imageUrl2}
              title={"+ READ MORE"}
              path={`/projects/${data[1].id}`}
            />
            <Card
              src={imageUrl3}
              title={"+ READ MORE"}
              path={`/projects/${data[2].id}`}
            />
            <Card
              src={imageUrl4}
              title={"+ READ MORE"}
              path={`/projects/${data[4].id}`}
            />
          </div>
        ) : (
          "Loading..."
        )}
        <Link to='/projects' className='home-projects'>
          <div>
            More Projects <GoArrowRight />
          </div>
        </Link>
      </div>
      <div className='home-image'>
        <img
          src='https://images.unsplash.com/photo-1620223715854-f3c2b1157fec?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />
      </div>
      <SmoothScroll />
    </div>
  );
};

export default Home;
