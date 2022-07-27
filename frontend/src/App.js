import { useEffect, useState } from 'react'
import './App.css'
import Amiibos from './components/Amiibos'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import { search, collectTypes } from './utils/index'

const API = 'http://localhost:3001/amiibo'

const searchKeysInit = { name: '', tag: '', type: '' }

function App() {
    const [amiibos, setAmiibos] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [searchKeys, setSearchKeys] = useState(searchKeysInit)
    const [types, setTypes] = useState([])
    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setAmiibos(data.amiibo)
                setSearchResult(data.amiibo)
                setTypes(collectTypes(data.amiibo))
            })
    }, [])
    useEffect(() => {
        if (searchKeysInit !== searchKeys) {
            const result = search(searchKeys, amiibos)
            setSearchResult(result)
        } else {
            setSearchResult(amiibos)
        }
    }, [searchKeys])
    return (
        <div className='container has-background-light '>
            <Header />
            <SearchBar
                searchKeys={searchKeys}
                setSearchKeys={setSearchKeys}
                typeOptions={types}
            />
            <Amiibos
                amiibos={searchKeysInit !== searchKeys ? searchResult : amiibos}
                setAmiibos={setAmiibos}
            />
        </div>
    )
}

export default App
