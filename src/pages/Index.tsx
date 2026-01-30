import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { StatsCounter } from "@/components/home/StatsCounter";
import { Mission } from "@/components/home/Mission";
import { Projects } from "@/components/home/Projects";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout fullscreenHero>
      <Hero />
      <StatsCounter />
      <Mission />
      <Projects />
      <CTA />
    </Layout>
  );
};

export default Index;
