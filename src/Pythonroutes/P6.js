import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import P6L from '../components/Python/P6L';


export const P6 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 6: Lists"/>
      <P6L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default P6;