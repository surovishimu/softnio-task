import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation } from "swiper/modules";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FaSquareFull } from "react-icons/fa";
import img1 from "/images/review.png";
import img2 from "/images/image2.jpg";
import img3 from "/images/image3.jpg";
import manImg from "/images/man.png";
import LeftImg from "/images/left.png";
import RightImg from "/images/right.png";
import { MdPlayCircleFilled } from "react-icons/md";

const Review = () => {
  const reviews = [
    {
      text: "You can't go wrong with Chicken Mandi. I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
      name: "Khalid Al-Dhamary",
      location: "Jeddah, Saudi",
      image: manImg,
      dishImage: img1,
    },
    {
      text: "The food was incredible, especially the chicken. So tender and full of flavor, it's definitely worth trying!",
      name: "Sarah Abdullah",
      location: "Riyadh, Saudi",
      image: manImg,
      dishImage: img2,
    },
    {
      text: "Absolutely loved the Chicken Mandi! It was so flavorful and tender, one of the best I've had!",
      name: "Ahmed Al-Rashid",
      location: "Dammam, Saudi",
      image: manImg,
      dishImage: img3,
    },
  ];

  return (
    <div
      id="clients"
      className="relative bg-red-50 px-6 md:px-16 lg:px-20 xl:px-36 py-20 md:py-18 lg:py-32"
    >
      {/* Title Section */}
      <div className="mb-10 text-center lg:text-left">
        <p className="flex items-center justify-center lg:justify-start gap-2 text-[#BD1F17] text-md font-semibold mb-2">
          <FaSquareFull size={9} />
          Crispy, Every Bite Taste
        </p>
        <h1 className="font-bebas text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black">
          What Some of my Customers Say
        </h1>
      </div>

      {/* Navigation Buttons */}
      <div className="flex absolute xl:top-[160px] lg:top-[155px] md:top-[720px] top-[580px] xl:right-36 lg:right-32 md:right-80 right-1/3 items-center gap-5">
        <button className="custom-prev text-black text-2xl bg-white w-10 h-10 shadow-lg rounded-full flex items-center justify-center leading-none text-center">
          <GrFormPrevious />
        </button>
        <button className="custom-next text-2xl bg-white w-10 h-10 shadow-lg rounded-full flex items-center justify-center leading-none text-[#BD1F17]">
          <GrFormNext />
        </button>
      </div>

      <div className="absolute left-0 top-60 lg:block hidden">
        <img className="h-48" src={LeftImg} alt="" />
      </div>
      <div className="absolute right-0 bottom-10 lg:block hidden">
        <img className="h-72" src={RightImg} alt="" />
      </div>

      {/* Swiper Section */}
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        modules={[Navigation]}
        className="mySwiper"
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = ".custom-prev";
          swiper.params.navigation.nextEl = ".custom-next";
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col-reverse lg:flex-row justify-center items-stretch lg:h-96 h-auto">
              {/* Text Section */}
              <div className="p-6 md:p-10 xl:p-16 lg:p-10 bg-[#FEBF00] flex flex-col justify-center flex-none w-full lg:w-2/5 h-full">
                <p className="text-sm md:text-base mb-4 line-clamp-4 overflow-hidden">
                  {review.text}
                </p>
                <div className="flex items-center justify-between gap-3 border-b border-black pb-4">
                  <div>
                    <p className="font-bebas text-base md:text-lg">
                      {review.name}
                    </p>
                    <p className="text-xs md:text-sm">{review.location}</p>
                  </div>
                  <img
                    src={review.image}
                    alt="Customer Avatar"
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                  />
                </div>
              </div>

              {/* Image Section with Play Button */}
              <div className="relative flex-1 mt-4 lg:mt-0 h-full">
                <img
                  src={review.dishImage}
                  alt="Mandi Dish"
                  className="h-40 md:h-64 lg:h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <MdPlayCircleFilled
                    color="#FEBF00"
                    className="play-button text-4xl lg:text-5xl opacity-90 hover:opacity-100 transition-opacity transform hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;