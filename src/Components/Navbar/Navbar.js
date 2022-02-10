import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactComponent as MoonIcon } from '../../assets/icons/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/icons/sun.svg';

import './style.css';

const Navbar = ({ itemIndex, setItemIndex }) => {
     const DARK_THEME = localStorage.getItem('theme') === 'dark';
     const [theme, setTheme] = useState(DARK_THEME ? 1 : 0);
     const [transform, setTransform] = useState(null);

     useEffect(() => {
          const html = document.getElementsByTagName('html')[0];
          if(theme) {
               html.setAttribute('data-theme', 'dark');
               localStorage.setItem('theme', 'dark');
          } else {
               html.removeAttribute('data-theme');
               localStorage.removeItem('theme');
          }
     }, [theme])

     useEffect(() => {
          const width = document.getElementById('portfolio').clientWidth;
          setTransform({
               transform: `translateX(-${width - 150}px)`
          });

          const evt = window.addEventListener('resize', () => {
               const width = document.getElementById('portfolio').clientWidth;
               setTransform({
                    transform: `translateX(-${width - 150}px)`
               });
          });

          return () => {
               window.removeEventListener('resize', evt);
          };
     }, []);

     if(!transform) return <></>

     const toggleTheme = () => {
          setTheme(prev => prev? 0 : 1);
     }

     return (
          <div className="navbar">
               <div className="object-container">
                    <span style={itemIndex === 1? transform : {}}
                    className={`square one${itemIndex === 1? ' to-title': ''}`} onClick={() => setItemIndex(prev => prev === 1? -1 : 1)}>
                         About
                    </span>
                    <span style={itemIndex === 2? transform : {}}
                    className={`square two${itemIndex === 2? ' to-title': ''}`} onClick={() => setItemIndex(prev => prev === 2? -1 : 2)}>
                         Works
                    </span>
                    <span style={itemIndex === 3? transform : {}}
                    className={`square three${itemIndex === 3? ' to-title': ''}`} onClick={() => setItemIndex(prev => prev === 3? -1 : 3)}>
                         Contact
                    </span>
                    <span className="setting" onClick={toggleTheme}>
                         <AnimatePresence>
                         {!theme? 
                         <motion.span
                         initial={{scale: 0, opacity: 0}}
                         animate={{scale: 1, opacity: 1}}
                         exit={{scale: 0, opacity: 0}}>
                              <SunIcon />
                         </motion.span> : <></>}
                         </AnimatePresence>
                         <AnimatePresence>
                         {theme? 
                         <motion.span
                         initial={{scale: 0, opacity: 0}}
                         animate={{scale: 1, opacity: 1}}
                         exit={{scale: 0, opacity: 0}}>
                              <MoonIcon />
                         </motion.span> : <></>}
                         </AnimatePresence>
                    </span>
               </div>
          </div>
     )
}

export default React.memo(Navbar)
