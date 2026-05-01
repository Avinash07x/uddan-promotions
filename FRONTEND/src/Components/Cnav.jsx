import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Cnav = () => {
  return (
    <div className="bg-gray-800 text-white py-2 px-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">

        {/* 🔹 MOBILE FIRST LINE (Phone left, Email right) */}
        <div className="flex items-center justify-between w-full text-[11px] sm:text-xs md:text-sm md:justify-start md:gap-4">

          {/* PHONE */}
          <a
            href="tel:+918619036818"
            className="flex items-center gap-1 hover:text-yellow-400 transition whitespace-nowrap"
          >
            <FaPhoneAlt className="text-yellow-400 text-[10px]" />
            <span>+91-8619036818</span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:contact@uddanpromotions.com"
            className="flex items-center gap-1 hover:text-yellow-400 transition text-right md:text-left"
          >
            <FaEnvelope className="text-yellow-400 text-[10px]" />
            <span className="truncate max-w-[140px] sm:max-w-[220px] md:max-w-none">
              contact@uddanpromotions.com
            </span>
          </a>

        </div>

        {/* 🔹 SOCIAL ICONS */}
        <div className="flex items-center justify-center mt-2 md:mt-0 gap-10 md:gap-3 text-sm sm:text-base">

          <a
            href="https://www.facebook.com/uddan.promotions/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/uddan.promotions/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/company/uddan-promotions/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Cnav;