import React from "react";
import video from "../assets/videos/clip.mp4";

// link
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="bg-gray-900 shadow-md h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 px-16 -mt-3">
        <div className="container mx-auto flex justify-center items-center h-full">
          {/* text */}
          <div className="flex flex-col">
            <div className="font-seminbold flex items-center uppercase text-red-600">
              <div className="w-10 h-[3px] bg-red-500 mr-3"></div>New Trend
            </div>
            <h1 className="text-[70px] leading-[1.1] font-light mb-4 text-gray-100">
              GOOD <span className="text-blue-600"> SHOES</span> TAKES <br />{" "}
              YOU TO <br />
              <span className="font-semibold">
                GOOD <span className="text-red-600"> PLACES</span>{" "}
              </span>
            </h1>
            <Link
              to={"/home"}
              className="self-start uppercase font-semibold border-b-2 border-blue-800 text-blue-800"
            >
              Discover More
            </Link>
            <div className="md:w-[130px] w-[100px] h-[40px] cursor-pointer relative z-10 opacity-100 mt-5">
              <video
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
              >
                <source type="video/mp4" src={video} />
              </video>
            </div>
          </div>
          {/* image */}
          <div className="hidden lg:block">
            <img
              src="https://res.cloudinary.com/daxmjqsy2/image/upload/v1679393955/hero-bg_ngro9o.jpg"
              alt="main-bg"
              className="w-[900px] h-[580px] mt-16"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
