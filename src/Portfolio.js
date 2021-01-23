import React, {useState, useCallback} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Container from './Components/Container';
import Intro from './Components/Intro';
import Footer from './Components/Footer'

import './stylesheets/main.css';

function App() {
  const [itemIndex, setItemIndex] = useState();
  const changeItemIndex = useCallback(val => setItemIndex(val), [setItemIndex]);

  return (
    <>
      <Navbar itemIndex={itemIndex} setItemIndex={changeItemIndex}/>
      {itemIndex === undefined && <Intro/>}
      <Container itemIndex={itemIndex}/>
      { itemIndex !== undefined && <><br/><Footer /></> }
    </>
  );
}

export default App;
