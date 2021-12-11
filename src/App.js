import './App.scss';
import Pokemon from './components/Pokemon';
import Children from './components/Children';

function App() {
  return (
    <div className="App">
      <Children>
      {(props) => <h1>{props.word}</h1>}
      </Children>
      <Pokemon />
    </div>
  );
}

export default App;
