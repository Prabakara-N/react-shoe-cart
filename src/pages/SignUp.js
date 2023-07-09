import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// auth context
import { UserAuth } from "../contexts/AuthContext";
import SocialMedia from "../components/SocialMedia";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const { signUp } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        setError("User Already Exist...Try with another Email");
      }
    }
  };
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-slate-600 in">
        <div className="fixed w-full px-4 py-4 z-50 ">
          <div className="max-w-[450px] h-[520px] mx-auto bg-black/80 text-white rounded-md shadow-xl">
            <div className="max-w-[320px] mx-auto py-16 px-2 md:px-0">
              <div className="logo-login text-center ">
                <img
                  src="https://res.cloudinary.com/daxmjqsy2/image/upload/v1679395171/logo_q8a29a.png"
                  alt="logo"
                  className="w-[90px] h-[50px] mx-auto rounded-xl"
                />
              </div>
              <h1 className="text-3xl font-bold">Sign Up</h1>
              {error ? (
                <small className="text-red-500 font-semibold">{error}</small>
              ) : null}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                />
                <div className="password-input relative">
                  <input
                    className="p-3 my-2 w-full bg-gray-700 rounded"
                    type={isEyeOpen ? "text" : "password"}
                    placeholder="Password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="cursor-pointer absolute bottom-5 right-3"
                    onClick={() => setIsEyeOpen(!isEyeOpen)}
                  >
                    {isEyeOpen ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-gray-600 py-3 my-6 rounded font-semibold hover:bg-slate-600 transition-all duration-300"
                >
                  Sign Up
                </button>
                <div className=" flex justify-between items-center font-medium mb-3 text-gray-400">
                  <p className="mr-2">
                    {" "}
                    <input type="checkbox" /> Remember me ?
                  </p>
                  <p>Need Help ?</p>
                </div>
                <p>
                  <span className="text-gray-500">
                    Already have an account ?
                  </span>
                  <Link to="/"> Sign In</Link>{" "}
                </p>
              </form>
              <div className="-mt-4 pb-3">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
