"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

const BASE_URL = "https://ik.imagekit.io/spitndu0j/victory";

// Fetcher: builds the list of image objects — no HTTP requests needed
const fetchImages = async () => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: `${BASE_URL}/image${i + 1}.jpeg`,
    alt: `Gallery image ${i + 1}`,
  }));
};

export default function Media() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const { data: images = [] } = useQuery({
    queryKey: ["gallery-images"],
    queryFn: fetchImages,
    staleTime: Infinity,   // Never re-fetch during the session
    gcTime: 1000 * 60 * 60, // Keep in cache for 1 hour
  });

  return (
    <main className="flex flex-col gap-12 w-full pb-24 h-full">
      <div className="bg-white text-black border-2 border-black p-8 md:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="font-syne text-5xl md:text-7xl font-extrabold tracking-tighter uppercase mb-6 border-b-2 border-black pb-4">
          Media Gallery
        </h1>
        <p className="text-xl font-medium mb-12">
          A visual journey of VIJOMI&apos;s mission to turn sinners to God.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((item) => (
            <div
              key={item.id}
              className="aspect-square bg-white border-2 border-black/20 relative overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-syne font-bold uppercase tracking-widest text-sm text-white">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] bg-white/70 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[85vh] bg-white/20 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src={`https://ik.imagekit.io/spitndu0j/victory/image${selectedImage}.jpeg`}
              alt={`Full screen image ${selectedImage}`}
              fill
              className="object-contain p-2"
            />
            <button
              className="absolute -top-14 right-0 md:-right-12 md:top-0 text-black hover:text-gray-600 transition-colors bg-white border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              title="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
