import React from 'react';
// Components
import About from './About/About';
import Works from './Works/Works'
import Contact from './Contact/Contact';

const Container = ({ itemIndex }) => {
     return (
          <>
          {
               (() => {
                    switch (itemIndex) {
                         case 0: return <div className="app-container"><About itemIndex={itemIndex}/></div>;
                         case 1: return  <Works/>;
                         case 2: return <div className="app-container"><Contact /></div>;
                         default: return;
                    }  
               })()
          }
          </>
     )
}

export default React.memo(Container)
