import React, { useEffect } from "react";

export default function Gallery() {
  // const images = require.context(
  //   "../../public/assets",
  //   true,
  //   /\.(png|jpe?g|svg)$/
  // );
  // const imageFileNames = images.keys();
  // const imageList = imageFileNames.map((key) => {
  //   return images(key);
  // });
  // const imageObject: Record<string, string> = {};
  // imageList.forEach((image) => {
  //   const imageName = image.default.split("/").slice(-1)[0];
  //   imageObject[imageName] = image.default;
  // });

  const images = require.context(
    "../../public/assets",
    true,
    /\.(png|jpe?g|svg)$/
  );

  const imageFileNames = images.keys();
  const imageList = imageFileNames.map((key) => {
    return images(key);
  });


  return (
    <div>
      <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            {imageList.map((image) => {
              return (
                <div className="flex flex-wrap w-1/3">
                  <div className="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg hover:scale-110 transition duration-500 ease-in-out"
                      src={image}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
