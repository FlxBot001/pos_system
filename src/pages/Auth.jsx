import React from 'react'
import restaurant from "../assets/restaurant-img.jpg"

const Auth = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Section */}
      <div className="w1/2 relative flex items-center justify-center bg-cover">
        {/* BG image */}
        <img src={restaurant} alt="Restaurant Image" />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80">

        </div>

        {/* Quote at Bottom */}
        <blockquote className="absolute bottom-10 px-8 mb-10 text-2xl italic text-white">
          "Serve customers the best food with prompt and friendly service in a welcoming atmosphere, and the&apos;ll keep coming back."
          <br />
          <span className="mt-4 block text-yellow-400">
            Founder of ForkLy.
          </span>
        </blockquote>
      </div>
    </div>
  );
};

export default Auth