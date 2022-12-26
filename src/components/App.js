
import '../style/style.scss';
import Header from './Header/Header';
import Hero from './Hero';
import Company from './Company';
import Features from './Features';
import Operation from './Operation/Operations';
import { heroData } from '../data/data';
import Footer from './Footer';
import Cta from './Cta';
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";



const App = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
   return (
      <div className="main__container">
         <Header />
         <main>
            <Hero {...heroData} />
            <Company />
            <Features />
            <Operation />
            <Cta />
            <Footer />
         </main>
      </div>
   );
};

export default App;
