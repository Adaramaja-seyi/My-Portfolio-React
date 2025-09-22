import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Edutams",
      period: "2024 - 2025",
      description:
        "Leading frontend development for various client projects, implementing React.js applications, and mentoring junior developers.",
      skills: ["React", "Node.js", "Laravel", "MySQL", "PHP"],
    },

    {
      id: 2,
      role: "Frontend Developer",
      company: "Edutams",
      period: "2023 - 2024",
      description:
        "Developed responsive web applications using modern JavaScript frameworks and collaborated with UX designers.",
      skills: ["JavaScript", "Vue.js", "SASS", "Webpack"],
    },
  
    {
      id: 3,
      role: "Junior Web Developer",
      company: "Edutams",
      period: "2022- 2023",
      description:
        "Built and maintained client websites using HTML, CSS, and JavaScript. Assisted in implementing new features.",
      skills: ["HTML5", "CSS3", "JavaScript", "jQuery"],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Work <span className="text-indigo-600">Experience</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 top-10 w-0.5 h-full bg-indigo-200"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 mt-1.5 w-8 h-8 rounded-full bg-indigo-600 border-4 border-white shadow"></div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {exp.role}
                    </h3>
                    <p className="text-indigo-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-gray-600">{exp.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
