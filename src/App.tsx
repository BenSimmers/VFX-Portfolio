import React from 'react';
import logo from './logo.svg';
import './App.css';


import SimpleGallery from './components/Gallery';

function App() {

  //get all the images from the assets folder
  const images = require.context('../public/assets', true, /\.(png|jpe?g|svg)$/);
  const imageList = images.keys().map((key: string) => {
    return {
      thumbnailURL: images(key),
      largeURL: images(key),
      alt: 'image'
    }
  });



    return (
    <div>
      <SimpleGallery
        galleryID="gallery"
        images={[
          //parse in the images and you can zoom in and out
          ...imageList
          ]
        }
        />
    </div>
  );
}

export default App;
