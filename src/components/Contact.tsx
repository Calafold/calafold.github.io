import React from 'react';
import { MailIcon, PhoneIcon } from './Icons';

interface Social {
  platform: string;
  url: string;
}

interface ContactProps {
  heading: string;
  description: string;
  email: string;
  phone: string;
  social: Social[];
}

export default function Contact({ heading, description, email, phone, social }: ContactProps) {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            {heading}
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-xl border border-slate-700 p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Email Card */}
            <a
              href={`mailto:${email}`}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <MailIcon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                <p className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                  {email}
                </p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <PhoneIcon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                <p className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                  {phone}
                </p>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="border-t border-slate-700 pt-8">
            <h3 className="text-lg font-bold text-white mb-6 text-center">
              Connect With Us
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border-2 border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  {item.platform}
                  <svg className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
