import React, { useState } from "react";
import {
  CoderIcon,
  GithubIcon,
  LinkedInIcon,
  PortfolioIcon,
} from "../assets/images";

const AboutMe = ({title = ""}) => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="relative">
      <div
        onClick={toggleLinks}
        className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-indigo-700 transition-all duration-300 glow-on-hover"
        title="Developer Profile"
      >
        <span
          className={`text-md flex justify-center items-center ${
            title ? "gap-2" : ""
          }`}
        >
          <img src={CoderIcon} className="w-6 h-6 glow-icon" />
          <span>{title}</span>
        </span>
      </div>

      <style jsx>{`
        .glow-on-hover {
          animation: glowAnimation 1.5s infinite alternate;
        }

        @keyframes glowAnimation {
          0% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
              0 0 10px rgba(255, 255, 255, 0.5),
              0 0 15px rgba(255, 255, 255, 0.5);
            transform: scale(1);
          }
          100% {
            box-shadow: 0 0 10px rgba(255, 255, 255, 1),
              0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 1);
            transform: scale(1.1);
          }
        }

        .glow-icon {
          transition: transform 0.3s ease-in-out;
        }

        .glow-icon:hover {
          transform: scale(1.2);
        }
      `}</style>

      <div
        className={`absolute bottom-24 right-8 text-sm text-white bg-black p-2 rounded-lg shadow-lg ${
          showLinks ? "block" : "hidden"
        }`}
      >
        <p className="mb-2 text-center font-semibold">Developer Profile</p>

        <div className="flex flex-col items-center gap-6 bg-gray-800 p-6 rounded-lg shadow-xl max-w-md mx-auto">
          <div className="text-center text-white">
            <a
              className="text-xl font-semibold underline mb-2"
              target="_blank"
              href="https://mrprayag-portfolio-2d915.web.app/"
            >
              About the Developer Profile
            </a>
            <p className="text-sm font-bold mt-2 text-[#f6d970]">
              Tech Stack: React, ViteJS, TailwindCSS, React Router, Vercel
              <br />
              <p className="text-lg text-white my-2">#Features:</p>
              <ul className="list-disc list-inside mt-2 font-normal text-gray-300 text-left">
                <li>Protected routing with session management</li>
                <li>Auto-Sync Logout Across All Window Tabs</li>
                <li>Dynamic Quotes section in login page</li>
                <li>Form validation (login)</li>
                <li>Non-found page with a custom 404</li>
                <li>Auto redirection on session</li>
                <li>Logout management</li>
              </ul>
            </p>
          </div>

          {/* Social Links Section */}
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/prayagbhosale22/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-14 h-14 bg-blue-700 hover:bg-blue-600 rounded-full transition-all duration-300"
              title="LinkedIn"
            >
              <img src={LinkedInIcon} className="w-8 h-8" alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/Mrprayag077"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-14 h-14 bg-black hover:bg-gray-700 rounded-full transition-all duration-300"
              title="GitHub"
            >
              <img src={GithubIcon} className="w-8 h-8" alt="GitHub" />
            </a>
            <a
              href="https://mrprayag-portfolio-2d915.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-14 h-14 bg-indigo-600 hover:bg-indigo-500 rounded-full transition-all duration-300"
              title="Portfolio"
            >
              <img src={PortfolioIcon} className="w-8 h-8" alt="Portfolio" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
