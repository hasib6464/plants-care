import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import "./Banner.css";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div
            className="relative h-[500px] w-screen bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://i.ibb.co/TMXMQSSm/bonsai2.jpg') ",
            }}
          >
            <div className="flex flex-col justify-center items-center  border h-[500px] text-white gap-3">
              <h1 className="text-4xl font-bold">The Japanese art of bonsai</h1>
              <p className="w-2/3 text-emerald-100">
                These small trees capture the beauty and spirit of their
                full-sized versions, symbolising strength, resilience, and the
                timeless beauty of nature.
              </p>
              <Link>
                {" "}
                <button className="btn  btn-outline btn-block border-0">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-[500px] w-screen bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://i.ibb.co/B5h09KN8/img3.webp') ",
            }}
          >
            <div className="flex flex-col justify-center items-center  border h-[500px] text-white gap-3">
              <h1 className="text-4xl font-bold">The Indoor plants</h1>
              <p className="w-2/3 text-emerald-100">
                Houseplants are an easy way to bring life and energy into a
                room, whether it's trailing vines on the windowsill or a tall
                plant decorating a bland corner.
              </p>
              <Link>
                {" "}
                <button className="btn  btn-outline btn-block border-0">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative h-full w-full bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://i.ibb.co/Y75mrtgF/money-Plant2.jpg') ",
            }}
          >
            <div className="flex flex-col justify-center items-center text-black  h-[500px] gap-3">
              <h1 className="text-4xl font-bold">The Money Plants</h1>
              <p className="w-2/3 ">
                Is money plant good for home? Of course, it is. Having an indoor
                money plant in the house or an office helps to ease mental
                anxiety and stress.
              </p>
              <Link>
                {" "}
                <button className="btn  btn-outline btn-block border-0">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
