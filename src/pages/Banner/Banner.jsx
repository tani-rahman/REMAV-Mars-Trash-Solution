import React from "react";

const Banner = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden z-0">
      {/* Background Videos */}
      <div className="absolute inset-0 flex">
        <video
          className="w-1/2 h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>
        <video
          className="w-1/2 h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold leading-relaxed mb-6">
            Recycling isn’t optional <br /> It’s survival
          </h1>
          <p className="text-lg md:text-xl font-mono leading-relaxed">
            On Mars, every piece of waste is a chance to reuse and survive. 
            Recycling isn’t optional, it’s essential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
