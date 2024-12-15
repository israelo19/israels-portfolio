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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       <code>Soon to be Israel's Profolio!</code>
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

      <div> 
        <Navbar></Navbar>
        <Home></Home>
        <About />
        <Contact/>
        <Experience />
        <Skills/>
      </div>
    //  </div>
    
  );
}

export default App;
