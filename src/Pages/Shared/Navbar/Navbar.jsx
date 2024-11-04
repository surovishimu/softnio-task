import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/images/logo.png";
import { RxCross1 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = (
    <div className="flex lg:flex-row md:flex-col flex-col gap-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "text-white"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "text-white"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "text-white"
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/clients"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "text-white"
        }
      >
        Clients
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "text-white"
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "text-white"
        }
      >
        Contact
      </NavLink>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between py-4 xl:px-40 lg:px-14 md:px-10 px-6 z-50 bg-transparent">
      {/* Logo */}
      <div className="flex justify-center items-center gap-1">
        <img className="lg:w-9 w-12" src={logo} alt="logo" />
        <h1 className="lg:text-xl md:text-4xl text-3xl text-white">
          <span className="font-bold">Restau</span>rant
        </h1>
      </div>

      {/* Nav Links for Desktop */}
      <div className="hidden lg:flex xl:mr-64 lg:mr-36">{navLinks}</div>

      {/* Button */}
      <button className="btn btn-sm text-xs font-bold bg-[#FEBF00] hover:bg-[#FEBF00] uppercase rounded-none border-none ml-4 px-4 py-2 lg:block hidden">
        Book a table
      </button>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-4xl text-white">
          {isOpen ? <RxCross1 /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 right-0 md:w-1/2 w-3/5 bg-gray-800 text-white lg:hidden z-50">
          <div className="flex flex-col p-4 space-y-3">
            {navLinks}
            <button className="btn lg:btn-md md:btn-md text-xs font-bold bg-[#FEBF00] hover:bg-[#FEBF00] uppercase rounded-none border-none  md:px-4 px-0 md:py-2 py-0 w-full outline-none">
              Book a table
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
