import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Gallery from "./components/Gallery";
import HeaderTitle from "./components/HeaderTitle";
import Footer from "./components/Footer";

function App() {
  return ( 
    <div>
      <HeaderTitle/>
      <Gallery/>
      <Footer/>
    </div>
  );
}


export default App;