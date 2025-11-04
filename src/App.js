import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import ContactForm from './pages/ContactForm';
import Thanks from './pages/Thanks';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<ContactForm />} />
          <Route path="/Thanks" element={<Thanks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

