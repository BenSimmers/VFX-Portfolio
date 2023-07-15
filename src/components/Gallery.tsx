import React, { useEffect } from "react";

type ImageProps = {
  src: string;
  alt: string;
};

const Image = (props: ImageProps) => {
  return (
    <div className="  rounded overflow-hidden shadow-lg">
      <img
        src={props.src}
        alt={props.alt}
        loading="lazy"
        className="w-full h-64 object-cover"
      />
    </div>
  );
};

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
            <Image src={image} alt="gallery" />
          </div>
        ))}
      </div>
    </div>
  );
}
