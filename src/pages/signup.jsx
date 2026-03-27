import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900">

        <div className="w-[400px] p-8 rounded-2xl shadow-2xl backdrop-blur-md bg-white/10 border border-white/10">

          <h2 className="text-2xl font-semibold text-white text-center">
            Create Account
          </h2>
<p className="text-gray-300 text-sm text-center mb-6">
            Join OpenCare Voice and make a difference
          </p>
          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 outline-none border border-white/10 focus:border-green-400"
            />
 <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 outline-none border border-white/10 focus:border-green-400"
            />
            <input
              type="password"
              placeholder="password"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 outline-none border border-white/10 focus:border-green-400"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 outline-none border border-white/10 focus:border-green-400"
            />

            <button className="w-full py-3 rounded-lg bg-green-500 hover:bg-green-600 transition text-white font-semibold">
              Sign Up
            </button>

          </form>

          <p className="text-sm text-gray-300  text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underlin">
              Login
            </Link>
          </p>

        </div>

      </div>
    </>
  );
}

export default Signup;