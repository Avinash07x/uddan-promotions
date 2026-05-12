// import React from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
//   FaPhoneAlt,
//   FaEnvelope,
// } from "react-icons/fa";

// const Cnav = () => {
//   return (
//     <div className="bg-gradient-to-r from-[#1e3a8a]/80 via-[#2563eb]/70 to-[#3b82f6]/80 backdrop-blur-md text-sm text-white py-2 px-3">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">

//         {/* 🔹 MOBILE FIRST LINE (Phone left, Email right) */}
//         <div className="flex items-center justify-between w-full text-[11px] sm:text-xs md:text-sm md:justify-start md:gap-4">

//           {/* PHONE */}
//           <a
//             href="tel:+918619036818"
//             className="flex items-center gap-1 hover:text-yellow-400 transition whitespace-nowrap"
//           >
//             <FaPhoneAlt className="text-yellow-400 text-[10px]" />
//             <span>+91-8619036818</span>
//           </a>

//           {/* EMAIL */}
//           <a
//             href="mailto:contact@uddanpromotions.com"
//             className="flex items-center gap-1 hover:text-yellow-400 transition text-right md:text-left"
//           >
//             <FaEnvelope className="text-yellow-400 text-[10px]" />
//             <span className="truncate max-w-[180px] sm:max-w-[220px] md:max-w-none">
//               contact@uddanpromotions.com
//             </span>
//           </a>

//         </div>

//         {/* 🔹 SOCIAL ICONS */}
//         <div className="flex items-center justify-end mt-2 md:mt-0 gap-5 md:gap-3 text-sm sm:text-base">

//           <a
//             href="https://www.facebook.com/uddan.promotions/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-blue-500 transition"
//           >
//             <FaFacebookF />
//           </a>

//           <a
//             href="https://www.instagram.com/uddan.promotions/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-pink-500 transition"
//           >
//             <FaInstagram />
//           </a>

//           <a
//             href="https://www.linkedin.com/company/uddan-promotions/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-blue-400 transition"
//           >
//             <FaLinkedinIn />
//           </a>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Cnav;
import React, {
  useEffect,
  useState,
} from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Cnav = () => {
  const [info, setInfo] =
    useState(null);

  useEffect(() => {
    fetchCompanyInfo();
  }, []);

  const fetchCompanyInfo =
    async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/company-info"
        );

        const data =
          await res.json();

        if (data.success) {
          setInfo(data.info);
        }
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="bg-gradient-to-r from-[#1e3a8a]/80 via-[#2563eb]/70 to-[#3b82f6]/80 backdrop-blur-md text-sm text-white py-2 px-3">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">

        {/* LEFT */}
        <div className="flex items-center justify-between w-full text-[11px] sm:text-xs md:text-sm md:justify-start md:gap-4">

          {/* PHONE */}
          <a
            href={`tel:${info?.phone}`}
            className="flex items-center gap-1 hover:text-yellow-400 transition whitespace-nowrap"
          >
            <FaPhoneAlt className="text-yellow-400 text-[10px]" />

            <span>
              {info?.phone}
            </span>
          </a>

          {/* EMAIL */}
          <a
            href={`mailto:${info?.email}`}
            className="flex items-center gap-1 hover:text-yellow-400 transition"
          >
            <FaEnvelope className="text-yellow-400 text-[10px]" />

            <span>
              {info?.email}
            </span>
          </a>

        </div>

        {/* SOCIAL */}
        <div className="flex items-center justify-end mt-2 md:mt-0 gap-5 md:gap-3 text-sm sm:text-base">

          {info?.facebook && (
            <a
              href={info.facebook}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF />
            </a>
          )}

          {info?.instagram && (
            <a
              href={info.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          )}

          {info?.linkedin && (
            <a
              href={info.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedinIn />
            </a>
          )}

          {info?.youtube && (
            <a
              href={info.youtube}
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>
          )}

        </div>

      </div>

    </div>
  );
};

export default Cnav;