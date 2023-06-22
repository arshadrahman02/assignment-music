import React from "react";
import img1 from "../../assets/pexels-photo-1246437.webp";
import img2 from "../../assets/pexels-photo-1327430.jpeg";
import img3 from "../../assets/pexels-photo-811838.jpeg";
import { Bounce, Fade } from "react-awesome-reveal";
const Banner = () => {
  return (
    <Fade>
      <div>
        <div className="carousel w-full  rounded-xl mt-5 ">
          <div
            id="slide1"
            className="carousel-item lg:relative w-full h-[600px]"
          >
            <img src={img1} className="w-full" />
            <div className="absolute lg:flex  gap-3  lg:transform lg:-translate-y-1/2 left-5 right-5 bottom-0">
              <div className="text-white font-bold w-96 absolute bottom-24 lg:top-[-450px] lg:left-16 ">
                <Fade>
                  <h1 className="text-6xl  ">Welcome To Music Minds</h1>

                  <p className=" mx-auto  lg:mt-5">
                    There are many variations of passages of available, but the
                    majority have suffered alteration in some form
                  </p>
                </Fade>
                <div className="space-x-4 mt-3">
                  <button className="btn bg-yellow-700 text-white font-bold ">
                    Get started
                  </button>
                  <button className="btn btn-outline text-yellow-700">
                    Latest Enrollment
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end gap-3  transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide4" className="btn btn-circle opacity-80">
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle text-white  bg-yellow-700"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full h-[600px] ">
            <img src={img2} className="w-full" />
            <div className="absolute flex  gap-3  transform -translate-y-1/2 left-5 right-5 bottom-0">
              <div className="text-white font-bold w-96 absolute bottom-24 lg:top-[-450px] lg:left-16 ">
                <h1 className="text-6xl  ">Welcome To Music Minds</h1>

                <p className=" mx-auto  lg:mt-5 ">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="space-x-4 mt-3">
                  <button className="btn  text-white  bg-yellow-700 ">
                    Discover
                  </button>
                  <button className="btn btn-outline text-yellow-700">
                    Latest Enrollment
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide1" className="btn btn-circle opacity-80">
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle  text-white  bg-yellow-700"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full h-[600px]">
            <img src={img3} className="w-full" />
            <div className="absolute flex  gap-3  transform -translate-y-1/2 left-5 right-5 bottom-0">
              <div className="text-white font-bold w-96 absolute bottom-24 lg:top-[-450px] lg:left-16 ">
                <h1 className="text-6xl  ">Welcome To Music Minds</h1>

                <p className="mx-auto  lg:mt-5  ">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="space-x-4 mt-3">
                  <button className="btn  text-white  bg-yellow-700 ">
                    Discover
                  </button>
                  <button className="btn btn-outline text-yellow-700">
                    Latest Enrollment
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-end gap-3  transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href="#slide1" className="btn btn-circle opacity-80">
                ❮
              </a>
              <a
                href="#slide4"
                className="btn btn-circle   text-white  bg-yellow-700"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Banner;
