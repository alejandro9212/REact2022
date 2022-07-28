import React from 'react';
import Evento from './components/Evento.jsx';
import Parrafo from './components/Parrafo.jsx';
import Variables from './components/Variables.jsx';
import Contador from './components/Contador.jsx';
import Ejemplo from './components/Ejemplo.jsx';
import Lista from './components/Lista.jsx';
import Frutas from './components/Frutas.jsx';


function App() {
  return (
    <div >
      <h1>hola mundo desde react</h1>
      <Parrafo />
      <Variables />
      <Evento />
      <Contador />
      <Ejemplo />
      <Lista />
      <Frutas />
    </div>
  );
}

export default App;
