import React from "react";
import Image from "next/image";

const educationData = [
  {
    degree: "Bachelor of Technology - Mechanical Engineering",
    university:
      "Centurion University of Technology and Management, Parlakhemundi, Bhubaneshwar",
    period: "May 2014 - May 2018",
    image: "/cutm_logo.jpeg",
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">Education</h2>
      <ul className="space-y-6">
        {educationData.map((edu, index) => (
          <li
            key={index}
            className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600"
          >
            <div className="flex items-start mb-2">
              <div className="bg-white rounded-full p-2 mr-4 w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <Image
                  src={edu.image}
                  alt={`${edu.university} logo`}
                  width={80}
                  height={80}
                  className="object-contain w-12 h-12 sm:w-20 sm:h-20"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-100">
                  {edu.degree}
                </h3>
                <p className="text-base sm:text-lg text-gray-300">
                  {edu.university}
                </p>
                <p className="text-sm sm:text-base text-gray-400">
                  {edu.period}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
