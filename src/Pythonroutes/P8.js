import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import P8L from '../components/Python/P8L';

export const P8 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 8: Classes"/>
      <P8L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default P8;