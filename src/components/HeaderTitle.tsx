import React, { useRef } from "react";
import Gallery from "./Gallery";

export default function HeaderTitle() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollToGallery = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-gray-800">VFX Portfolio</h1>
        <h2 className="text-2xl font-semibold text-gray-600">
          Small collection of my work with Unreal Engine and other VFX tools
        </h2>
        <div className="flex flex-wrap justify-center mt-10">
          <button
            className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
            onClick={scrollToGallery}
          >
            View Gallery
          </button>
        </div>
      </div>

      <div ref={galleryRef}>
        <Gallery />
      </div>
    </div>
  );
}
