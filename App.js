import React, { useState } from 'react';
import './App.css';

function App() {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularMelhorOpcao = () => {
    const ratio = alcool / gasolina;

    if (ratio < 0.7) {
      setResultado('Álcool é a melhor opção!');
    } else {
      setResultado('Gasolina é a melhor opção!');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Qual a melhor opção?</h1>
        <img src="https://img.freepik.com/vetores-premium/bomba-de-posto-de-gasolina-com-bocal-de-combustivel-da-ilustracao-vetorial-da-bomba-de-gasolina_230920-3166.jpg?w=826" alt="Ícone de bomba de combustível" className="fuel-icon" />
        <div className="input-container">
          <label>Álcool (preço por litro):</label>
          <input 
            type="number" 
            value={alcool} 
            onChange={(e) => setAlcool(e.target.value)} 
          />
        </div>
        <div className="input-container">
          <label>Gasolina (preço por litro):</label>
          <input 
            type="number" 
            value={gasolina} 
            onChange={(e) => setGasolina(e.target.value)} 
          />
        </div>
        <button onClick={calcularMelhorOpcao}>Calcular</button>
        {resultado && <h2>{resultado}</h2>}
      </header>
    </div>
  );
}

export default App;
