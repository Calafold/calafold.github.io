import React from 'react';
import { CodeIcon, CloudIcon, CpuIcon, DevicePhoneMobileIcon, GlobeAltIcon, CogIcon } from './Icons';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesProps {
  heading: string;
  items: Feature[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: CodeIcon,
  cloud: CloudIcon,
  cpu: CpuIcon,
  mobile: DevicePhoneMobileIcon,
  globe: GlobeAltIcon,
  cog: CogIcon,
};

export default function Features({ heading, items }: FeaturesProps) {
  return (
    <section id="services" className="py-24 sm:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            {heading}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We provide cutting-edge solutions tailored to your business needs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || CodeIcon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative">
                  {/* Icon with gradient background */}
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-6 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium mr-2">Learn more</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200"
            >
              Start Your Project
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 text-slate-300 font-semibold hover:text-white transition-colors"
            >
              Learn more about us
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
