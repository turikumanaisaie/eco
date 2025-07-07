import { Navbar } from "@/components/eco/Navbar";
import { Footer } from "@/components/eco/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MapPin, 
  Clock, 
  Star, 
  ShoppingCart, 
  CreditCard,
  Bell,
  Heart,
  Filter
} from "lucide-react";

const customerFeatures = [
  {
    icon: Search,
    title: "Easy Discovery",
    description: "Find restaurants, supermarkets, and merchants near you",
    benefits: ["Smart search filters", "Category browsing", "Popular recommendations", "Reviews & ratings"]
  },
  {
    icon: MapPin,
    title: "Real-time Tracking",
    description: "Track your order from preparation to delivery",
    benefits: ["Live GPS tracking", "Status updates", "ETA estimates", "Rider contact"]
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description: "Pay your way with multiple secure options",
    benefits: ["MTN MoMo & Airtel Money", "Bank cards", "Cash on delivery", "Instant refunds"]
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Stay informed about your orders and special offers",
    benefits: ["Order status alerts", "Delivery updates", "Promotional offers", "New restaurant alerts"]
  }
];

const merchantCategories = [
  { name: "Restaurants", count: "200+", emoji: "🍽️", popular: true },
  { name: "Coffee Shops", count: "50+", emoji: "☕", popular: false },
  { name: "Supermarkets", count: "80+", emoji: "🛒", popular: true },
  { name: "Pharmacies", count: "30+", emoji: "💊", popular: false },
  { name: "Bakeries", count: "40+", emoji: "🥖", popular: false },
  { name: "General Stores", count: "100+", emoji: "🏪", popular: true }
];

const Customer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 eco-gradient-bg text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Order Anything,
            <span className="block">Anytime</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Browse hundreds of local businesses and get your favorites delivered fast
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="text-lg px-8">
              <Search className="h-5 w-5 mr-2" />
              Find Restaurants
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
              Download App
            </Button>
          </div>
        </div>
      </section>

      {/* Merchant Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Can You Order?
            </h2>
            <p className="text-xl text-muted-foreground">
              From restaurants to groceries, we've got everything you need
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {merchantCategories.map((category, index) => (
              <Card key={index} className="hover-lift cursor-pointer border-0 eco-card-shadow bg-card/80 backdrop-blur-sm relative">
                {category.popular && (
                  <Badge className="absolute -top-2 right-2 bg-primary text-primary-foreground text-xs">
                    Popular
                  </Badge>
                )}
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{category.emoji}</div>
                  <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Eco?
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for the perfect ordering experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customerFeatures.map((feature, index) => (
              <Card key={index} className="border-0 eco-card-shadow bg-card/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-hover rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Ordering is simple and fast
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Browse", description: "Search restaurants and stores near you", icon: Search },
              { step: "2", title: "Order", description: "Add items to cart and checkout securely", icon: ShoppingCart },
              { step: "3", title: "Track", description: "Follow your order in real-time", icon: MapPin },
              { step: "4", title: "Enjoy", description: "Receive your order at your doorstep", icon: Star }
            ].map((step, index) => (
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

      {/* CTA Section */}
      <section className="py-20 eco-gradient-bg text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers in Kigali
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="text-lg px-8">
              Start Ordering Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
              Download Mobile App
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Customer;