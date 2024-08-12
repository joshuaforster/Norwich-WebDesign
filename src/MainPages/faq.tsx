import React, { useEffect, useState, useRef } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import HeaderSection from '../CustomComponents/headerSection';

const faqs = [
  {
      id: 1,
      question: "What services do you offer?",
      answer: "Our range of services encompasses the entire process of designing and installing kitchens and bathrooms. This includes personalised design consultations, home measurements, providing design specifications and detailed quotes, and a selection of inspirational brochures to guide your choices."
  },
  {
      id: 2,
      question: "How does the consultation and design process work?",
      answer: "The process kicks off with a consultation to gather your requirements and style preferences. We then conduct an in-home measurement to ensure accuracy in our designs. Following this, we'll email you the design specifications and a comprehensive quote, keeping you involved every step of the way."
  },
  {
      id: 3,
      question: "How do you offer savings to customers?",
      answer: "Our business model eliminates the need for a physical showroom, significantly reducing our overheads. These savings are then passed on to you, ensuring you receive high-quality products and services at a more affordable price."
  },
  {
      id: 4,
      question: "Do you provide installation services?",
      answer: "Yes, we offer professional installation services. However, if you prefer to undertake the installation yourself or hire a separate contractor, we're flexible and happy to work with your preferences."
  },
  {
      id: 5,
      question: "How do I receive my design and quote?",
      answer: "After our in-home measurement and consultation, we will email you the detailed design specifications along with the quote, allowing you to review everything at your convenience and ensure it meets your expectations."
  },
  {
      id: 6,
      question: "Can I customise my kitchen or bathroom design?",
      answer: "Definitely! Your input is crucial in the design process. We encourage you to share your ideas and preferences so we can tailor the final design to match your vision perfectly."
  },
  {
      id: 7,
      question: "What sets your services apart?",
      answer: "Our direct-to-customer model not only offers cost savings but also ensures personalised attention and flexibility throughout the design and installation process. We pride ourselves on delivering quality, customised solutions that meet your specific needs and preferences."
  },
  {
      id: 8,
      question: "What warranty or guarantees do you offer?",
      answer: "We stand behind the quality of our products and installations with a comprehensive warranty that covers any manufacturing or installation defects. Specific details of the warranty period and what it covers will be provided with your quote."
  },
  {
      id: 9,
      question: "Can you work with any size of kitchen or bathroom?",
      answer: "Yes, we have experience designing and installing kitchens and bathrooms of all sizes. Whether you have a compact space or a large area, we tailor our solutions to fit your space perfectly, ensuring functionality and style."
  },
  {
      id: 10,
      question: "Do you help with the selection of materials and finishes?",
      answer: "Certainly! Our design consultation includes guidance on selecting materials and finishes that suit your taste, budget, and the functionality of the space. We provide samples and brochures to help you make informed decisions."
  },
  {
      id: 11,
      question: "What if I need changes after the design is finalised?",
      answer: "We understand that ideas evolve, which is why we're flexible with design changes. If you require adjustments after the design has been finalised, we'll work closely with you to accommodate these changes in a way that respects your budget and timeline."
  },
  {
      id: 12,
      question: "How do I schedule an in-home measurement?",
      answer: "Scheduling an in-home measurement is easy. You can contact us directly via phone or email, or fill out the contact form on our website. We'll find a time that suits you best for our team to visit your home."
  },
  {
      id: 13,
      question: "Are there any preparation steps I should take before the in-home measurement?",
      answer: "While no specific preparation is required, it's helpful to have a clear idea of your needs and any style preferences. Ensuring the space is accessible for accurate measurement would also be appreciated."
  },
  {
      id: 14,
      question: "How environmentally friendly are your products and services?",
      answer: "We're committed to sustainability and choose products and practices that minimise environmental impact. This includes using sustainably sourced materials and ensuring efficient installations to reduce waste."
  }
]

const FAQ: React.FC = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndices((prevActiveIndices) => {
      if (prevActiveIndices.includes(index)) {
        return prevActiveIndices.filter((i) => i !== index);
      } else {
        return [...prevActiveIndices, index];
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>FAQs - AD Forster Window Cleaning</title>
        <meta name="description" content="Find answers to frequently asked questions about AD Forster Window Cleaning, including services offered, pricing, booking, and more." />
      </Helmet>
      <section className="relative bg-white dark:bg-gray-900">
        <HeaderSection
          image='/images/norwichBackdrop.png'
          title="FAQ's"
        />
        <div
          ref={sectionRef}
          className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-800 dark:text-white capitalize">Frequently asked questions</h2>
            <div className="grid pt-8 text-left border-t border-gray-200 dark:border-gray-700 md:gap-16 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-10">
                  <div
                    className={`group flex items-center mb-4 text-lg font-medium cursor-pointer ${activeIndices.includes(index) ? 'text-customGold' : 'text-gray-900 dark:text-white'} hover:text-customGold`}
                    onClick={() => toggleFAQ(index)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={() => toggleFAQ(index)}
                  >
                    {activeIndices.includes(index) ? (
                      <FaMinus className="mr-2 w-5 h-5 group-hover:text-customGold" />
                    ) : (
                      <FaPlus className="mr-2 w-5 h-5 text-fontColour dark:text-white group-hover:text-customGold" />
                    )}
                    <h3 className="flex items-center group-hover:text-customGold">{faq.question}</h3>
                  </div>
                  {activeIndices.includes(index) && <div className="text-fontColour dark:text-gray-300">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;