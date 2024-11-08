import { FaSquareFull, FaCalendarAlt } from "react-icons/fa";
import SpoonImg from "/images/spoon.png";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";

const Booking = () => {
  const [startDate, setStartDate] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [totalPeople, setTotalPeople] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Function to increment the number of people
  const incrementPeople = () => {
    setTotalPeople((prev) => (prev ? parseInt(prev) + 1 : 1));
  };

  // Function to decrement the number of people
  const decrementPeople = () => {
    setTotalPeople((prev) => {
      const current = parseInt(prev);
      return current > 1 ? current - 1 : "";
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const people = form.people.value;
    const details = form.details.value;

    const formData = {
      name,
      email,
      date,
      people,
      details,
    };

    console.log(formData);

    // Show success message
    setSuccessMessage("Your booking has been successfully submitted!");

    // Reset form fields after submission
    form.reset();
    setStartDate(null);
    setTotalPeople("");
  };

  return (
    <div
      id="booking"
      className="relative bg-cover bg-center flex items-center xl:px-36 lg:px-10  lg:ml-0 md:-ml-5 ml-0"
      style={{ backgroundImage: `url(${SpoonImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40" />

      <div className="relative bg-opacity-50 p-6 md:p-12 w-full max-w-2xl z-10">
        <div className="mb-5 text-white">
          <p className="flex items-center md:justify-start justify-center gap-2 text-[#BD1F17] text-md font-semibold mb-3">
            <FaSquareFull size={9} />
            Book Now
          </p>
          <h1 className="font-bebas text-3xl sm:text-4xl text-white md:text-start text-center mb-5">
            Book Your Table
          </h1>
          <p className="mb-6">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            className="border border-white bg-transparent text-white placeholder-white p-2 w-full outline-none focus:outline-none focus:ring-0"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email*"
            className="border border-white bg-transparent text-white placeholder-white p-2 w-full outline-none focus:outline-none focus:ring-0"
          />

          <div className="relative ">
            <DatePicker
              name="date"
              wrapperClassName="w-full"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="border border-white text-white bg-transparent placeholder-white p-2 w-full"
              placeholderText="Reservation Date"
              dateFormat="yyyy-MM-dd"
              showPopperArrow={false}
              onClick={() => setIsDatePickerOpen(true)}
              open={isDatePickerOpen}
              onCalendarClose={() => setIsDatePickerOpen(false)}
            />
            <FaCalendarAlt
              className="absolute right-2 top-2 text-white cursor-pointer"
              onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
            />
          </div>

          <div className="relative w-full">
            <input
              name="people"
              placeholder="Total People"
              type="text"
              value={totalPeople}
              readOnly
              className="border border-white bg-transparent text-white placeholder-white p-2 placeholder:text-start text-center w-full "
              required
            />
            <div className="absolute right-2 top-1 text-white flex flex-col">
              <button
                type="button"
                onClick={incrementPeople}
                className="focus:outline-none"
              >
                <IoCaretUpSharp />
              </button>
              <button
                type="button"
                onClick={decrementPeople}
                className="focus:outline-none"
              >
                <IoCaretDownSharp />
              </button>
            </div>
          </div>

          <textarea
            name="details"
            placeholder="Message"
            className="col-span-1 md:col-span-2 border border-white bg-transparent text-white placeholder-white p-2 w-full"
            rows={4}
          />
          <button className="bg-[#FEBF00] text-black py-2 px-4 rounded-none w-1/2">
            Book Now
          </button>
        </form>

        <div className="absolute md:bottom-[70px] bottom-2 left-5 md:left-1/3">
          {successMessage && (
            <p className=" text-emerald-700">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
