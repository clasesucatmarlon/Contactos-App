import './App.css';
import Body from './components/body/Body';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="mt-5 mb-5">Administración de contactos</h1>
      <Body />
    </div>
  );
}

export default App;
