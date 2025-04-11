import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import { Listings } from './Pages/Listings';
import Agents from './Pages/Agents';
import { Contact } from './Pages/Contact';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/listings' element={<Listings />} />
            <Route path='/agents' element={<Agents />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
