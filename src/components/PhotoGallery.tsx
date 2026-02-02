import { useState } from "react";
import { X } from "lucide-react";

// Replace these with your actual photo URLs
const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800", alt: "Memory 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800", alt: "Memory 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800", alt: "Memory 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800", alt: "Memory 4" },
  { id: 5, src: "https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?w=800", alt: "Memory 5" },
  { id: 6, src: "https://images.unsplash.com/photo-1529519195486-16945ed23682?w=800", alt: "Memory 6" },
  { id: 7, src: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800", alt: "Memory 7" },
  { id: 8, src: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800", alt: "Memory 8" },
  { id: 9, src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800", alt: "Memory 9" },
  { id: 10, src: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800", alt: "Memory 10" },
  { id: 11, src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800", alt: "Memory 11" },
  { id: 12, src: "https://images.unsplash.com/photo-1529519195486-16945ed23682?w=800", alt: "Memory 12" },
  { id: 13, src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800", alt: "Memory 13" },
  { id: 14, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800", alt: "Memory 14" },
  { id: 15, src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800", alt: "Memory 15" },
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section className="py-20 px-4" id="gallery">
      <div className="romantic-container">
        <div className="text-center mb-12 animate-fade-up">
          <p className="romantic-subtitle text-lg sm:text-xl">
            Every photo tells a story of our love 📸
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
