import { NavLink } from "@/components/NavLink";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Bootchamp</h3>
            <p className="text-background/80 mb-4">
              Empowering youth with digital skills and leadership training for the future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/programs" className="text-background/80 hover:text-primary transition-colors">
                  All Programs
                </NavLink>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Digital Skills
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Innovation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <NavLink to="/stories" className="text-background/80 hover:text-primary transition-colors">
                  Success Stories
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className="text-background/80 hover:text-primary transition-colors">
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/community" className="text-background/80 hover:text-primary transition-colors">
                  Community
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li>Email: email@bootchamp.com</li>
              <li>Phone: +628XXXXXXXXXX</li>
              <li>Lampung, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2025 Bootchamp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
