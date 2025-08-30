import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Star } from "lucide-react";
import { motion } from "framer-motion";
import aiBackground from "@/assets/ai-background.jpg";

const MembershipHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${aiBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-6 h-6 text-primary"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Sparkles className="w-full h-full opacity-60" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 w-8 h-8 text-accent"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Zap className="w-full h-full opacity-60" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-5 h-5 text-primary-light"
          animate={{ y: [-5, 15, -5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <Star className="w-full h-full opacity-60" />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">AI Tools Hub</span>
            <br />
            <span className="text-foreground">Membership</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Unlock unlimited access to premium AI tools, exclusive resources, and cutting-edge features that power your creativity.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <Sparkles className="mr-2" />
            Get Premium Access
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4">
            View All Plans
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          ✨ Start your 7-day free trial • No credit card required
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipHero;