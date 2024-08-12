import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'; // Assuming you use react-router for navigation

interface Skill {
  title: string;
  description: string;
  points: string[];
}

const hardcodedSkills: Skill[] = [
  {
    title: 'Custom Code',
    description: 'All our websites are built from scratch using custom code to ensure the highest quality and performance.',
    points: [
      'Tailored to your specific needs',
      'Optimized for speed and efficiency',
      'Clean, maintainable code',
    ],
  },
  {
    title: 'No Web Builders',
    description: 'We do not use any web builders. Every line of code is handcrafted to meet your specific requirements.',
    points: [
      'Full control over design and functionality',
      'No unnecessary bloat',
      'Higher performance and security',
    ],
  },
  {
    title: 'Headless CMS',
    description: 'Our sites are integrated with headless CMS for seamless content management and scalability.',
    points: [
      'Flexible and scalable',
      'Easy to manage content',
      'Future-proof technology',
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark-gray py-8">
      <div className="mx-auto max-w-screen-xl px-4 text-center">
        <h3 className="text-4xl font-bold mb-4 text-black dark:text-white">Our Skills</h3>
        <div className="text-lg mb-8 text-gray-700 dark:text-gray-300">What we excel at</div>
        <div className="flex flex-wrap justify-center">
          {hardcodedSkills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface SkillItemProps {
  skill: Skill;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75, // Using 75% of the window height
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-start text-left m-4 p-6 w-full md:w-1/3 lg:w-1/4 transition-transform duration-700 ease-in-out border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-xl hover:border-gray-500 ${
        inView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
      }`}
    >
      <h3 className="text-2xl font-semibold text-black dark:text-white mb-2">{skill.title}</h3>
      <div className="text-gray-700 dark:text-gray-300 mb-4">{skill.description}</div>
      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-4">
        {skill.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="mt-auto inline-block bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-500 transition duration-300"
      >
        Get in Contact
      </Link>
    </div>
  );
};

export default Skills;
