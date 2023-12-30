import React, { useEffect } from 'react';

import './App.css';
import { NavBar } from "./Components/NavBar";
import { Header } from './Components/Header';
import { Feature } from './Components/Feature';
import { About } from './Components/About';
import Projects from './Components/Projects';

function App() {
  const scroller = () => {
    const windowTop = window.scrollY + 250;

    let L = document.querySelectorAll('.scrollerAnimation');

    L.forEach(function (e) {
      if (windowTop > e.offsetTop) {
        e.classList.add('scrollerAnimationOpacity');
      }else{
        e.classList.remove('scrollerAnimationOpacity');
      }
    });
    // Add your logic based on the scroll value
  };

  useEffect(() => {
    window.addEventListener('scroll', scroller);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', scroller);
    };
  }, []); // Empty dependency array means this effect will run once on mount

  return (
    <div className='App'>
      <NavBar />
      <Header />
      <Feature />
      <Projects />
      <About />
    </div>
  );
}

export default App;
