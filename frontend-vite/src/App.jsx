import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About'
import HeaderNav from './components/HeaderNav';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <header>
        <HeaderNav />
      </header>

      <div className='dark:text-white'>
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about-me"element={<About />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
