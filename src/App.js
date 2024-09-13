import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Acceuil from './Components/Acceuil';
import Groupe from './Components/Groupe';
import Innovation from './Components/Innovation';
import Produits_activites from './Components/Produits_activites';
import Responsabilite from './Components/Responsabilite';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/Acceuil" element={<Acceuil />} />
          <Route path="/Groupe" element={<Groupe />} />
          <Route path="/Innovation" element={<Innovation />} />
          <Route path="/Produits_activites" element={<Produits_activites />} />
          <Route path="/Responsabilite" element={<Responsabilite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
