import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

