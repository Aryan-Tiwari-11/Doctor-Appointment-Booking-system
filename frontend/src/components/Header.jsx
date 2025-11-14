import React from "react";
import { assets } from "../assets/assets";
import { ArrowDown } from "lucide-react";

const Header = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 text-white shadow-2xl">
      {/* Soft Glow Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-300/30 blur-3xl rounded-full -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime-300/30 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

      {/* ---------- Content Section ---------- */}
      <div className="relative flex flex-col md:flex-row flex-wrap px-8 md:px-14 lg:px-24 py-16 md:py-24 z-10">
        {/* ---------- Left Side ---------- */}
        <div className="md:w-1/2 flex flex-col justify-center gap-6">
          <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Your Health, <br /> Our Top Priority
            </h1>

            <p className="text-lg font-light text-gray-100 mt-3">
              Connect instantly with certified and experienced doctors.  
              Schedule consultations at your convenience — anytime, anywhere.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
              <img
                className="w-24 select-none"
                draggable="false"
                src={assets.group_profiles}
                alt="group avatars"
              />
              
            </div>

            <a
              href="#speciality"
              className="mt-8 inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-3.5 rounded-full font-semibold text-base shadow-md hover:shadow-2xl hover:scale-[1.03] transition-all duration-200"
            >
              Find a Doctor
              <ArrowDown
                size={18}
                strokeWidth={2.2}
                className="text-emerald-700 -translate-y-[1px]"
              />
            </a>
          </div>
        </div>

        {/* ---------- Right Side ---------- */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex items-center justify-center">
          <img
            className="w-full md:max-w-md lg:max-w-lg rounded-2xl drop-shadow-2xl"
            src={assets.header_img}
            alt="Doctor consultation illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
