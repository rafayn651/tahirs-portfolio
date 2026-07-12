import { Card } from "@/components/ui/card";
import { MapPin, Calendar, GraduationCap, Award } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";
import me from "@/assets/New Dp.jpeg";

export default function About() {
  const stats = [
    { label: "CGPA", value: "3.71", icon: Award },
    { label: "Projects", value: "10+", icon: GraduationCap },
    { label: "Experience", value: "1 year+", icon: Calendar },
  ];

  const details = [
 
    { label: "Location", value: "Islamabad, Pakistan", icon: MapPin },
    { label: "Nationality", value: "Pakistani", icon: MapPin },
  ];

  return (
    <section 
      id="about" 
      className="py-20 md:py-32 bg-card/30"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            data-testid="text-about-heading"
          >
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          <div className="md:col-span-2">
            <Card className="p-6 hover-elevate bg-gray-200 dark:bg-gray-800">
              <div className="aspect-square max-w-xs mx-auto bg-gradient-to-br from-primary/20 to-chart-2/20 rounded-lg overflow-hidden mb-4">
                <OptimizedImage 
                  src={me} 
                  alt="Tahir Ahmed Tariq - Software Engineer" 
                  aspectRatio="1/1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                {details.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm"
                    data-testid={`text-detail-${detail.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <detail.icon className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{detail.label}:</span>
                    <span className="font-medium">{detail.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="md:col-span-3 space-y-6">
            <div>
              <p
                className="text-muted-foreground leading-relaxed mb-4"
                data-testid="text-about-description"
              >
                I'm Tahir Ahmad, a software engineer pursuing BS Software Engineering from NUML Islamabad (Feb 2022 - Feb 2026) with a 3.71 GPA. I specialise in mobile app development, with core expertise in OOP, DSA, and Database systems. I have experience building real-time, data-driven applications as well as IOT systems using Flutter and full-stack technologies. Beyond academics, I served as Chairman of the ACM NUML Chapter and led the Sports Section as part of NSES (NUML Software Engineering Society).
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover-elevate active-elevate-2 transition-all bg-gray-200 dark:bg-gray-800"
                  data-testid={`card-stat-${stat.label.toLowerCase()}`}
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
