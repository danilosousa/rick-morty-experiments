
import './App.scss';
import Header from './components/Header/Header.tsx';
import Banner from './components/Banner/Banner.tsx';
import Footer from './components/Footer/Footer.tsx';
import ListCharacter from './components/List/ListCharacter';

function App() {
  return (
    <div className="App">
        <Header />

        <Banner />
        <div className="container">
            <ListCharacter />
        </div>

        <Footer />
    </div>
  );
}

export default App;
