import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Thanks for subscribing!");
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-[hsl(var(--cream))]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center">
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-medium rounded-full mb-6">
              Get Notified
            </span>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
              Add impact to your inbox
            </h2>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white focus:ring-white"
                required
              />
              <Button 
                type="submit"
                disabled={isLoading}
                className="h-12 px-8 rounded-full bg-white text-primary hover:bg-white/90 font-semibold"
              >
                {isLoading ? "..." : "Subscribe"}
              </Button>
            </form>

            <p className="text-white/60 text-sm">
              By subscribing, I agree to receive communication from Meet Your Muslim Neighbour.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
