import ReactLoading from 'react-loading';

function PokeDisplay(props) {
    const { loading, poke, addFav, prevPoke, nextPoke } = props;
    return (
        <div>
            {loading ?
                <ReactLoading type='spin' color='black' height={'20%'} width={'20%'} />
                :
                <>
                    <h1>{poke?.name}</h1>
                    <button onClick={addFav}>Add to favourite</button>
                    <br />
                    <img src={poke?.sprites?.other?.home?.front_default} alt={poke?.name} />
                    <ul>
                        {poke?.abilities?.map((abil, idx) => (
                            <li key={idx}>{abil.ability.name}</li>
                        ))}
                    </ul>
                    <button onClick={prevPoke}>Previous</button>
                    <button onClick={nextPoke}>Next</button>
                </>
            }
        </div>
    )
}

export default PokeDisplay