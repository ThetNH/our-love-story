import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-secondary/50">
      <div className="romantic-container text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-primary animate-heart-beat" />
          <Heart className="w-6 h-6 text-primary animate-heart-beat" style={{ animationDelay: "0.2s" }} />
          <Heart className="w-5 h-5 text-primary animate-heart-beat" style={{ animationDelay: "0.4s" }} />
        </div>
        
        <p className="romantic-title text-2xl sm:text-3xl text-gradient-romantic mb-2">
          Forever Yours ❤️
        </p>
        
        <p className="text-muted-foreground">
          — A Thet
        </p>
        
        <p className="mt-6 text-sm text-muted-foreground">
          Made with love for the love of my life
        </p>
      </div>
    </footer>
  );
};

export default Footer;
