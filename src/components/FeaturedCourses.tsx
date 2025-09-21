import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CourseCard from "./CourseCard";

const FeaturedCourses = () => {
  const courses = [
    {
      title: "Climate Change Fundamentals",
      description: "Understand the science behind climate change, its impacts, and evidence-based solutions for a sustainable future.",
      level: "Beginner" as const,
      duration: "6 weeks",
      students: 12500,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=400&h=300&fit=crop&crop=center",
      tags: ["Climate Science", "Global Warming", "Sustainability"]
    },
    {
      title: "Renewable Energy Systems",
      description: "Explore solar, wind, and other renewable technologies. Learn how to design and implement clean energy solutions.",
      level: "Intermediate" as const,
      duration: "8 weeks",
      students: 8300,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop&crop=center",
      tags: ["Solar Power", "Wind Energy", "Engineering"]
    },
    {
      title: "Biodiversity Conservation",
      description: "Discover strategies to protect ecosystems and endangered species. Make a real impact on wildlife preservation.",
      level: "Intermediate" as const,
      duration: "10 weeks",
      students: 6700,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
      tags: ["Wildlife", "Ecosystems", "Conservation"]
    },
    {
      title: "Sustainable Agriculture",
      description: "Learn modern farming techniques that protect the environment while feeding the world's growing population.",
      level: "Advanced" as const,
      duration: "12 weeks",
      students: 4200,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop&crop=center",
      tags: ["Farming", "Food Security", "Permaculture"]
    },
    {
      title: "Ocean Health & Marine Life",
      description: "Dive deep into marine ecosystems and learn how to combat ocean pollution and protect marine biodiversity.",
      level: "Beginner" as const,
      duration: "7 weeks",
      students: 9800,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center",
      tags: ["Marine Biology", "Ocean Conservation", "Pollution"]
    },
    {
      title: "Green Technology Innovation",
      description: "Explore cutting-edge environmental technologies and learn to develop solutions for tomorrow's challenges.",
      level: "Advanced" as const,
      duration: "14 weeks",
      students: 3500,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center",
      tags: ["Innovation", "Green Tech", "Entrepreneurship"]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 eco-badge mb-4">
            <span>Featured Learning Paths</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Master Environmental 
            <span className="gradient-forest bg-clip-text text-transparent"> Sciences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From climate science to renewable energy, our expert-designed courses 
            will transform you into an environmental leader ready to tackle global challenges.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button variant="leaf" size="lg" className="group">
            View All Courses
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;