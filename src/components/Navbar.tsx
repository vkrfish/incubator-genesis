
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-incubator-primary to-incubator-secondary flex items-center justify-center text-white font-bold text-xl">S</div>
            <span className="text-xl font-bold text-incubator-dark">Symbiotes</span>
          </a>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#program" className="text-gray-700 hover:text-incubator-secondary transition-colors">Program</a>
          <a href="#features" className="text-gray-700 hover:text-incubator-secondary transition-colors">Features</a>
          <a href="#mentors" className="text-gray-700 hover:text-incubator-secondary transition-colors">Mentors</a>
          <a href="#faq" className="text-gray-700 hover:text-incubator-secondary transition-colors">FAQ</a>
          <Button className="bg-incubator-accent hover:bg-incubator-accent/90 text-white">Apply Now</Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-md py-4 px-4 z-40">
          <div className="flex flex-col gap-4">
            <a 
              href="#program" 
              className="text-gray-700 hover:text-incubator-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >Program</a>
            <a 
              href="#features" 
              className="text-gray-700 hover:text-incubator-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >Features</a>
            <a 
              href="#mentors" 
              className="text-gray-700 hover:text-incubator-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >Mentors</a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-incubator-secondary transition-colors"
              onClick={() => setIsOpen(false)}
            >FAQ</a>
            <Button className="bg-incubator-accent hover:bg-incubator-accent/90 text-white w-full">
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
