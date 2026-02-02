import HeroSection from "./HeroSection";
import PhotoGallery from "./PhotoGallery";
import MusicPlayer from "./MusicPlayer";
import LoveNotes from "./LoveNotes";
import LoveLetter from "./LoveLetter";
import Footer from "./Footer";

const AnniversaryWebsite = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PhotoGallery />
      <MusicPlayer />
      <LoveNotes />
      <LoveLetter />
      <Footer />
    </div>
  );
};

export default AnniversaryWebsite;
