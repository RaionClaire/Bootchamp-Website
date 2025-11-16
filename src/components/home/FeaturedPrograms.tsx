import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, TrendingUp } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const FeaturedPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      category: "Digital Skills",
      level: "Intermediate",
      duration: "12 Weeks",
      students: 45,
      description: "Build modern web applications with React, Node.js, and cloud deployment.",
      gradient: "from-primary to-primary/80",
    },
    {
      id: 2,
      title: "Leadership in Digital Age",
      category: "Leadership",
      level: "Beginner",
      duration: "8 Weeks",
      students: 38,
      description: "Develop leadership skills for managing teams and driving innovation.",
      gradient: "from-accent to-accent/80",
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      category: "Innovation",
      level: "Advanced",
      duration: "16 Weeks",
      students: 32,
      description: "Master AI fundamentals and build intelligent applications with Python.",
      gradient: "from-primary/80 to-accent",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Featured Programs
            </h2>
            <p className="text-xl text-muted-foreground">
              Start your transformation journey today
            </p>
          </div>
          <NavLink to="/programs">
            <Button variant="outline" className="hidden md:inline-flex">
              View All Programs
            </Button>
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={program.id}
              className="border-0 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-in-right"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${program.gradient}`} />
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="secondary">{program.category}</Badge>
                  <Badge variant="outline">{program.level}</Badge>
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  {program.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{program.students} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp size={16} className="text-primary" />
                  </div>
                </div>
                <NavLink to={`/programs/${program.id}`}>
                  <Button className="w-full gradient-primary">
                    Learn More
                  </Button>
                </NavLink>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <NavLink to="/programs">
            <Button variant="outline">View All Programs</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
