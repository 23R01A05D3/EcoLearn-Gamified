import { Clock, Users, Star, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  students: number;
  rating: number;
  image: string;
  tags: string[];
}

const CourseCard = ({ 
  title, 
  description, 
  level, 
  duration, 
  students, 
  rating, 
  image, 
  tags 
}: CourseCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-secondary/20 text-secondary-foreground border-secondary/30";
      case "Intermediate": return "bg-nature/20 text-nature-foreground border-nature/30";
      case "Advanced": return "bg-primary/20 text-primary-foreground border-primary/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="learning-card group">
      {/* Course Image */}
      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(level)}`}>
            {level}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-background/90 rounded-full p-1">
          <Leaf className="w-4 h-4 text-primary" />
        </div>
      </div>

      {/* Course Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Course Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{students.toLocaleString()}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-nature text-nature" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>

        {/* Action Button */}
        <Button variant="eco" className="w-full">
          Start Learning
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;