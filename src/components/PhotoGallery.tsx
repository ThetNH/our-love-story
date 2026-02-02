import { useState } from "react";
import { X } from "lucide-react";

// Replace these with your actual photo URLs
const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
    alt: "Our first date",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800",
    alt: "Beach sunset together",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800",
    alt: "Adventure time",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800",
    alt: "Cozy moments",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?w=800",
    alt: "Stargazing night",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1529519195486-16945ed23682?w=800",
    alt: "Dancing together",
  },
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section className="py-20 px-4" id="gallery">
      <div className="romantic-container">
        <div className="text-center mb-12 animate-fade-up">
          <p className="romantic-subtitle text-lg sm:text-xl">
            And here are the moments I never want to forget... 📸
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-primary-foreground font-medium text-sm sm:text-base">
                  {photo.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="lightbox-overlay animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            className="lightbox-image animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
