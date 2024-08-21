import { Link } from 'react-router-dom';
import { portfolioData } from '../../Data/PortfolioData';

export default function PortfolioPage() {
  return (
    <section className='bg-white dark:bg-gray-900'>
        <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Portfolio
        </h1>
        <div className="space-y-12">
          {portfolioData.map((item) => (
            <div key={item.id} className="flex flex-col lg:flex-row items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="lg:w-1/2">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0 text-center lg:text-left">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <Link
                  to={`/portfolio/${item.id}`}
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-600 font-semibold"
                >
                  More Info &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}