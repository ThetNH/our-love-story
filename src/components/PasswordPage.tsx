import { useState } from "react";
import { Heart, Lock } from "lucide-react";
import FloatingHearts from "./FloatingHearts";

interface PasswordPageProps {
  onSuccess: () => void;
}

// Change this to your secret password
const SECRET_PASSWORD = "watermelon";

const PasswordPage = ({ onSuccess }: PasswordPageProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.toLowerCase() === SECRET_PASSWORD) {
      onSuccess();
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-romantic flex items-center justify-center relative overflow-hidden">
      <FloatingHearts />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-rose-soft/30 blur-2xl" />
      
      <div 
        className={`romantic-card max-w-md w-full mx-4 text-center relative z-10 transition-transform ${
          isShaking ? "animate-[shake_0.5s_ease-in-out]" : ""
        }`}
        style={{
          animation: isShaking ? "shake 0.5s ease-in-out" : undefined,
        }}
      >
        <style>
          {`
            @keyframes shake {
              0%, 100% { transform: translateX(0); }
              25% { transform: translateX(-10px); }
              75% { transform: translateX(10px); }
            }
          `}
        </style>
        
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-secondary rounded-full flex items-center justify-center mb-4 animate-pulse-soft">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          
          <h1 className="romantic-title text-3xl sm:text-4xl mb-3">
            Our Love Story
          </h1>
          
          <p className="romantic-subtitle text-lg">
            What's the magic word that reminds you of our sweet summer days? 💖
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              className="romantic-input"
              autoFocus
            />
            <Heart className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/50" />
          </div>

          {error && (
            <p className="text-primary animate-fade-up text-sm">
              Oops! Wrong babe it's something green. 
            </p>
          )}

          <button type="submit" className="romantic-button w-full">
            <Heart className="w-5 h-5 mr-2 animate-heart-beat" />
            Unlock Our Story
          </button>
        </form>

        <p className="mt-6 text-sm text-muted-foreground">
          Hint: Your favorite fruit 💕
        </p>
      </div>
    </div>
  );
};

export default PasswordPage;
