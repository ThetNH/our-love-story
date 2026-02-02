const LoveLanguages = () => {
  const loveText = `I love you, Te amo, Je t'aime, 我爱你, मैं तुमसे प्यार करता हूँ, أحبك, Eu te amo, Я тебя люблю, 愛してる, 사랑해, Ich liebe dich, Ti amo, Seni seviyorum, ฉันรักคุณ, Anh yêu em / Em yêu anh, Aku cinta kamu, Saya cinta padamu, Mahal kita, میں تم سے محبت کرتا ہوں, Ik hou van jou, Σ'αγαπώ, Kocham cię, Miluji tě, Szeretlek, Jag älskar dig, Jeg elsker deg, Jeg elsker deg, Rakastan sinua, Te iubesc, Обичам те, Volim te, Milujem ťa, Ljubim te, Я тебе кохаю, دوستت دارم, אני אוהב אותך, ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ, আমি তোমায় ভালোবাসি, நான் உன்னை காதலிக்கிறேன், నేను నిన్ను ప్రేమిస్తున్నాను, ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു, මම ඔයාට ආදරෙයි, म तिमीलाई माया गर्छु, Nakupenda, Ngiyakuthanda, Ndiyakuthanda, Ek het jou lief, Ina son ka, A hụrụ m gị n'anya, Mo nifẹ rẹ, Te amo, Aloha wau ia 'oe, Aroha ahau ki a koe, Mi amas vin, Ég elska þig, Ech hunn dech gär, Maite zaitut, Rwy'n dy garu di, Te sakam, T'estimo, Seni sevaman, Volim te, Ljubim te, Te dua, Unë të dua, Ich han di gern, Amo-te, Inhobok, Nga yahk deui nei, Ke a go rata, Ndzi kombela wena, Ndagukunda, Ndimakukonda, T'aimo, Ina son ki, Ani ohev otach, Dooset daram, Is breá liom tú, Tá grá agam duit, Ti voglio bene, Jeg er glad i deg, Jeg elsker dig, Minä rakastan sinua, Ek is lief vir jou, Ngikhona ngawe, Ndiyakuthanda kakhulu, Kei te aroha au ki a koe, Ou te alofa ia te oe, Au domoni iko, Naku penda sana, Saya sayang kamu, Aku sayang kamu, Mahal na mahal kita, Gihigugma tika, Palangga taka, Ayayaten ka, Chit tl.`;

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="romantic-container">
        <div className="text-center animate-fade-up">
          <p className="love-letter text-lg sm:text-xl md:text-2xl leading-relaxed text-foreground/80">
            {loveText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoveLanguages;
