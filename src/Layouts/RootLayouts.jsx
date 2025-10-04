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
