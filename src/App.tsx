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
      alt: 'image',
      title: 'image',
      width: 2000,
      height: 1000
    }
  });
    return (
    <div style={{padding: 100}}>
    <div>
      <SimpleGallery
        galleryID="gallery"
        images={[...imageList]
        }
        />
    </div>
    </div>
  );
}

export default App;
