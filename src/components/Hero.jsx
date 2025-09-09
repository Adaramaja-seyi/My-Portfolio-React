import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-12 bg-gradient-to-br from-indigo-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Hi, I'm{" "}
              <span className="text-indigo-600">Adaramaja Oluwaseyi</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 mt-4">
              Frontend Developer & UI Designer
            </h2>
            <p className="text-gray-500 mt-6 max-w-lg">
              I create beautiful, functional websites and applications with a
              focus on user experience and modern design principles.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg shadow hover:bg-indigo-50 transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-100 rounded-full overflow-hidden border-4 border-white shadow-xl">
                {/* Replace with your image */}
                <div className="w-full h-full bg-indigo-200 flex items-center justify-center text-indigo-400">
                  <img src="/photoseyi.png" alt="Seyi" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white py-1 px-3 rounded-full text-sm font-medium">
                Available for work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
