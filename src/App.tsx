import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Gallery from "./components/Gallery";
import HeaderTitle from "./components/HeaderTitle";

function App() {
  return ( 
    <div>
      <HeaderTitle/>
      <Gallery/>
    </div>
  );
}


export default App;