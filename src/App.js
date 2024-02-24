import './App.css';
import './components/Header.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes,Route } from 'react-router-dom';
import { Home } from './components/Home';
import { WebDev } from './components/WebDev/WebDev';
import { DSA } from './components/DSA/DSA';
import { Services } from './components/Services';
import { Frontend } from './components/WebDev/Frontend';

export const App = () => {

  const [viewBox,setVewBox]=useState(false);

  const MenuOpen=()=> {
      setVewBox(!viewBox);
  }

  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
    MenuOpen();
  };

  return (
    <>
      <Header MenuOpen={MenuOpen} toggleMenu={toggleMenu} isOpened={isOpened} viewBox={viewBox} />
      <main id='Home' className="main">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/WebDev' element={<WebDev/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/DSA' element={<DSA/>} />
          <Route path='/Services' element={<Services/>} />
          <Route path='Frontend' element={<Frontend/>}/>
        </Routes>
      </main>  
      <Footer/>
    </>
  )
}

