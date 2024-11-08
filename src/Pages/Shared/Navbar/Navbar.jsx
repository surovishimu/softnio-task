import { useState, useEffect } from "react";
import logo from "/images/logo.png";
import { RxCross1 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = [
        "home",
        "about",
        "portfolio",
        "clients",
        "blog",
        "contact",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, clientHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + clientHeight
          ) {
            setActiveLink(section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveLink(id);
      setIsOpen(false);
    }
  };

  // Navigation links
  const navLinks = (
    <div className="flex lg:flex-row md:flex-col flex-col gap-6">
      {["home", "about", "portfolio", "clients", "blog", "contact"].map(
        (link) => (
          <button
            key={link}
            onClick={() => handleScrollTo(link)}
            className={`${
              activeLink === link ? "text-yellow-500" : "text-white"
            }`}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </button>
        )
      )}
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between pt-8 pb-4 px-6 lg:px-14 md:px-10 z-[60] transition-colors duration-400 ${
        isScrolled
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90 sticky"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center w-full max-w-screen-xl">
        {/* Logo and Title */}
        <div className="flex justify-start items-center gap-1">
          <img className="lg:w-9 w-12" src={logo} alt="logo" />
          <h1 className="lg:text-xl md:text-4xl text-3xl text-white">
            <span className="font-bold">Restau</span>rant
          </h1>
        </div>

        {/* Navigation Links for desktop view */}
        <div className="hidden lg:flex xl:mr-64 lg:mr-36">{navLinks}</div>

        {/* Button for booking a table (desktop only) */}
        <button
          onClick={() => handleScrollTo("booking")}
          className="btn btn-sm text-xs font-bold bg-[#FEBF00] hover:bg-[#FEBF00] uppercase rounded-none border-none ml-4 px-4 py-2 lg:block hidden"
        >
          Book a table
        </button>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-4xl text-white">
            {isOpen ? <RxCross1 /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Navigation Links for mobile view */}
      {isOpen && (
        <div className="absolute top-20 right-0 w-full bg-gray-800 text-white lg:hidden z-50">
          <div className="flex flex-col p-4 space-y-3">
            {navLinks}
            <button
              onClick={() => handleScrollTo("booking")}
              className="btn lg:btn-md md:btn-md text-xs font-bold bg-[#FEBF00] hover:bg-[#FEBF00] uppercase rounded-none border-none md:px-4 px-0 md:py-2 py-0 w-full outline-none"
            >
              Book a table
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
