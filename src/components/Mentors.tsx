
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const mentors = [
  {
    name: "Alex Johnson",
    role: "Serial Entrepreneur",
    company: "TechVentures",
    image: "",
    initials: "AJ",
    bio: "Founded 3 successful startups with 2 exits over $10M."
  },
  {
    name: "Sarah Williams",
    role: "Angel Investor",
    company: "Impact Capital",
    image: "",
    initials: "SW",
    bio: "Invested in 20+ early-stage startups with 4 successful exits."
  },
  {
    name: "Michael Chen",
    role: "Growth Strategist",
    company: "ScaleX",
    image: "",
    initials: "MC",
    bio: "Helped 15+ startups achieve product-market fit and scale."
  },
  {
    name: "Priya Patel",
    role: "Product Leader",
    company: "Former Google",
    image: "",
    initials: "PP",
    bio: "Led product teams at Google, Meta, and 2 YC-backed startups."
  },
  {
    name: "David Rodriguez",
    role: "VC Partner",
    company: "FutureTech Ventures",
    image: "",
    initials: "DR",
    bio: "Manages $50M fund focused on early-stage tech investments."
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Expert",
    company: "GrowthLab",
    image: "",
    initials: "LT",
    bio: "Developed marketing strategies for 30+ successful startups."
  }
];

const Mentors = () => {
  return (
    <section id="mentors" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn from <span className="gradient-text">Industry Experts</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Our carefully selected mentors have founded, scaled, and invested in successful startups.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={mentor.image} />
                    <AvatarFallback className="bg-incubator-primary text-white text-xl">
                      {mentor.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">{mentor.name}</h3>
                  <p className="text-incubator-secondary font-medium">{mentor.role}</p>
                  <p className="text-gray-600 mb-3">{mentor.company}</p>
                  <p className="text-gray-700">{mentor.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-4">
            And many more mentors from various industries and backgrounds!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
