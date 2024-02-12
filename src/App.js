import { useRef } from 'react';
import './App.css';
import Header from './layout/header';
import Hero from './pages/hero';
import Projects from './pages/projects';
import Footer from './layout/footer';
import Stat from './pages/stat';
import Loading from './pages/loading';

function App() {
  const appRef = useRef()
  return (
    <div ref={appRef} className="App">
      <Header appRef={appRef}/>
      <Hero/>
      <Stat/>
      <Projects/>
      <Footer/>
      <Loading/>
    </div>
  );
}

export default App;
