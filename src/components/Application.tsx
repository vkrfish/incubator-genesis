
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const Application = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Received",
        description: "We'll review your application and get back to you within 48 hours.",
        duration: 5000,
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <section id="apply" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="gradient-text">Take the Leap?</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Apply now to join our next cohort of ambitious founders.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                  <Input id="firstName" required placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                  <Input id="lastName" required placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <Input id="email" type="email" required placeholder="you@example.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-gray-700">Startup/Company Name</label>
                <Input id="company" required placeholder="Enter your startup name" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="stage" className="text-sm font-medium text-gray-700">Startup Stage</label>
                <Select>
                  <SelectTrigger id="stage">
                    <SelectValue placeholder="Select your startup stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="idea">Idea Stage</SelectItem>
                    <SelectItem value="prototype">Prototype/MVP</SelectItem>
                    <SelectItem value="early-customers">Early Customers</SelectItem>
                    <SelectItem value="growing">Growing & Scaling</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-gray-700">Describe Your Startup</label>
                <Textarea 
                  id="description" 
                  required 
                  placeholder="What problem are you solving? Who are your customers? What's your unique value proposition?"
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="goals" className="text-sm font-medium text-gray-700">What do you hope to achieve through our incubator program?</label>
                <Textarea 
                  id="goals" 
                  required 
                  placeholder="Tell us about your specific goals and expectations."
                  rows={3}
                />
              </div>
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full bg-incubator-primary hover:bg-incubator-primary/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
