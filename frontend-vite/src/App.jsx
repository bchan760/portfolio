import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About'
import HeaderNav from './components/HeaderNav';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <header>
        <HeaderNav />
      </header>

      <div className='dark:text-white'>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me"element={<About />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
