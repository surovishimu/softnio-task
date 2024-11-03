import bannerImage from "/images/banner.png";
import bannerBg from "/images/bannerbg.jpeg";

const Banner = () => {
  return (
    <div
      className="relative  bg-repeat h-[780px] md:h-[600px] lg:h-[700px] xl:h-[800px] "
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "120px 120px",
        backgroundPosition: "top left",
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, #8E1B0F, #A51D13, #8E1B0F)`,
          opacity: 0.9,
        }}
      ></div>

      <div className="relative z-10 h-full">
        <div className="">
          <h1 className="absolute xl:text-7xl lg:text-6xl md:text-5xl text-4xl md:bg-gradient-to-r from-[#BD1F17] to-[#BD1F17B2] bg-cover bg-transparent md:px-16 px-3 py-5 text-white xl:left-44 lg:left-16 md:left-10 z-10 xl:bottom-96 lg:bottom-[320px] md:bottom-72 bottom-[550px] font-bebas tracking-wider xl:w-1/2 lg:w-3/5 md:w-2/3 w-full">
            Taste the authentic
            Saudi cuisine
          </h1>
          <p className="absolute xl:bottom-80 lg:bottom-64 md:bottom-52 bottom-[490px] xl:left-44 lg:left-[65px] md:left-12 text-white lg:w-96 md:w-72 md:px-0 px-4">
            Among the best Saudi chefs in the world, serving  you
            something beyond flavor.
          </p>
          <button className="btn btn-sm text-xs font-bold bg-[#FEBF00] hover:bg-[#FEBF00] uppercase rounded-none border-none ml-4 px-6 py-2 absolute xl:bottom-64 lg:bottom-48 md:bottom-36 bottom-[430px] xl:left-40 lg:left-14 md:left-8">
            Explore Menu
          </button>
        </div>
        <div>
          <img
            className="absolute xl:right-40 lg:right-14 md:right-9 right-0 md:px-0 px-4  md:bottom-28 bottom-10 xl:w-2/5 lg:w-1/2 md:w-1/2 w-full"
            src={bannerImage}
            alt="bannerimg"
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
