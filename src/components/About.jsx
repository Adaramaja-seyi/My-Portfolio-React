import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          About <span className="text-indigo-600">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-lg">
              {/* Replace with your image */}
              <div className="w-full h-80 bg-indigo-100 flex items-center justify-center">
                <img src="/photoseyi.png" alt="Seyi" />
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              A little background
            </h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate frontend developer with 5 years of experience
              creating responsive, user-friendly websites and applications. My
              journey in web development started during my computer science
              studies, and I've been hooked ever since.
            </p>
            <p className="text-gray-600 mb-6">
              I specialize in React.js and modern JavaScript frameworks, with a
              strong focus on creating intuitive user interfaces and seamless
              user experiences. I believe that good design is not just about how
              it looks, but how it works.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <div className="mr-3 text-indigo-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-700">React.js Development</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-indigo-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-700">Responsive Design</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-indigo-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-700">UI/UX Design</span>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-indigo-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-700">Performance Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
