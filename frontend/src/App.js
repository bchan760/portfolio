import logo from './logo.svg';
import './App.css';
import { Route, Router } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
