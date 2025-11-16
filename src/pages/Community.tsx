import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { NavLink } from "@/components/NavLink";
import { MessageSquare, Users, Tag, PenSquare, Search } from "lucide-react";

interface Thread {
  id: number;
  title: string;
  tag: string;
  author: string;
  authorInitials: string;
  gradient: string;
  replies: number;
  participants: number;
  latestReply: string;
  excerpt: string;
}

const mockThreads: Thread[] = [
  {
    id: 1,
    title: "Is anyone else stuck on the React Context API challenge?",
    tag: "React",
    author: "Ahmad Fauzi",
    authorInitials: "AF",
    gradient: "from-primary to-primary/80",
    replies: 12,
    participants: 5,
    latestReply: "8m ago",
    excerpt:
      "Ahmad: I'm having trouble passing state... \nSiti: Oh, I just figured this out! You need to...",
  },
  {
    id: 2,
    title: "Career advice: Should I specialize in Frontend or Full-Stack?",
    tag: "Career",
    author: "Dewi Lestari",
    authorInitials: "DL",
    gradient: "from-accent/80 to-primary",
    replies: 34,
    participants: 12,
    latestReply: "22m ago",
    excerpt:
      "Dewi: I love design but also... \nMentorSarah: Great question. In my experience...",
  },
  {
    id: 3,
    title: "Showcase: My first project with the AI & ML program!",
    tag: "AI",
    author: "Budi Santoso",
    authorInitials: "BS",
    gradient: "from-primary/80 to-accent",
    replies: 8,
    participants: 4,
    latestReply: "45m ago",
    excerpt:
      "Budi: Just deployed my image... \nRian: This is awesome, Budi! How did you...",
  },
  {
    id: 4,
    title: "Looking for team members for the upcoming Hackathon",
    tag: "General",
    author: "Siti Nurhaliza",
    authorInitials: "SN",
    gradient: "from-accent to-accent/80",
    replies: 5,
    participants: 3,
    latestReply: "1h ago",
    excerpt:
      "Siti: I'm a designer looking for... \nAhmad: I'm a full-stack dev, let's connect!",
  },
  {
    id: 5,
    title: "Best resources for learning advanced Node.js patterns?",
    tag: "React",
    author: "Rian Hidayat",
    authorInitials: "RH",
    gradient: "from-primary to-primary/70",
    replies: 3,
    participants: 2,
    latestReply: "2h ago",
    excerpt:
      "Rian: I want to go beyond the... \nMentorMichael: Check out this talk on microservices...",
  },
];

const forumTags = [
  "All",
  "General",
  "React",
  "AI",
  "Career",
  "UI/UX",
  "Showcase",
];

const Community = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredThreads = mockThreads.filter(
    (thread) => selectedTag === "All" || thread.tag === selectedTag
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="animate-fade-in-up">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
                Community Forum
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Connect, share, and learn with fellow Bootchamp innovators.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <div className="relative flex-1">
                <Input
                  placeholder="Search conversations..."
                  className="pl-10 h-11"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
              <Button className="gradient-primary h-11 text-base">
                <PenSquare className="mr-2" />
                Start a Conversation
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <aside className="md:col-span-1">
              <Card className="border-0 card-shadow p-4 sticky top-24">
                <h3 className="text-lg font-heading font-bold text-foreground mb-4 flex items-center">
                  <Tag className="mr-2" />
                  Topics
                </h3>
                <div className="flex flex-col gap-2">
                  {forumTags.map((tag) => (
                    <Button
                      key={tag}
                      variant={selectedTag === tag ? "default" : "ghost"}
                      onClick={() => setSelectedTag(tag)}
                      className={
                        selectedTag === tag
                          ? "gradient-primary justify-start"
                          : "justify-start text-muted-foreground"
                      }
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </Card>
            </aside>

            <section className="md:col-span-3">
              <div className="grid grid-cols-1 gap-6">
                {filteredThreads.length > 0 ? (
                  filteredThreads.map((thread, index) => (
                    <Card
                      key={thread.id}
                      className="border-0 card-shadow hover:card-shadow-hover transition-all duration-300 animate-slide-in-right"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <Badge variant="secondary">{thread.tag}</Badge>
                          <span className="text-xs text-muted-foreground">
                            Latest reply: {thread.latestReply}
                          </span>
                        </div>
                        <NavLink
                          to={`/community/thread/${thread.id}`}
                          className="group"
                        >
                          <h3 className="text-xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                            {thread.title}
                          </h3>
                        </NavLink>
                        <p className="text-muted-foreground mb-4 leading-relaxed whitespace-pre-line text-sm">
                          {thread.excerpt}
                        </p>
                        <Separator className="my-4" />
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback
                                className={`text-xs font-bold text-background bg-gradient-to-br ${thread.gradient}`}
                              >
                                {thread.authorInitials}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium text-foreground">
                              {thread.author}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                              <MessageSquare size={16} />
                              <span>{thread.replies}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Users size={16} />
                              <span>{thread.participants}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Card className="border-0 card-shadow p-10 text-center">
                    <p className="text-xl text-muted-foreground">
                      No conversations found in "{selectedTag}".
                    </p>
                    <Button
                      variant="link"
                      onClick={() => setSelectedTag("All")}
                    >
                      View all topics
                    </Button>
                  </Card>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;