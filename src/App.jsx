import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import JarPage from './components/JarPage';


function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jar" element={<JarPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;