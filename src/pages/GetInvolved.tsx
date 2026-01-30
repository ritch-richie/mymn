import { Layout } from "@/components/layout/Layout";

const GetInvolved = () => {
  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                Work With Us
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Book an <span className="text-primary">Event</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're a school, community group, or organisation looking to
                host an exhibition, arrange a visit, or book an outreach event—we'd
                love to hear from you.
              </p>
            </div>

            {/* Google Form Embed */}
            <div className="bg-card rounded-lg shadow-sm overflow-hidden">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeHwCLNuFvG8-eFRJxX3F2U_d9LYr9NxNnFnO8iFNqXpBqjTQ/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full min-h-[800px]"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetInvolved;
