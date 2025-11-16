import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, TrendingUp } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const categories = ["All", "Digital Skills", "Leadership", "Innovation"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const programs = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      category: "Digital Skills",
      level: "Intermediate",
      duration: "12 Weeks",
      mode: "Online & Offline",
      students: 45,
      skills: ["React", "Node.js", "PostgreSQL", "AWS"],
      description: "Build modern web applications with React, Node.js, and cloud deployment.",
      gradient: "from-primary to-primary/80",
    },
    {
      id: 2,
      title: "Leadership in Digital Age",
      category: "Leadership",
      level: "Beginner",
      duration: "8 Weeks",
      mode: "Hybrid",
      students: 38,
      skills: ["Team Management", "Agile", "Communication", "Strategy"],
      description: "Develop leadership skills for managing teams and driving innovation.",
      gradient: "from-accent to-accent/80",
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      category: "Innovation",
      level: "Advanced",
      duration: "16 Weeks",
      mode: "Online",
      students: 32,
      skills: ["Python", "TensorFlow", "Deep Learning", "NLP"],
      description: "Master AI fundamentals and build intelligent applications with Python.",
      gradient: "from-primary/80 to-accent",
    },
    {
      id: 4,
      title: "UI/UX Design Mastery",
      category: "Digital Skills",
      level: "Beginner",
      duration: "10 Weeks",
      mode: "Online",
      students: 52,
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      description: "Create beautiful, user-centered designs that solve real problems.",
      gradient: "from-accent/80 to-primary",
    },
    {
      id: 5,
      title: "Data Analytics Bootcamp",
      category: "Digital Skills",
      level: "Intermediate",
      duration: "14 Weeks",
      mode: "Hybrid",
      students: 41,
      skills: ["Python", "SQL", "Tableau", "Statistics"],
      description: "Transform data into actionable insights with modern analytics tools.",
      gradient: "from-primary to-primary/70",
    },
    {
      id: 6,
      title: "Product Management",
      category: "Leadership",
      level: "Intermediate",
      duration: "12 Weeks",
      mode: "Online",
      students: 35,
      skills: ["Product Strategy", "User Stories", "Analytics", "Roadmapping"],
      description: "Learn to build products users love from ideation to launch.",
      gradient: "from-accent to-accent/70",
    },
  ];

  const filteredPrograms = programs.filter((program) => {
    const categoryMatch = selectedCategory === "All" || program.category === selectedCategory;
    const levelMatch = selectedLevel === "All" || program.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
              All Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of bootcamps designed to accelerate your career
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">CATEGORY</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "gradient-primary" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">LEVEL</h3>
              <div className="flex flex-wrap gap-3">
                {levels.map((level) => (
                  <Button
                    key={level}
                    variant={selectedLevel === level ? "default" : "outline"}
                    onClick={() => setSelectedLevel(level)}
                    className={selectedLevel === level ? "gradient-primary" : ""}
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <Card
                key={program.id}
                className="border-0 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-in-right"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${program.gradient}`} />
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary">{program.category}</Badge>
                    <Badge variant="outline">{program.level}</Badge>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{program.mode}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {program.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{program.skills.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{program.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp size={16} className="text-primary" />
                    </div>
                  </div>

                  <NavLink to={`/programs/${program.id}`}>
                    <Button className="w-full gradient-primary">View Details</Button>
                  </NavLink>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No programs found matching your filters. Try adjusting your selection.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
