import './App.css';
import Amiibos from './components/Amiibos';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="container has-background-light ">
      <Header />
      <SearchBar />
      <Amiibos />
    </div>
  );
}

export default App;
