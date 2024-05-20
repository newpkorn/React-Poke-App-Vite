import FavPoke from './FavPoke'

function FabPokeDisplay({ fav }) {
    return (
        <div>
            <h2>Your Favorite Pokemon</h2>
            {fav.length > 0 ? <FavPoke fav={fav} /> : <div className='flex h-full justify-center items-center'><p>No favourite pokemon...</p></div>}
        </div>
    )
}

export default FabPokeDisplay