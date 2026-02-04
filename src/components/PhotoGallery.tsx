import { useState } from "react";
import { X } from "lucide-react";

// Replace these with your actual photo URLs
const photos = [
  { id: 1, src: "/images/IMG1.JPG", alt: "" },
{ id: 2, src: "/images/IMG2.JPG", alt: "" },
{ id: 3, src: "/images/IMG3.JPG", alt: "" },
{ id: 4, src: "/images/IMG4.JPG", alt: "" },
{ id: 5, src: "/images/IMG5.JPG", alt: "" },
{ id: 6, src: "/images/IMG6.JPG", alt: "" },
{ id: 7, src: "/images/IMG7.JPG", alt: "" },
{ id: 8, src: "/images/IMG8.JPG", alt: "" },
{ id: 9, src: "/images/IMG9.JPG", alt: "" },
{ id: 10, src: "/images/IMG10.JPG", alt: "" },
{ id: 11, src: "/images/IMG11.JPG", alt: "" },
{ id: 12, src: "/images/IMG12.JPG", alt: "" },
{ id: 13, src: "/images/IMG13.JPG", alt: "" },
{ id: 14, src: "/images/IMG14.JPG", alt: "" },
{ id: 15, src: "/images/IMG15.JPG", alt: "" },
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section className="py-20 px-4" id="gallery">
      <div className="romantic-container">
        <div className="text-center mb-12 animate-fade-up">
        <p className="text-lg sm:text-xl font-medium text-gray-800 bg-gradient-to-r from-pink-50/80 to-rose-50/80 px-6 py-3 rounded-xl border border-pink-200 shadow-sm">
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
