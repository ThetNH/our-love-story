import { Heart, ChevronDown } from "lucide-react";
import FloatingHearts from "./FloatingHearts";

const HeroSection = () => {
  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-hero">
      <FloatingHearts />
      
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-rose-soft/20 blur-2xl animate-float" style={{ animationDelay: "4s" }} />

      <div className="romantic-container text-center relative z-10 py-20">
        <div className="animate-fade-up">
          {/* Anniversary badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Heart className="w-4 h-4 text-primary animate-heart-beat" />
            <span className="text-sm font-medium text-primary">2nd Anniversary</span>
            <Heart className="w-4 h-4 text-primary animate-heart-beat" />
          </div>

          {/* Main title */}
          <h1 className="romantic-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Happy 2nd Anniversary
            <br />
            <span className="text-gradient-romantic">My Love</span> ❤️
          </h1>

          {/* Subtitle */}
          <p className="romantic-subtitle text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-12">
            Two years of memories, laughter, and love. 
            Every moment with you has been a beautiful chapter in our story.
          </p>

          {/* CTA Button */}
          <button onClick={scrollToGallery} className="romantic-button group">
            <Heart className="w-5 h-5 mr-2 group-hover:animate-heart-beat" />
            Explore Our Journey
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToGallery}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
