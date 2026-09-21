import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Category from "./Components/NewsBtns/Category";
import News from "./Components/Page/News";

function App() {
  return (
    <>
        <Navbar className="sticky top-0 z-20"/>
        <Category className="sticky top-14 z-10"/>
        <News/>
        <Footer/>
    </>
  );
}

export default App;
