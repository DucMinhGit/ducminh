import './App.css';
import About from './components/About';
import Brands from './components/Brands';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Brands />
      <About />
      <div style={{ height: '2000px' }}></div>
    </div>
  );
}

export default App;
