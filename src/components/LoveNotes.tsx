import { Heart, Sparkles, Star } from "lucide-react";

// Love notes with caring reminders
const notes = [
  {
    id: 1,
    title: "Drink Water 💧",
    message: "Babe, please drink more water today. I'm sure you forget when you're busy, but your body needs it. Keep a bottle nearby and sip throughout the day. Hydrated you is happy you ◝(ᵔᗜᵔ)◜",
    icon: Heart,
  },
  {
    id: 2,
    title: "Eat Well 🍽️",
    message: "Don't skip meals, beautiful. Even when you're not hungry, eat something small. Your energy matters more than anything. Remember, food is fuel for that tiny brain of yours (⸝⸝> ᴗ•⸝⸝)",
    icon: Sparkles,
  },
  {
    id: 3,
    title: "Stay Warm 🧥",
    message: "Wrap up warm, my baby. Don't be stubborn about jackets and sweaters. I want you cozy and comfortable, not shivering. Your warmth is my warmth.",
    icon: Star,
  },
  {
    id: 4,
    title: "Treat Yourself 🎁",
    message: "Stop saving too much. Please spend on yourself. That thing you've been wanting? Get it. That treat you've been eyeing? Have it. You save so much for others - today, save some joy for yourself.",
    icon: Heart,
  },
  {
    id: 5,
    title: "Sleep Early 🌙",
    message: "Close those eyes before midnight, my love. Your rest is sacred. Those late night scrolls can wait. Tomorrow will be brighter with well-rested eyes.",
    icon: Sparkles,
  },
  {
    id: 6,
    title: "You're Enough 💕",
    message: "Remember that you're already everything. No need to prove, no need to strive beyond what feels good. Just being you is more than enough for me, for everyone who loves you.",
    icon: Star,
  },
];

const LoveNotes = () => {
  return (
    <section className="py-20 px-4" id="notes">
      <div className="romantic-container">
        <div className="text-center mb-12 animate-fade-up">
        <p className="text-lg sm:text-xl font-medium text-gray-800 bg-gradient-to-r from-pink-50/80 to-rose-50/80 px-6 py-3 rounded-xl border border-pink-200 shadow-sm">
            Before you go, here are a few things I always want you to remember... 💌
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note, index) => (
            <div
              key={note.id}
              className="romantic-card group hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <note.icon className="w-5 h-5 text-primary group-hover:animate-heart-beat" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-foreground">{note.title}</h3>
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
