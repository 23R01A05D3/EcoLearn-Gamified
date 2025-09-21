import { ArrowRight, Play, Leaf, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-eco-learning.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students learning about environmental conservation in nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        <div className="absolute inset-0 gradient-hero opacity-60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 eco-badge mb-8 animate-fade-in">
            <Leaf className="w-4 h-4" />
            <span>Interactive Environmental Education</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight animate-fade-in">
            Learn to 
            <span className="gradient-hero bg-clip-text text-transparent"> Protect </span>
            Our Planet
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Join thousands of learners in our interactive environmental education platform. 
            Discover sustainable practices, tackle climate challenges, and become an eco-champion.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-fade-in">
            <Button variant="hero" size="xl" className="group">
              Start Learning Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="leaf" size="xl" className="group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="w-12 h-12 gradient-forest rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground">50K+</div>
              <div className="text-muted-foreground">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 gradient-nature rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground">120+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-nature rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-nature-foreground" />
              </div>
              <div className="text-2xl font-bold text-foreground">1M+</div>
              <div className="text-muted-foreground">Trees Saved</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 gradient-forest rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-nature rounded-full opacity-30 animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-accent rounded-full opacity-25 animate-pulse delay-500" />
    </section>
  );
};

export default Hero;