import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

interface Feature {
  number: number
  name: string
  description: string
  imageSrc: string
}

const features: Feature[] = [
  {
    number: 1,
    name: 'Initial Consultation',
    description:
      'We start with an in-depth consultation to understand your business needs, goals, and target audience. This helps us tailor the website to your exact specifications.',
    imageSrc: '/images/bankCard.png',
  },
  {
    number: 2,
    name: 'Planning and Strategy',
    description:
      'Next, we create a detailed plan and strategy for your website, including layout design, content structure, and feature prioritization, ensuring everything aligns with your business objectives.',
    imageSrc: '/images/keys.png',
  },
  {
    number: 3,
    name: 'Design and Development',
    description:
      'Our expert team designs and develops your website, focusing on aesthetics, user experience, and functionality. We dedicate over 40 hours to ensure the highest quality.',
    imageSrc: '/images/pencil.png',
  },
  {
    number: 4,
    name: 'Content Integration',
    description:
      'We integrate your content, including text, images, and media, ensuring it is well-organized, engaging, and aligned with your brand message.',
    imageSrc: '/images/stylus.png',
  },
  {
    number: 5,
    name: 'Testing and Optimization',
    description:
      'Before launching, we rigorously test your website for functionality, responsiveness, and performance. We aim for a perfect 100 on Google Page Speed scores to optimize your site’s performance.',
    imageSrc: '/images/magnifyingGlass.png',
  },
  {
    number: 6,
    name: 'Launch and Support',
    description:
      'Finally, we launch your website and provide ongoing support. You can request unlimited edits, and we include Google Analytics integration to help you monitor your site’s performance.',
    imageSrc: '/images/google.png',
  },
]

export default function Steps() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Your Web Journey</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Step-by-Step Process to Build Your Website
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Follow our comprehensive six-step process to take your website from concept to reality.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.number} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <img src={feature.imageSrc} alt="" className="h-5 w-5 flex-none" />
                  <span className="text-indigo-600">{feature.number}.</span> {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base dark:text-white leading-7 text-gray-600">
                  <p className="flex-auto dark:text-white">{feature.description}</p>
                  <p className="mt-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
