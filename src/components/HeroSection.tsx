import { Heart, ChevronDown } from "lucide-react";
import FloatingHearts from "./FloatingHearts";

const HeroSection = () => {
  const scrollToMusic = () => {
    document.getElementById("music")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-hero">
            <FloatingHearts />
      
      {/* SVG Gradient Heart Background - CENTERED & VISIBLE with animation */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
        <svg 
          className="w-[90vw] h-[90vw] sm:w-[600px] sm:h-[600px] opacity-25 pointer-events-none animate-heart-breathing"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          style={{ marginTop: '-10%' }}
        >
          <defs>
            <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B8B">
                <animate attributeName="stop-color" values="#FF6B8B;#FF8E9E;#FFB6C1;#FF6B8B" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#FF8E9E">
                <animate attributeName="stop-color" values="#FF8E9E;#FFB6C1;#FF6B8B;#FF8E9E" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#FFB6C1">
                <animate attributeName="stop-color" values="#FFB6C1;#FF6B8B;#FF8E9E;#FFB6C1" dur="4s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          
          {/* Main Heart - Larger and centered with glow */}
          <path
            d="M50,25 
               C65,15 75,20 80,25 
               C90,35 90,45 85,55 
               C80,65 70,75 50,85 
               C30,75 20,65 15,55 
               C10,45 10,35 20,25 
               C25,20 35,15 50,25 Z"
            fill="url(#heartGradient)"
            className="drop-shadow-lg"
          />
        </svg>
      </div>
      
      {/* Decorative blobs - MOVE THESE ABOVE SVG to be UNDER hearts */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-float z-0" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-rose-soft/15 blur-2xl animate-float z-0" style={{ animationDelay: "4s" }} />

      <div className="romantic-container text-center relative z-10 py-20">
        <div className="animate-fade-up">
          {/* Anniversary badge - animated */}
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-anniversary-glow">
            <Heart className="w-4 h-4 text-primary animate-heart-beat" />
            <span className="text-sm font-medium text-primary animate-shimmer-text bg-gradient-to-r from-primary via-rose-deep to-primary bg-[length:200%_100%] bg-clip-text">
              2nd Anniversary
            </span>
            <Heart className="w-4 h-4 text-primary animate-heart-beat" style={{ animationDelay: "0.3s" }} />
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
          <button onClick={scrollToMusic} className="romantic-button group">
            <Heart className="w-5 h-5 mr-2 group-hover:animate-heart-beat" />
            Explore Our Journey
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToMusic}
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
