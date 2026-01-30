import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Users, Building2, Mail, Phone, User } from "lucide-react";

const GetInvolved = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    organisation: "",
    expectedDate: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-booking-request", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Request Submitted!",
        description: "We'll get back to you soon about your event booking.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        organisation: "",
        expectedDate: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
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

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Organisation */}
                <div className="space-y-2">
                  <Label htmlFor="organisation" className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-primary" />
                    Organisation *
                  </Label>
                  <Input
                    id="organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="Your organisation name"
                    required
                  />
                </div>
              </div>

              {/* Expected Date */}
              <div className="space-y-2">
                <Label htmlFor="expectedDate" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  Expected Event Date *
                </Label>
                <Input
                  id="expectedDate"
                  name="expectedDate"
                  type="date"
                  value={formData.expectedDate}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Additional Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  Additional Information (Optional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about what you're looking for..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetInvolved;
