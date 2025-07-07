import { Navbar } from "@/components/eco/Navbar";
import { Footer } from "@/components/eco/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  BarChart3, 
  Clock,
  Shield,
  Settings,
  Phone,
  ArrowRight,
  CheckCircle,
  MapPin
} from "lucide-react";

const partnerBenefits = [
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    description: "Reach more customers and boost your sales",
    details: ["Access to thousands of customers", "No upfront costs", "Marketing support", "Analytics insights"]
  },
  {
    icon: Users,
    title: "Expand Your Reach",
    description: "Connect with customers beyond your location",
    details: ["Delivery to all Kigali areas", "Online presence", "Customer reviews", "Repeat order system"]
  },
  {
    icon: Settings,
    title: "Easy Management",
    description: "Simple tools to manage your business",
    details: ["User-friendly dashboard", "Real-time orders", "Menu management", "Sales tracking"]
  },
  {
    icon: Shield,
    title: "Reliable Support",
    description: "We're here to help you succeed",
    details: ["24/7 technical support", "Business guidance", "Training provided", "Dedicated account manager"]
  }
];

const businessTypes = [
  {
    type: "Restaurants",
    emoji: "🍽️",
    description: "From local cuisine to international favorites",
    features: ["Menu digitization", "Order management", "Customer reviews", "Promotional tools"],
    commission: "15% per order",
    popular: true
  },
  {
    type: "Supermarkets",
    emoji: "🛒", 
    description: "Groceries and daily essentials",
    features: ["Inventory management", "Bulk order handling", "Category organization", "Stock alerts"],
    commission: "12% per order",
    popular: true
  },
  {
    type: "Coffee Shops",
    emoji: "☕",
    description: "Coffee, pastries, and quick bites",
    features: ["Special instructions", "Hot/cold preferences", "Quick preparation", "Loyalty programs"],
    commission: "15% per order",
    popular: false
  },
  {
    type: "Pharmacies",
    emoji: "💊",
    description: "Medicines and health products",
    features: ["Prescription handling", "Health compliance", "Secure delivery", "Emergency orders"],
    commission: "10% per order",
    popular: false
  }
];

const partnerSteps = [
  { step: "1", title: "Apply", description: "Submit your business application", icon: Users },
  { step: "2", title: "Setup", description: "Create your menu and business profile", icon: Settings },
  { step: "3", title: "Launch", description: "Go live and start receiving orders", icon: TrendingUp },
  { step: "4", title: "Grow", description: "Scale your business with our tools", icon: BarChart3 }
];

const Partner = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 eco-gradient-bg text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Grow Your Business
              <span className="block">with Eco</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Join Rwanda's largest delivery network and reach thousands of new customers. 
              No setup fees, just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="accent" size="lg" className="text-lg px-8">
                Become a Partner
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                <Phone className="h-5 w-5 mr-2" />
                Talk to Sales
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-80">Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm opacity-80">Monthly Orders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24h</div>
                <div className="text-sm opacity-80">Setup Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              We Work with All Businesses
            </h2>
            <p className="text-xl text-muted-foreground">
              From restaurants to pharmacies, we help every business grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessTypes.map((business, index) => (
              <Card key={index} className="hover-lift eco-card-shadow border-0 bg-card/80 backdrop-blur-sm relative">
                {business.popular && (
                  <Badge className="absolute -top-2 right-4 bg-accent text-accent-foreground">
                    Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="text-5xl mb-4">{business.emoji}</div>
                  <CardTitle className="text-xl text-foreground">{business.type}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {business.description}
                  </CardDescription>
                  <div className="text-lg font-semibold text-primary">{business.commission}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {business.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                          {feature}
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
              Why Partner with Eco?
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to succeed in the digital marketplace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
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
                        <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
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
              How to Become a Partner
            </h2>
            <p className="text-xl text-muted-foreground">
              Start selling online in just 4 easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {partnerSteps.map((step, index) => (
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

      {/* Success Stories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from our partner businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                business: "Kigali Bakery",
                type: "Bakery",
                growth: "+300% orders",
                quote: "Eco helped us reach customers we never could before. Our online sales tripled!"
              },
              {
                business: "Fresh Market",
                type: "Supermarket", 
                growth: "+250% revenue",
                quote: "The delivery service opened up a whole new customer base for our groceries."
              },
              {
                business: "Café Ubuntu",
                type: "Coffee Shop",
                growth: "+400% reach",
                quote: "Now we serve customers across all of Kigali, not just our neighborhood."
              }
            ].map((story, index) => (
              <Card key={index} className="border-0 eco-card-shadow bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2">{story.growth}</Badge>
                    <p className="text-muted-foreground italic">"{story.quote}"</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-hover rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-foreground font-semibold">
                        {story.business.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{story.business}</div>
                      <div className="text-sm text-muted-foreground">{story.type}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Partner Requirements
              </h2>
              <p className="text-xl text-muted-foreground">
                Simple requirements to ensure quality for our customers
              </p>
            </div>

            <Card className="border-0 eco-card-shadow bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Basic Requirements</h3>
                    <ul className="space-y-3">
                      {[
                        "Valid business license",
                        "Fixed business location",
                        "Phone number & email",
                        "Bank account for payments"
                      ].map((req, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">For Food Businesses</h3>
                    <ul className="space-y-3">
                      {[
                        "Rwanda FDA certificate",
                        "Food safety compliance",
                        "Clean kitchen standards",
                        "Quality product photos"
                      ].map((req, index) => (
                        <li key={index} className="flex items-center text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 eco-gradient-bg text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ successful businesses already partnered with Eco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="text-lg px-8">
              Apply Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
              <Phone className="h-5 w-5 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partner;