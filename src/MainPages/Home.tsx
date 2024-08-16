import React from "react";
import { Helmet } from "react-helmet";
import TestimonialSlider from "../PageComponents/HomeComponents/Reviews";
import Process from "../PageComponents/HomeComponents/Process";
import Logo from "../PageComponents/HomeComponents/logo";
import CTA1 from "../PageComponents/Universal/CTA1";
import PricingTable from "../PageComponents/HomeComponents/Pricing";
import Hero from "../PageComponents/HomeComponents/heroTwo";
import PrimaryFeatures from "../PageComponents/HomeComponents/PrimaryFeatures";
import WhyUs from "../PageComponents/HomeComponents/WhyUs";
import CTA2 from "../PageComponents/Universal/CTA2";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta name="description" content="AD Forster Window Cleaning offers top-notch window cleaning services for both residential and commercial properties. Learn more about our services, view our gallery, and read testimonials from our satisfied clients." />
        <title>Norwich Web Design- Home</title>
      </Helmet>
      <Hero />
      <Logo />
      <PrimaryFeatures />
      <WhyUs />
      <CTA2 />
      <Process />
      <PricingTable />
      <CTA1
        title="Build Your Online Presence. Get a Custom Website Today."
        subtitle="Transform your business with a professional, custom-designed website. Tailored to meet your needs and help you stand out online."
        primaryActionText="Get Started"
        primaryActionHref="https://example.com/get-started"
        secondaryActionText="Learn More"
        secondaryActionHref="https://example.com/learn-more"
        bgImage="/images/cowTower2.png"
      />
      <TestimonialSlider />
    </>
  );
}
