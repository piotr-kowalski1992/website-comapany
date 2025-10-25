import React from 'react';
import Countdown from '../components/Countdown';

const UnderDevelopmentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Simple grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          Under Development
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          We are performing scheduled maintenance to improve the quality of our service
        </p>

        {/* Countdown section */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-300 mb-6">
            Releasing In
          </h2>
          <Countdown />
        </div>

        {/* Footer message */}
        <div className="mt-12 text-slate-500 text-sm">
          <p>Thank you for your patience and understanding</p>
          <p className="mt-2">We will be back soon with an improved version!</p>
        </div>

        {/* Contact info */}
        <div className="mt-8 flex flex-col items-center gap-2 text-slate-400 text-sm">
          <p>For urgent inquiries, please contact us:</p>
          <a href="mailto:support@pixeliumltd.com" className="text-slate-300 hover:text-white transition-colors underline">
            support@pixeliumltd.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopmentPage;

