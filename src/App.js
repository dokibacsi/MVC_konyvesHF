import './App.css';
import Szekreny from './components/Books/Szekreny';
import Kosar from './components/Cart/Kosar';
import Navigation from './components/Navigation/Navigation';
import { konyvesLista, navList, kosarTartalom } from './Datas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Konyvesbolt</h3>
      </header>
      <main>
        <nav>
          <Navigation list={navList}/>
        </nav>
        <article>
          <div className="konyvek"> <Szekreny list={konyvesLista} /></div>
          <div className="kosar"> <Kosar list={kosarTartalom} /></div>
        </article>
      </main>
    </div>
  );
}

export default App;
