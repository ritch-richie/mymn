import { Layout } from "@/components/layout/Layout";
import { NewHero } from "@/components/home/NewHero";
import { AboutSection } from "@/components/home/AboutSection";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { EventsCarousel } from "@/components/home/EventsCarousel";
import { Testimonials } from "@/components/home/Testimonials";
import { InviteUs } from "@/components/home/InviteUs";
import { DonateSection } from "@/components/home/DonateSection";

const Index = () => {
  return (
    <Layout fullscreenHero>
      <NewHero />
      <AboutSection />
      <WhatWeDo />
      <EventsCarousel />
      <Testimonials />
      <InviteUs />
      <DonateSection />
    </Layout>
  );
};

export default Index;
