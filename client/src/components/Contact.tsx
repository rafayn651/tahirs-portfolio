import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { SiWhatsapp, SiLinkedin, SiGithub } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "22951c97-e5cf-4a2e-8e8c-ba2ae5ea2668",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I will get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tahirahmad1127@gmail.com",
      href: "mailto:tahirahmad1127@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 3484656704",
      href: "tel:+923484656704",
    },
    {
      icon: SiWhatsapp,
      label: "WhatsApp",
      value: "+92 3484656704",
      href: "https://wa.me/923484656704",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: SiGithub, label: "GitHub", href: "https://github.com/tahirahmad1127" },
    { icon: SiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/tahir-ahmed-tariq-6aab412a5/" },
  ];

  return (
    <section 
      id="contact" 
      className="py-20 md:py-32 bg-card/30"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            data-testid="text-contact-heading"
          >
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8 bg-gray-200 dark:bg-gray-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    data-testid="input-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    data-testid="input-subject"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                    data-testid="textarea-message"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full hover-elevate active-elevate-2"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 hover-elevate active-elevate-2 transition-all bg-gray-200 dark:bg-gray-800"
                  data-testid={`card-contact-${info.label.toLowerCase()}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium hover:text-primary transition-colors"
                          data-testid={`link-${info.label.toLowerCase()}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-gray-200 dark:bg-gray-800">
              <h3 className="font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 bg-muted rounded-lg hover-elevate active-elevate-2 transition-all"
                    aria-label={social.label}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
