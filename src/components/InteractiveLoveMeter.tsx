import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";

const InteractiveLoveMeter = () => {
  const [clicks, setClicks] = useState(0);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const messages = [
    "Click the heart!",
    "I love you!",
    "More than yesterday!",
    "Less than tomorrow!",
    "You're my everything!",
    "My heart beats for you!",
    "Forever and always!",
    "To infinity!",
    "And beyond!",
    "You're my soulmate!",
    "My best friend!",
    "My safe place!",
    "My happy place!",
    "My whole world!",
    "My universe!",
    "I will never stop loving you.",
  ];

  const handleClick = (e: React.MouseEvent) => {
    setClicks((prev) => prev + 1);
    
    // Create floating heart at click position
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newHeart = { id: Date.now(), x, y };
    setHearts((prev) => [...prev, newHeart]);
    
    // Remove heart after animation
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1000);
  };

  const getMessage = () => {
    if (clicks === 0) return messages[0];
    const index = Math.min(clicks, messages.length - 1);
    return messages[index];
  };

  return (
    <section className="py-16 px-4">
      <div className="romantic-container">
        <div className="text-center">
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 italic font-serif">
            Want to know how much I love you? Keep clicking... 💕
          </p>
          
          <div 
            className="relative inline-block cursor-pointer select-none"
            onClick={handleClick}
          >
            {/* Floating hearts */}
            {hearts.map((heart) => (
              <span
                key={heart.id}
                className="absolute text-2xl pointer-events-none animate-float-up"
                style={{
                  left: heart.x,
                  top: heart.y,
                }}
              >
                💕
              </span>
            ))}
            
            {/* Main clickable heart */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 animate-pulse-soft" />
              <Heart 
                className="w-32 h-32 sm:w-40 sm:h-40 text-primary fill-primary transition-transform duration-200 hover:scale-110 active:scale-95 relative z-10"
              />
              <Sparkles className="absolute top-0 right-0 w-8 h-8 text-gold-soft animate-pulse" />
            </div>
          </div>
          
          {/* Love counter */}
          <div className="mt-8 space-y-4">
            <p className="text-3xl sm:text-4xl font-serif text-gradient-romantic font-semibold">
              {clicks > 0 && `${clicks.toLocaleString()} `}
              {getMessage()}
            </p>
            
            {clicks >= 10 && (
              <p className="text-muted-foreground animate-fade-up">
                And this number will never stop growing... just like my love for you 💖
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveLoveMeter;
