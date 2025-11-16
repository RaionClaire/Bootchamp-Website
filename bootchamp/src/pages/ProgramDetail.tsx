import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, Users, Calendar, CheckCircle2, Award, Target } from "lucide-react";

const ProgramDetail = () => {
  const { id } = useParams();

  // Mock data - would come from API/database in production
  const program = {
    id: 1,
    title: "Full-Stack Web Development",
    category: "Digital Skills",
    level: "Intermediate",
    duration: "12 Weeks",
    mode: "Online & Offline",
    students: 45,
    description:
      "Master the complete web development stack from frontend to backend. Build real-world applications using modern technologies and deploy them to production. This comprehensive bootcamp will take you from basics to advanced concepts.",
    gradient: "from-primary to-primary/80",
    outcomes: [
      "Build full-stack web applications with React and Node.js",
      "Design and implement RESTful APIs",
      "Work with PostgreSQL databases",
      "Deploy applications to AWS cloud",
      "Write clean, maintainable code following best practices",
      "Collaborate using Git and Agile methodologies",
    ],
    mentors: [
      {
        name: "Sarah Johnson",
        role: "Senior Full-Stack Engineer",
        company: "Tech Corp",
        image: "SJ",
      },
      {
        name: "Michael Chen",
        role: "Lead Developer",
        company: "StartupXYZ",
        image: "MC",
      },
      {
        name: "Priya Sharma",
        role: "Tech Architect",
        company: "Innovation Labs",
        image: "PS",
      },
    ],
    curriculum: [
      {
        module: "Module 1: Frontend Fundamentals",
        lessons: [
          "HTML5 & CSS3 Essentials",
          "JavaScript ES6+ Deep Dive",
          "React Basics & Components",
          "State Management with Hooks",
        ],
      },
      {
        module: "Module 2: Advanced Frontend",
        lessons: [
          "React Router & Navigation",
          "Context API & Redux",
          "Testing with Jest",
          "UI/UX Best Practices",
        ],
      },
      {
        module: "Module 3: Backend Development",
        lessons: [
          "Node.js & Express.js",
          "RESTful API Design",
          "Authentication & Authorization",
          "Database Design with PostgreSQL",
        ],
      },
      {
        module: "Module 4: DevOps & Deployment",
        lessons: [
          "Docker Containerization",
          "CI/CD Pipelines",
          "AWS Cloud Services",
          "Production Best Practices",
        ],
      },
    ],
    cohorts: [
      {
        batch: "Batch 5",
        startDate: "March 15, 2025",
        capacity: "25 seats",
        status: "Open",
      },
      {
        batch: "Batch 6",
        startDate: "May 10, 2025",
        capacity: "30 seats",
        status: "Open",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Hero Banner */}
        <div className={`bg-gradient-to-r ${program.gradient} text-background py-20`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl animate-fade-in-up">
              <div className="flex gap-3 mb-4">
                <Badge className="bg-background/20 text-background border-background/40">
                  {program.category}
                </Badge>
                <Badge className="bg-background/20 text-background border-background/40">
                  {program.level}
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                {program.title}
              </h1>
              <p className="text-xl text-background/90 mb-8 leading-relaxed">
                {program.description}
              </p>
              <div className="flex flex-wrap gap-6 text-background/90">
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} />
                  <span>{program.students} active students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={20} />
                  <span>{program.mode}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Learning Outcomes */}
              <section className="animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="text-primary" size={32} />
                  <h2 className="text-3xl font-heading font-bold text-foreground">
                    Learning Outcomes
                  </h2>
                </div>
                <Card className="border-0 card-shadow">
                  <CardContent className="p-6">
                    <div className="grid gap-4">
                      {program.outcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                          <p className="text-muted-foreground">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Curriculum */}
              <section className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="text-primary" size={32} />
                  <h2 className="text-3xl font-heading font-bold text-foreground">Curriculum</h2>
                </div>
                <Card className="border-0 card-shadow">
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {program.curriculum.map((module, index) => (
                        <AccordionItem key={index} value={`module-${index}`}>
                          <AccordionTrigger className="text-lg font-semibold">
                            {module.module}
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 mt-2">
                              {module.lessons.map((lesson, lessonIndex) => (
                                <li key={lessonIndex} className="flex items-start gap-3">
                                  <CheckCircle2
                                    className="text-primary mt-1 flex-shrink-0"
                                    size={16}
                                  />
                                  <span className="text-muted-foreground">{lesson}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </section>

              {/* Mentors */}
              <section className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Meet Your Mentors
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {program.mentors.map((mentor, index) => (
                    <Card key={index} className="border-0 card-shadow text-center">
                      <CardContent className="p-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent text-background flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                          {mentor.image}
                        </div>
                        <h3 className="font-heading font-semibold text-foreground mb-1">
                          {mentor.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-1">{mentor.role}</p>
                        <p className="text-xs text-muted-foreground">{mentor.company}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Enrollment Card */}
                <Card className="border-0 card-shadow animate-fade-in-up">
                  <CardHeader>
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      Available Cohorts
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {program.cohorts.map((cohort, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg bg-muted/50 border border-border"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-semibold text-foreground">{cohort.batch}</h4>
                          <Badge
                            variant={cohort.status === "Open" ? "default" : "secondary"}
                            className={cohort.status === "Open" ? "gradient-primary" : ""}
                          >
                            {cohort.status}
                          </Badge>
                        </div>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{cohort.startDate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users size={16} />
                            <span>{cohort.capacity}</span>
                          </div>
                        </div>
                        <Button className="w-full mt-4 gradient-primary">Enroll Now</Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Info */}
                <Card className="border-0 card-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-4">
                      Need Help?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Have questions about this program? Our team is here to help you make the
                      right choice.
                    </p>
                    <Button variant="outline" className="w-full">
                      Contact Us
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramDetail;
