import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import MyNavbar from './components/MyNavbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <MyNavbar />
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
