import React from 'react';

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
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600">
            {description}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Email */}
            <div className="text-center md:text-left">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a
                href={`mailto:${email}`}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                {email}
              </a>
            </div>

            {/* Phone */}
            <div className="text-center md:text-left">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                {phone}
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Follow Us
            </h3>
            <div className="flex justify-center gap-4">
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white rounded-lg font-medium transition-all duration-200 hover:shadow-md"
                >
                  {item.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
