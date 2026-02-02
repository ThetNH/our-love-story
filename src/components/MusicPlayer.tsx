import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Music, SkipForward, SkipBack } from "lucide-react";

// Replace with your favorite love songs (use direct audio URLs or embed codes)
const songs = [
  {
    id: 1,
    title: "Perfect",
    artist: "Ed Sheeran",
    // Using a placeholder - replace with actual audio URL
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 2,
    title: "All of Me",
    artist: "John Legend",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 3,
    title: "A Thousand Years",
    artist: "Christina Perri",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleNext);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleNext);
    };
  }, [currentSongIndex]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setProgress(0);
    if (isPlaying && audioRef.current) {
      setTimeout(() => audioRef.current?.play(), 100);
    }
  };

  const handlePrev = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setProgress(0);
    if (isPlaying && audioRef.current) {
      setTimeout(() => audioRef.current?.play(), 100);
    }
  };

  return (
    <section className="py-20 px-4 bg-secondary/30" id="music">
      <div className="romantic-container">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="romantic-title text-3xl sm:text-4xl md:text-5xl mb-4">
            Our Love Songs 🎵
          </h2>
          <p className="romantic-subtitle">
            The soundtrack of our journey together
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="romantic-card animate-fade-up">
            <audio ref={audioRef} src={currentSong.src} preload="metadata" />

            {/* Album art / Music icon */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-rose-deep flex items-center justify-center shadow-lg">
              <Music className="w-16 h-16 text-primary-foreground animate-pulse-soft" />
            </div>

            {/* Song info */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-serif font-semibold text-foreground">
                {currentSong.title}
              </h3>
              <p className="text-muted-foreground">{currentSong.artist}</p>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 bg-secondary rounded-full mb-6 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-rose-deep rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <SkipBack className="w-5 h-5 text-foreground" />
              </button>

              <button
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-rose-deep flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 text-primary-foreground" />
                ) : (
                  <Play className="w-7 h-7 text-primary-foreground ml-1" />
                )}
              </button>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <SkipForward className="w-5 h-5 text-foreground" />
              </button>

              <button
                onClick={toggleMute}
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-foreground" />
                ) : (
                  <Volume2 className="w-5 h-5 text-foreground" />
                )}
              </button>
            </div>

            {/* Song list */}
            <div className="mt-8 space-y-2">
              {songs.map((song, index) => (
                <button
                  key={song.id}
                  onClick={() => {
                    setCurrentSongIndex(index);
                    setProgress(0);
                    if (isPlaying) {
                      setTimeout(() => audioRef.current?.play(), 100);
                    }
                  }}
                  className={`w-full p-3 rounded-xl text-left transition-all ${
                    index === currentSongIndex
                      ? "bg-primary/20 border border-primary/30"
                      : "hover:bg-secondary"
                  }`}
                >
                  <p className="font-medium text-foreground">{song.title}</p>
                  <p className="text-sm text-muted-foreground">{song.artist}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
