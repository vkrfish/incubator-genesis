
import { Card, CardContent } from "@/components/ui/card";
import { Users, Network, Briefcase, Database, BookOpen, Gift } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-incubator-primary" />,
      title: "Expert Mentorship",
      description: "Get paired with experienced entrepreneurs and investors who provide personalized guidance."
    },
    {
      icon: <Network className="h-8 w-8 text-incubator-primary" />,
      title: "Investor Network",
      description: "Gain access to a global network of startup investors looking for their next opportunity."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-incubator-primary" />,
      title: "Founder Community",
      description: "Join an exclusive network for collaboration and peer support with like-minded entrepreneurs."
    },
    {
      icon: <Database className="h-8 w-8 text-incubator-primary" />,
      title: "Talent Pool Access",
      description: "Connect with top-tier engineers, marketers, and business developers to grow your team."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-incubator-primary" />,
      title: "Practical Learning",
      description: "Learn through a project-driven, hands-on approach rather than theoretical sessions."
    },
    {
      icon: <Gift className="h-8 w-8 text-incubator-primary" />,
      title: "$500K+ in Perks",
      description: "Receive exclusive startup deals and credits worth over $500,000 for essential business services."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-incubator-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Our program provides all the tools, resources, and connections needed to build a successful startup.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-center">Three Golden Rules for Startup Success</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-incubator-light flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-incubator-primary">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Create an Irresistible Product</h4>
              <p className="text-gray-700">Develop a solution with a strong value proposition that customers can't ignore.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-incubator-light flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-incubator-primary">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Name & Market Effectively</h4>
              <p className="text-gray-700">Choose a memorable name and implement targeted marketing strategies to attract customers.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-incubator-light flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-incubator-primary">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Focus on Quality Design</h4>
              <p className="text-gray-700">Ensure high-quality branding and design to build trust and credibility with your audience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
