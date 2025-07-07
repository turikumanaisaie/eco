import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, CreditCard, Banknote, Shield } from "lucide-react";

const paymentMethods = [
  {
    icon: Phone,
    name: "Mobile Money",
    providers: ["MTN MoMo", "Airtel Money"],
    description: "Most popular payment method in Rwanda",
    features: ["Instant payments", "No card needed", "Widely accepted", "Secure transactions"],
    color: "text-primary",
    popular: true
  },
  {
    icon: CreditCard,
    name: "Bank Cards",
    providers: ["Visa", "Mastercard"],
    description: "International and local bank cards",
    features: ["Global acceptance", "Secure processing", "Fraud protection", "Easy refunds"],
    color: "text-blue-600",
    popular: false
  },
  {
    icon: Banknote,
    name: "Cash on Delivery",
    providers: ["Cash"],
    description: "Pay when your order arrives",
    features: ["No upfront payment", "Inspect before paying", "Change available", "Traditional method"],
    color: "text-green-600",
    popular: false
  }
];

export const PaymentMethods = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Payment Made Simple
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Multiple secure payment options tailored for Rwandan customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {paymentMethods.map((method, index) => (
            <Card key={index} className="hover-lift eco-card-shadow border-0 bg-card/80 backdrop-blur-sm relative">
              {method.popular && (
                <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full bg-background border-2 border-current ${method.color} flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl text-foreground">{method.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Providers:</h4>
                  <div className="flex flex-wrap gap-2">
                    {method.providers.map((provider, providerIndex) => (
                      <Badge key={providerIndex} variant="outline" className="text-xs">
                        {provider}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {method.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Notice */}
        <div className="bg-background border border-primary/20 rounded-lg p-6 max-w-2xl mx-auto">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Secure & Protected</h3>
          </div>
          <p className="text-muted-foreground">
            All payments are processed through secure, encrypted channels. Your payment information is protected 
            and never stored on our servers. We comply with international security standards and Rwandan 
            financial regulations.
          </p>
        </div>
      </div>
    </section>
  );
};