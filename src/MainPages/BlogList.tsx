import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../Data/BlogData';

const BlogList: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Learn how to grow your business with our expert advice...
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-800 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img alt="" src={blog.imageUrl} className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40 dark:from-gray-800 dark:via-gray-800/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-gray-700/10" />
              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 dark:text-gray-400">
                <time dateTime={blog.date} className="mr-8">
                  {blog.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50 dark:fill-white/30">
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img alt="" src={blog.author.imageUrl} className="h-6 w-6 flex-none rounded-full bg-white/10 dark:bg-white/20" />
                    {blog.author.name}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white dark:text-white">
                <Link to={`/blog/${blog.id}`}>
                  <span className="absolute inset-0" />
                  {blog.title}
                </Link>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
