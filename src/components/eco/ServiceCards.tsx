import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, ShoppingCart, ArrowRight } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "For Customers",
    description: "Order from local restaurants, supermarkets, and merchants. Track your delivery in real-time.",
    features: [
      "Browse 500+ local businesses",
      "Real-time GPS tracking",
      "Mobile Money payments",
      "15-min average delivery"
    ],
    ctaText: "Start Ordering",
    ctaVariant: "eco" as const,
    href: "/customer"
  },
  {
    icon: User,
    title: "For Riders",
    description: "Join our eco-friendly delivery network. Earn money with flexible hours using cars, motorbikes, or bicycles.",
    features: [
      "Flexible working hours",
      "Multiple vehicle options",
      "Competitive earnings",
      "Weekly payouts"
    ],
    ctaText: "Become a Rider",
    ctaVariant: "accent" as const,
    href: "/rider"
  },
  {
    icon: Users,
    title: "For Business Partners",
    description: "Grow your business by reaching more customers. Easy menu management and order processing.",
    features: [
      "Increase customer reach",
      "Easy order management",
      "Real-time analytics",
      "Marketing support"
    ],
    ctaText: "Join as Partner",
    ctaVariant: "outline" as const,
    href: "/partner"
  }
];

export const ServiceCards = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Eco Works for Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform connects customers, riders, and businesses in a sustainable delivery ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift eco-card-shadow border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-hover rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={service.ctaVariant} 
                  className="w-full"
                  asChild
                >
                  <a href={service.href}>
                    {service.ctaText}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};