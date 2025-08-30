import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Access to basic AI tools",
        "Limited monthly usage",
        "Community support",
        "Basic templates"
      ],
      icon: Sparkles,
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      price: "29",
      period: "month",
      description: "Most popular for professionals",
      features: [
        "Unlimited AI tool access",
        "Priority processing",
        "Advanced features",
        "Premium templates",
        "Priority support",
        "Export capabilities"
      ],
      icon: Zap,
      variant: "premium" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "99",
      period: "month",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "Advanced analytics",
        "White-label options",
        "API access"
      ],
      icon: Crown,
      variant: "hero" as const,
      popular: false
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient">AI Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan to unlock the full potential of AI tools and transform your workflow.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card className={`
                gradient-card border-border/50 p-8 h-full
                ${plan.popular ? 'glow-accent border-accent/30' : 'hover:border-primary/30'}
                transition-all duration-300 hover:scale-105
              `}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`
                    p-3 rounded-lg 
                    ${plan.popular ? 'gradient-primary' : 'bg-secondary'}
                  `}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.variant} 
                  className="w-full text-lg py-3"
                >
                  {plan.name === "Free" ? "Get Started" : "Start Free Trial"}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="text-center mt-12 text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>All plans include a 7-day free trial • Cancel anytime • No hidden fees</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;