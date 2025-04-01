
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-incubator-light to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span>Remove the guesswork from </span>
              <span className="gradient-text">startup success</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              A three-month incubator program that provides early-stage founders with mentorship, networking, and real-world business validation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-incubator-primary hover:bg-incubator-primary/90 text-white text-lg px-8 py-6">
                Apply Now
              </Button>
              <Button variant="outline" className="border-incubator-secondary text-incubator-secondary hover:text-incubator-secondary hover:bg-incubator-light flex items-center text-lg px-8 py-6">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-incubator-primary text-white flex items-center justify-center text-xs">T</div>
                <div className="w-8 h-8 rounded-full bg-incubator-secondary text-white flex items-center justify-center text-xs">S</div>
                <div className="w-8 h-8 rounded-full bg-incubator-accent text-white flex items-center justify-center text-xs">M</div>
                <div className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center text-xs">+</div>
              </div>
              <p className="text-sm text-gray-600">Joined by 500+ founders from 8+ countries</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute top-4 -left-10 w-20 h-20 bg-incubator-light rounded-full animate-float opacity-50"></div>
              <div className="absolute bottom-8 -right-8 w-16 h-16 bg-incubator-light rounded-full animate-float opacity-30" style={{ animationDelay: "2s" }}></div>
              <div className="w-full max-w-md aspect-square bg-gradient-to-br from-incubator-primary to-incubator-secondary rounded-2xl p-1">
                <div className="bg-white w-full h-full rounded-xl flex items-center justify-center px-8 py-10">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-incubator-dark">Next Cohort Starts:</h3>
                      <p className="text-3xl font-bold text-incubator-primary">January 15, 2024</p>
                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700">3-Month Intensive Program</p>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700">1:1 Expert Mentorship</p>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700">$500K+ in Startup Deals</p>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-700">No Upfront Fees</p>
                      </li>
                    </ul>
                    <Button className="w-full bg-incubator-accent hover:bg-incubator-accent/90 text-white">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
