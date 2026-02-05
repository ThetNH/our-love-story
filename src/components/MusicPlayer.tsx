import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Music, SkipForward, SkipBack } from "lucide-react";

// Add 'cover' property to each song - USE SIMPLE PLACEHOLDERS FIRST
const songs = [
  {
    id: 1,
    title: "Transform",
    artist: "Daniel Caesar",
    src: "/audio/transform_final.mp3",
    cover: "/images/transform.jpg", // Make sure this file exists!
  },
  {
    id: 2,
    title: "Prove it",
    artist: "21 Savage",
    src: "/audio/Prove_it_final.mp3",
    cover: "/images/prove_it.jpg",
  },
  {
    id: 3,
    title: "All to Myself",
    artist: "Future",
    src: "/audio/alltomyself.mp3",
    cover: "/images/all-to-myself.jpg",
  },
  {
    id: 4,
    title: "Always",
    artist: "Daniel Caesar",
    src: "/audio/always.mp3",
    cover: "/images/always.jpg",
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

    const handleRepeat = () => {
      if (audio) {
        audio.currentTime = 0;
        if (isPlaying) {
          audio.play();
        }
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleRepeat);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleRepeat);
    };
  }, [currentSongIndex, isPlaying]);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * audio.duration;
    audio.currentTime = newTime;
  };

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
        <p className="text-lg sm:text-xl font-medium text-gray-800 bg-gradient-to-r from-pink-50/80 to-rose-50/80 px-6 py-3 rounded-xl border border-pink-200 shadow-sm">
            Before we begin, pick a song... let it play softly as I take you through our story 💕
          </p>
          <p className="mt-4 text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 animate-pulse">
    🎧 I STRONGLY RECOMMEND TRANSFORM!! 🎧
  </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="romantic-card animate-fade-up">
            <audio ref={audioRef} src={currentSong.src} preload="metadata" />

            {/* Album art - shows current song cover or music icon */}
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-rose-deep flex items-center justify-center shadow-lg overflow-hidden">
              {currentSong.cover ? (
                <img 
                  src={currentSong.cover} 
                  alt={`${currentSong.title} album cover`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // If image fails to load, show music icon instead
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <Music className="w-16 h-16 text-primary-foreground animate-pulse-soft" />
              )}
            </div>

            {/* Song info */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-serif font-semibold text-foreground">
                {currentSong.title}
              </h3>
              <p className="text-muted-foreground">{currentSong.artist}</p>
            </div>

            {/* Progress bar */}
            <div 
              className="w-full h-2 bg-secondary rounded-full mb-6 overflow-hidden cursor-pointer hover:h-3 transition-all"
              onClick={handleSeek}
            >
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

            {/* Song list WITH album covers - SAFE VERSION */}
            <div className="mt-8 space-y-2">
              {songs.map((song, index) => (
                <button
                  key={song.id}
                  onClick={() => {
                    setCurrentSongIndex(index);
                    setProgress(0);
                    if (isPlaying && audioRef.current) {
                      setTimeout(() => audioRef.current?.play(), 100);
                    }
                  }}
                  className={`w-full p-3 rounded-xl transition-all flex items-center justify-between ${
                    index === currentSongIndex
                      ? "bg-primary/20 border border-primary/30"
                      : "hover:bg-secondary"
                  }`}
                >
                  {/* Song info on left */}
                  <div className="flex-1 text-left">
                    <p className="font-medium text-foreground">{song.title}</p>
                    <p className="text-sm text-muted-foreground">{song.artist}</p>
                  </div>
                  
                  {/* Album cover on the right - with fallback */}
                  <div className="ml-4 flex items-center gap-2">
                    {index === currentSongIndex && (
                      <div className="text-pink-500 animate-pulse text-lg">▶</div>
                    )}
                    <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary/20 to-rose-deep/20">
                      {song.cover ? (
                        <img 
                          src={song.cover} 
                          alt=""
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Hide broken images
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Music className="w-5 h-5 text-primary" />
                        </div>
                      )}
                    </div>
                  </div>
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
