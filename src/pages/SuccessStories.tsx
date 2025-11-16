import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { Briefcase, Quote } from "lucide-react";

const SuccessStories = () => {
  // --- Mock Data ---
 const mockStories = [
  {
    id: 1,
    name: "Ahmad Fauzi",
    program: "Full-Stack Web Development",
    jobTitle: "Software Engineer",
    company: "TechCorp Indonesia",
    testimonial:
      "Bootchamp changed my life! I switched careers from zero to becoming a hired developer in just 12 weeks.",
    imageInitials: "AF",
    gradient: "from-primary to-primary/80",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    program: "UI/UX Design Mastery",
    jobTitle: "Product Designer",
    company: "StartupXYZ",
    testimonial:
      "The mentors were incredible. I managed to build a portfolio that got me noticed by top companies.",
    imageInitials: "SN",
    gradient: "from-accent to-accent/80",
  },
  {
    id: 3,
    name: "Budi Santoso",
    program: "AI & Machine Learning",
    jobTitle: "Data Scientist",
    company: "InovasiData",
    testimonial:
      "The 'AI & Machine Learning' program was intense but absolutely worth it. Now I'm working on advanced AI projects.",
    imageInitials: "BS",
    gradient: "from-primary/80 to-accent",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    program: "Leadership in Digital Age",
    jobTitle: "Project Manager",
    company: "DigitalTrans",
    testimonial:
      "I learned how to lead an agile team effectively. This program was the key to my promotion.",
    imageInitials: "DL",
    gradient: "from-accent/80 to-primary",
  },
  {
    id: 5,
    name: "Rian Hidayat",
    program: "Full-Stack Web Development",
    jobTitle: "Backend Developer",
    company: "E-CommerceJaya",
    testimonial:
      "The curriculum is highly relevant to the industry. I felt confident in technical interviews and got accepted immediately.",
    imageInitials: "RH",
    gradient: "from-primary to-primary/70",
  },
  {
    id: 6,
    name: "Putri Ayu",
    program: "UI/UX Design Mastery",
    jobTitle: "UX Researcher",
    company: "SolusiNet",
    testimonial:
      "Bootchamp not only teaches hard skills, but also soft skills for collaborating with teams.",
    imageInitials: "PA",
    gradient: "from-accent to-accent/70",
  },
];


  // --- State untuk Filter ---
  const [selectedProgram, setSelectedProgram] = useState("All");
  const programs = [
    "All",
    "Full-Stack Web Development",
    "UI/UX Design Mastery",
    "AI & Machine Learning",
    "Leadership in Digital Age",
  ];

  const filteredStories = mockStories.filter((story) => {
    return selectedProgram === "All" || story.program === selectedProgram;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
              Success Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find out how our graduates are making the difference in the tech industry.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">FILTER BY PROGRAM</h3>
              <div className="flex flex-wrap gap-3">
                {programs.map((program) => (
                  <Button
                    key={program}
                    variant={selectedProgram === program ? "default" : "outline"}
                    onClick={() => setSelectedProgram(program)}
                    className={selectedProgram === program ? "gradient-primary" : ""}
                  >
                    {program}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid Alumni */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <Card
                key={story.id}
                className="border-0 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-in-right flex flex-col"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader className="items-center text-center pb-4">
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${story.gradient} text-background flex items-center justify-center text-4xl font-bold mx-auto mb-4`}
                  >
                    {story.imageInitials}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">{story.name}</h3>
                  <Badge variant="secondary">{story.program}</Badge>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow pt-0">
                  {/* Jobs */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 justify-center text-center">
                    <Briefcase size={16} className="text-primary flex-shrink-0" />
                    <span>
                      {story.jobTitle} di <strong>{story.company}</strong>
                    </span>
                  </div>

                  {/* Testimoni */}
                  <div className="border-l-4 border-primary/50 pl-4 mb-6 flex-grow">
                    <Quote size={16} className="text-primary/50 mb-2" />
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{story.testimonial}"
                    </p>
                  </div>

                  <NavLink to={`/stories/${story.id}`}>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </NavLink>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Tidak ada cerita yang sesuai dengan filter kamu.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStories;