import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Learn the best techniques to increase your website conversion rate and turn visitors into customers.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
  },
  {
    id: 2,
    title: 'How to use SEO to your advantage',
    href: '#',
    description:
      'Master the art of SEO to improve your website visibility and drive more organic traffic.',
    imageUrl:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3602&q=80',
  },
  {
    id: 3,
    title: 'Understanding the importance of UX',
    href: '#',
    description:
      'Discover why User Experience (UX) is crucial for your website and how to improve it.',
    imageUrl:
      'https://images.unsplash.com/photo-1567427012647-5607f2c6cdff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3602&q=80',
  },
  {
    id: 4,
    title: 'Effective email marketing strategies',
    href: '#',
    description:
      'Learn how to create compelling email campaigns that drive engagement and sales.',
    imageUrl:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    title: 'Building a strong brand identity',
    href: '#',
    description:
      'Understand the key elements of brand identity and how to build a memorable brand.',
    imageUrl:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    title: 'Social media marketing tips',
    href: '#',
    description:
      'Maximize your social media presence with these essential marketing tips.',
    imageUrl:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function Portfolio() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate overflow-hidden bg-gray-900 group"
              style={{ height: `${Math.random() * (400 - 250) + 250}px` }} // Random height between 250px and 400px
            >
              <img
                alt=""
                src={post.imageUrl}
                className="absolute inset-0 h-full w-full object-cover group-hover:opacity-0 transition duration-300"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
