import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <MyNavbar />
          <Routes>
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/about_me" element={<About-me />} /> */}
          </Routes>
        </header>
        <main>

        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </Router>
  );
}

export default App;
