import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Youth collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-background mb-6 leading-tight">
            Empowering Youth in the Era of{" "}
            <span className="text-primary">Disruption</span>
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8 leading-relaxed">
            Transform your future with cutting-edge digital skills, visionary leadership training, and real-world projects that make an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="gradient-primary text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              Join Bootchamp
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-background/10 backdrop-blur-sm border-background text-background hover:bg-background hover:text-foreground transition-all"
            >
              Explore Programs
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" />
    </section>
  );
};

export default HeroSection;
