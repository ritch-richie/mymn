import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Mission } from "@/components/home/Mission";
import { Projects } from "@/components/home/Projects";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Mission />
      <Projects />
      <CTA />
    </Layout>
  );
};

export default Index;
