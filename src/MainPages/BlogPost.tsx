import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../Data/BlogData';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div className="text-center text-red-500 dark:text-red-300 mt-10">Invalid Post</div>;
  }

  const blog = blogs.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <div className="text-center text-red-500 dark:text-red-300 mt-10">Post not found</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <img src={blog.imageUrl} alt={blog.title} className="w-full h-auto rounded-lg mb-8" />
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
            {blog.title}
          </h1>
          <div className="flex items-center gap-x-4 mb-4">
            <img src={blog.author.imageUrl} alt={blog.author.name} className="h-10 w-10 rounded-full" />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">{blog.author.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{blog.date}</p>
            </div>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">{blog.description}</p>
          <div className="mt-8 text-base leading-7 text-gray-700 dark:text-gray-400">
            <p>{blog.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
