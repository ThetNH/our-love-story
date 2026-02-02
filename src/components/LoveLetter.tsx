import { Heart } from "lucide-react";

const LoveLetter = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30" id="letter">
      <div className="romantic-container">
        <div className="text-center mb-12 animate-fade-up">
          <p className="romantic-subtitle text-lg sm:text-xl">
            Now, let me tell you something I've been holding in my heart... 💝
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="romantic-card animate-fade-up relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 text-primary/20">
              <Heart className="w-20 h-20" />
            </div>
            <div className="absolute bottom-4 left-4 text-primary/10">
              <Heart className="w-16 h-16 rotate-12" />
            </div>

            <div className="relative z-10">
              <p className="love-letter mb-6">My dearest love,</p>
              
              <div className="love-letter space-y-6">
                <p>
                  Today marks another year of us, and my heart feels fuller than ever. From our first "hello" to this moment right now, every second with you has been a gift I never take for granted.
                </p>
                
                <p>
                  I cannot believe it's already been two years with you. Thank you for staying with me, for loving me, and for choosing me every single day. You've made my life happier, warmer, and better just by being in it.
                </p>
                
                <p>
                  Through every fight, every laugh, every moment, I'm grateful it's been you. I'm proud of us and how far we've come together.
                </p>
                
                <p>
                  I love you more than words can explain, and I hope we get to celebrate many more years side by side. You mean everything to me.
                </p>
              </div>

              <div className="mt-8 text-right">
                <p className="love-letter italic">Forever yours,</p>
                <p className="romantic-title text-2xl mt-2 text-gradient-romantic">
                  A Thet 💕
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
