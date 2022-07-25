import { useEffect, useState } from 'react';
import './App.css';
import Amiibos from './components/Amiibos';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

const API = "http://localhost:3001/amiibo"

const searchKeysInit = {name: "", tag: [], type: ""}

function App() {

  const [amiibos, setAmiibos] = useState([])
  const [searchKeys, setSearchKeys] = useState(searchKeysInit)

  useEffect(() => {
    fetch(API).then(res => res.json()).then(data => setAmiibos(data.amiibo))
  }, [])

  return (
    <div className="container has-background-light ">
      <Header />
      <SearchBar searchKeys={searchKeys} />
      <Amiibos amiibos={amiibos} />
    </div>
  );
}

export default App;
