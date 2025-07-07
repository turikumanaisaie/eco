import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const vehicleTypes = [
  {
    name: "Bicycles",
    description: "Eco-friendly for short distances",
    icon: "🚴‍♂️",
    benefits: ["Zero emissions", "Quick in traffic", "Low cost", "Healthy exercise"],
    bestFor: "Orders under 2km, light items",
    color: "vehicle-bicycle"
  },
  {
    name: "Motorbikes", 
    description: "Fast and maneuverable",
    icon: "🏍️",
    benefits: ["Fast delivery", "Traffic agile", "Fuel efficient", "All-weather"],
    bestFor: "Medium distance, quick delivery",
    color: "vehicle-bike"
  },
  {
    name: "Cars",
    description: "Large orders and longer distances",
    icon: "🚗",
    benefits: ["Large capacity", "Weather protection", "Long distance", "Bulk orders"],
    bestFor: "Groceries, bulk items, 5km+",
    color: "vehicle-car"
  }
];

export const VehicleTypes = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Multiple Vehicle Options
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our diverse fleet ensures the right delivery method for every order
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {vehicleTypes.map((vehicle, index) => (
            <Card key={index} className="hover-lift eco-card-shadow border-0">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{vehicle.icon}</div>
                <CardTitle className="text-xl text-foreground">{vehicle.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {vehicle.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.benefits.map((benefit, benefitIndex) => (
                      <Badge 
                        key={benefitIndex} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Best for:</h4>
                  <p className="text-sm text-muted-foreground">{vehicle.bestFor}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};