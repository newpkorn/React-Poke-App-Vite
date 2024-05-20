import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

// Components
import PokeDisplay from './components/PokeDisplay';
import FavPokeDisplay from './components/FavPokeDisplay';

function App() {
  const [poke, setPoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pokeId, setPokeId] = useState(1)
  const [fav, setFav] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();

    const loadPoke = async () => {
      try {
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`, {
          signal: abortController.signal
        });

        setPoke(response.data);
        setError("");

      } catch (err) {
        setError("Something went wrong...", err);
        console.log(error)
      } finally {
        setLoading(false);
      }
    }

    loadPoke();

    return () => abortController.abort();
  }, [pokeId]);

  const prevPoke = () => {
    setPokeId((id) => id - 1);

    if (pokeId == 1) setPokeId(1);
  }

  const nextPoke = () => {
    setPokeId((id) => id + 1);
  }

  const addFav = () => {
    setFav((prevSate) => [...prevSate, poke]);
  }

  return (
    <div className='max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <PokeDisplay
          loading={loading}
          poke={poke}
          addFav={addFav}
          prevPoke={prevPoke}
          nextPoke={nextPoke}
        />
        <FavPokeDisplay fav={fav} />
      </div>
    </div>
  )
}

export default App
