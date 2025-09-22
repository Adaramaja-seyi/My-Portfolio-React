import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "TypeScript", level: 80 },
        { name: "Vue.js", level: 80},
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "PHP", level: 75 },
        { name: "MYSQL", level: 70 },
        { name: "Laravel", level: 65 },
        { name: "MongoDB", level: 50 },
        { name: "Firebase", level: 50 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 85 },
        { name: "Webpack", level: 75 },
        { name: "Figma", level: 80 },
        { name: "AWS", level: 65 },
        { name: "Docker", level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          My <span className="text-indigo-600">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                {category.category}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
