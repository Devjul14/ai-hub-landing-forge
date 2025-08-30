import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Palette, 
  FileText, 
  Video, 
  Mic, 
  Code, 
  ImageIcon, 
  BarChart3,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Writing Assistant",
      description: "Generate high-quality content, blogs, and copy with advanced language models."
    },
    {
      icon: Palette,
      title: "Design Tools",
      description: "Create stunning visuals, logos, and graphics powered by AI creativity."
    },
    {
      icon: ImageIcon,
      title: "Image Generation",
      description: "Transform text into beautiful images and artwork with cutting-edge AI."
    },
    {
      icon: Video,
      title: "Video Creation",
      description: "Produce professional videos with AI-powered editing and effects."
    },
    {
      icon: Mic,
      title: "Voice Synthesis",
      description: "Generate natural-sounding voiceovers and audio content."
    },
    {
      icon: Code,
      title: "Code Assistant",
      description: "Write, debug, and optimize code with AI programming support."
    },
    {
      icon: FileText,
      title: "Document Analysis",
      description: "Extract insights and automate processing of documents and data."
    },
    {
      icon: BarChart3,
      title: "Analytics Tools",
      description: "Gain deep insights with AI-powered data analysis and reporting."
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
            Powerful <span className="text-gradient">AI Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access a comprehensive suite of AI-powered tools designed to enhance your productivity and creativity.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="
                gradient-card border-border/50 p-6 h-full
                hover:border-primary/30 hover:scale-105
                transition-all duration-300 group
              ">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="
                    p-4 rounded-xl bg-primary/10 border border-primary/20
                    group-hover:bg-primary/20 group-hover:scale-110
                    transition-all duration-300
                  ">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="gradient-card border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Ready to supercharge your workflow?</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Join thousands of creators, professionals, and teams who are already using AI to transform their work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;