
import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Header from './Header';
import Cont from './Cont';
import About from './About';

import { Routes,Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/about'>About</Link></li>
        <li><Link to ='/contact'>Contact</Link></li>
        
      </ul>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/contact' element ={<Contact/>}/>
        <Route path='/contact/:id' element ={<Cont/>}/>
    


        
      </Routes>
      {/* <Header/>
      <Home/>
      <Contact/>
      <About/>
      <Footer/> */}
    </div>
  );
}

export default App;
