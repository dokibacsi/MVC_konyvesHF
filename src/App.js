import './App.css';
import Szekreny from './components/Szekreny';
import { konyvesLista } from './Datas';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Konyvesbolt</h3>
      </header>
      <article>
        <Szekreny list={konyvesLista}/>
      </article>
    </div>
  );
}

export default App;
