import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-delivery.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Eco Delivery Platform"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium mb-6">
            <MapPin className="h-4 w-4 mr-2" />
            Now serving Kigali & surrounding areas
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Fast, Reliable
            <span className="text-primary block">Eco-Friendly</span>
            Delivery in Rwanda
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Order from your favorite local restaurants, supermarkets, and merchants. 
            Get everything delivered quickly by our eco-conscious riders.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="eco" size="lg" className="text-lg px-8">
              Order Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Become a Rider
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-5 w-5 text-primary mr-1" />
                <span className="text-2xl font-bold text-foreground">15</span>
              </div>
              <p className="text-sm text-muted-foreground">Min Avg Delivery</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-5 w-5 text-primary mr-1" />
                <span className="text-2xl font-bold text-foreground">4.8</span>
              </div>
              <p className="text-sm text-muted-foreground">Customer Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-foreground">500+</span>
              </div>
              <p className="text-sm text-muted-foreground">Local Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};