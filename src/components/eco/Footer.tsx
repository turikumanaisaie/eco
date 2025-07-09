import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "For Users",
      links: [
        { name: "How it Works", href: "/how-it-works" },
        { name: "Pricing", href: "/pricing" },
        { name: "Track Order", href: "/track" },
        { name: "Help Center", href: "/help" }
      ]
    },
    {
      title: "For Partners", 
      links: [
        { name: "Become a Rider", href: "/rider" },
        { name: "Restaurant Partners", href: "/partner" },
        { name: "Business Solutions", href: "/business" },
        { name: "Partner Support", href: "/partner-support" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "News", href: "/news" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Refund Policy", href: "/refunds" }
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-hover rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-bold text-primary">NowNow Kigali</span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Rwanda's leading eco-friendly delivery platform connecting customers, 
              riders, and businesses across Kigali and surrounding areas.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">+250 785 762 690</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">Kigali, Rwanda</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">24/7 Service</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-background mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href}
                      className="text-background/80 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-background/20 py-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-background mb-2">
              Stay Updated
            </h3>
            <p className="text-background/80">
              Get the latest news about new restaurants, promotions, and features
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md bg-background/10 border border-background/20 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="eco">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/80 text-sm">
              © {currentYear} NowNow Kigali Delivery Platform. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-background/80 text-sm">
                Available in: <span className="text-primary font-medium">Kinyarwanda</span> • 
                <span className="text-primary font-medium"> English</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
