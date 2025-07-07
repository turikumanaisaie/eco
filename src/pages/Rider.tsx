import { Navbar } from "@/components/eco/Navbar";
import { Footer } from "@/components/eco/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  Star, 
  Phone,
  CreditCard,
  Settings,
  TrendingUp,
  Shield,
  Users,
  ArrowRight
} from "lucide-react";

const riderBenefits = [
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work when you want, how you want",
    details: ["Set your own schedule", "Work part-time or full-time", "No fixed shifts", "Perfect work-life balance"]
  },
  {
    icon: TrendingUp,
    title: "Competitive Earnings",
    description: "Earn more with our fair pricing model",
    details: ["Base rate + distance bonuses", "Peak hour multipliers", "Weekly performance bonuses", "Keep 100% of tips"]
  },
  {
    icon: Shield,
    title: "Support & Safety",
    description: "We've got your back every step",
    details: ["24/7 rider support", "Insurance coverage", "Safety training", "Emergency assistance"]
  },
  {
    icon: CreditCard,
    title: "Fast Payouts",
    description: "Get paid quickly and securely",
    details: ["Weekly payments", "Mobile money transfers", "Bank account deposits", "Transparent earnings tracking"]
  }
];

const vehicleRequirements = [
  {
    type: "Bicycle",
    emoji: "🚴‍♂️",
    requirements: ["Working bicycle", "Helmet (provided)", "Basic fitness level", "Age 18+"],
    earnings: "1,500 - 3,000 RWF/day",
    popular: true
  },
  {
    type: "Motorbike", 
    emoji: "🏍️",
    requirements: ["Valid driving license", "Registered motorbike", "Insurance", "Age 21+"],
    earnings: "3,000 - 6,000 RWF/day",
    popular: true
  },
  {
    type: "Car",
    emoji: "🚗",
    requirements: ["Valid driving license", "Registered vehicle", "Insurance", "Age 23+"],
    earnings: "4,000 - 8,000 RWF/day",
    popular: false
  }
];

const riderSteps = [
  { step: "1", title: "Apply", description: "Submit your application online", icon: Users },
  { step: "2", title: "Verify", description: "Upload documents for verification", icon: Shield },
  { step: "3", title: "Train", description: "Complete our onboarding training", icon: Settings },
  { step: "4", title: "Earn", description: "Start delivering and earning money", icon: TrendingUp }
];

const Rider = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 eco-gradient-bg text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ride. Earn.
              <span className="block">Make a Difference.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Join Rwanda's leading eco-friendly delivery network. Flexible hours, 
              competitive pay, and the chance to support local businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="accent" size="lg" className="text-lg px-8">
                Apply Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                <Phone className="h-5 w-5 mr-2" />
                Call Us
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">1,000+</div>
                <div className="text-sm opacity-80">Active Riders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm opacity-80">Rider Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-80">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Vehicle
            </h2>
            <p className="text-xl text-muted-foreground">
              We welcome all types of eco-friendly transportation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vehicleRequirements.map((vehicle, index) => (
              <Card key={index} className="hover-lift eco-card-shadow border-0 bg-card/80 backdrop-blur-sm relative">
                {vehicle.popular && (
                  <Badge className="absolute -top-2 right-4 bg-accent text-accent-foreground">
                    Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{vehicle.emoji}</div>
                  <CardTitle className="text-xl text-foreground">{vehicle.type}</CardTitle>
                  <div className="text-lg font-semibold text-primary">{vehicle.earnings}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {vehicle.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Ride with Eco?
            </h2>
            <p className="text-xl text-muted-foreground">
              More than just a job - join a community making Rwanda greener
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {riderBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 eco-card-shadow bg-card/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-hover rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How to Join
            </h2>
            <p className="text-xl text-muted-foreground">
              Start earning in just 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {riderSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-hover rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Riders Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jean Baptiste",
                vehicle: "Motorbike",
                rating: 5,
                quote: "Eco gave me the flexibility to work around my studies. The support team is amazing!"
              },
              {
                name: "Marie Claire",
                vehicle: "Bicycle",
                rating: 5,
                quote: "I love staying fit while earning money. Plus, I'm helping the environment!"
              },
              {
                name: "Patrick",
                vehicle: "Car",
                rating: 5,
                quote: "Best decision I made. The earnings are consistent and the app is very user-friendly."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 eco-card-shadow bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-hover rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-foreground font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.vehicle} Rider</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 eco-gradient-bg text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of riders already earning with Eco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="text-lg px-8">
              Apply to Ride
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
              <Phone className="h-5 w-5 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rider;