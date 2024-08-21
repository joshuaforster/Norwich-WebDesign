// src/Data/PortfolioData.tsx

export interface PortfolioItem {
    id: number;
    title: string;
    liveLink: string;
    images: string[];
    description: string;
    technologies: string[];
    githubLink?: string;
    featureImage: string;  // Add this field for the feature image
  }
  
  export const portfolioData: PortfolioItem[] = [
    {
      id: 1,
      title: 'Lambert & Wright',
      liveLink: 'https://example.com',
      images: [
        '/images/lambertportfolio.png',
        '/images/lambertportfolio.png',
        '/images/lambertportfolio.png',
      ],
      description:
        "Lambert & Wright specialise in property renovations in Leicester. Their expertise lies in transforming homes with exceptional craftsmanship, delivering tailored renovations that meet the highest standards.",
      technologies: ['React', 'Tailwind CSS', 'Node.js'],
      githubLink: 'https://github.com/username/repo1',
      featureImage: 'images/lambertportfolio.png',  // Use the feature image here
    },
    {
      id: 2,
      title: 'Sampson N CO',
      liveLink: 'https://example.com',
      images: [
        '/images/Sampson N Co.png',
        '/images/Sampson N Co.png',
        '/images/Sampson N Co.png',
      ],
      description:
        "Based in Norwich, Sampson N CO offer bespoke kitchen and bathroom solutions. They provide high-quality designs and installations, ensuring each space is both functional and beautifully crafted.",
      technologies: ['Vue', 'Bootstrap', 'Firebase'],
      githubLink: 'https://github.com/username/repo2',
      featureImage: '/images/Sampson N Co.png',
    },
    {
      id: 3,
      title: 'AD Forster',
      liveLink: 'https://example.com',
      images: [
        '/images/adforster page.png',
        '/images/adforster page.png',
        '/images/adforster page.png',
      ],
      description:
        "AD Forster, operating in Norwich, are known for their reliable and professional window cleaning services. They help keep homes and businesses looking their best with meticulous attention to detail.",
      technologies: ['Angular', 'Sass', 'Firebase'],
      githubLink: 'https://github.com/username/repo3',
      featureImage: '/images/adforster page.png',
    },
    // Add more projects as needed
  ];