import { useParams } from 'react-router-dom';
import { portfolioData, PortfolioItem } from '../../Data/PortfolioData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaGithub } from 'react-icons/fa';

export default function PortfolioDetail() {
  const { id } = useParams<Record<string, string | undefined>>();
  
  if (!id) {
    return <div className="container mx-auto px-6 py-12 text-gray-900 dark:text-white">Project not found</div>;
  }

  const project: PortfolioItem | undefined = portfolioData.find(
    (item) => item.id === parseInt(id)
  );

  if (!project) {
    return <div className="container mx-auto px-6 py-12 text-gray-900 dark:text-white">Project not found</div>;
  }

  return (
    <section className='bg-white dark:bg-gray-900'>
            <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        {project.title}
      </h1>

      <div className="text-center mb-8">
        <a
          href="https://placeholder.com"
          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-600 font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Live Project &rarr;
        </a>
      </div>

      <div className="mb-8">
        <Swiper spaceBetween={10} slidesPerView={1} className="rounded-lg shadow-lg">
          {project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Project ${index + 1}`} className="w-full h-auto" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <p className="text-lg leading-8 text-gray-700 dark:text-gray-300 mb-8">
        {project.description}
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Technologies Used</h2>
        <ul className="list-disc pl-6 space-y-2">
          {project.technologies.map((tech, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-300">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {project.githubLink && (
        <div className="text-center mb-8">
          <a
            href="https://placeholder.com"
            className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="mr-2" /> View on GitHub
          </a>
        </div>
      )}

      <div className="text-center">
        <a
          href="https://placeholder.com"
          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-600 font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Live Project &rarr;
        </a>
      </div>
    </div>
    </section>
  );
}