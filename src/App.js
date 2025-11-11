import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import ContactForm from './pages/ContactForm';
import Thanks from './pages/Thanks';
import Collection from './pages/CollectionFiles';
import Album from './pages/AlbumCards';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<ContactForm />} />
          <Route path="/Thanks" element={<Thanks />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path="/Album" element={<Album />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

