import { useState } from "react";
import detailsImg from "/images/details.png";
import { LuPhoneCall } from "react-icons/lu";

const Details = () => {
  const [tabContent, setTabContent] = useState("About");

  const activeTabClass = "bg-[#B52B1D] text-white px-4 py-2";
  const defaultTabClass = "px-4 py-2";

  return (
    <div id="about">
      <div className="mt-20 px-4 xl:px-28 lg:px-10 flex flex-col md:flex-row justify-center gap-10">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={detailsImg} alt="Details Image" className="w-full h-auto" />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2">
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
                <h1 className="font-bebas text-2xl md:text-4xl mt-6 text-black tracking-normal">
                  Exceptional culinary experience and delicious food
                </h1>
                <p className="text-[#333333] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                  odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                  sit amet consectetur adipiscing elit do eiusmod tempor
                  incididunt ut labore et dolore magna minim veniam nostrud
                  exercitation.
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-5">
                  <button className="btn btn-md bg-[#FEBF00] rounded-none uppercase text-black">
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
                  Experience details will be added here. This can include work
                  history, expertise, or key projects.
                </p>
              </div>
            )}
            {tabContent === "Contact" && (
              <div className="mt-6">
                <h1 className="font-bebas text-2xl md:text-4xl text-black">
                  Contact
                </h1>
                <p className="text-[#333333] mt-4">
                  Reach out to us through the provided phone number or email for
                  any inquiries. We look forward to connecting with you!
                </p>
                <div className="mt-4">
                  <h1 className="flex items-center gap-2 text-md text-black font-semibold">
                    <LuPhoneCall className="text-xl text-[#B52B1D]" /> +88 3426
                    739 485
                  </h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* badge on image */}
      <div className="relative">
        <div className="bg-white rounded-lg shadow-md p-4 md:flex hidden items-center justify-center space-x-4 absolute xl:bottom-64 xl:left-40 lg:bottom-48 lg:left-24 md:bottom-72 md:left-14">
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
       
        <img className="absolute right-0 -bottom-20 xl:h-64 lg:h-48 lg:block md:hidden hidden" src="/images/details2.png" alt="" />
      </div>
      {/* 3 badge */}
      <div className="grid md:grid-cols-3 grid-cols-1 mt-16 md:gap-0 gap-5">
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
