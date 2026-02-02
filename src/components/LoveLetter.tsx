import { Heart } from "lucide-react";

const LoveLetter = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30" id="letter">
      <div className="romantic-container">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="romantic-title text-3xl sm:text-4xl md:text-5xl mb-4">
            A Letter From My Heart 💝
          </h2>
          <p className="romantic-subtitle">
            Words that flow from my soul to yours
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
              <p className="love-letter mb-6">My Dearest Love,</p>
              
              {/* Edit this letter with your own heartfelt message */}
              <div className="love-letter space-y-6">
                <p>
                  Two years ago, my life changed forever when you walked into it. 
                  What started as a beautiful beginning has blossomed into the most 
                  incredible journey I could have ever imagined. Every day with you 
                  feels like a gift I never knew I needed.
                </p>
                
                <p>
                  You have this magical way of making ordinary moments feel extraordinary. 
                  Whether we're laughing at our silly jokes, cooking together in the kitchen, 
                  or simply holding hands while watching the sunset, every moment with you 
                  is precious to me.
                </p>
                
                <p>
                  Thank you for being my rock when times got tough, my cheerleader when 
                  I needed encouragement, and my best friend through it all. You've taught 
                  me what unconditional love truly means, and I'm forever grateful for 
                  your patience, kindness, and endless support.
                </p>
                
                <p>
                  As we celebrate our second anniversary, I want you to know that my love 
                  for you grows stronger with each passing day. You are my today, my 
                  tomorrow, and my forever. I can't wait to see what adventures await us 
                  in the years to come.
                </p>
                
                <p>
                  Here's to a lifetime of love, laughter, and beautiful memories together. 
                  I love you more than words could ever express.
                </p>
              </div>

              <div className="mt-8 text-right">
                <p className="love-letter italic">Forever and always yours,</p>
                <p className="romantic-title text-2xl mt-2 text-gradient-romantic">
                  [Your Name] 💕
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
