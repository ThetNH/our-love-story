import HeroSection from "./HeroSection";
import PhotoGallery from "./PhotoGallery";
import MusicPlayer from "./MusicPlayer";
import LoveNotes from "./LoveNotes";
import LoveLetter from "./LoveLetter";
import LoveLanguages from "./LoveLanguages";
import Footer from "./Footer";

const AnniversaryWebsite = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MusicPlayer />
      <LoveLetter />
      <PhotoGallery />
      <LoveNotes />
      <LoveLanguages />
      <Footer />
    </div>
  );
};

export default AnniversaryWebsite;
