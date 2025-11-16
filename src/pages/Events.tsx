import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "@/components/NavLink";
import { CalendarDays, Clock, MapPin, Video, UsersRound, Users } from "lucide-react";

interface Event {
  id: number;
  title: string;
  type: "Webinar" | "Workshop" | "Networking" | "Competition";
  date: string;
  day: string;
  month: string;
  time: string;
  location: string;
  status: "Upcoming" | "Past";
  description: string;
  gradient: string;
}

const mockEvents: Event[] = [
  {
    id: 1,
    title: "Intro to Generative AI: Beyond the Hype",
    type: "Webinar",
    date: "2025-12-05",
    day: "05",
    month: "DEC",
    time: "19:00 - 20:30 WIB",
    location: "Online via Zoom",
    status: "Upcoming",
    description: "Join us for a deep dive into Generative AI, exploring real-world applications.",
    gradient: "from-primary to-primary/80",
  },
  {
    id: 2,
    title: "Figma Pro-Tips: From Zero to Hero",
    type: "Workshop",
    date: "2025-12-12",
    day: "12",
    month: "DEC",
    time: "10:00 - 15:00 WIB",
    location: "Hybrid - Jakarta Campus & Online",
    status: "Upcoming",
    description: "A hands-on workshop to master advanced Figma features for UI/UX design.",
    gradient: "from-accent to-accent/80",
  },
  {
    id: 3,
    title: "Digital Leaders Networking Night",
    type: "Networking",
    date: "2025-12-18",
    day: "18",
    month: "DEC",
    time: "18:30 - 21:00 WIB",
    location: "Jakarta Campus Auditorium",
    status: "Upcoming",
    description: "Connect with industry leaders, mentors, and fellow Bootchamp members.",
    gradient: "from-primary/80 to-accent",
  },
  {
    id: 4,
    title: "Annual Bootchamp Hackathon 2025",
    type: "Competition",
    date: "2026-01-15",
    day: "15",
    month: "JAN",
    time: "Full Day (09:00 - 17:00 WIB)",
    location: "Jakarta Campus",
    status: "Upcoming",
    description: "Build an amazing project in 24 hours and win exciting prizes!",
    gradient: "from-accent/80 to-primary",
  },
  {
    id: 5,
    title: "Building Your First Full-Stack App",
    type: "Workshop",
    date: "2025-11-20",
    day: "20",
    month: "NOV",
    time: "10:00 - 16:00 WIB",
    location: "Online",
    status: "Past",
    description: "A full-day workshop covering React, Node.js, and deploying to the cloud.",
    gradient: "from-primary to-primary/70",
  },
  {
    id: 6,
    title: "Career Talk: Thriving in a Tech Career",
    type: "Webinar",
    date: "2025-11-10",
    day: "10",
    month: "NOV",
    time: "19:00 - 20:00 WIB",
    location: "Online",
    status: "Past",
    description: "Listen to alumni and mentors share their tips for career success.",
    gradient: "from-accent to-accent/70",
  },
];

const eventTypes = ["All", "Webinar", "Workshop", "Networking", "Competition"];

const Events = () => {
  const [selectedType, setSelectedType] = useState("All");

  const upcomingEvents = mockEvents.filter(
    (event) =>
      event.status === "Upcoming" && (selectedType === "All" || event.type === selectedType)
  );
  const pastEvents = mockEvents.filter(
    (event) =>
      event.status === "Past" && (selectedType === "All" || event.type === selectedType)
  );

  const getIcon = (type: Event["type"]) => {
    switch (type) {
      case "Webinar":
        return <Video className="w-4 h-4 mr-1.5" />;
      case "Workshop":
        return <UsersRound className="w-4 h-4 mr-1.5" />;
      case "Networking":
        return <Users className="w-4 h-4 mr-1.5" />;
      case "Competition":
        return <MapPin className="w-4 h-4 mr-1.5" />;
      default:
        return <CalendarDays className="w-4 h-4 mr-1.5" />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
              Events & Workshops
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our community. Learn, build, and connect with industry experts.
            </p>
          </div>

          <div className="mb-12 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">FILTER BY TYPE</h3>
              <div className="flex flex-wrap gap-3">
                {eventTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    onClick={() => setSelectedType(type)}
                    className={selectedType === type ? "gradient-primary" : ""}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <section id="upcoming-events" className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event, index) => (
                  <Card
                    key={event.id}
                    className="border-0 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div
                        className={`w-full md:w-32 h-32 md:h-auto flex flex-row md:flex-col items-center justify-center p-4 text-background bg-gradient-to-br ${event.gradient}`}
                      >
                        <span className="text-5xl font-bold font-heading mr-4 md:mr-0 md:mb-1">
                          {event.day}
                        </span>
                        <span className="text-2xl font-semibold">{event.month}</span>
                      </div>
                      
                      <div className="flex-1 p-6">
                        <Badge variant="secondary" className="mb-3">
                          {event.type}
                        </Badge>
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                          <div className="flex items-center">
                            <Clock size={16} className="mr-1.5" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            {event.location.includes("Online") ? (
                              <Video size={16} className="mr-1.5" />
                            ) : (
                              <MapPin size={16} className="mr-1.5" />
                            )}
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <NavLink to={`/events/${event.id}`}>
                          <Button className="gradient-primary">Register Now</Button>
                        </NavLink>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <p className="text-muted-foreground">
                  No upcoming events match your selected filters. Check back soon!
                </p>
              )}
            </div>
          </section>

          <section id="past-events">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
              Past Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.length > 0 ? (
                pastEvents.map((event, index) => (
                  <Card
                    key={event.id}
                    className="border-0 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-in-right opacity-80"
                    style={{ animationDelay: `${(index + upcomingEvents.length) * 0.05}s` }}
                  >
                    <div className={`h-2 bg-gradient-to-r ${event.gradient}`} />
                    <CardHeader className="pb-4">
                      <Badge variant="secondary" className="mb-3 w-fit">
                        {event.type}
                      </Badge>
                      <h3 className="text-xl font-heading font-bold text-foreground">
                        {event.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <CalendarDays size={16} />
                        <span>{event.day} {event.month}</span>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                        {event.description}
                      </p>
                      <NavLink to={`/events/${event.id}`}>
                        <Button variant="outline" className="w-full">
                          View Recap
                        </Button>
                      </NavLink>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="text-muted-foreground">No past events match your filters.</p>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;