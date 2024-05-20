import ReactLoading from 'react-loading';

function PokeDisplay(props) {
    const { loading, poke, addFav, prevPoke, nextPoke } = props;
    return (
        <div>
            {loading ?
                <ReactLoading type='spin' color='black' height={'20%'} width={'20%'} />
                :
                <>
                    <h1 className='mb-5'>{poke?.name}</h1>
                    <button onClick={addFav}>Add to favourite</button>
                    <br />
                    <img src={poke?.sprites?.other?.home?.front_default} alt={poke?.name} />
                    <ul className='mb-5'>
                        {poke?.abilities?.map((abil, idx) => (
                            <li key={idx}>{abil.ability.name}</li>
                        ))}
                    </ul>
                    <div className='flex justify-center gap-2'>
                        <button onClick={prevPoke}>Previous</button>
                        <button onClick={nextPoke}>Next</button>
                    </div>
                </>
            }
        </div>
    )
}

export default PokeDisplay