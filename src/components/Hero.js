import React from 'react';

const Hero = ({ headingTitle, descriptions, btnCta }) => {
   return (
      <section className="hero">
         <div className="hero__container container">
            <div className="hero__illustration" data-aos="fade-left" data-aos-duration="2000"></div>
            <div className="hero__intro" data-aos="fade-right" data-aos-duration="2000">
               <h1 className="hero__title heading--xxl">{headingTitle}</h1>
               <p className="hero__paragraph paragraph--l paragraph">
                  {descriptions}
               </p>
               <button className="btn btn--cta">{btnCta}</button>
            </div>
         </div>
      </section>
   );
};

export default Hero;
