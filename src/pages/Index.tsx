
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Program from "@/components/Program";
import Features from "@/components/Features";
import Mentors from "@/components/Mentors";
import FAQ from "@/components/FAQ";
import Application from "@/components/Application";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Program />
      <Features />
      <Mentors />
      <FAQ />
      <Application />
      <Footer />
    </div>
  );
};

export default Index;
