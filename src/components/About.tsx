import React from "react";

const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const About: React.FC = () => {
  const birthDate = new Date(2020, 5, 12); // June 12, 2002
  const age = calculateAge(birthDate);

  return (
    <section id="about" className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">About Me</h2>
      <p className="text-gray-300 mb-4">
        I&apos;m a {age}-year experienced Full Stack Developer with a knack for
        building products that make a difference. My expertise spans both
        frontend and backend technologies, enabling me to craft comprehensive
        solutions from the ground up.
      </p>
      <p className="text-gray-300 mb-4">
        Driven by a passion for coding and problem-solving, I excel in creating
        user-centric applications with a focus on clean code and
        maintainability. My technical skills are complemented by strong
        communication and teamwork abilities, enabling me to collaborate
        effectively with cross-functional teams and deliver high-quality
        projects on time.
      </p>
      {/* <p className="text-gray-300 mb-4">
        During my high school years, I excelled in software development, earning
        the prestigious title of DUX (top student) in this field. This early
        achievement laid the foundation for my passion and expertise in
        programming.
      </p>
      <p className="text-gray-300 mb-6">
        When I&apos;m not immersed in code, you&apos;ll find me experimenting in
        the kitchen or bringing ideas to life with my 3D printer. I&apos;m
        always creating, whether it&apos;s digital products or tangible objects.
      </p> */}
    </section>
  );
};

export default About;
