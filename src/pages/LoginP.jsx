import { useState, useEffect } from "react";
import {
  AccountIcon,
  FaceBookImg,
  GoogleImg,
  KeyIcon,
  LoginImg,
  MailIcon,
  VisibilityIcon,
  VisibilityOffIcon,
} from "../assets/images";

import React from "react";
import { HeaderTitle, Quotes } from "../component";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    username: "emilys",
    email: "emily.johnson@x.dummyjson.com",
    password: "emilyspass",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      setTimeout(() => {
        navigate("/home");
      }, 100);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (userLogin.username !== "emilys") {
      newErrors.username = "Username must be 'emilys'.";
    }
    if (!userLogin.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(userLogin.email))
      newErrors.email =
        "Please enter a valid email address (e.g., example@gmail.com).";

    if (!userLogin.password) newErrors.password = "Password is required.";
    else if (userLogin.password.length < 8)
      newErrors.password = "Password must be at least 8 characters long.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (validateForm()) {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const payload = {
          username: userLogin.username,
          password: userLogin.password,
          email: userLogin.email,
          expiresInMins: 30,
        };

        if (!apiUrl) {
          console.error("API URL is not set. Application cannot run.");
          process.exit(1);
        }
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("authToken", data.accessToken);
          localStorage.setItem("userData", JSON.stringify(data));
          navigate("/home");
        } else
          setErrors({
            apiError: data.message || "Login failed. Please try again.",
          });
      } catch (error) {
        setErrors({
          apiError: "An error occurred. Please try again later.",
        });
      } finally {
        setLoading(false);
      }
    } else setLoading(false);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row h-full md:px-1 lg:px-16 lg:h-screen bg-gray-50/10">
      <div className="hidden md:flex flex-col gap-2 w-1/2 bg-cover bg-center items-center justify-center">
        <img
          src={LoginImg}
          alt="Login"
          className="animate-float-slow origin-top object-cover h-[500px] w-[500px]"
        />
        <div className="">
          <Quotes />
        </div>
      </div>
      <div className="flex items-center justify-center w-full md:w-1/2">
        <div className="max-w-xl w-full">
          <div className="bg-white shadow-none lg:shadow-lg rounded-2xl p-8">
            <HeaderTitle />
            <div className="space-y-3">
              <button className="custom-button">
                <img src={GoogleImg} alt="Google" className="w-6 h-6" />
                <span>Login with Google</span>
              </button>
              <button className="custom-button">
                <img src={FaceBookImg} alt="FaceBook" />
                <span>Login with Facebook</span>
              </button>
            </div>
            <div className="flex items-center my-6">
              <div className="border-t flex-grow border-gray-200"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="border-t flex-grow border-gray-200"></div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center bg-[#F4F4F4] border-gray-200 rounded-xl">
                <div className="p-2 pr-1">
                  <img
                    src={AccountIcon}
                    alt="Profile"
                    className="w-6 h-6 rounded-full"
                  />
                </div>
                <div className="flex flex-col px-4 py-2 w-full">
                  <label className="text-sm font-semibold text-gray-600">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={userLogin.username}
                    onChange={handleChange}
                    placeholder="Enter Username"
                    className="w-full bg-transparent font-semibold border-0 outline-none text-gray-800"
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm">{errors.username}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center bg-[#F4F4F4] border-gray-200 rounded-xl">
                <div className="p-2 pr-1">
                  <img
                    src={MailIcon}
                    alt="Profile"
                    className="w-6 h-6 rounded-full"
                  />
                </div>
                <div className="flex flex-col px-4 py-2 w-full">
                  <label className="text-sm font-semibold text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={userLogin.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className="w-full bg-transparent font-semibold border-0 outline-none text-gray-800"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center bg-[#F4F4F4] border-gray-200 rounded-xl">
                <div className="p-2 pr-1">
                  <img
                    src={KeyIcon}
                    alt="Profile"
                    className="w-6 h-6 rounded-full"
                  />
                </div>

                <div className="flex flex-col px-4 py-2 w-full">
                  <label className="text-sm font-semibold text-gray-600">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={userLogin.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    className="w-full bg-transparent font-semibold border-0 outline-none text-gray-800"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                </div>
                <div className="p-2 mr-1">
                  <img
                    src={showPassword ? VisibilityIcon : VisibilityOffIcon}
                    alt="Profile"
                    className="w-6 h-6 rounded-full"
                    onClick={togglePasswordVisibility}
                  />
                </div>
              </div>
              {errors.apiError && (
                <p className="text-red-500 text-sm">{errors.apiError}</p>
              )}
              <div className="flex justify-between items-center my-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Remember Me</span>
                </label>
                <a
                  href="#"
                  className="text-indigo-600 hover:underline"
                  onClick={() =>
                    alert(
                      "Oops! Looks like your password took a vacation! 🌴\nBut don’t worry, I’ll be joining UNSTOP soon to help you reset it. 😎"
                    )
                  }
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className={`w-full py-2.5  hover:bg-[#5347cb] text-white rounded-lg transition-colors
                                    ${
                                      loading ? "bg-[#786df6]" : "bg-[#6255f7]"
                                    }`}
              >
                {loading ? "Logging in...." : "Login"}
              </button>
            </form>
            <p className="text-center mt-6 text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
