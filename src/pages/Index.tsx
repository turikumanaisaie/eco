import { Navbar } from "@/components/eco/Navbar";
import { HeroSection } from "@/components/eco/HeroSection";
import { ServiceCards } from "@/components/eco/ServiceCards";
import { VehicleTypes } from "@/components/eco/VehicleTypes";
import { PaymentMethods } from "@/components/eco/PaymentMethods";
import { Footer } from "@/components/eco/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServiceCards />
      <VehicleTypes />
      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default Index;
