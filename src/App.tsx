// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Training from './pages/Training/Training';
import User from './pages/User/User';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';
import About from './pages/About/about';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Menu />
        {/* <header className="bg-blue-400 text-white p-4">
          <h1 className="text-3xl font-bold text-center">Тренировки по OCR</h1>
          <p className="text-lg text-center">Добро пожаловать в наш уникальный мир тренировок!</p>
        </header> */}
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {process.env.REACT_APP_DEV === 'true' && (
              <Route path="/training" element={<Training />} />
            )}
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
