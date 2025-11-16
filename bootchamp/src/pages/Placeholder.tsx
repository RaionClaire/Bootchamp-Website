import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "@/components/NavLink";

interface PlaceholderProps {
  title: string;
  description: string;
}

const Placeholder = ({ title, description }: PlaceholderProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-20 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">{description}</p>
            <p className="text-muted-foreground mb-8">
              This page is under construction. Check back soon for updates!
            </p>
            <NavLink to="/">
              <Button className="gradient-primary">
                <ArrowLeft className="mr-2" size={20} />
                Back to Home
              </Button>
            </NavLink>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Placeholder;
