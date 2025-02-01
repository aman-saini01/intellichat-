import React from "react";
import "../index.css";
import { Typewriter } from "react-simple-typewriter";
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <>
     
      <div className=" h-dvh flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Build Smarter Chatbots with{" "}
            <span className=" text-teal-300">IntelliChat</span>
          </h1>
          <div className="p-4 flex">
            <div className="relative left-25">
              <span className="text-xl">Empower your Business with </span>
            </div>

            <span className="text-xl absolute left-175 font-bold">
              <Typewriter
                words={[" AI-driven chatbots that learn and grow with you."]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>

          <div className="space-x-4 mt-4">
            <Link to="/setup-organization">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 cursor-pointer">
                Get Started for Free
              </button>
            </Link>

            <button className="bg-transparent border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
