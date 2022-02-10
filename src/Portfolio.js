import React, {useState, useCallback, useEffect} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Container from './Components/Container';
import Intro from './Components/Intro';
import Footer from './Components/Footer'

import './stylesheets/main.css';

function App() {
  const [itemIndex, setItemIndex] = useState(parseInt(localStorage.getItem('itemIndex')) || -1);
  const changeItemIndex = useCallback(val => setItemIndex(val), [setItemIndex]);

  useEffect(() => {
    localStorage.setItem('itemIndex', itemIndex);
  }, [itemIndex]);

  return (
    <>
      <Navbar itemIndex={itemIndex} setItemIndex={changeItemIndex}/>
      {itemIndex < 0 && <Intro/>}
      <Container itemIndex={itemIndex}/>
      {itemIndex > -1 && <><br/><Footer /></> }
    </>
  );
}

export default App;
