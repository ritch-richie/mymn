import { Layout } from "@/components/layout/Layout";
import { NewHero } from "@/components/home/NewHero";
import { StatsCounter } from "@/components/home/StatsCounter";
import { AboutSection } from "@/components/home/AboutSection";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { EventsCarousel } from "@/components/home/EventsCarousel";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { InviteUs } from "@/components/home/InviteUs";
import { Newsletter } from "@/components/home/Newsletter";

const Index = () => {
  return (
    <Layout fullscreenHero>
      <NewHero />
      <StatsCounter />
      <AboutSection />
      <WhatWeDo />
      <EventsCarousel />
      <Testimonials />
      <FAQ />
      <InviteUs />
      <Newsletter />
    </Layout>
  );
};

export default Index;
