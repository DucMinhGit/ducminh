import './App.css';
import About from './components/About';
import Brands from './components/Brands';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <div style={{ height: '2000px' }}></div>
    </div>
  );
}

export default App;
