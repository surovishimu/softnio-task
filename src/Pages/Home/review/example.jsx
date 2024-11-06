import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FaSquareFull } from "react-icons/fa";
import img1 from "/images/review.png";
import manImg from "/images/man.png";

const Review = () => {
  return (
    <div className="relative mt-24 bg-red-50 px-6 sm:px-12 md:px-24 lg:px-36 py-10">
      {/* Title Section */}
      <div className="mb-5 text-center lg:text-left">
        <p className="flex items-center justify-center lg:justify-start gap-2 text-[#BD1F17] text-md font-semibold mb-2">
          <FaSquareFull size={9} />
          Crispy, Every Bite Taste
        </p>
        <h1 className="font-bebas text-3xl sm:text-5xl text-black">
          What Some of my Customers Say
        </h1>
      </div>

      {/* Swiper Section */}
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
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
        {/* Single Slide */}
        <SwiperSlide>
          <div className="lg:flex lg:flex-row-reverse items-stretch overflow-hidden">
            {/* Image Section */}
            <div className="lg:w-2/3 flex-shrink-0">
              <img
                src={img1}
                alt="Customer Review"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content Section */}
            <div className="p-10 md:p-16 lg:p-20 lg:w-1/3 bg-[#FEBF00] flex flex-col justify-center">
              <p className="text-sm mb-4">
                You can't go wrong with Chicken Mandi. I had it twice. The
                chicken was cooked perfectly, juicy & soft (usually mandi
                chicken is a bit dry). I would definitely recommend it.
              </p>
              <div className="flex items-center justify-between gap-3 border-b border-black pb-4">
                <div>
                  <p className="font-bebas">Khalid Al-Dhamary</p>
                  <p className="text-sm">Jeddah, Saudi</p>
                </div>
                <img
                  src={manImg}
                  alt="Customer Avatar"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Duplicate SwiperSlides to simulate additional reviews */}
        {/* Add more SwiperSlides if needed */}
      </Swiper>
    </div>
  );
};

export default Review;
