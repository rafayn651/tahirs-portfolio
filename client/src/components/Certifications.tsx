import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import certificateImage from "@/assets/Certificate.png";
import internshipCertificateImage from "@/assets/Internship_Certificate.png";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import acmCertificateImage from "@/assets/ACM certificate-1.png";
import gclCertificateImage from "@/assets/GCL-2.png";
import tevtaCertificateImage from "@/assets/tevta-1.png";
import flutterCourseCertificateImage from "@/assets/flutter course-1.png";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  verified: boolean;
  certificate?: string;
}

const certifications: Certification[] = [
  {
    title: "BS Software Engineering",
    issuer: "NUML Islamabad",
    date: "Feb 2022 - Feb 2026",
    description: "Core academic degree focusing on foundational and advanced software engineering principles, including systems design and development.",
    skills: ["OOP", "DSA", "Database", "Mobile App Dev"],
    verified: true,
    certificate: certificateImage,
  },
  {
    title: "Flutter app developer internship",
    issuer: "Sky Pulse Solutions",
    date: "Aug 2025 - Sep 2025",
    description: "Successfully completed internship focusing on Flutter development, building real-world applications and working with professional development practices",
    skills: ["Flutter", "Dart", "Firebase", "State Management"],
    verified: true,
    certificate: internshipCertificateImage,
  },
  {
    title: "ACM Workshop on Flutter",
    issuer: "NUML ACM",
    date: "14 March 2023",
    description: "Volunteered as a member of ACM for organizing and conducting a workshop on Flutter development, contributing to the tech community at NUML.",
    skills: ["Flutter", "Dart", "Volunteering", "Community"],
    verified: true,
    certificate: acmCertificateImage,
  },
  {
    title: "Computer Network Intern",
    issuer: "Gharibwal Cement Limited",
    date: "2 Sep 2023",
    description: "Completed a one-month internship in the Electrical Department, gaining hands-on experience in computer networking infrastructure within an industrial environment.",
    skills: ["Computer Networks", "Networking Hardware", "Electrical Systems"],
    verified: true,
    certificate: gclCertificateImage,
  },
  {
    title: "Creative Designing",
    issuer: "TEVTA",
    date: "30 Aug 2021",
    description: "Completed the eRozgar Creative Designing course, gaining practical skills in digital design tools and creative visual communication.",
    skills: ["Creative Design", "Graphic Design", "eRozgar", "Digital Media"],
    verified: true,
    certificate: tevtaCertificateImage,
  },
  {
    title: "Flutter App Development Course",
    issuer: "Sky Plus Solutions",
    date: "30 May 2025",
    description: "Successfully completed course focusing on Flutter development, building real-world applications and working with professional development practices.",
    skills: ["Flutter", "Dart", "Firebase", "State Management"],
    verified: true,
    certificate: flutterCourseCertificateImage,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            data-testid="text-certifications-heading"
          >
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning and skill development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate active-elevate-2 transition-all bg-gray-200 dark:bg-gray-800 flex flex-col h-full"
              data-testid={`card-certification-${index}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                {cert.verified && (
                  <Badge variant="secondary" className="text-xs">
                    Verified
                  </Badge>
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {cert.certificate && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-auto"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Certificate
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[95vh] flex flex-col items-center justify-center p-0 overflow-hidden bg-transparent border-none">
                    <div className="relative w-full h-full flex items-center justify-center p-2">
                      <img
                        src={cert.certificate}
                        alt={`${cert.title} Certificate`}
                        className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-sm shadow-2xl"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
