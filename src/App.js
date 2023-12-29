import React, { useEffect } from 'react';

import './App.css'
import { NavBar } from "./Components/NavBar";
import { Header } from './Components/Header';
import { Feature } from './Components/Feature';
import { About } from './Components/About';



function App() {

  const scroller = () => {
    
    let L = document.querySelectorAll('.scrollerAnimation')
    
    L.forEach(function(e) {
      console.log(e.offsetTop)
    }
    );
    // Add your logic based on the scroll value
  };
  
  useEffect(() => {
    window.addEventListener('scroll', scroller);
  
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener(scroller);
    };
  }, []); // Empty dependency array means this effect will run once on mount
  


  return (
 <div className='App'>
 <NavBar/>
 <Header/>
 <Feature/>
 <About/>
 </div>
  );
}

export default App;
