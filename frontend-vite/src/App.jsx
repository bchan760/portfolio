import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About'
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <div className='dark:text-white'>
        <header>
          <MyNavbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-me"element={<About />}/>
          </Routes>
        </main>
      </div>
      <footer>
        <MyFooter />
      </footer>
    </Router>
  );
}

export default App;
