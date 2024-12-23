import React from "react";
import Image from "next/image";
import { ChipList } from "./Chips";

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  logo: string;
  skills: string[];
}

const experiences: Job[] = [
  {
    title: "Senior Analyst",
    company: "Accenture",
    location: "Kolkata, West Bengal",
    period: "November 2024 -  Present",
    description: [
      "Developing and maintaining robust backend services using Node.js and Express.js for financial applications",
      "Implementing scalable microservices architecture to enhance system performance and reliability",
      "Designing and optimizing database schemas for MySQL and MongoDB to support complex financial data models",
      "Collaborating with cross-functional teams to deliver high-impact solutions in the financial technology sector",
      "Integrating RESTful APIs and implementing secure authentication mechanisms for sensitive financial data"
    ],
    logo: "/accenture_logo.png",
    skills: [
      "NodeJs",
      "ExpressJS",
      "MongoDB",
      "MySQL",
      "Kafka",
      "Splunk",
      "Docker",
      "Kubernetes",
      "GraphQL",
      "Redis",
      "CI/CD",
      "Microservices",
      "REST APIs",
      "Backend Architecture",
      "System Design"
    ],
  },
  {
    title: "Software Developer",
    company: "Team Geek Solution",
    location: "Pune, Maharashtra",
    period: "December 2023 -  September 2024",
    description: [
      "Developed and maintained web applications using MongoDB, Express.js, React, and Node.js, ensuring robust functionality and user-friendly interfaces.",
      "Next.js for server-side rendering, improving application performance and SEO.",
      "Deployed and managed cloud infrastructure on AWS, optimizing performance, scalability, and cost-efficiency.",
      "Worked closely with cross-functional teams, including designers, product managers, and other developers, to deliver high-quality software solutions.",
      "Ensured clean, maintainable, and efficient code by following best practices and performing code reviews.",
    ],
    logo: "/teamgeeksolutions_logo.jpeg",
    skills: [
      "NextJS",
      "Typescript",
      "NodeJs",
      "ExpressJS",
      "MongoDB",
      "MySQL",
      "Material UI",
      "Storybooks",
      "Redux",
    ],
  },
  {
    title: "Senior Software Design Engineer",
    company: "Newgen Software",
    location: "Noida, Uttar Pradesh",
    period: "January 2022 - December 2023",
    description: [
      "Created RESTful endpoints using NodeJS, KoaJS",
      "Used visualization libraries such as ChartJs to show different charts to visualize the data onto the customer dashboard.",
      "Optimizing React components, minimizing re-renders, and improving overall application performance.",
      "Collaborating with designers and translating UI/UX wireframes and mockups into responsive and interactive React components.",
      "Working closely with backend developers and integrating front-end components with backend REST APIs and services.",
    ],
    logo: "/newgen_logo.png",
    skills: ["React", "Micro-frontend", "Material UI", "Redux", "Ngnix"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "eClerx",
    location: "Pune, Maharashtra",
    period: "September 2021 - January 2022",
    description: [
      "Implementing state management solutions such as Redux API to manage the application's data and state.",
      "Building reusable and modular UI components using React.js and related libraries.",
      "Collaborated with cross-functional teams, enhancing communication and teamwork skills.",
    ],
    logo: "/eclerx_logo.jpeg",
    skills: ["React", "KoaJS", "ChartJs", "Redux", "MongoDB", "NodeJS"],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">Experience</h2>
      <div className="space-y-6">
        {experiences.map((job, index) => (
          <div
            key={index}
            className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600"
          >
            <div className="flex items-start mb-2">
              <div className="bg-white rounded-full p-2 mr-4 w-24 h-24 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-gray-100">
                  {job.title}
                </h3>
                <p className="text-lg text-gray-300">
                  {job.company}, {job.location}
                </p>
                <p className="text-gray-400">{job.period}</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300 mb-4">
              {job.description.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start">
                  <span className="mr-2 mt-1.5 text-gray-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <ChipList items={job.skills} category="frameworks" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
