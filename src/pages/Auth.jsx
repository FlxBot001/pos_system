import React, { useState } from 'react';
import restaurant from "../assets/restaurant-img.jpg"
import logo1 from "../assets/logo1.png"
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

const Auth = () => {

  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Section */}
      <div className="w-1/2 relative flex items-center justify-center">
        {/* BG image */}
        <img
          className="w-full h-full object-cover"
          src={restaurant}
          alt="Restaurant Image"
          onError={(e) => console.error("Image failed to load", e)} // Debugging
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80">

        </div>

        {/* Quote at Bottom */}
        <blockquote className="absolute bottom-10 px-8 mb-10 text-2xl italic text-white">
          &quot;Serve customers the best food with prompt and friendly service in a welcoming atmosphere, and the&apos;ll keep coming back."
          <br />
          <span className="mt-4 block text-yellow-400">
            Founder of ForkLy.
          </span>
        </blockquote>
      </div>

      {/* Right SEction */}
      <div className="w-1/2 min-h-screen bg-[#1a1a1a] p-10">
        <div className="flex flex-col items-center gap-2">
          <img 
            src={logo1} 
            alt="Restro Logo" 
            className="h-14 w-14 border-2 rounded-full p-1" 
          />
          <h1 className="text-lg font-semibold text-[#f5f5f5] tracking-wide">
            ForkLy
          </h1>
        </div>

        <h2 className="text-4xl text-center mt-10 font-semibold text-yellow-400 mb-10">
          {isRegister ? "Employee Registration" : "Employee Login"}
        </h2>

        {/* Components */}
        {isRegister ? <Register /> : <Login />}

        <div className="flex justify-center mt-6">
          <p className="text-sm text-[#ababab]">
            {isRegister ? "Already have an account?" : "Do not have an account?"}
            <a 
              href="#" 
              onClick={() => setIsRegister(!isRegister)}
              className="text-yellow-400 font-semibold hover:underline">
                {isRegister ? "Sign in" : "Sign up"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth