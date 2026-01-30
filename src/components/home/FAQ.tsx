import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Meet Your Muslim Neighbour offer?",
    answer: "We offer three main programmes: Islamic Exhibitions (immersive museum-style experiences), School Visits (RE and citizenship education support), and Community Events (interfaith dialogue and outreach in partnership with mosques, museums, and councils)."
  },
  {
    question: "How can I book a school visit?",
    answer: "You can book a school visit by contacting us through our website or emailing info.mymn@gmail.com. We work with primary schools, secondary schools, colleges, and universities across the North West."
  },
  {
    question: "Can I host an exhibition at my venue?",
    answer: "Yes! We partner with museums, community centres, councils, and mosques to host our exhibitions. Get in touch to discuss how we can bring our interactive displays to your space."
  },
  {
    question: "Where do you operate?",
    answer: "We primarily serve the North West of England, with active presence in Manchester, Liverpool, Lancaster, and Leeds. We're always open to expanding to new areas."
  },
  {
    question: "How can I support your work?",
    answer: "You can support us by donating, volunteering, or spreading the word about our work. Donations help us deliver free and low-cost exhibitions, visit schools, and create educational resources."
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 bg-muted text-muted-foreground text-sm font-medium rounded-full mb-6">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Got questions?
            </h2>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 data-[state=open]:bg-muted/50"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
