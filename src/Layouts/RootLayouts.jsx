<<<<<<< HEAD
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../pages/Footer/Footer';

const RootLayouts = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <div className="p-6 px-8 bg-slate-700 z-[10000] relative">
        <Navbar />
      </div>

      {/* Banner + Outlet */}
      <div className="relative bg-[url('/Bg.jpg ')] bg-cover bg-center min-h-screen">
        {/* <div className="absolute inset-0 bg-white/20 z-0"></div>  */}
        <div className="relative z-10">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayouts;
=======
import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer/Footer";
import bgImage from "/mars-bg.jpg"; 
const RootLayouts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="p-6 px-8 bg-slate-700 z-[10000] relative">
        <Navbar />
      </div>

      {/* Main Content + Background */}
      <div
        className="relative flex-1 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Ocean Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/60 via-blue-800/50 to-blue-900/60 z-0"></div>

        {/* Page Content */}
        <div className="relative z-10">
          <Outlet />
        </div>
      </div>
      {/* Footer */}
        <Footer />
    </div>
  );
};

export default RootLayouts;
>>>>>>> 9971610 (set the all api)
