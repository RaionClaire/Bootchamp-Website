import { Card, CardContent } from "@/components/ui/card";
import iconSkills from "@/assets/icon-skills.png";
import iconNetwork from "@/assets/icon-network.png";
import iconImpact from "@/assets/icon-impact.png";

const ValueProposition = () => {
  const values = [
    {
      icon: iconSkills,
      title: "Digital Skills",
      description: "Master in-demand skills from web development to AI, UI/UX design, and data analytics.",
      color: "from-primary/20 to-primary/5",
    },
    {
      icon: iconNetwork,
      title: "Expert Network",
      description: "Connect with industry mentors and join a thriving community of innovators and changemakers.",
      color: "from-accent/20 to-accent/5",
    },
    {
      icon: iconImpact,
      title: "Real Impact",
      description: "Build portfolio-worthy projects that solve real problems and create meaningful change.",
      color: "from-primary/20 to-accent/5",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Why Choose Bootchamp?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-0 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                  <img src={value.icon} alt={value.title} className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
