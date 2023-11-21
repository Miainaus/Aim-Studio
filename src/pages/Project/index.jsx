import React from "react";
import "./project.css";
import { useParams, Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsArrowsAngleContract,BsArrowLeft,BsArrowRight } from "react-icons/bs";

const Project = () => {
  const params = useParams();
  const [data, setData] = React.useState(null);
  const [expand, setExpand] = React.useState(false);
  React.useEffect(() => {
    fetch(`/api/projects/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        document.title = `${data.projects.address} | AIM STUDIO`;
      });
  }, [params.id]);
  console.log(data);
  const CustomDot = ({ onClick, ...rest }) => {
    const { index, active } = rest;
    const carouselItems = data.projects.imgURL.map((project) => (
      <img
        src={project}
        alt=''
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    ));
    return (
      <button
        className={active ? "active" : "inactive"}
        onClick={() => onClick()}
      >
        {React.Children.toArray(carouselItems)[index]}
      </button>
    );
  };
  return data ? (
    <>
      <div className={`${expand && "project-style"} project`}>
        <div className='project-desc'>
          <div className='project-info'>
            <h1>
              {data.projects.address} {data.projects.tag}
            </h1>
            <p>
              Design a home that offers separate living areas but still give an
              open-plan living feel. Accent with black and white add to the
              strong impact of the street appeal, complemented by professionally
              landscaped gardens.
            </p>
            <h3>LOCATION:{data.projects.address}</h3>
          </div>
          <div className='project-img'>
            <img src={data.projects.imgURL[0]} alt='' />
          </div>
        </div>
        <div className='projectImage-container'>
          {data.projects.imgURL.slice(1, 4).map((project) => (
            <div className='img-box'>
              <img src={project} alt='' />
              <button
                onClick={() => {
                  setExpand(true);
                }}
              >
                More Photos
              </button>
            </div>
          ))}
        </div>
        {params.id === "6" ? (
          <Link
            to={`/projects/${data.projects.id - 1}`}
            className='prev-project'
            onClick={() =>
              (window.location.href = `/projects/${data.projects.id - 1}`)
            }
          >
            <BsArrowLeft /> Prev Project
          </Link>
        ) : (
          <Link
            to={`/projects/${Number(data.projects.id) + 1}`}
            className='next-project'
            onClick={() =>
              (window.location.href = `/projects/${
                Number(data.projects.id) + 1
              }`)
            }
          >
            Next Project <BsArrowRight />
          </Link>
        )}
      </div>
      <div className={`${expand && "project-carousel"} bigImage`}>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className='carousel'
          containerClass='container'
          customDot={<CustomDot />}
          dotListClass=''
          draggable
          focusOnSelect={false}
          infinite
          itemClass=''
          keyBoardControl
          minimumTouchDrag={80}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={true}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=''
          slidesToSlide={1}
          swipeable
        >
          {data.projects.imgURL.map((project) => (
            <img
              src={project}
              alt=''
              style={{ width: "100vw", height: "80vh" }}
            />
          ))}
        </Carousel>
        <span
          onClick={() => {
            setExpand(false);
          }}
        >
          <BsArrowsAngleContract />
        </span>
      </div>
    </>
  ) : (
    "Loading..."
  );
};
export default Project;
