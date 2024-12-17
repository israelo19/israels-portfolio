import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

import logo from './logo.svg';
import './App.css';

function App() {
  return (

      <div> 
        <Navbar></Navbar>
        <Home></Home>
        <About />
        <Skills/>
        <Experience />
        <Contact/>
      </div>
    //  </div>
    
  );
}

export default App;
