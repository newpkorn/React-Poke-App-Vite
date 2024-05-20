import FavPoke from './FavPoke'

function FabPokeDisplay({ fav }) {
    return (
        <div>
            <h2 className='text-lg font-bold mb-5'>Your Favourite Pokemon</h2>
            {fav?.length > 0 ?
                <FavPoke fav={fav} />
                :
                <div className='flex h-full justify-center items-center'>
                    <p className='text-sm'>No favourite pokemon...</p>
                </div>
            }
        </div>
    )
}

export default FabPokeDisplay