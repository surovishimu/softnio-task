import { useState } from "react";
import detailsImg from "/images/details.png";
import { LuPhoneCall } from "react-icons/lu";

const Details = () => {
  const [tabContent, setTabContent] = useState("About");

  const activeTabClass = "bg-[#B52B1D] text-white px-4 py-2";
  const defaultTabClass = "px-4 py-2";

  return (
    <div id="about">
      <div className="mt-20 px-4 xl:px-48 lg:px-16 flex flex-col md:flex-row justify-center gap-10 ">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center ">
          <img
            src={detailsImg}
            alt="Details Image"
            className="w-full xl:h-[350px] lg:h-[400px] md:h-[360px]"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 h-96">
          <div className="flex flex-wrap items-center gap-2 md:gap-6 border-b border-[#B52B1D]">
            <button
              onClick={() => setTabContent("About")}
              aria-selected={tabContent === "About"}
              className={
                tabContent === "About" ? activeTabClass : defaultTabClass
              }
            >
              About
            </button>
            <button
              onClick={() => setTabContent("Experience")}
              aria-selected={tabContent === "Experience"}
              className={
                tabContent === "Experience" ? activeTabClass : defaultTabClass
              }
            >
              Experience
            </button>
            <button
              onClick={() => setTabContent("Contact")}
              aria-selected={tabContent === "Contact"}
              className={
                tabContent === "Contact" ? activeTabClass : defaultTabClass
              }
            >
              Contact
            </button>
          </div>

          <div>
            {tabContent === "About" && (
              <div>
                <h1 className="font-bebas text-3xl md:text-3xl lg:text-4xl lg:mt-6 md:mt-2 mt-4 text-black tracking-normal">
                  Exceptional culinary experience and delicious food
                </h1>
                <p className="text-[#333333] lg:mt-4 md:mt-2 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                  odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                  sit amet consectetur adipiscing elit do eiusmod tempor
                  incididunt ut labore et dolore magna minim veniam nostrud
                  exercitation.
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-5">
                  <button className="btn lg:btn-md md:btn-sm btn-md bg-[#FEBF00] rounded-none uppercase text-black">
                    About More
                  </button>
                  <h1 className="flex items-center gap-2 text-md text-black font-semibold">
                    <LuPhoneCall className="text-xl text-[#B52B1D]" /> +88 3426
                    739 485
                  </h1>
                </div>
              </div>
            )}
            {tabContent === "Experience" && (
              <div className="mt-6">
                <h1 className="font-bebas text-2xl md:text-4xl text-black">
                  Experience
                </h1>
                <p className="text-[#333333] mt-4">
                  Our team brings over a decade of experience in top
                  restaurants, blending traditional techniques with modern
                  flavors to create memorable dining moments.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-[#333333]">
                  <li>Worked with award-winning chefs.</li>
                  <li>Catered high-profile events.</li>
                  <li>Dedicated to quality and customer satisfaction.</li>
                </ul>
              </div>
            )}

            {tabContent === "Contact" && (
              <div className="mt-6">
                <h1 className="font-bebas text-2xl md:text-4xl text-black">
                  Contact
                </h1>
                <p className="text-[#333333] mt-4">
                  We’d love to hear from you! For inquiries, reservations, or
                  feedback, feel free to reach out to us via phone or email. Our
                  support team is available from 9 AM to 9 PM every day to
                  assist you.
                </p>
                <div className="mt-4">
                  <h1 className="flex items-center gap-2 text-md text-black font-semibold">
                    <LuPhoneCall className="text-xl text-[#B52B1D]" /> +88 3426
                    739 485
                  </h1>
                  <p className="text-[#333333] mt-2">
                    Email: info@restaurantname.com
                  </p>
                  <p className="text-[#333333] mt-2">
                    Address: 123 Culinary Street, Food City, 98765
                  </p>
                </div>
                
              </div>
            )}
          </div>
        </div>
      </div>
      {/* badge on image */}
      <div className="relative">
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center space-x-4 absolute xl:left-52 xl:bottom-64 lg:left-24 lg:bottom-64 md:left-10 md:bottom-60 left-8 bottom-[550px]">
          <div className="relative w-20 h-20">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              {/* Gray background circle */}
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                className="text-gray-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              {/* Yellow foreground circle covering 75% */}
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                className="text-yellow-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="85 15" // Dash pattern: 75% filled, 25% gap
                transform="rotate(-90 18 18)" // Start the stroke at the top of the circle
              />
            </svg>

            {/* Adding the small circle (ball) */}
            <div
              className="absolute w-2 h-2 rounded-full p-1 border-[4px] border-yellow-500 bg-white"
              style={{
                top: "8px",
                left: "14px",
                transform: "translateX(-50%)",
              }}
            ></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-semibold">50+</span>
            </div>
          </div>
          <div className="">
            <p className="text-gray-600 font-medium">Market</p>
            <p className="text-gray-600 font-medium">Experiences</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <img
          className="absolute right-0 -bottom-20 xl:h-64 lg:h-48 lg:block md:hidden hidden"
          src="/images/details2.png"
          alt=""
        />
      </div>
      {/* 3 badge */}
      <div className="grid md:grid-cols-3 grid-cols-1 mt-16 xl:gap-0 lg:gap-16  gap-5 xl:px-16 lg:px-0 md:mb-0 -mb-10">
        <div className="flex md:justify-center justify-start items-center md:gap-3 gap-10 md:ml-0 ml-8 md:tracking-normal tracking-wider">
          <img
            className="bg-white lg:h-16 lg:w-16 md:h-16 md:w-16 h-20 w-20 md:p-4 p-5 rounded-full shadow-gray-400 shadow-xl"
            src="/images/package.png"
            alt=""
          />
          <div>
            <h1 className="font-bebas md:text-lg text-2xl">fast delivery</h1>
            <p className="md:text-sm text-md">Within 30 minutes</p>
          </div>
        </div>
        <div className="flex md:justify-center justify-start items-center md:gap-3 gap-10 md:ml-0 ml-8 md:tracking-normal tracking-wider">
          <img
            className="bg-white lg:h-16 lg:w-16 md:h-16 md:w-16 h-20 w-20 md:p-4 p-5 rounded-full shadow-gray-400 shadow-xl"
            src="/images/medal.png"
            alt=""
          />
          <div>
            <h1 className="font-bebas md:text-lg text-2xl">fast delivery</h1>
            <p className="md:text-sm text-md">Within 30 minutes</p>
          </div>
        </div>
        <div className="flex md:justify-center justify-start items-center md:gap-3 gap-10 md:ml-0 ml-8 md:tracking-normal tracking-wider">
          <img
            className="bg-white lg:h-16 lg:w-16 md:h-16 md:w-16 h-20 w-20 md:p-4 p-5 rounded-full shadow-gray-400 shadow-xl"
            src="/images/pickup.png"
            alt=""
          />
          <div>
            <h1 className="font-bebas md:text-lg text-2xl">fast delivery</h1>
            <p className="md:text-sm text-md">Within 30 minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
