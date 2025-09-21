import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import ImpactStats from "@/components/ImpactStats";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedCourses />
        <ImpactStats />
      </main>
    </div>
  );
};

export default Index;
