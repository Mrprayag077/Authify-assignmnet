import React, { useEffect, useState } from "react";
import { HeaderTitle } from "../component";
import { ProfileImg } from "../assets/images";
import { useNavigate } from "react-router-dom";
import AboutMe from "./AboutMe";
import useSessionCheck from "../hooks/useSessionCheck";

function Home() {
  useSessionCheck();

  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "Prayag Bhosale",
    email: "mrprayag77@gmail.com",
    gender: "Male",
  });

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/auth/login");
    } else {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const name =
        userData?.firstName + " " + userData?.lastName || "User Name";
      const email = userData?.email || "user@example.com";
      const gender = userData?.gender || "Not Specified";

      setUserData({ name, email, gender });
    }
  }, []);

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure you want to logout?");

    if (isConfirmed) {
      localStorage.clear();
      navigate("/auth/login");
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col gap-10 justify-center bg-gray-50/10">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="font-semibold text-xl lg:text-4xl">Welcome to</h2>
          <h2 className="font-extrabold text-xl lg:text-4xl text-[#6358DC] ">
            Unstop
          </h2>
        </div>

        <div className="flex justify-center items-center px-4 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mt-8">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 bg-[#7d72f7] rounded-full flex items-center justify-center">
                <img
                  src={ProfileImg}
                  alt="Profile"
                  className="w-[120px] h-[120px] rounded-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col items-center gap-1">
                <h2 className="text-xl font-semibold text-gray-800">
                  {userData.name}
                </h2>
                <p className="text-gray-500 text-sm">{userData.email}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Gender</span>
                  <span className="font-medium">{userData.gender}</span>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="w-full mt-6 bg-[#6358DC] hover:bg-[#5347cb] text-white py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <AboutMe title="Developer" />
    </>
  );
}

export default Home;
