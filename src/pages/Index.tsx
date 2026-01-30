import { Layout } from "@/components/layout/Layout";
import { NewHero } from "@/components/home/NewHero";
import { IntroVideo } from "@/components/home/IntroVideo";
import { AboutSection } from "@/components/home/AboutSection";
import { LocationsSection } from "@/components/home/LocationsSection";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { EventsCarousel } from "@/components/home/EventsCarousel";
import { Testimonials } from "@/components/home/Testimonials";
import { SocialFollow } from "@/components/home/SocialFollow";
import { InviteUs } from "@/components/home/InviteUs";
import { DonateSection } from "@/components/home/DonateSection";

const Index = () => {
  return (
    <Layout fullscreenHero>
      <NewHero />
      <IntroVideo />
      <AboutSection />
      <LocationsSection />
      <WhatWeDo />
      <EventsCarousel />
      <Testimonials />
      <SocialFollow />
      <InviteUs />
      <DonateSection />
    </Layout>
  );
};

export default Index;
