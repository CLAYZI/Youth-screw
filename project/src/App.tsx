import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Concerts from './pages/Concerts';
import Merch from './pages/Merch';
import LatestAlbum from './pages/LatestAlbum';
import About from './pages/About';
import Streaming from './pages/Streaming';
{/*import Newsletter from './components/Newsletter';*/}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/latest-album" element={<LatestAlbum />} />
          <Route path="/about" element={<About />} />
          <Route path="/streaming" element={<Streaming />} />

        </Routes>
      </main>
      {/*<Newsletter />*/}
      <Footer />
    </div>
  );
}

export default App;