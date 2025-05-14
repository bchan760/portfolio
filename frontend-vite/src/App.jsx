import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <Router>
      <div dark:text-white>
        <header>
          <MyNavbar />
          <Routes>
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/about_me" element={<About-me />} /> */}
          </Routes>
        </header>

        <main>
          {/* Something something add something here */}
        </main>

        <footer>
          <MyFooter />
        </footer>
      </div>
    </Router>
  );
}

export default App;
