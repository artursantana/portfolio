import './App.css'
import { NavBar } from "./Components/NavBar";
import { Header } from './Components/Header';
import { Feature } from './Components/Feature';
import { About } from './Components/About';

function App() {
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
