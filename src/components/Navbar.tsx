import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "Success Stories", path: "/stories" },
    { name: "Events", path: "/events" },
    { name: "Community", path: "/community" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50 card-shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-2xl font-heading font-bold text-primary">
            Bootchamp
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-foreground hover:text-primary transition-colors font-medium"
                activeClassName="text-primary"
              >
                {item.name}
              </NavLink>
            ))}
            <Button className="gradient-primary">Join Bootchamp</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in-up">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="block py-2 text-foreground hover:text-primary transition-colors"
                activeClassName="text-primary font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <Button className="w-full mt-4 gradient-primary">Join Bootchamp</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
