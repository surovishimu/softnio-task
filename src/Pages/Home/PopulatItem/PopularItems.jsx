import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay CSS
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay
import PopularItem from "./PopularItem";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FaSquareFull } from "react-icons/fa";

const PopularItems = () => {
  const [popularFood, setPopularFood] = useState([]);

  useEffect(() => {
    fetch("PopularMenu.json")
      .then((res) => res.json())
      .then((data) => setPopularFood(data));
  }, []);

  return (
    <div id="portfolio" className="relative mt-24 bg-red-50 xl:px-32 lg:px-20 md:px-0 px-0 py-20 xl:pr-10 lg:pr-4 pr-0">
      <div>
        <img
          className="absolute left-0 top-36 h-52 lg:block hidden "
          src="/images/sideImg.png"
          alt=""
        />
      </div>
      {/* Title Section */}
      <div className=" mb-5 lg:px-0 md:px-4 px-0">
        <div className="">
          <p className="flex items-center md:justify-start justify-center gap-2 text-[#BD1F17] text-md font-semibold mb-2">
            <FaSquareFull size={9} />
            Crispy, Every Bite Taste
          </p>
          <h1 className="font-bebas text-3xl sm:text-5xl text-black md:text-start text-center">
            POPULAR FOOD ITEMS
          </h1>
        </div>

        <div className="flex absolute md:top-28 top-[420px] xl:right-36 lg:right-16 md:right-10 right-1/3 items-center gap-5 ">
          <button className="custom-prev text-black text-2xl bg-white w-10 h-10 shadow-lg rounded-full flex items-center justify-center leading-none text-center">
            <GrFormPrevious />
          </button>
          <button className="custom-next text-2xl bg-white w-10 h-10 shadow-lg rounded-full flex items-center justify-center leading-none text-[#BD1F17]">
            <GrFormNext />
          </button>
        </div>
      </div>

      {/* Swiper Section */}
      <Swiper
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{
          delay: 3000, // 3 seconds delay
          disableOnInteraction: false, // Allows autoplay to continue after interactions
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = ".custom-prev";
          swiper.params.navigation.nextEl = ".custom-next";
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {popularFood.map((food) => (
          <SwiperSlide key={food.id} className="flex flex-col items-center">
            <PopularItem food={food} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularItems;
