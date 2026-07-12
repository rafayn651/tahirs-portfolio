import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "wouter";
import ziaratImage1 from "@assets/generated_images/ziarat_home.jpeg";
import ziaratImage2 from "@assets/generated_images/ziarat_settings.jpeg";
import ziaratImage3 from "@assets/generated_images/ziarat_guide.jpeg";
import rideImage1 from "@assets/generated_images/ride_Home.jpeg";
import rideImage2 from "@assets/generated_images/ride service.jpeg";
import rideImage3 from "@assets/generated_images/ride_trip.jpeg";
import voltifyImage1 from "@assets/generated_images/voltify Home.jpeg";
import voltifyImage2 from "@assets/generated_images/voltify device.jpeg";
import voltifyImage3 from "@assets/generated_images/voltify usage.jpeg";
import crmImage1 from "@assets/generated_images/CRM_Home.jpeg";
import crmImage2 from "@assets/generated_images/CRM.jpeg";
import crmImage3 from "@assets/generated_images/CRM jobs.jpeg";
import comingSoonImage from "@assets/generated_images/coming soon.jpg";
import cinemaImage1 from "@assets/generated_images/cinema home.jpeg";
import cinemaImage2 from "@assets/generated_images/cinema 2.jpeg";
import cinemaImage3 from "@assets/generated_images/cinema 3.jpeg";

const projects = [
  {
    id: "ziarat-e-harmain",
    title: "Ziarat-e-Harmain",
    description:
      "A comprehensive mobile application designed to guide pilgrims through their spiritual journey in Harmain, featuring interactive guides and real-time information.",
    images: [ziaratImage1, ziaratImage2, ziaratImage3],
    tech: ["Flutter", "Dart", "Firebase", "Node.js", "Python"],
    date: "Sep 2024 - Dec 2024",
    category: "Mobile App",
  },
  {
    id: "riding-app",
    title: "Riding App",
    description:
      "A feature-rich ride-hailing application that connects riders with drivers, offering real-time tracking, secure payments, and seamless trip management.",
    images: [rideImage1, rideImage2, rideImage3],
    tech: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    date: "Aug 2024 - Sep 2024",
    category: "Mobile App",
  },
  {
    id: "hsr-seeds",
    title: "Voltify",
    description:
      "A comprehensive Electricity saving platform for every sector, implementing Flutter architecture and IOT devices for real-time monitoring.",
    images: [voltifyImage1, voltifyImage2, voltifyImage3],
    tech: ["Flutter", "Dart", "Firebase", "IOT", "C++", "Python"],
    date: "Feb 2024 - May 2024",
    category: "Mobile App",
  },
  {
    id: "crm-app",
    title: "CRM App",
    description:
      "A robust Customer Relationship Management application designed to streamline business operations, manage client interactions, and track sales performance with real-time analytics.",
    images: [crmImage1, crmImage2, crmImage3],
    tech: ["Flutter", "Dart", "Firebase", "Node.js", "Python"],
    date: "Nov 2024 - Present",
    category: "Full Stack",
  },
  {
    id: "cinema-hiring-app",
    title: "Cinema Hiring App",
    description:
      "A mobile hiring platform tailored for cinema industry roles, enabling theaters to post job openings and candidates to browse, apply, and track applications in real time.",
    images: [cinemaImage1, cinemaImage2, cinemaImage3],
    tech: ["Flutter", "Dart", "Firebase", "Node.js"],
    date: "Jan 2025 - Present",
    category: "Mobile App",
  },
  {
    id: "coming-soon",
    title: "More Projects Coming Soon",
    description:
      "I'm constantly working on new and exciting projects. Stay tuned for more innovative solutions and creative implementations!",
    images: [comingSoonImage],
    tech: [],
    date: "TBA",
    comingSoon: true,
    category: "All",
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = Array.from(new Set(projects.filter(p => !p.comingSoon).map(p => p.category)));
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory || p.comingSoon);
  return (
    <section 
      id="projects" 
      className="py-20 md:py-32 bg-card/30"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="projects-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            data-testid="text-projects-heading"
          >
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and achievements
          </p>
        </div>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 flex flex-col h-full bg-gray-200 dark:bg-gray-800 border-2 shadow-md hover:shadow-xl hover:border-primary/50"
              data-testid={`card-project-${project.id}`}
            >
              {/* Image Section with Border Frame */}
              <div className="p-3">
                <div className="relative h-64 md:h-72 w-full max-w-md mx-auto overflow-hidden bg-muted rounded-lg border-2 border-border flex items-center justify-center">
                  {project.images.map((img, imgIndex) => (
                    <div 
                      key={imgIndex} 
                      className={`${project.images.length === 3 ? 'w-1/3' : 'w-full'} h-full border-r last:border-r-0 border-border/50 py-2`}
                    >
                      <img
                        src={img}
                        alt={`${project.title} - ${imgIndex + 1}`}
                        loading="lazy"
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                  
                  {/* Date - Bottom Left on Image */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white backdrop-blur-sm bg-black/40 px-2 py-1 rounded">
                    <Calendar className="h-3 w-3" />
                    <span data-testid={`text-date-${project.id}`}>{project.date}</span>
                  </div>
                </div>
              </div>

              {/* Content Section - Compact & Organized */}
              <div className="p-4 flex flex-col flex-1 space-y-3">
                {/* Title */}
                <h3
                  className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1"
                  data-testid={`text-title-${project.id}`}
                >
                  {project.title}
                </h3>

                {/* Description - Compact */}
                <p
                  className="text-muted-foreground text-sm leading-relaxed line-clamp-2 flex-1"
                  data-testid={`text-description-${project.id}`}
                >
                  {project.description}
                </p>

                {/* Tech Stack - Compact */}
                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs px-2 py-0.5 hover:bg-primary hover:text-primary-foreground transition-colors"
                        data-testid={`badge-tech-${project.id}-${techIndex}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Action Button - Compact */}
                {!project.comingSoon ? (
                  <Link href={`/project/${project.id}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between group/btn hover:bg-primary hover:text-primary-foreground mt-2"
                      data-testid={`button-view-details-${project.id}`}
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full opacity-60 cursor-not-allowed mt-2"
                    disabled
                    data-testid={`button-coming-soon-${project.id}`}
                  >
                    Coming Soon
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
