import { Heart, Sparkles, Star } from "lucide-react";

// Edit these love notes with your own messages
const notes = [
  {
    id: 1,
    message: "You make every day feel like a beautiful adventure. I love exploring life with you. 💕",
    icon: Heart,
  },
  {
    id: 2,
    message: "Your smile is my favorite thing in the whole world. It lights up my darkest days. ✨",
    icon: Sparkles,
  },
  {
    id: 3,
    message: "I fall more in love with you every single day. You're my forever person. 💖",
    icon: Star,
  },
  {
    id: 4,
    message: "Thank you for being my best friend, my partner, and my everything. 🌹",
    icon: Heart,
  },
  {
    id: 5,
    message: "Every moment with you is a treasure I hold close to my heart. 💝",
    icon: Sparkles,
  },
  {
    id: 6,
    message: "You're not just my love, you're my home. Wherever you are, that's where I belong. 🏠💕",
    icon: Star,
  },
];

const LoveNotes = () => {
  return (
    <section className="py-20 px-4" id="notes">
      <div className="romantic-container">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="romantic-title text-3xl sm:text-4xl md:text-5xl mb-4">
            Little Love Notes 💌
          </h2>
          <p className="romantic-subtitle">
            Whispers from my heart to yours
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note, index) => (
            <div
              key={note.id}
              className="romantic-card group hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <note.icon className="w-6 h-6 text-primary group-hover:animate-heart-beat" />
                </div>
                <p className="love-letter text-base leading-relaxed">
                  {note.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveNotes;
