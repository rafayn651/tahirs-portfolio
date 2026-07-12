import { useRoute, Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, CheckCircle, ExternalLink } from "lucide-react";
import ziarat1 from "@assets/generated_images/ziarat_home.jpeg";
import ziarat2 from "@assets/generated_images/ziarat_settings.jpeg";
import ziarat3 from "@assets/generated_images/ziarat_guide.jpeg";
import ziarat4 from "@assets/generated_images/ziarat_ayat.jpeg";
import ride1 from "@assets/generated_images/ride_Home.jpeg";
import ride2 from "@assets/generated_images/ride service.jpeg";
import ride3 from "@assets/generated_images/ride_trip.jpeg";
import ride4 from "@assets/generated_images/ride profile.jpeg";
import voltify1 from "@assets/generated_images/voltify Home.jpeg";
import voltify2 from "@assets/generated_images/voltify device.jpeg";
import voltify3 from "@assets/generated_images/voltify usage.jpeg";
import voltify4 from "@assets/generated_images/voltify bill.jpeg";
import cinema1 from "@assets/generated_images/cinema home.jpeg";
import cinema2 from "@assets/generated_images/cinema 2.jpeg";
import cinema3 from "@assets/generated_images/cinema 3.jpeg";
import cinema4 from "@assets/generated_images/cinema 4.jpeg";
import crm1 from "@assets/generated_images/CRM_Home.jpeg";
import crm2 from "@assets/generated_images/CRM.jpeg";
import crm3 from "@assets/generated_images/CRM jobs.jpeg";
import crm4 from "@assets/generated_images/CRM profiles.jpeg";
import smNet1 from "@assets/generated_images/sm 1.jpeg";
import smNet2 from "@assets/generated_images/sm 2.jpeg";
import smNet3 from "@assets/generated_images/sm 3.jpeg";
import smNet4 from "@assets/generated_images/sm 4.jpeg";

const projectsData: Record<string, any> = {
  "sm-networking": {
    title: "SM Networking",
    description:
      "A full-scale enterprise sales & distribution management platform serving multiple user roles — Order Bookers, Warehouse Managers, TSMs (Territory Sales Managers), and Distributors — each with entirely different screens, permissions, and workflows.",
    tech: ["Flutter", "Provider", "BLoC", "GetIt", "REST API", "Firebase", "PDF Generation"],
    date: "2025 - Present",
    role: "Mobile App Developer",
    images: [smNet1, smNet2, smNet3, smNet4],
    githubLink: "https://github.com/tahirahmad1127/SM-networking",
    features: [
      "Multi-role architecture: Order Bookers, Warehouse Managers, TSMs, and Distributors",
      "PDF reporting engine — Order Summaries, Order Forms, and Overall Invoices with date-range filtering",
      "Offline GPS tracking for field reps with local queue and Firestore sync on reconnect",
      "Market Bookings and Recoveries drill-down with infinite scroll and pull-to-refresh",
      "Brands → Categories → Products catalog hierarchy with price override on product cards",
      "Single-device login enforcement with force-login prompts and session expiry handling",
      "Either-returning repository methods for all API calls with GetIt dependency injection",
      "Backend schema and endpoint co-design including report endpoints and auth header conventions",
    ],
    fullDescription:
      "SM Networking is the most complex project in the portfolio — a full-scale sales management platform built for enterprise distribution operations. The app serves four distinct user roles, each with its own screen flows, permissions, and business logic. The reporting engine generates PDF Order Summaries, Order Forms, and Overall Invoices with date-range and distributor/order-booker filtering, all viewable in-app via the printing package. Field operations are supported through offline GPS tracking that queues locations locally and syncs to Firestore on reconnect, handling patchy connectivity in real field conditions. The catalog follows a Brands → Categories → Products hierarchy with price override support. Session security enforces single-device login with force-login prompts and expiry handling. The architecture uses Either-returning repository methods for all API calls, GetIt for dependency injection, and Provider + BLoC for state management — built to scale.",
  },
  "ziarat-e-harmain": {
    title: "Ziarat-e-Harmain",
    description:
      "A comprehensive mobile application designed to guide pilgrims through their spiritual journey in Harmain. This application provides interactive guides, real-time location tracking, and essential pilgrimage information.",
    tech: ["Flutter", "Dart", "Firebase", "Node.js", "Python"],
    date: "Sep 2024 - Dec 2024",
    role: "Mobile App Developer",
    images: [ziarat1, ziarat2, ziarat3, ziarat4],
    liveLink: "https://ziarat-e-harmain.app",
    githubLink: "https://github.com/tahirahmad1127/Ziarat-App",
    features: [
      "Interactive step-by-step Hajj and Umrah guides",
      "Real-time navigation to key landmarks in Harmain",
      "Supplications and prayers collection",
      "Crowd density monitoring for safe pilgrimage",
      "Multi-language support for global pilgrims",
      "Cross-platform experience with Flutter",
    ],
    fullDescription:
      "Ziarat-e-Harmain is a specialized mobile platform dedicated to enhancing the experience of pilgrims during their spiritual journey. Built with Flutter for a seamless cross-platform experience, the app provides a digital companion that guides users through every step of Hajj and Umrah. It integrates real-time data to provide density alerts and landmark information, ensuring a safe and informed pilgrimage. The application also features a comprehensive library of supplications and educational content, making it an all-in-one resource for pilgrims from around the world.",
  },
  "riding-app": {
    title: "Riding App",
    description:
      "A feature-rich ride-hailing application that connects riders with drivers, offering real-time tracking, secure payments, and seamless trip management. Built with Flutter, it provides a smooth and intuitive user experience.",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    date: "Aug 2024 - Sep 2024",
    role: "Mobile App Developer",
    images: [ride1, ride2, ride3, ride4],
    liveLink: "https://riding-app.com",
    githubLink: "https://github.com/tahirahmad1127/riding_app",
    features: [
      "Real-time driver and rider location tracking",
      "Interactive Google Maps integration",
      "Secure payment processing system",
      "Trip history and driver ratings",
      "Instant push notifications",
      "User profile and preferences management",
    ],
    fullDescription:
      "The Riding App is a modern mobile solution designed to simplify the ride-hailing experience. Leveraging Flutter for a responsive and performant UI, the app connects users with available drivers in their vicinity. With deep Google Maps integration, both riders and drivers can track their routes and estimated arrival times in real-time. The application features a robust backend powered by Firebase, ensuring secure data handling and instant notifications. From ride requests to secure payments and trip feedback, the Riding App covers the entire journey, making urban transportation more accessible and efficient.",
  },
  "hsr-seeds": {
    title: "Voltify",
    description:
      "A comprehensive Electricity saving platform for every sector, implementing Flutter architecture and IOT devices for real-time monitoring. This application provides real-time data visualization and remote device management.",
    tech: ["Flutter", "Dart", "Firebase", "IOT", "C++", "Python"],
    date: "Feb 2024 - May 2024",
    role: "Mobile App Developer",
    images: [voltify1, voltify2, voltify3, voltify4],
    githubLink: "https://github.com/tahirahmad1127/FYP-Final",
    features: [
      "Real-time electricity consumption monitoring",
      "Remote device control via IOT integration",
      "Historical data analysis and visualization",
      "Predictive analytics for energy saving",
      "Multi-sector support (residential, industrial, commercial)",
      "Cross-platform mobile experience with Flutter",
    ],
    fullDescription:
      "Voltify is an innovative energy management platform designed to help users optimize electricity consumption across various sectors. By integrating IOT devices with a robust Flutter-based mobile application, users can monitor their energy usage in real-time and control appliances remotely. The system uses predictive analytics to suggest energy-saving measures, making it an essential tool for reducing carbon footprint and energy costs in both residential and industrial settings.",
  },
  "cinema-hiring-app": {
    title: "Cinema Hiring App",
    description:
      "A mobile hiring platform tailored for the cinema industry, enabling theaters and production companies to post job openings while candidates can browse roles, apply, and track their application status in real time.",
    tech: ["Flutter", "Dart", "Firebase", "Node.js"],
    date: "Jan 2025 - Present",
    role: "Mobile App Developer",
    images: [cinema1, cinema2, cinema3, cinema4],
    githubLink: "https://github.com/tahirahmad1127/CRM-appp",
    features: [
      "Browse and filter cinema job listings by role and location",
      "One-tap job application with resume upload",
      "Real-time application status tracking",
      "Employer dashboard to manage postings and candidates",
      "Push notifications for application updates",
      "In-app messaging between employers and applicants",
    ],
    fullDescription:
      "The Cinema Hiring App is a specialized recruitment platform built for the film and entertainment industry. Developed with Flutter for a smooth cross-platform experience, it bridges the gap between cinema employers and job seekers. Theaters, production houses, and studios can post openings for roles ranging from ushers and projectionists to production assistants and managers. Candidates get a streamlined experience to discover relevant opportunities, submit applications with their portfolio or resume, and receive instant updates on their status. The Firebase backend ensures real-time data sync and secure authentication, while Node.js powers the notification and messaging services.",
  },
  "crm-app": {
    title: "CRM App",
    description:
      "A robust Customer Relationship Management application designed to streamline business operations, manage client interactions, and track sales performance with real-time analytics.",
    tech: ["Flutter", "Dart", "Firebase", "Node.js", "Python"],
    date: "Nov 2024 - Present",
    role: "Full Stack Developer",
    images: [crm1, crm2, crm3, crm4],
    liveLink: "https://crm-app-demo.vercel.app",
    githubLink: "https://github.com/tahirahmad1127/CRM-App",
    features: [
      "Customer lead tracking and management",
      "Sales pipeline visualization",
      "Real-time analytics dashboard",
      "Automated email notifications",
      "Role-based access control",
      "Interactive reporting tools",
    ],
    fullDescription:
      "The CRM App is a comprehensive solution for businesses to manage their customer relationships effectively. Built with a modern tech stack including React and Node.js, it offers a seamless experience for tracking leads, managing sales pipelines, and analyzing business performance. The application features a real-time dashboard that provides actionable insights through data visualization. With integrated automation for tasks like follow-up emails and report generation, it significantly improves operational efficiency and customer engagement.",
  },
};

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const projectId = params?.id || "";
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button data-testid="button-back-home">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Link href="/">
          <Button
            variant="ghost"
            className="mb-8 hover-elevate active-elevate-2"
            data-testid="button-back"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>

        <div className="mb-8">
          <div className="relative h-64 md:h-80 max-w-2xl mx-auto rounded-lg overflow-hidden bg-muted mb-6">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-4">
            <h1
              className="text-4xl md:text-5xl font-bold"
              data-testid="text-project-title"
            >
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl">
              {project.description}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 bg-gray-200 dark:bg-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-semibold">Timeline</span>
            </div>
            <p className="text-muted-foreground" data-testid="text-date">
              {project.date}
            </p>
          </Card>

          <Card className="p-6 bg-gray-200 dark:bg-gray-800">
            <div className="mb-2 font-semibold">Role</div>
            <p className="text-muted-foreground" data-testid="text-role">
              {project.role}
            </p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-8 bg-gray-200 dark:bg-gray-800">
              <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </Card>

            <Card className="p-8 bg-gray-200 dark:bg-gray-800">
              <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
              <div className="grid gap-6">
                {project.images.slice(1).length === 2 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.images.slice(1).map((image: string, index: number) => (
                      <div
                        key={index + 1}
                        className="h-64 md:h-80 rounded-lg overflow-hidden bg-muted hover-elevate active-elevate-2 transition-all"
                        data-testid={`image-gallery-${index + 1}`}
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 2}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.images.slice(1).map((image: string, index: number) => (
                      <div
                        key={index + 1}
                        className="h-64 md:h-80 rounded-lg overflow-hidden bg-muted hover-elevate active-elevate-2 transition-all"
                        data-testid={`image-gallery-${index + 1}`}
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 2}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gray-200 dark:bg-gray-800">
              <h3 className="font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, index: number) => (
                  <Badge
                    key={index}
                    variant="outline"
                    data-testid={`badge-tech-${index}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gray-200 dark:bg-gray-800">
              <h3 className="font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm"
                    data-testid={`feature-${index}`}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-gray-200 dark:bg-gray-800">
              <h3 className="font-semibold mb-4">Project Links</h3>
              <div className="space-y-3">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="w-full justify-between hover-elevate active-elevate-2"
                      data-testid="button-demo"
                    >
                      Live Demo
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                )}
                <Button
                  variant="outline"
                  className="w-full justify-between hover-elevate active-elevate-2"
                  data-testid="button-github"
                  onClick={() => project.githubLink && window.open(project.githubLink, "_blank")}
                  disabled={!project.githubLink}
                >
                  View on GitHub
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
