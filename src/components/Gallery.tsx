import React, { useEffect } from "react";

export default function Gallery() {
  const images = require.context(
    "../../public/assets",
    true,
    /\.(png|jpe?g|svg)$/
  );

  const imageFileNames = images.keys();
  const imageList = imageFileNames.map((key) => {
    return images(key);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.5 }
    );

    const images = document.querySelectorAll("img");
    images.forEach((image) => {
      observer.observe(image);
    });

    return () => {
      images.forEach((image) => {
        observer.unobserve(image);
      });
    };
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {imageList.map((image, index) => (
          <div key={index} className="p-4">
            <img alt="gallery" src={image} loading="lazy" style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
