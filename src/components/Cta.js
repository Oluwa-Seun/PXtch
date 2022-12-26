import React from 'react';

const Cta = () => {
   return (
      <section className="cta">
         <div className="cta__container container">
            <div className="cta__title">
               <h3 className="cta__header">
                   Sign Up to our newsletter to get updates about our lunch and also 
                   be part of the first users to lunch our product.
               </h3>
            </div>
            <button className="btn btn--open">
               Sign Up
            </button>
         </div>
      </section>
   );
};

export default Cta;
