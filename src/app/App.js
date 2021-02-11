import './App.css';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="mt-5 mb-5">Administración de contactos</h1>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
