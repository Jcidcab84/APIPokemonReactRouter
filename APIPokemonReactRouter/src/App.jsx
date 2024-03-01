import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import Navigation from './assets/components/Navigation';

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones/:id" element={<Pokemones />} />
      </Routes>
    </>
  );
}

export default App;