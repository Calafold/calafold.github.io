import React from 'react';

interface Stat {
  value: string;
  label: string;
}

interface AboutProps {
  heading: string;
  description: string;
  stats: Stat[];
}

export default function About({ heading, description, stats }: AboutProps) {
  return (
    <section id="about" className="py-24 sm:py-32 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              {heading}
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-200"
              >
                Work With Us
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white font-semibold rounded-xl border-2 border-slate-700 hover:border-slate-500 shadow-sm hover:shadow-md transition-all duration-200 hover:bg-slate-800/50"
              >
                Our Services
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-center border border-slate-700 hover:border-blue-500/50 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-400 mb-3">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
