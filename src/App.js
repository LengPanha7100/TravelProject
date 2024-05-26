import { DiVim } from 'react-icons/di';
import './App.css';
import Home from './pages/Home';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Review from './pages/Review';
// import ContactUs from './pages/ContactUs';
// import AboutUs from './pages/AboutUs';
// import Header from './components/Header';
function App() {
  return (
    <>
    
    {/* <Router>
    <Header/>
      <Routes>
           <Route index element={<Home/>} />
           <Route path='/home' element={<Home/>} />
           <Route path='/review' element={<Review/>} />
           <Route path='/about-us' element={<AboutUs/>} />
           <Route path='/contact-us' element={<ContactUs/>} />
      </Routes>
    </Router> */}
   
    <div>
          <Home/>
    </div>
  </>
  );
}

export default App;
