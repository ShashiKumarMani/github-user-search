import { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';

function App() {

  const [ mode, setMode ] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = mode ? '#FFF' : '#333';
  }, [mode]);

  return (
    <div className="App">
      <Header mode={mode} setMode={setMode} />
    </div>
  );
}

export default App;
