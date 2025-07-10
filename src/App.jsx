import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import HarpersBazaar from './components/HarpersBazaar';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Portfolio />
        <HarpersBazaar />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App
