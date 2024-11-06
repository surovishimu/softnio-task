import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";
import footerImg from "/images/footer.jpeg";

const Footer = () => {
  return (
    <div id="contact"
      className="relative text-center text-white p-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="font-bebas text-4xl mb-8 font-thin">
          We’re ready to provide you with the best dining experiences
        </h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 xl:px-10 px-0">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-2">
              <FiClock color={"#FEBF00"} size={24} />
            </div>
            <h2 className="font-bebas text-xl">Opening Hours</h2>
            <p>Monday - Sunday</p>
            <p>9:00 AM to 11:30 PM</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-2">
              <MdOutlinePhoneInTalk color={"#FEBF00"} size={24} />
            </div>
            <h2 className="font-bebas text-xl">LET'S TALK</h2>
            <p>Phone: 1-800-222-4545</p>
            <p>Fax: 1-800-222-4545</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-2">
              <MdMailOutline color={"#FEBF00"} size={24} />
            </div>
            <h2 className="font-bebas text-xl">BOOK A TABLE</h2>
            <p>Email: demo@website.com</p>
            <p>Support: support@website.com</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-2">
              <CiLocationOn color={"#FEBF00"} size={24} />
            </div>
            <h2 className="font-bebas text-xl">Our Address</h2>
            <p>123 Street, New York City, United <br /> States Of America.</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-10">
          <a
            className="flex items-center justify-center border border-white h-8 w-8 rounded-full text-white"
            href=""
          >
            <FaFacebook />
          </a>
          <a
            className="flex items-center justify-center border border-white h-8 w-8 rounded-full text-white"
            href=""
          >
            <FaSquareXTwitter />
          </a>
          <a
            className="flex items-center justify-center border border-white h-8 w-8 rounded-full text-white"
            href=""
          >
            <FaInstagramSquare />
          </a>
          <a
            className="flex items-center justify-center border border-white h-8 w-8 rounded-full text-white"
            href=""
          >
            <IoLogoLinkedin />
          </a>
        </div>

        <p className="mt-5 text-sm font-thin">
          © 2023 <span className="text-[#FEBF00]">Niomax</span> All Rights
          Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
